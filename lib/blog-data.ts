import { prisma } from './prisma';

export type PostBase = {
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
    createdAt?: Date;
}

export type StructuredBlogPost = PostBase & {
    type: 'structured';
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

export type HtmlBlogPost = PostBase & {
    type: 'html';
    htmlContent: string;
    cssContent: string;
}

export type BlogPost = StructuredBlogPost | HtmlBlogPost;


export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const [posts, htmlPosts] = await Promise.all([
        prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } }),
        prisma.htmlBlogPost.findMany({ orderBy: { createdAt: 'desc' } })
    ]);

    const mappedPosts = posts.map((post) => ({
        type: 'structured' as const,
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
        createdAt: post.createdAt,
    }));

    const mappedHtmlPosts = htmlPosts.map((post) => ({
        type: 'html' as const,
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
        htmlContent: post.htmlContent,
        cssContent: post.cssContent,
        createdAt: post.createdAt,
    }));

    const allPosts = [...mappedPosts, ...mappedHtmlPosts].sort((a, b) =>
        (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );

    return allPosts as BlogPost[];
}

export async function getBlogPostsForSitemap(): Promise<{ slug: string; updatedAt: Date }[]> {
    let posts: { slug: string; updatedAt: Date }[] = [];
    let htmlPosts: { slug: string; updatedAt: Date }[] = [];

    try {
        posts = await prisma.blogPost.findMany({ select: { slug: true, updatedAt: true } });
    } catch (e) {
        console.warn("getBlogPostsForSitemap: structured posts fetch failed", e);
    }

    try {
        htmlPosts = await prisma.htmlBlogPost.findMany({ select: { slug: true, updatedAt: true } });
    } catch (e) {
        console.warn("getBlogPostsForSitemap: html posts fetch failed", e);
    }

    return [...posts, ...htmlPosts].sort((a, b) =>
        b.updatedAt.getTime() - a.updatedAt.getTime()
    );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const post = await prisma.blogPost.findUnique({
        where: { slug },
    });

    if (post) {
        return {
            type: 'structured',
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
            createdAt: post.createdAt,
        };
    }

    const htmlPost = await prisma.htmlBlogPost.findUnique({
        where: { slug },
    });

    if (htmlPost) {
        return {
            type: 'html',
            id: htmlPost.id,
            title: htmlPost.title,
            slug: htmlPost.slug,
            excerpt: htmlPost.excerpt,
            date: htmlPost.date,
            readTime: htmlPost.readTime,
            category: htmlPost.category,
            image: htmlPost.image,
            author: {
                name: htmlPost.authorName,
                role: htmlPost.authorRole,
                avatar: htmlPost.authorAvatar,
            },
            htmlContent: htmlPost.htmlContent,
            cssContent: htmlPost.cssContent,
            createdAt: htmlPost.createdAt,
        };
    }

    return null;
}
