import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-data";

export const dynamic = "force-dynamic"; // DB at runtime only, not at build

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const entries = await getSitemapEntries();
    return entries;
}
