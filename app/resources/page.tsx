import Link from "next/link";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getAllBlogPosts, BlogPost } from "@/lib/blog-data";
import ResourcesClient from "./resources-client";

export const metadata = {
  title: "SaaS Development Resources & Tech Strategy Insights | Zylex",
  description:
    "Expert perspectives on software dev, digital transformation, and engineering best practices from the Zylex core team.",
};

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
