"use client";

import { motion } from "framer-motion";
import {
    BarChart2,
    Clock,
    Database,
    Mail,
    Layers,
    Package,
    CreditCard,
    Globe,
    type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ProductChallengeSectionProps = {
    title: string;
    subtitle: string;
    items: string[];
    icons?: LucideIcon[];
    variant?: "zylex" | "tempmail";
};

const tempmailIcons: LucideIcon[] = [BarChart2, Clock, Database, Mail];
const zylexIcons: LucideIcon[] = [Layers, Package, CreditCard, Globe];

// Subtle film grain overlay - fine uniform texture like frosted glass, static & performant
const FilmGrainOverlay = () => (
    <div
        className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none overflow-hidden"
        aria-hidden
    >
        <div
            className="absolute inset-0 opacity-[0.12] mix-blend-screen"
            style={{
                backgroundImage: "url(https://assets.aceternity.com/noise.webp)",
                backgroundRepeat: "repeat",
                backgroundSize: "192px 192px",
            }}
        />
    </div>
);

const CardVisual = ({
    index,
    accent,
}: {
    index: number;
    accent: "blue" | "rose";
}) => {
    const colors =
        accent === "blue"
            ? "from-blue-500/20 via-transparent to-transparent"
            : "from-rose-500/20 via-transparent to-transparent";
    const stroke = accent === "blue" ? "rgba(59,130,246,0.3)" : "rgba(244,63,94,0.3)";

    if (index === 0) {
        return (
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                    className={cn(
                        "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl opacity-60",
                        colors
                    )}
                />
                <svg
                    className="absolute bottom-4 right-4 h-24 w-24 opacity-40"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    {[0, 1, 2, 3].map((i) => (
                        <line
                            key={i}
                            x1={20 + i * 20}
                            y1={80}
                            x2={20 + i * 20}
                            y2={25 + i * 12}
                            stroke={stroke}
                            strokeWidth="2"
                        />
                    ))}
                </svg>
            </div>
        );
    }
    if (index === 1) {
        return (
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                    className={cn(
                        "absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-tr blur-3xl opacity-50",
                        colors
                    )}
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-1">
                    {[40, 65, 45, 80, 60].map((h, i) => (
                        <div
                            key={i}
                            className="w-2 rounded-t bg-white/10"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>
            </div>
        );
    }
    if (index === 2) {
        return (
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                    className={cn(
                        "absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l blur-2xl opacity-30",
                        colors
                    )}
                />
                <div className="absolute left-6 top-6 grid grid-cols-2 gap-2 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-8 w-8 rounded-lg border border-white/20"
                        />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div
                className={cn(
                    "absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-gradient-to-tl blur-3xl opacity-50",
                    colors
                )}
            />
            <svg
                className="absolute right-6 bottom-6 h-20 w-20 opacity-30"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={50 + 35 * Math.cos((deg * Math.PI) / 180)}
                        y2={50 + 35 * Math.sin((deg * Math.PI) / 180)}
                        stroke={stroke}
                        strokeWidth="1"
                    />
                ))}
            </svg>
        </div>
    );
};

export function ProductChallengeSection({
    title,
    subtitle,
    items,
    icons,
    variant = "tempmail",
}: ProductChallengeSectionProps) {
    const accent = variant === "zylex" ? "blue" : "rose";
    const iconSet = icons ?? (variant === "zylex" ? zylexIcons : tempmailIcons);

    return (
        <section className="relative w-full overflow-hidden py-14 sm:py-20 md:py-28 lg:py-32">
            {/* Full-width background */}
            <div className="absolute inset-0">
                <div
                    className={cn(
                        "absolute inset-0 opacity-30",
                        accent === "blue"
                            ? "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]"
                            : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(244,63,94,0.12),transparent)]"
                    )}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_50%,transparent_100%)]" />
                <div className="absolute inset-0 bg-neutral-950/40" />
            </div>

            <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 md:mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
                    {items.map((item, i) => {
                        const ItemIcon = iconSet[i % iconSet.length];
                        const isWide = i === 0 || i === 3;

                        return (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className={cn(
                                    "group relative",
                                    isWide ? "md:col-span-7" : "md:col-span-5"
                                )}
                            >
                                <div
                                    className={cn(
                                        "relative h-full min-h-[180px] sm:min-h-[200px] md:min-h-[260px] rounded-xl md:rounded-2xl overflow-hidden",
                                        "border border-white/10 bg-neutral-900/60 backdrop-blur-sm",
                                        "hover:border-white/20 hover:bg-neutral-900/80 transition-all duration-500"
                                    )}
                                >
                                    <CardVisual index={i} accent={accent} />
                                    <FilmGrainOverlay />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                        <span className="inline-flex w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl items-center justify-center mb-3 sm:mb-4 bg-blue-500/20 text-blue-400">
                                            <ItemIcon
                                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                                strokeWidth={2}
                                            />
                                        </span>
                                        <p className="text-base sm:text-lg md:text-xl font-medium text-white leading-snug">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
