export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    painPoint: {
        title: string;
        description: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string;
        features: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
    beforeAfter: {
        before: {
            title: string;
            points: string[];
        };
        after: {
            title: string;
            points: string[];
        };
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Web Development in 2024",
        slug: "future-web-dev",
        excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI-driven coding to edge computing.",
        date: "Jan 15, 2024",
        readTime: "5 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        author: {
            name: "Sarah Chen",
            role: "Senior Developer",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        },
        painPoint: {
            title: "The Complexity of Modern Web Apps",
            description: "Developers are overwhelmed by the increasing complexity of modern web applications. Managing state, optimizing performance, and ensuring accessibility while keeping up with rapid framework changes is a daunting task.",
            points: [
                "Framework fatigue and constant breaking changes",
                "Difficulty in maintaining high performance scores",
                "Complex state management in large applications",
                "Security vulnerabilities in third-party dependencies"
            ]
        },
        solution: {
            title: "AI-Driven Development & Edge Computing",
            description: "The convergence of AI tools and Edge computing is simplifying the development workflow. AI assistants handle boilerplate and debugging, while Edge platforms handle performance and distribution automatically.",
            features: [
                {
                    title: "AI Coding Assistants",
                    description: "Tools like Copilot reduce boilerplate by 40%, allowing devs to focus on logic.",
                    icon: "Bot"
                },
                {
                    title: "Edge Functions",
                    description: "Serverless functions running at the edge reduce latency to <50ms globally.",
                    icon: "Zap"
                },
                {
                    title: "Automated Optimization",
                    description: "Frameworks now handle image and font optimization automatically at build time.",
                    icon: "Settings"
                }
            ]
        },
        beforeAfter: {
            before: {
                title: "Before",
                points: [
                    "Manual optimization requiring hours of work",
                    "Slow builds taking 10+ minutes",
                    "Server management and DevOps overhead",
                    "Hours spent on boilerplate code",
                    "High latency for global users",
                    "Complex deployment pipelines"
                ]
            },
            after: {
                title: "After",
                points: [
                    "AI-assisted coding reducing dev time by 40%",
                    "Instant deployments to the edge",
                    "Automatic optimization at build time",
                    "Zero-config infrastructure",
                    "Near-instant load times globally",
                    "One-click deployments"
                ]
            }
        }
    },
    {
        id: 2,
        title: "Mastering SEO for Modern Web Apps",
        slug: "mastering-seo",
        excerpt: "Learn essential SEO strategies for Single Page Applications and Next.js projects to improve your search engine rankings.",
        date: "Jan 12, 2024",
        readTime: "8 min read",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        author: {
            name: "Michael Ross",
            role: "SEO Specialist",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        },
        painPoint: {
            title: "The Invisible SPA Problem",
            description: "Single Page Applications (SPAs) often suffer from poor search engine visibility because crawlers struggle to execute JavaScript and index dynamic content effectively.",
            points: [
                "Empty HTML shells returned to crawlers",
                "Slow initial page load affecting ranking",
                "Poor social media preview generation",
                "Difficulty in managing meta tags dynamically"
            ]
        },
        solution: {
            title: "Server-Side Rendering & Metadata API",
            description: "Next.js solves these issues by rendering content on the server before sending it to the client, ensuring perfect indexability and performance.",
            features: [
                {
                    title: "Server-Side Rendering",
                    description: "Delivers fully populated HTML to crawlers, guaranteeing content indexability.",
                    icon: "Server"
                },
                {
                    title: "Dynamic Metadata",
                    description: "Programmatically generate meta tags for every page based on its content.",
                    icon: "Tag"
                },
                {
                    title: "Sitemap Generation",
                    description: "Automatically generate and update sitemaps for all dynamic routes.",
                    icon: "Map"
                }
            ]
        },
        beforeAfter: {
            before: {
                title: "Before",
                points: [
                    "Search engines see a blank page",
                    "Users wait for JS to load",
                    "Poor rankings in search results",
                    "Low organic traffic",
                    "No social media previews",
                    "Manual meta tag management"
                ]
            },
            after: {
                title: "After",
                points: [
                    "Search engines see full content instantly",
                    "Fast First Contentful Paint",
                    "Higher rankings and visibility",
                    "Better click-through rates",
                    "Rich social media previews",
                    "Automated metadata generation"
                ]
            }
        }
    },
    {
        id: 3,
        title: "UI/UX Design Principles for 2024",
        slug: "ui-ux-principles",
        excerpt: "Discover the key design principles that will dominate user interfaces this year, focusing on accessibility and micro-interactions.",
        date: "Jan 10, 2024",
        readTime: "6 min read",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        author: {
            name: "Jessica Lee",
            role: "Product Designer",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
        },
        painPoint: {
            title: "User Disengagement & Frustration",
            description: "Users are increasingly intolerant of clunky, unresponsive, or inaccessible interfaces. Poor design leads to high bounce rates and lost revenue.",
            points: [
                "Confusing navigation structures",
                "Lack of feedback during interactions",
                "Inaccessible content for users with disabilities",
                "Visual clutter overwhelming the user"
            ]
        },
        solution: {
            title: "Inclusive & Reactive Design",
            description: "Adopting a user-centric approach that prioritizes accessibility and provides immediate, delightful feedback through micro-interactions.",
            features: [
                {
                    title: "Micro-Interactions",
                    description: "Subtle animations that guide and reward user actions.",
                    icon: "MousePointer"
                },
                {
                    title: "Accessibility (a11y)",
                    description: "Designing for all abilities ensures a wider audience reach.",
                    icon: "Eye"
                },
                {
                    title: "Glassmorphism 2.0",
                    description: "Modern, clean aesthetics that create depth and hierarchy.",
                    icon: "Layers"
                }
            ]
        },
        beforeAfter: {
            before: {
                title: "Before",
                points: [
                    "Flat, lifeless buttons with no feedback",
                    "Hard to read text and poor contrast",
                    "Users feel lost in the interface",
                    "High bounce rates",
                    "No accessibility support",
                    "Static, unengaging designs"
                ]
            },
            after: {
                title: "After",
                points: [
                    "Responsive elements that react to touch",
                    "Clear visual hierarchy and readability",
                    "Intuitive navigation flow",
                    "Users stay engaged longer",
                    "WCAG compliant accessibility",
                    "Delightful micro-animations"
                ]
            }
        }
    },
    {
        id: 4,
        title: "Optimizing Next.js Performance",
        slug: "optimizing-nextjs",
        excerpt: "A comprehensive guide to boosting your Next.js application's performance using image optimization, lazy loading, and caching.",
        date: "Jan 05, 2024",
        readTime: "10 min read",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        author: {
            name: "David Kim",
            role: "Lead Engineer",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
        },
        painPoint: {
            title: "Slow Load Times & Core Web Vitals",
            description: "Heavy JavaScript bundles and unoptimized assets cause slow page loads, leading to poor user experience and lower SEO rankings.",
            points: [
                "Large layout shifts (CLS)",
                "Slow Largest Contentful Paint (LCP)",
                "Blocked main thread causing unresponsiveness",
                "High bandwidth usage for mobile users"
            ]
        },
        solution: {
            title: "Next.js Optimization Suite",
            description: "Leveraging the built-in performance features of Next.js to automatically optimize assets and code delivery.",
            features: [
                {
                    title: "next/image",
                    description: "Automatic image resizing, format conversion (WebP/AVIF), and lazy loading.",
                    icon: "Image"
                },
                {
                    title: "Code Splitting",
                    description: "Route-based chunking ensures users only download code for the current page.",
                    icon: "Scissors"
                },
                {
                    title: "Script Optimization",
                    description: "Smart loading strategies for third-party scripts to prevent blocking.",
                    icon: "Code"
                }
            ]
        },
        beforeAfter: {
            before: {
                title: "Before",
                points: [
                    "Lighthouse score: 45",
                    "3+ second load time",
                    "Janky scrolling experience",
                    "Images load slowly with layout shifts",
                    "Large unoptimized bundles",
                    "Poor mobile performance"
                ]
            },
            after: {
                title: "After",
                points: [
                    "Lighthouse score: 98",
                    "Sub-second load time",
                    "Silky smooth interactions",
                    "Stable layout with optimized images",
                    "Route-based code splitting",
                    "Excellent mobile experience"
                ]
            }
        }
    }
];

export function getAllBlogPosts() {
    return blogPosts;
}

export function getBlogPost(slug: string) {
    return blogPosts.find(post => post.slug === slug);
}
