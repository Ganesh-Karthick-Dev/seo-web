"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Edit2, Save, X, Sparkles, Wand2 } from "lucide-react";

interface BlogPost {
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
    painPointTitle: string;
    painPointDescription: string;
    painPointPoints: string[];
    solutionTitle: string;
    solutionDescription: string;
    solutionFeatures: { title: string; description: string; icon: string }[];
    beforeTitle: string;
    beforePoints: string[];
    afterTitle: string;
    afterPoints: string[];
    businessValueTitle: string;
    businessValuePoints: { highlight: string; description: string }[];
}

const emptyPost: Omit<BlogPost, "id" | "createdAt" | "updatedAt"> = {
    title: "",
    slug: "",
    excerpt: "",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    authorName: "Admin",
    authorRole: "Content Creator",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    painPointTitle: "",
    painPointDescription: "",
    painPointPoints: [""],
    solutionTitle: "",
    solutionDescription: "",
    solutionFeatures: [{ title: "", description: "", icon: "Zap" }],
    beforeTitle: "Before",
    beforePoints: [""],
    afterTitle: "After",
    afterPoints: [""],
    businessValueTitle: "Business Value",
    businessValuePoints: [{ highlight: "", description: "" }],
};

// Professional sample data for Dev Fill button
const samplePost: Omit<BlogPost, "id" | "createdAt" | "updatedAt"> = {
    title: "How AI-Powered Automation Transforms Business Operations",
    slug: "ai-powered-automation-transforms-business",
    excerpt: "Discover how modern AI automation solutions are revolutionizing business workflows, reducing manual tasks by up to 80%, and delivering unprecedented ROI for forward-thinking organizations.",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: "8 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    authorName: "Zylex Team",
    authorRole: "Technology Experts",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    painPointTitle: "The Manual Work Trap",
    painPointDescription: "Businesses are drowning in repetitive tasks that drain resources and limit growth potential. Teams spend countless hours on work that could be automated.",
    painPointPoints: [
        "Teams waste 40+ hours weekly on repetitive data entry and processing tasks",
        "Human errors cost organizations an average of $12.9 million annually in data quality issues",
        "Slow response times frustrate customers and lead to 67% higher churn rates"
    ],
    solutionTitle: "Intelligent Automation Excellence",
    solutionDescription: "Our AI-powered automation platform learns your workflows, adapts to your needs, and scales seamlessly as your business grows.",
    solutionFeatures: [
        { title: "Smart Process Mining", description: "AI analyzes your existing workflows to identify automation opportunities with the highest ROI potential", icon: "Bot" },
        { title: "No-Code Automation Builder", description: "Create powerful automations without writing a single line of code using our visual workflow designer", icon: "Zap" },
        { title: "Real-Time Analytics", description: "Monitor performance, track savings, and optimize automations with comprehensive dashboards", icon: "Eye" }
    ],
    beforeTitle: "Before Automation",
    beforePoints: [
        "Manual data entry consuming 15+ hours per week",
        "Inconsistent processes leading to frequent errors",
        "Slow customer response times averaging 24+ hours",
        "Limited scalability due to workforce constraints"
    ],
    afterTitle: "After Automation",
    afterPoints: [
        "80% reduction in manual processing time",
        "99.9% accuracy in automated workflows",
        "Average customer response time under 5 minutes",
        "Unlimited scalability without additional headcount"
    ],
    businessValueTitle: "Measurable Business Impact",
    businessValuePoints: [
        { highlight: "300% ROI", description: "achieved within the first year of implementation across our client base" },
        { highlight: "85% reduction", description: "in operational costs for routine business processes" },
        { highlight: "50% faster", description: "time-to-market for new products and services" }
    ],
};

