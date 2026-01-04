"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, Briefcase, Building2, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);
    const [visible, setVisible] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.8; // 80% of viewport height

            // Always visible in hero section
            if (currentScrollY < heroHeight) {
                setVisible(true);
            } else {
                // After hero: hide on scroll down, show on scroll up
                if (currentScrollY > lastScrollY.current) {
                    // Scrolling down
                    setVisible(false);
                } else {
                    // Scrolling up
                    setVisible(true);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        {
            label: 'Services',
            href: '/services',
            icon: Briefcase,
        },
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
                    {links.map((link, idx) => {
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
                                        ? "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary"
                                        : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted",
                                    "focus:outline-none focus-visible:ring-0",
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
                                            isActive ? "text-primary dark:text-primary" : "text-foreground",
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
                            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start',
                                        })}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
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
