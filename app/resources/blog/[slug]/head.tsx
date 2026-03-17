import { getBlogPost } from "@/lib/blog-data";
import { getBlogSeoDetails } from "@/lib/blog-seo";

interface BlogHeadProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Head({ params }: BlogHeadProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return null;
    }

    const { title, description, canonical } = getBlogSeoDetails(post);

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Zylex" />
            {post.image ? <meta property="og:image" content={post.image} /> : null}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {post.image ? <meta name="twitter:image" content={post.image} /> : null}
        </>
    );
}
