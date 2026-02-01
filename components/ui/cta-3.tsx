"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTA3Props {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    primaryButtonExternal?: boolean;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    secondaryButtonExternal?: boolean;
    className?: string;
    variant?: "light" | "dark";
}

export function CTA3({
    title = "Let your plans shape the future.",
    subtitle = "Start your free trial today. No credit card required.",
    primaryButtonText = "Get Started",
    primaryButtonHref = "/contact",
    primaryButtonExternal = false,
    secondaryButtonText = "Contact Sales",
    secondaryButtonHref = "/contact",
    secondaryButtonExternal = false,
    className,
    variant = "dark",
}: CTA3Props) {
    const isDark = variant === "dark";

    return (
        <div
            className={cn(
                "relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y px-6 py-8",
                isDark
                    ? "border-white/20 bg-[radial-gradient(35%_80%_at_25%_0%,rgba(255,255,255,0.06),transparent)]"
                    : "border-border bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/0.08),transparent)]",
                className
            )}
        >
            <PlusIcon
                className={cn(
                    "absolute top-[-12.5px] left-[-11.5px] z-1 size-6",
                    isDark ? "text-white/60" : "text-foreground"
                )}
                strokeWidth={1}
            />
            <PlusIcon
                className={cn(
                    "absolute top-[-12.5px] right-[-11.5px] z-1 size-6",
                    isDark ? "text-white/60" : "text-foreground"
                )}
                strokeWidth={1}
            />
            <PlusIcon
                className={cn(
                    "absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6",
                    isDark ? "text-white/60" : "text-foreground"
                )}
                strokeWidth={1}
            />
            <PlusIcon
                className={cn(
                    "absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6",
                    isDark ? "text-white/60" : "text-foreground"
                )}
                strokeWidth={1}
            />

            <div
                className={cn(
                    "-inset-y-6 pointer-events-none absolute left-0 w-px border-l",
                    isDark ? "border-white/20" : "border-border"
                )}
            />
            <div
                className={cn(
                    "-inset-y-6 pointer-events-none absolute right-0 w-px border-r",
                    isDark ? "border-white/20" : "border-border"
                )}
            />

            <div
                className={cn(
                    "-z-10 absolute top-0 left-1/2 h-full border-l border-dashed",
                    isDark ? "border-white/10" : "border-border/50"
                )}
            />

            <div className="space-y-1">
                <h2
                    className={cn(
                        "text-center font-bold text-2xl md:text-3xl",
                        isDark ? "text-white" : "text-foreground"
                    )}
                >
                    {title}
                </h2>
                <p
                    className={cn(
                        "text-center text-base md:text-lg",
                        isDark ? "text-white/60" : "text-muted-foreground"
                    )}
                >
                    {subtitle}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className={
                        isDark
                            ? "border-white/30 text-white hover:bg-white/10 hover:text-white"
                            : undefined
                    }
                >
                    <Link
                        href={secondaryButtonHref}
                        {...(secondaryButtonExternal && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                        })}
                    >
                        {secondaryButtonText}
                    </Link>
                </Button>
                <Button
                    asChild
                    size="lg"
                    className={
                        isDark
                            ? "bg-white text-black hover:bg-white/90"
                            : undefined
                    }
                >
                    <Link
                        href={primaryButtonHref}
                        {...(primaryButtonExternal && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                        })}
                    >
                        {primaryButtonText}{" "}
                        <ArrowRightIcon className="ml-1 size-5" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
