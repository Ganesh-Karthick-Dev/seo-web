import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

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

        if (!body.title || !body.slug) {
            return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
        }

        const post = await prisma.htmlBlogPost.create({
            data: body,
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
