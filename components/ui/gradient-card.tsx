// components/ui/gradient-card.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Define variants for the card's overall style using cva
const cardVariants = cva(
    "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg",
    {
        variants: {
            gradient: {
                orange: "bg-gradient-to-br from-orange-100 to-amber-200/50",
                gray: "bg-gradient-to-br from-slate-100 to-slate-200/50",
                purple: "bg-gradient-to-br from-purple-100 to-indigo-200/50",
                green: "bg-gradient-to-br from-emerald-100 to-teal-200/50",
                sky: "bg-gradient-to-br from-sky-100 to-cyan-200/50",
                blue: "bg-gradient-to-br from-blue-100 to-indigo-200/50",
                cyan: "bg-gradient-to-br from-cyan-100 to-sky-200/50",
            },
        },
        defaultVariants: {
            gradient: "gray",
        },
    }
);

// Define the props interface for type safety and reusability
export interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    badgeText: string;
    badgeColor: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    imageUrl?: string;
    icon?: React.ReactNode;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
    ({ className, gradient, badgeText, badgeColor, title, description, ctaText, ctaHref, imageUrl, icon, ...props }, ref) => {

        // Animation variants for framer-motion
        const cardAnimation = {
            rest: { scale: 1, y: 0 },
            hover: { scale: 1.02, y: -4 },
        };

        const imageAnimation = {
            rest: { scale: 1, rotate: 0 },
            hover: { scale: 1.1, rotate: 3 },
        };

        return (
            <motion.div
                variants={cardAnimation}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="h-full"
                ref={ref}
            >
                <div
                    className={cn(cardVariants({ gradient }), className)}
                    {...props}
                >
                    {/* Decorative background - icon or image */}
                    {icon ? (
                        <motion.div
                            variants={imageAnimation}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="absolute -right-8 -bottom-8 w-40 h-40 opacity-20 pointer-events-none text-black"
                        >
                            {icon}
                        </motion.div>
                    ) : imageUrl && (
                        <motion.img
                            src={imageUrl}
                            alt={`${title} background graphic`}
                            variants={imageAnimation}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="absolute -right-1/4 -bottom-1/4 w-3/4 opacity-80 pointer-events-none"
                        />
                    )}

                    {/* Card Content */}
                    <div className="z-10 flex flex-col h-full">
                        {/* Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-sm font-medium text-black/80 backdrop-blur-sm w-fit">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: badgeColor }}
                            />
                            {badgeText}
                        </div>

                        {/* Title and Description */}
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
                            <p className="text-black/70 max-w-xs">{description}</p>
                        </div>

                        {/* Call to Action Link */}
                        <a
                            href={ctaHref}
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black"
                        >
                            {ctaText}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
