import { getBlogPostsForSitemap } from "./blog-data";

export function getBaseUrl(): string {
    if (process.env.SITE_URL) {
        return process.env.SITE_URL.replace(/\/$/, "");
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return "https://zylex.io";
}

export interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
}

export async function getSitemapEntries(): Promise<SitemapEntry[]> {
    const baseUrl = getBaseUrl();

    // Optimized for faster indexing: daily changefreq on key pages, higher priority for conversions
    const staticRoutes: SitemapEntry[] = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
        { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
        { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
        { url: `${baseUrl}/products/temp-mail-blocker`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
        { url: `${baseUrl}/products/zylex-360`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
        { url: `${baseUrl}/services/3d-website-development`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/ai-automation`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/cloud-devops`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/custom-software-development`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/digital-transformation`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/ecommerce`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/it-strategy-consulting`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
        { url: `${baseUrl}/services/web-mobile-development`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    ];

    let blogRoutes: SitemapEntry[] = [];
    try {
        const posts = await getBlogPostsForSitemap();
        blogRoutes = posts.map((post) => ({
            url: `${baseUrl}/resources/blog/${post.slug}`,
            lastModified: post.updatedAt,
            changeFrequency: "daily" as const,
            priority: 0.85,
        }));
    } catch (error) {
        console.warn("Sitemap: Could not fetch blog posts, skipping dynamic routes");
    }

    return [...staticRoutes, ...blogRoutes];
}
