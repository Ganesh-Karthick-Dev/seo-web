import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { buildStructuredBlogCreateData, getMissingStructuredBlogFields } from '@/lib/blog-payload';

export async function GET() {
    try {
        const posts = await prisma.blogPost.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        console.log('POST /api/blog - Starting...');
        const body = await request.json();
        const data = buildStructuredBlogCreateData(body);
        console.log('POST /api/blog - Body received:', Object.keys(body));
        const missingFields = getMissingStructuredBlogFields(data);

        if (missingFields.length > 0) {
            return NextResponse.json({
                error: 'Missing required fields',
                fields: missingFields,
            }, { status: 400 });
        }

        console.log('POST /api/blog - Creating post in database...');
        const post = await prisma.blogPost.create({
            data,
        });
        console.log('POST /api/blog - Post created successfully:', post.id);
        return NextResponse.json(post);
    } catch (error) {
        console.error('Error creating post:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error details:', errorMessage);
        return NextResponse.json({
            error: 'Failed to create post',
            details: errorMessage
        }, { status: 500 });
    }
}
