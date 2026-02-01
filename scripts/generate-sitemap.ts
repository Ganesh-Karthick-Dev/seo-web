/**
 * Generates sitemap.xml and robots.txt in project root and public/ for SEO.
 * Run: npm run generate-sitemap (or via postbuild)
 * Deletes existing files and replaces with fresh output.
 */

import { writeFileSync, existsSync, unlinkSync } from "fs";
import { join } from "path";
import { getSitemapEntries, getBaseUrl } from "../lib/sitemap-data";

function escapeXml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function toSitemapDate(d: Date): string {
    return d.toISOString().split("T")[0];
}

function generateXml(entries: { url: string; lastModified: Date; changeFrequency: string; priority: number }[]): string {
    const urlEntries = entries
        .map(
            (e) => `  <url>
    <loc>${escapeXml(e.url)}</loc>
    <lastmod>${toSitemapDate(e.lastModified)}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

function generateRobotsTxt(baseUrl: string): string {
    return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin-blog

Sitemap: ${baseUrl}/sitemap.xml
`;
}

async function main() {
    const rootDir = join(process.cwd());
    const baseUrl = getBaseUrl();

    // Sitemap
    const sitemapPaths = [
        join(rootDir, "sitemap.xml"),
        join(rootDir, "public", "sitemap.xml"),
    ];
    for (const path of sitemapPaths) {
        if (existsSync(path)) {
            unlinkSync(path);
            console.log(`[generate-seo] Deleted existing: ${path}`);
        }
    }
    const entries = await getSitemapEntries();
    const xml = generateXml(entries);
    for (const path of sitemapPaths) {
        writeFileSync(path, xml, "utf-8");
        console.log(`[generate-seo] Written: ${path} (${entries.length} URLs)`);
    }

    // Robots.txt
    const robotsPaths = [
        join(rootDir, "robots.txt"),
        join(rootDir, "public", "robots.txt"),
    ];
    for (const path of robotsPaths) {
        if (existsSync(path)) {
            unlinkSync(path);
            console.log(`[generate-seo] Deleted existing: ${path}`);
        }
    }
    const robotsTxt = generateRobotsTxt(baseUrl);
    for (const path of robotsPaths) {
        writeFileSync(path, robotsTxt, "utf-8");
        console.log(`[generate-seo] Written: ${path}`);
    }
}

main().catch((err) => {
    console.error("[generate-seo] Error:", err);
    process.exit(1);
});
