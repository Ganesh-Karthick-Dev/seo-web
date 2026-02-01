import { getAllBlogPosts, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Twitter, Linkedin, AlertCircle, CheckCircle2, ArrowRight, Bot, Zap, Settings, Server, Tag, Map, MousePointer, Eye, Layers, Scissors, Code, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Enable ISR
export const revalidate = 60;

export async function generateStaticParams() {
    try {
        const posts = await getAllBlogPosts();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.warn("generateStaticParams: Database not accessible, skipping static generation");
        return [];
    }
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const IconMap: Record<string, any> = {
    Bot, Zap, Settings, Server, Tag, Map, MousePointer, Eye, Layers, Image: Image, Scissors, Code
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    if (!post.painPoint || !post.solution || !post.beforeAfter) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <p>Content structure update in progress for this post.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* 1. HERO SECTION */}
            <div className="relative w-full min-h-[85vh] flex items-center pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-end mb-8">
                        <Link href="/resources">
                            <Button variant="outline" size="sm" className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-white/10 rounded-full px-6">
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Back to Resources
                            </Button>
                        </Link>
                    </div>

                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-wide uppercase">
                            {post.category}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">

                {/* 2. CHALLENGE SECTION */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold tracking-wide uppercase">
                                <AlertCircle className="w-4 h-4" />
                                The Challenge
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {post.painPoint.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {post.painPoint.description}
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                        </div>

                        <div className="space-y-6">
                            {post.painPoint.points.map((point, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center text-sm font-mono">
                                            0{idx + 1}
                                        </span>
                                        Pain Point {idx + 1}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. SOLUTION SECTION */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase">
                                <Zap className="w-4 h-4" />
                                The Solution
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {post.solution.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {post.solution.description}
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
                        </div>

                        <div className="space-y-6">
                            {post.solution.features.map((feature, idx) => {
                                const Icon = IconMap[feature.icon] || CheckCircle2;
                                return (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <Icon className="w-4 h-4" />
                                            </span>
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 4. BEFORE / AFTER SECTION - Enhanced with Background Icons */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Impact</h2>
                        <p className="text-lg text-muted-foreground">Transforming outcomes with the right approach</p>
                    </div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10">

                        {/* Before Column */}
                        <div className="relative p-8 md:p-12 overflow-hidden">
                            {/* Background Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                                <X className="w-80 h-80 text-white" strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-red-500 mb-8">{post.beforeAfter.before.title}</h3>
                                <ul className="space-y-5">
                                    {post.beforeAfter.before.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                                                <X className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-white/70 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Center Divider with Arrow */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-full bg-background border-2 border-white/20 flex items-center justify-center shadow-2xl">
                                    <ArrowRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

                        {/* After Column */}
                        <div className="relative p-8 md:p-12 overflow-hidden">
                            {/* Background Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                                <Check className="w-80 h-80 text-white" strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-green-500 mb-8">{post.beforeAfter.after.title}</h3>
                                <ul className="space-y-5">
                                    {post.beforeAfter.after.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-white/70 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. BUSINESS VALUE SECTION */}
                {post.businessValue && (
                    <section className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16">
                            {/* Left: Title */}
                            <div className="lg:col-span-4 flex items-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    {post.businessValue.title}
                                </h2>
                            </div>

                            {/* Right: Value Points */}
                            <div className="lg:col-span-8 space-y-6">
                                {post.businessValue.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <p className="text-white/80 leading-relaxed">
                                            <span className="text-primary font-semibold">{point.highlight}</span>{' '}
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


            </div>
        </div>
    );
}
