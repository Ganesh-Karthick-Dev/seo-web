"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Edit2, Save, X, Code2, Play } from "lucide-react";

interface HtmlBlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    authorName: string;
    authorRole: string;
    authorAvatar: string;
    htmlContent: string;
    cssContent: string;
}

const emptyPost: Omit<HtmlBlogPost, "id" | "createdAt" | "updatedAt"> = {
    title: "",
    slug: "",
    excerpt: "",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: "5 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    authorName: "SEO Team",
    authorRole: "Technical Writer",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    htmlContent: "<!-- Paste your custom HTML here -->\n<div class=\"custom-seo-blog\">\n  <h2>Introduction</h2>\n  <p>Your content here...</p>\n</div>",
    cssContent: "/* Paste your custom CSS here */\n.custom-seo-blog {\n  color: white;\n}\n.custom-seo-blog h2 {\n  color: #ff3366;\n}",
};

export default function AdminHtmlBlogPage() {
    const [posts, setPosts] = useState<HtmlBlogPost[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Partial<HtmlBlogPost>>(emptyPost);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/html-blog");
            const data = await res.json();
            if (Array.isArray(data)) {
                setPosts(data);
            } else {
                setPosts([]);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = currentPost.id ? `/api/html-blog/${currentPost.id}` : "/api/html-blog";
            const method = currentPost.id ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentPost),
            });

            if (res.ok) {
                await fetchPosts();
                setIsEditing(false);
                setCurrentPost(emptyPost);
            }
        } catch (error) {
            console.error("Error saving post:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this custom HTML post?")) return;

        try {
            await fetch(`/api/html-blog/${id}`, { method: "DELETE" });
            await fetchPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleEdit = (post: HtmlBlogPost) => {
        setCurrentPost(post);
        setIsEditing(true);
        setShowPreview(false);
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
                            <Code2 className="w-8 h-8 text-primary" />
                            HTML/CSS Blog Admin
                        </h1>
                        <p className="text-white/50 mt-2">Manage fully custom-coded SEO blogs</p>
                    </div>
                    {!isEditing && (
                        <Button onClick={() => setIsEditing(true)} className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Plus className="w-4 h-4" />
                            New Custom Post
                        </Button>
                    )}
                </div>

                {isEditing ? (
                    <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {currentPost.id ? "Edit Custom Post" : "Create New Custom Post"}
                            </h2>
                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowPreview(!showPreview)}
                                    className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                                >
                                    {showPreview ? <Code2 className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    {showPreview ? "Code Editor" : "Live Preview"}
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setCurrentPost(emptyPost);
                                    }}
                                >
                                    <X className="w-5 h-5 text-white/70" />
                                </Button>
                            </div>
                        </div>

                        {showPreview ? (
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-500 text-sm mb-6">
                                    <strong>Preview Mode:</strong> This simulates how your HTML and CSS will render on the live site inside the content wrapper.
                                </div>
                                <div className="bg-black border border-white/20 rounded-2xl p-8 min-h-[500px] overflow-auto">
                                    <style dangerouslySetInnerHTML={{ __html: currentPost.cssContent || '' }} />
                                    <div dangerouslySetInnerHTML={{ __html: currentPost.htmlContent || '' }} />
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Basic Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Basic Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm text-white/70 mb-2 block">Post Title</label>
                                            <Input
                                                required
                                                value={currentPost.title || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                                className="bg-black/50 border-white/10 text-white font-mono"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-white/70 mb-2 block">URL Slug</label>
                                            <Input
                                                required
                                                value={currentPost.slug || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                                                className="bg-black/50 border-white/10 text-white font-mono"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="text-sm text-white/70 mb-2 block">Excerpt / Meta Description</label>
                                            <Textarea
                                                required
                                                value={currentPost.excerpt || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                                                className="bg-black/50 border-white/10 text-white"
                                                rows={2}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-white/70 mb-2 block">Category</label>
                                            <Input
                                                required
                                                value={currentPost.category || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                                                className="bg-black/50 border-white/10 text-white font-mono"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-white/70 mb-2 block">Hero Image URL</label>
                                            <Input
                                                required
                                                value={currentPost.image || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                                                className="bg-black/50 border-white/10 text-white font-mono"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Custom Code Engine */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Custom Code Engine</h3>

                                    <div>
                                        <label className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
                                            <Code2 className="w-4 h-4" /> HTML Content structure
                                        </label>
                                        <Textarea
                                            required
                                            value={currentPost.htmlContent || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, htmlContent: e.target.value })}
                                            className="bg-[#0d1117] border-white/20 text-[#e6edf3] font-mono text-sm leading-relaxed"
                                            rows={12}
                                            placeholder="<div class='custom-seo'> ... </div>"
                                        />
                                        <p className="text-xs text-white/40 mt-2">Do not include {"<body>"} or {"<html>"} tags. Just paste the inner content structure.</p>
                                    </div>

                                    <div>
                                        <label className="text-sm font-bold text-pink-400 mb-2 flex items-center gap-2">
                                            <Code2 className="w-4 h-4" /> CSS Stylesheet
                                        </label>
                                        <Textarea
                                            value={currentPost.cssContent || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, cssContent: e.target.value })}
                                            className="bg-[#0d1117] border-white/20 text-[#e6edf3] font-mono text-sm leading-relaxed"
                                            rows={12}
                                            placeholder=".custom-seo { display: flex; }"
                                        />
                                        <p className="text-xs text-white/40 mt-2">Styles are automatically injected at the top of the post. Use unique class names to avoid conflicting with the main website theme.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    <Button type="submit" disabled={loading} className="gap-2 bg-primary hover:bg-primary/90">
                                        <Save className="w-4 h-4" />
                                        {loading ? "Saving..." : "Save Custom Post"}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            setIsEditing(false);
                                            setCurrentPost(emptyPost);
                                        }}
                                        className="border-white/10 text-white hover:bg-white/5"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {posts.length === 0 && (
                            <div className="p-8 text-center text-white/50 bg-black/50 border border-white/5 rounded-2xl">
                                No custom HTML posts created yet.
                            </div>
                        )}
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-neutral-900 rounded-2xl p-6 border border-white/10 flex justify-between items-center hover:border-white/20 hover:bg-neutral-800/80 transition-all"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-white">{post.title}</h3>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            RAW HTML
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-sm mb-3 max-w-2xl truncate">{post.excerpt}</p>
                                    <div className="flex gap-4 text-xs font-mono text-white/40">
                                        <span>{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span className="text-primary/70">/{post.slug}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" onClick={() => handleEdit(post)} className="border-white/10 hover:bg-white/10 hover:text-white">
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" onClick={() => handleDelete(post.id)} className="border-red-500/20 hover:bg-red-500/10 hover:border-red-500 text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