export default function AdminBlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>(emptyPost);
    const [loading, setLoading] = useState(false);
    const [aiGenerating, setAiGenerating] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/blog");
            const data = await res.json();
            // Ensure data is an array
            if (Array.isArray(data)) {
                setPosts(data);
            } else {
                console.error("API returned non-array:", data);
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
            const url = currentPost.id ? `/api/blog/${currentPost.id}` : "/api/blog";
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
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            await fetch(`/api/blog/${id}`, { method: "DELETE" });
            await fetchPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleEdit = (post: BlogPost) => {
        setCurrentPost(post);
        setIsEditing(true);
    };

    const addArrayItem = (field: keyof BlogPost) => {
        setCurrentPost((prev) => ({
            ...prev,
            [field]: [...((prev[field] as any[]) || []), ""],
        }));
    };

    const removeArrayItem = (field: keyof BlogPost, index: number) => {
        setCurrentPost((prev) => ({
            ...prev,
            [field]: ((prev[field] as any[]) || []).filter((_, i) => i !== index),
        }));
    };

    const updateArrayItem = (field: keyof BlogPost, index: number, value: any) => {
        setCurrentPost((prev) => ({
            ...prev,
            [field]: ((prev[field] as any[]) || []).map((item, i) => (i === index ? value : item)),
        }));
    };

    const handleAIGenerate = async () => {
        if (!currentPost.title) {
            alert("Please enter a blog title first!");
            return;
        }

        setAiGenerating(true);
        try {
            const res = await fetch("/api/generate-blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: currentPost.title }),
            });

            if (res.ok) {
                const generatedData = await res.json();
                setCurrentPost({
                    ...currentPost,
                    ...generatedData,
                });
            } else {
                const error = await res.json();
                alert(`AI Generation failed: ${error.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("AI generation error:", error);
            alert("Failed to generate blog content");
        } finally {
            setAiGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Blog Admin</h1>
                    {!isEditing && (
                        <Button onClick={() => setIsEditing(true)} className="gap-2">
                            <Plus className="w-4 h-4" />
                            New Post
                        </Button>
                    )}
                </div>

                {isEditing ? (
                    <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {currentPost.id ? "Edit Post" : "Create New Post"}
                            </h2>
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setIsEditing(false);
                                    setCurrentPost(emptyPost);
                                }}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Basic Info */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Title</label>
                                        <div className="flex gap-2">
                                            <Input
                                                required
                                                value={currentPost.title || ""}
                                                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                                className="bg-white/5 border-white/10 text-white"
                                            />
                                            <Button
                                                type="button"
                                                onClick={handleAIGenerate}
                                                disabled={aiGenerating || !currentPost.title}
                                                className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shrink-0"
                                            >
                                                <Sparkles className="w-4 h-4" />
                                                {aiGenerating ? "Generating..." : "AI Generate"}
                                            </Button>
                                            <Button
                                                type="button"
                                                onClick={() => setCurrentPost({ ...currentPost.id ? { id: currentPost.id } : {}, ...samplePost })}
                                                className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shrink-0"
                                            >
                                                <Wand2 className="w-4 h-4" />
                                                Dev Fill
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Slug</label>
                                        <Input
                                            required
                                            value={currentPost.slug || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-white/70 mb-2 block">Excerpt</label>
                                        <Textarea
                                            required
                                            value={currentPost.excerpt || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Category</label>
                                        <Input
                                            required
                                            value={currentPost.category || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Image URL</label>
                                        <Input
                                            required
                                            value={currentPost.image || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pain Point Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">Challenge Section</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Title</label>
                                        <Input
                                            required
                                            value={currentPost.painPointTitle || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, painPointTitle: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Description</label>
                                        <Textarea
                                            required
                                            value={currentPost.painPointDescription || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, painPointDescription: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Pain Points</label>
                                        {(currentPost.painPointPoints || [""]).map((point, idx) => (
                                            <div key={idx} className="flex gap-2 mb-2">
                                                <Input
                                                    value={point}
                                                    onChange={(e) => updateArrayItem("painPointPoints", idx, e.target.value)}
                                                    className="bg-white/5 border-white/10 text-white"
                                                    placeholder={`Pain point ${idx + 1}`}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeArrayItem("painPointPoints", idx)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => addArrayItem("painPointPoints")}
                                            className="mt-2"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add Point
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Solution Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">Solution Section</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Title</label>
                                        <Input
                                            required
                                            value={currentPost.solutionTitle || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, solutionTitle: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Description</label>
                                        <Textarea
                                            required
                                            value={currentPost.solutionDescription || ""}
                                            onChange={(e) => setCurrentPost({ ...currentPost, solutionDescription: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-white/70 mb-2 block">Features</label>
                                        {(currentPost.solutionFeatures || [{ title: "", description: "", icon: "Zap" }]).map((feature, idx) => (
                                            <div key={idx} className="bg-white/5 p-4 rounded-xl mb-4 border border-white/10">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                                    <Input
                                                        value={feature.title}
                                                        onChange={(e) =>
                                                            updateArrayItem("solutionFeatures", idx, { ...feature, title: e.target.value })
                                                        }
                                                        className="bg-white/5 border-white/10 text-white"
                                                        placeholder="Feature title"
                                                    />
                                                    <Input
                                                        value={feature.icon}
                                                        onChange={(e) =>
                                                            updateArrayItem("solutionFeatures", idx, { ...feature, icon: e.target.value })
                                                        }
                                                        className="bg-white/5 border-white/10 text-white"
                                                        placeholder="Icon name"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => removeArrayItem("solutionFeatures", idx)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <Textarea
                                                    value={feature.description}
                                                    onChange={(e) =>
                                                        updateArrayItem("solutionFeatures", idx, { ...feature, description: e.target.value })
                                                    }
                                                    className="bg-white/5 border-white/10 text-white"
                                                    placeholder="Feature description"
                                                    rows={2}
                                                />
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => addArrayItem("solutionFeatures")}
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add Feature
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Before/After Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white">Before</h3>
                                    {(currentPost.beforePoints || [""]).map((point, idx) => (
                                        <div key={idx} className="flex gap-2 mb-2">
                                            <Input
                                                value={point}
                                                onChange={(e) => updateArrayItem("beforePoints", idx, e.target.value)}
                                                className="bg-white/5 border-white/10 text-white"
                                                placeholder={`Before point ${idx + 1}`}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => removeArrayItem("beforePoints", idx)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => addArrayItem("beforePoints")}
                                    >
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add Point
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white">After</h3>
                                    {(currentPost.afterPoints || [""]).map((point, idx) => (
                                        <div key={idx} className="flex gap-2 mb-2">
                                            <Input
                                                value={point}
                                                onChange={(e) => updateArrayItem("afterPoints", idx, e.target.value)}
                                                className="bg-white/5 border-white/10 text-white"
                                                placeholder={`After point ${idx + 1}`}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => removeArrayItem("afterPoints", idx)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => addArrayItem("afterPoints")}
                                    >
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add Point
                                    </Button>
                                </div>
                            </div>

                            {/* Business Value Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">Business Value</h3>
                                {(currentPost.businessValuePoints || [{ highlight: "", description: "" }]).map((point, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-xl mb-4 border border-white/10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input
                                                value={point.highlight}
                                                onChange={(e) =>
                                                    updateArrayItem("businessValuePoints", idx, { ...point, highlight: e.target.value })
                                                }
                                                className="bg-white/5 border-white/10 text-white"
                                                placeholder="Highlight"
                                            />
                                            <div className="flex gap-2">
                                                <Input
                                                    value={point.description}
                                                    onChange={(e) =>
                                                        updateArrayItem("businessValuePoints", idx, { ...point, description: e.target.value })
                                                    }
                                                    className="bg-white/5 border-white/10 text-white"
                                                    placeholder="Description"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeArrayItem("businessValuePoints", idx)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addArrayItem("businessValuePoints")}
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Value Point
                                </Button>
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" disabled={loading} className="gap-2">
                                    <Save className="w-4 h-4" />
                                    {loading ? "Saving..." : "Save Post"}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setCurrentPost(emptyPost);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-neutral-900 rounded-2xl p-6 border border-white/10 flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                                    <p className="text-white/60 text-sm mb-2">{post.excerpt}</p>
                                    <div className="flex gap-4 text-xs text-white/40">
                                        <span>{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.slug}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                                        <Trash2 className="w-4 h-4 text-red-500" />
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
