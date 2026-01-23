"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import {
    ChevronDown,
    Menu as MenuIcon,
    X,
    Briefcase,
    TrendingUp,
    Search,
    Share2,
    BarChart3,
    Globe,
    Building2,
    ShoppingCart,
    Heart,
    GraduationCap,
    Landmark,
    Utensils,
    FileText,
    BookOpen,
    ArrowRight
} from "lucide-react";

// Service items data
const servicesData = [
    {
        title: "SEO Optimization",
        description: "Boost your search rankings with data-driven SEO strategies",
        href: "/services/seo",
        icon: Search,
        gradient: "from-orange-500 to-amber-400"
    },
    {
        title: "Content Marketing",
        description: "Engage audiences with compelling content that converts",
        href: "/services/content-marketing",
        icon: FileText,
        gradient: "from-orange-600 to-orange-400"
    },
    {
        title: "Social Media Marketing",
        description: "Build brand presence across all social platforms",
        href: "/services/social-media",
        icon: Share2,
        gradient: "from-amber-500 to-yellow-400"
    },
    {
        title: "PPC Advertising",
        description: "Maximize ROI with targeted paid advertising campaigns",
        href: "/services/ppc",
        icon: TrendingUp,
        gradient: "from-orange-500 to-red-400"
    },
    {
        title: "Analytics & Reporting",
        description: "Data-driven insights to optimize your digital strategy",
        href: "/services/analytics",
        icon: BarChart3,
        gradient: "from-amber-600 to-orange-400"
    },
    {
        title: "Web Development",
        description: "Custom websites that perform and convert visitors",
        href: "/services/web-development",
        icon: Globe,
        gradient: "from-orange-500 to-amber-500"
    },
];

// Industries data
const industriesData = [
    {
        title: "Healthcare",
        description: "Digital solutions for healthcare providers",
        href: "/industries/healthcare",
        icon: Heart,
        gradient: "from-orange-500 to-red-400"
    },
    {
        title: "E-Commerce",
        description: "Grow your online store revenue",
        href: "/industries/ecommerce",
        icon: ShoppingCart,
        gradient: "from-amber-500 to-orange-400"
    },
    {
        title: "Finance",
        description: "Marketing for financial services",
        href: "/industries/finance",
        icon: Landmark,
        gradient: "from-orange-600 to-amber-500"
    },
    {
        title: "Education",
        description: "Digital strategies for education sector",
        href: "/industries/education",
        icon: GraduationCap,
        gradient: "from-orange-500 to-yellow-400"
    },
    {
        title: "Real Estate",
        description: "Property marketing that sells",
        href: "/industries/real-estate",
        icon: Building2,
        gradient: "from-amber-600 to-orange-400"
    },
    {
        title: "Food & Hospitality",
        description: "Marketing for restaurants & hotels",
        href: "/industries/hospitality",
        icon: Utensils,
        gradient: "from-orange-500 to-amber-400"
    },
];

// Resources data
const resourcesData = [
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
    },
];

interface DropdownItem {
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
}

interface DropdownMenuProps {
    items: DropdownItem[];
    isOpen: boolean;
    columns?: number;
}

const DropdownMenu = ({ items, isOpen, columns = 2 }: DropdownMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                >
                    {/* Glassmorphic container */}
                    <div
                        data-lenis-prevent="true"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className="relative p-2 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain"
                    >
                        {/* Orange gradient glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10 pointer-events-none" />

                        <div className={`grid ${columns === 2 ? 'grid-cols-2 w-[500px]' : 'grid-cols-1 w-[280px]'} gap-1 relative`}>
                            {items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="group flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                >
                                    {/* Icon with gradient background */}
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                                                {item.title}
                                            </h4>
                                            <ArrowRight className="w-3 h-3 text-orange-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                        <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [visible, setVisible] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    // Handle scroll-based visibility with smooth fade
    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = lastScrollY.current;
        const direction = current > previous ? "down" : "up";

        // Update hasScrolled for background styling
        setHasScrolled(current > 50);

        // Show/hide navbar based on scroll direction
        if (direction === "down" && current > 100) {
            setVisible(false);
        } else if (direction === "up") {
            setVisible(true);
        }

        lastScrollY.current = current;
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = (menu: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const navItems = [
        { label: "Services", key: "services", items: servicesData, columns: 2 },
        { label: "Industries", key: "industries", items: industriesData, columns: 2 },
        { label: "Resources", key: "resources", items: resourcesData, columns: 1 },
    ];

    return (
        <>
            <motion.header
                ref={navRef}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hasScrolled ? "py-2" : "py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav
                        className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${hasScrolled
                            ? "bg-neutral-900/90 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] border border-white/10"
                            : "bg-transparent border border-transparent"
                            }`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-44 h-14 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/logo/zylex-dark-caption.svg"
                                    alt="Zylex Logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.key}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(item.key)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeDropdown === item.key
                                            ? "text-orange-400 bg-orange-500/10"
                                            : "text-white/90 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.key ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <DropdownMenu
                                        items={item.items}
                                        isOpen={activeDropdown === item.key}
                                        columns={item.columns}
                                    />
                                </div>
                            ))}

                            {/* About Us - Standalone */}
                            <Link
                                href="/about-us"
                                className="px-4 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                            >
                                About Us
                            </Link>
                        </div>

                        {/* CTA & Mobile Menu */}
                        <div className="flex items-center gap-3">
                            {/* Let's Talk CTA - Orange Gradient */}
                            <Link
                                href="/contact"
                                className="group relative hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                            >
                                {/* Orange gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 transition-all duration-300" />

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                {/* Button content */}
                                <span className="relative z-10">Let&apos;s Talk</span>
                                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden relative w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-5 h-5 text-white" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <MenuIcon className="w-5 h-5 text-white" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel - Dark themed */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-neutral-900 shadow-2xl border-l border-white/10"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-white/10">
                                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                        <div className="relative w-36 h-12 overflow-hidden rounded-lg">
                                            <Image
                                                src="/logo/zylex-dark-caption.svg"
                                                alt="Zylex Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                    </Link>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-white" />
                                    </button>
                                </div>

                                {/* Navigation */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                    {navItems.map((item) => (
                                        <div key={item.key}>
                                            <button
                                                onClick={() => setMobileSubmenu(mobileSubmenu === item.key ? null : item.key)}
                                                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-medium text-white hover:bg-white/5 transition-colors"
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${mobileSubmenu === item.key ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {mobileSubmenu === item.key && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 py-2 space-y-1">
                                                            {item.items.map((subItem, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={subItem.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                                                >
                                                                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${subItem.gradient} flex items-center justify-center`}>
                                                                        <subItem.icon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-sm font-medium text-white">
                                                                            {subItem.title}
                                                                        </h4>
                                                                        <p className="text-xs text-neutral-400">
                                                                            {subItem.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}

                                    <Link
                                        href="/about-us"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block p-3 rounded-xl font-medium text-white hover:bg-white/5 transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </div>

                                {/* Footer CTA - Orange themed */}
                                <div className="p-4 border-t border-white/10">
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:opacity-90 transition-opacity"
                                    >
                                        Let&apos;s Talk
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
