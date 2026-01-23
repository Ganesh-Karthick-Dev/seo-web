import Link from "next/link";
import { BookOpen, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
    const resources = [
        {
            title: "Navbar",
            description: "View our navigation component",
            href: "/resources/navbar",
            icon: BookOpen,
            gradient: "from-orange-500 to-amber-400"
        },
        {
            title: "Footer",
            description: "View our footer component",
            href: "/resources/footer",
            icon: Briefcase,
            gradient: "from-amber-500 to-orange-400"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Resources
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our component library and design system resources.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {resources.map((resource) => {
                        const Icon = resource.icon;
                        return (
                            <Link
                                key={resource.title}
                                href={resource.href}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                                    <Icon className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                        {resource.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-6">
                                        {resource.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-primary">
                                        View Component <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
