import type { Metadata } from "next";
import type { BlogPost } from "./blog-data";

const SITE_URL = "https://zylex.io";

export function getCanonicalUrl(canonicalUrl: string | null | undefined, slug: string): string {
    const value = canonicalUrl?.trim();

    if (!value) {
        return new URL(`/resources/blog/${slug}`, SITE_URL).toString();
    }

    if (/^https?:\/\//i.test(value)) {
        return value;
    }

    if (/^(www\.|zylex\.io)/i.test(value)) {
        return `https://${value}`;
    }

    return new URL(value.startsWith("/") ? value : `/${value}`, SITE_URL).toString();
}

export function getBlogSeoDetails(post: BlogPost) {
    return {
        title: post.metaTitle?.trim() || post.title,
        description: post.metaDescription?.trim() || post.excerpt,
        canonical: getCanonicalUrl(post.canonicalUrl, post.slug),
    };
}

export function buildBlogMetadata(post: BlogPost): Metadata {
    const { title, description, canonical } = getBlogSeoDetails(post);

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "article",
            url: canonical,
            title,
            description,
            siteName: "Zylex",
            images: post.image
                ? [
                    {
                        url: post.image,
                        alt: post.title,
                    },
                ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: post.image ? [post.image] : undefined,
        },
    };
}
