"use client";

import React from 'react';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            label: 'Services',
            href: '/services',
        },
        {
            label: 'Industries',
            href: '/industries',
        },
        {
            label: 'About',
            href: '/about',
        },
    ];

    return (
        <header
            className={cn(
                'sticky top-5 z-50',
                'mx-auto w-full max-w-3xl rounded-lg border shadow',
                'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-1.5">
                <Link href="/" className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
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
                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
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
