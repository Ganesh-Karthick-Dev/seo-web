import { getAllBlogPosts, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Twitter, Linkedin, AlertCircle, CheckCircle2, ArrowRight, Bot, Zap, Settings, Server, Tag, Map, MousePointer, Eye, Layers, Scissors, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Enable ISR
export const revalidate = 60;

export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
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
    const post = getBlogPost(slug);

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
            <div className="relative w-full h-[70vh] min-h-[600px] flex items-end pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/resources" className="inline-block mb-8">
                        <Button variant="outline" size="sm" className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-white/10 rounded-full px-6">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back to Resources
                        </Button>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold tracking-wide uppercase">
                                {post.category}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-white/90 text-lg">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    {post.date}
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-end">
                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-white">{post.author.name}</p>
                                    <p className="text-sm text-white/60">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">

                {/* 2. CHALLENGE SECTION - Two Column Layout */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Title and Description */}
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

                        {/* Right: Cards with Title + Description */}
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

                {/* 3. SOLUTION SECTION - Two Column Layout */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Title and Description */}
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

                        {/* Right: Cards with Title + Description */}
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

                {/* 4. BEFORE / AFTER SECTION */}
                <section className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-transparent to-green-500 opacity-50" />

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Impact</h2>
                        <p className="text-lg text-muted-foreground">Transforming outcomes with the right approach</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
                        <div className="relative p-8 md:p-10 bg-red-500/5 border border-red-500/10 rounded-3xl lg:rounded-r-none lg:border-r-0">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider rounded-full">
                                Before
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{post.beforeAfter.before.title}</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {post.beforeAfter.before.description}
                            </p>
                        </div>

                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-white/10 rounded-full items-center justify-center shadow-xl">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </div>

                        <div className="relative p-8 md:p-10 bg-green-500/5 border border-green-500/10 rounded-3xl lg:rounded-l-none lg:border-l-0">
                            <div className="absolute top-6 right-6 px-3 py-1 bg-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider rounded-full">
                                After
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{post.beforeAfter.after.title}</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {post.beforeAfter.after.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Author Bio */}
                <div className="border-t border-white/10 pt-16 pb-8">
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left max-w-3xl mx-auto">
                        <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-background ring-2 ring-white/10">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">{post.author.name}</h3>
                            <p className="text-primary font-medium mb-4">{post.author.role}</p>
                            <p className="text-muted-foreground text-lg">
                                Expert in modern web technologies with a passion for building scalable, user-centric applications.
                            </p>

                            <div className="flex justify-center sm:justify-start gap-4 mt-6">
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                                    <Twitter className="w-5 h-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
