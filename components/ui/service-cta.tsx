"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCTAProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export function ServiceCTA({
    title = "Let's Build Something Great Together",
    description = "Schedule a free consultation to discuss your project requirements and explore how we can help.",
    primaryButtonText = "Start Your Project",
    primaryButtonHref = "/contact",
    secondaryButtonText = "View Case Studies",
    secondaryButtonHref = "/case-studies",
}: ServiceCTAProps) {
    return (
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-8 border-y border-white/10 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(6,182,212,0.1),transparent)] px-6 md:px-12 py-12 md:py-16">
            {/* Corner plus icons */}
            <PlusIcon
                className="absolute top-[-16px] left-[-16px] z-10 size-8 text-white"
                strokeWidth={1.5}
            />
            <PlusIcon
                className="absolute top-[-16px] right-[-16px] z-10 size-8 text-white"
                strokeWidth={1.5}
            />
            <PlusIcon
                className="absolute bottom-[-16px] left-[-16px] z-10 size-8 text-white"
                strokeWidth={1.5}
            />
            <PlusIcon
                className="absolute right-[-16px] bottom-[-16px] z-10 size-8 text-white"
                strokeWidth={1.5}
            />

            {/* Side border extensions */}
            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-white/10" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-white/10" />

            {/* Center dashed line */}
            <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-white/10" />

            {/* Content */}
            <div className="space-y-3">
                <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                    {title}
                </h2>
                {description && (
                    <p className="text-center text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {secondaryButtonText && (
                    <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 hover:text-white px-6 py-2.5 h-auto">
                        <Link href={secondaryButtonHref || "#"}>
                            {secondaryButtonText}
                        </Link>
                    </Button>
                )}
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 h-auto">
                    <Link href={primaryButtonHref}>
                        {primaryButtonText}
                        <ArrowRightIcon className="size-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
