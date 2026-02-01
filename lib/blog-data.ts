import { prisma } from './prisma';
import type { BlogPost as PrismaBlogPost } from '@prisma/client';

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    painPoint: {
        title: string;
        description: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string;
        features: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
    beforeAfter: {
        before: {
            title: string;
            points: string[];
        };
        after: {
            title: string;
            points: string[];
        };
    };
    businessValue: {
        title: string;
        points: {
            highlight: string;
            description: string;
        }[];
    };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const posts = await prisma.blogPost.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return posts.map((post: PrismaBlogPost) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        category: post.category,
        image: post.image,
        author: {
            name: post.authorName,
            role: post.authorRole,
            avatar: post.authorAvatar,
        },
        painPoint: {
            title: post.painPointTitle,
            description: post.painPointDescription,
            points: post.painPointPoints,
        },
        solution: {
            title: post.solutionTitle,
            description: post.solutionDescription,
            features: post.solutionFeatures as any,
        },
        beforeAfter: {
            before: {
                title: post.beforeTitle,
                points: post.beforePoints,
            },
            after: {
                title: post.afterTitle,
                points: post.afterPoints,
            },
        },
        businessValue: {
            title: post.businessValueTitle,
            points: post.businessValuePoints as any,
        },
    }));
}

export async function getBlogPostsForSitemap(): Promise<{ slug: string; updatedAt: Date }[]> {
    return prisma.blogPost.findMany({
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: "desc" },
    });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const post = await prisma.blogPost.findUnique({
        where: { slug },
    });

    if (!post) return null;

    return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        category: post.category,
        image: post.image,
        author: {
            name: post.authorName,
            role: post.authorRole,
            avatar: post.authorAvatar,
        },
        painPoint: {
            title: post.painPointTitle,
            description: post.painPointDescription,
            points: post.painPointPoints,
        },
        solution: {
            title: post.solutionTitle,
            description: post.solutionDescription,
            features: post.solutionFeatures as any,
        },
        beforeAfter: {
            before: {
                title: post.beforeTitle,
                points: post.beforePoints,
            },
            after: {
                title: post.afterTitle,
                points: post.afterPoints,
            },
        },
        businessValue: {
            title: post.businessValueTitle,
            points: post.businessValuePoints as any,
        },
    };
}
