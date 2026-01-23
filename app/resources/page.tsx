import Link from "next/link";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";
import ResourcesClient from "./resources-client";

export const revalidate = 60; // ISR - revalidate every 60 seconds

export default async function ResourcesPage() {
    const blogPosts = await getAllBlogPosts();

    return <ResourcesClient initialPosts={blogPosts} />;
}
