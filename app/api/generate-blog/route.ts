import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { title } = await request.json();

        // Debugging environment variables in production
        console.log("--- AI GENERATE DEBUG ---");
        console.log("Is GROK_KEY undefined?", process.env.GROK_KEY === undefined);
        console.log("Is GROK_KEY empty string?", process.env.GROK_KEY === '');
        console.log("Length of GROK_KEY:", process.env.GROK_KEY ? process.env.GROK_KEY.length : 'N/A');
        console.log("First 4 chars of GROK_KEY:", process.env.GROK_KEY ? process.env.GROK_KEY.substring(0, 4) : 'N/A');

        // Ensure the fetch call fails securely if the key is missing rather than sending "Bearer undefined"
        if (!process.env.GROK_KEY) {
            console.error("CRITICAL: process.env.GROK_KEY is not set in this environment!");
        }

        // Sanitize the key to remove invisible characters like \r or \n from EasyPanel
        const apiKey = process.env.GROK_KEY ? process.env.GROK_KEY.trim() : '';

        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional blog content generator. Generate comprehensive, engaging blog content in JSON format only. No markdown, no code blocks, just pure JSON.'
                    },
                    {
                        role: 'user',
                        content: `Generate a comprehensive blog post structure for the title: "${title}"

Return ONLY a valid JSON object with this exact structure:
{
  "title": "${title}",
  "slug": "url-friendly-slug",
  "excerpt": "2-3 sentence summary",
  "category": "Development|SEO|Design|Performance",
  "painPointTitle": "The main problem title",
  "painPointDescription": "2-3 sentences describing the challenge",
  "painPointPoints": ["pain point 1", "pain point 2", "pain point 3", "pain point 4"],
  "solutionTitle": "The solution title",
  "solutionDescription": "2-3 sentences describing the solution",
  "solutionFeatures": [
    {"title": "Feature 1", "description": "Feature description", "icon": "Zap"},
    {"title": "Feature 2", "description": "Feature description", "icon": "Server"},
    {"title": "Feature 3", "description": "Feature description", "icon": "Settings"}
  ],
  "beforePoints": ["before point 1", "before point 2", "before point 3", "before point 4", "before point 5"],
  "afterPoints": ["after point 1", "after point 2", "after point 3", "after point 4", "after point 5"],
  "businessValuePoints": [
    {"highlight": "Key metric", "description": "with explanation"},
    {"highlight": "Key metric", "description": "with explanation"},
    {"highlight": "Key metric", "description": "with explanation"},
    {"highlight": "Key metric", "description": "with explanation"}
  ]
}

Important:
- Use icons from: Zap, Server, Settings, Bot, Tag, Map, Eye, Layers, Code, Scissors
- Make pain points specific and relatable
- Make solution features actionable
- Before/after should show clear transformation
- Business value should be measurable
- Return ONLY the JSON, no other text`
                    }
                ],
                model: 'grok-3',
                stream: false,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Grok API error: ${error}`);
        }

        const data = await response.json();
        const text = data.choices[0].message.content;

        // Clean up the response - remove markdown code blocks if present
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```json')) {
            cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        } else if (cleanedText.startsWith('```')) {
            cleanedText = cleanedText.replace(/```\n?/g, '');
        }

        const blogData = JSON.parse(cleanedText);

        // Add default values
        const completeData = {
            ...blogData,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            authorName: "AI Generated",
            authorRole: "Content Creator",
            authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
            beforeTitle: "Before",
            afterTitle: "After",
            businessValueTitle: "Business Value",
        };

        return NextResponse.json(completeData);
    } catch (error) {
        console.error('AI generation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate blog content', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
