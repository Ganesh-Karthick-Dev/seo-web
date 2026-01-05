"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, Building2, Users, Code2, Smartphone, ShoppingCart, Sparkles, Box, Bot, MessageSquare, Cloud, ChevronDown, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Services data
const servicesData = [
    {
        id: 1,
        icon: Code2,
        title: "Custom Software Development",
        description: "Tailored software solutions for your unique business needs",
        href: "/services/custom-software-development",
    },
    {
        id: 2,
        icon: Smartphone,
        title: "Web & Mobile App Development",
        description: "Powerful web and mobile applications that drive engagement",
        href: "/services/web-mobile-development",
    },
    {
        id: 3,
        icon: ShoppingCart,
        title: "Ecommerce",
        description: "End-to-end ecommerce solutions to grow your online business",
        href: "/services/ecommerce",
    },
    {
        id: 4,
        icon: Sparkles,
        title: "Digital Transformation",
        description: "Modernize your business with cutting-edge digital strategies",
        href: "/services/digital-transformation",
    },
    {
        id: 5,
        icon: Box,
        title: "3D Website Development",
        description: "Immersive 3D experiences that captivate and convert visitors",
        href: "/services/3d-website-development",
    },
    {
        id: 6,
        icon: Bot,
        title: "AI & Automation",
        description: "Intelligent automation solutions powered by AI technology",
        href: "/services/ai-automation",
    },
    {
        id: 7,
        icon: MessageSquare,
        title: "IT Consulting",
        description: "Strategic IT guidance to optimize your technology investments",
        href: "/services/it-consulting",
    },
    {
        id: 8,
        icon: Cloud,
        title: "Cloud & DevOps Engineering",
        description: "Scalable cloud infrastructure and streamlined DevOps practices",
        href: "/services/cloud-devops",
    },
];

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);
    const [visible, setVisible] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [servicesOpen, setServicesOpen] = useState(false);
    const lastScrollY = useRef(0);
    const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.8;

            if (currentScrollY < heroHeight) {
                setVisible(true);
            } else {
                if (currentScrollY > lastScrollY.current) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleServicesMouseEnter = () => {
        if (servicesTimeoutRef.current) {
            clearTimeout(servicesTimeoutRef.current);
        }
        setServicesOpen(true);
    };

    const handleServicesMouseLeave = () => {
        servicesTimeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 150);
    };

    const regularLinks = [
        {
            label: 'Industries',
            href: '/industries',
            icon: Building2,
        },
        {
            label: 'About',
            href: '/about',
            icon: Users,
        },
    ];

    return (
        <header
            className={cn(
                'fixed top-5 left-1/2 -translate-x-1/2 z-50',
                'w-[calc(100%-2rem)] max-w-3xl rounded-full border shadow',
                'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
                'transition-all duration-300 ease-in-out',
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-full pointer-events-none',
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-1.5">
                <Link href="/" className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 duration-100">
                    <div className="relative w-28 h-8 overflow-hidden">
                        <Image
                            src="/logo/crop_logo.webp"
                            alt="Zylex Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>

                {/* Animated Center Navigation */}
                <div className="hidden items-center gap-1 lg:flex bg-muted/50 rounded-full p-1">
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                    >
                        <button
                            className={cn(
                                "flex items-center gap-1 px-3 py-2 rounded-full transition-colors duration-200 h-9",
                                servicesOpen || pathname.startsWith('/services')
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted",
                            )}
                        >
                            <Briefcase size={18} strokeWidth={2} className="flex-shrink-0" />
                            <motion.div
                                initial={false}
                                animate={{
                                    width: servicesOpen || pathname.startsWith('/services') ? "auto" : "0px",
                                    opacity: servicesOpen || pathname.startsWith('/services') ? 1 : 0,
                                    marginLeft: servicesOpen || pathname.startsWith('/services') ? "8px" : "0px",
                                }}
                                transition={{
                                    width: { type: "spring", stiffness: 350, damping: 32 },
                                    opacity: { duration: 0.15 },
                                    marginLeft: { duration: 0.15 },
                                }}
                                className="overflow-hidden flex items-center"
                            >
                                <span className="font-medium text-sm whitespace-nowrap select-none">
                                    Services
                                </span>
                            </motion.div>
                            <ChevronDown
                                size={14}
                                className={cn(
                                    "transition-transform duration-300 ml-0.5",
                                    servicesOpen && "rotate-180"
                                )}
                            />
                        </button>

                        {/* Dropdown Panel */}
                        <div
                            className={cn(
                                "absolute top-full left-1/2 -translate-x-1/2 pt-3",
                                "transition-all duration-300 ease-out",
                                servicesOpen
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-[420px] rounded-2xl shadow-2xl overflow-hidden",
                                    "bg-white dark:bg-neutral-900",
                                    "shadow-xl shadow-black/10 dark:shadow-black/50",
                                    "border border-neutral-200 dark:border-neutral-800",
                                )}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 p-4 border-b border-neutral-100 dark:border-neutral-800">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                                        <Briefcase className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Our Services</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            Comprehensive digital solutions
                                        </p>
                                    </div>
                                </div>

                                {/* Services List */}
                                <div className="px-2 py-3 max-h-[400px] overflow-y-auto">
                                    <div className="space-y-1">
                                        {servicesData.map((service, index) => {
                                            const Icon = service.icon;
                                            return (
                                                <Link
                                                    key={service.id}
                                                    href={service.href}
                                                    className={cn(
                                                        "flex items-start gap-3 rounded-xl p-3",
                                                        "transition-all duration-300 ease-out",
                                                        "hover:bg-neutral-100 dark:hover:bg-neutral-800/50",
                                                        "group",
                                                        servicesOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                                                    )}
                                                    style={{
                                                        transitionDelay: servicesOpen ? `${index * 40}ms` : "0ms",
                                                    }}
                                                >
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300">
                                                        <Icon className="h-4 w-4 text-neutral-600 dark:text-neutral-300 group-hover:text-primary transition-colors duration-300" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                                            {service.title}
                                                        </h4>
                                                        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Links */}
                    {regularLinks.map((link, idx) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        const isHovered = hoveredIndex === idx;
                        const showLabel = isActive || isHovered;

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={cn(
                                    "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-9",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted",
                                )}
                            >
                                <Icon
                                    size={18}
                                    strokeWidth={2}
                                    aria-hidden
                                    className="transition-colors duration-200 flex-shrink-0"
                                />

                                <motion.div
                                    initial={false}
                                    animate={{
                                        width: showLabel ? "auto" : "0px",
                                        opacity: showLabel ? 1 : 0,
                                        marginLeft: showLabel ? "8px" : "0px",
                                    }}
                                    transition={{
                                        width: { type: "spring", stiffness: 350, damping: 32 },
                                        opacity: { duration: 0.15 },
                                        marginLeft: { duration: 0.15 },
                                    }}
                                    className="overflow-hidden flex items-center"
                                >
                                    <span
                                        className={cn(
                                            "font-medium text-sm whitespace-nowrap select-none",
                                            isActive ? "text-primary" : "text-foreground",
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/contact">
                        <Button size="sm">Let&apos;s Talk</Button>
                    </Link>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className="lg:hidden"
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                        <SheetContent
                            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                            showClose={false}
                            side="left"
                        >
                            <div className="grid gap-y-1 overflow-y-auto px-4 pt-12 pb-5">
                                {/* Services Section with sub-items */}
                                <div className="space-y-1">
                                    <Link
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start font-semibold',
                                        })}
                                        href="/services"
                                        onClick={() => setOpen(false)}
                                    >
                                        Services
                                    </Link>
                                    <div className="pl-4 space-y-0.5">
                                        {servicesData.map((service) => (
                                            <Link
                                                key={service.id}
                                                className={buttonVariants({
                                                    variant: 'ghost',
                                                    size: 'sm',
                                                    className: 'justify-start text-muted-foreground hover:text-foreground w-full',
                                                })}
                                                href={service.href}
                                                onClick={() => setOpen(false)}
                                            >
                                                <service.icon className="size-4 mr-2" />
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Other nav links */}
                                {regularLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start',
                                        })}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        <link.icon className="size-4 mr-2" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <SheetFooter>
                                <Link href="/contact" onClick={() => setOpen(false)} className="w-full">
                                    <Button className="w-full">Let&apos;s Talk</Button>
                                </Link>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}

