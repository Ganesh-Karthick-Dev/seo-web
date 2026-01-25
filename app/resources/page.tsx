import Link from "next/link";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getAllBlogPosts, BlogPost } from "@/lib/blog-data";
import ResourcesClient from "./resources-client";

export const revalidate = 60; // ISR - revalidate every 60 seconds

export default async function ResourcesPage() {
    let blogPosts: BlogPost[] = [];
    try {
        blogPosts = await getAllBlogPosts();
    } catch (error) {
        console.warn('ResourcesPage: Database not accessible');
    }

    return <ResourcesClient initialPosts={blogPosts} />;
}
