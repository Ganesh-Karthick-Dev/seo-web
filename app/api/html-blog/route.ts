import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { buildHtmlBlogCreateData, getMissingHtmlBlogFields } from '@/lib/html-blog-payload';

export async function GET() {
    try {
        const posts = await prisma.htmlBlogPost.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching html posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        console.log('POST /api/html-blog - Starting...');
        const body = await request.json();
        const data = buildHtmlBlogCreateData(body);
        const missingFields = getMissingHtmlBlogFields(data);

        if (missingFields.length > 0) {
            return NextResponse.json({
                error: 'Missing required fields',
                fields: missingFields,
            }, { status: 400 });
        }

        const post = await prisma.htmlBlogPost.create({
            data,
        });
        return NextResponse.json(post);
    } catch (error) {
        console.error('Error creating html post:', error);
        return NextResponse.json({
            error: 'Failed to create html post',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
