import type { MetadataRoute } from "next";

function getBaseUrl(): string {
    if (process.env.SITE_URL) {
        return process.env.SITE_URL.replace(/\/$/, "");
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return "https://zylex.io";
}

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl();

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin-blog"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
