"use client"

import type React from "react"
import { useState } from "react"
import {
    Code2,
    Smartphone,
    ShoppingCart,
    Sparkles,
    Box,
    Bot,
    MessageSquare,
    Cloud,
    ChevronDown,
    Briefcase
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ServiceItem {
    id: number
    icon: React.ReactNode
    title: string
    description: string
    href: string
}

const services: ServiceItem[] = [
    {
        id: 1,
        icon: <Code2 className="h-4 w-4" />,
        title: "Custom Software Development",
        description: "Tailored software solutions for your unique business needs",
        href: "/services/custom-software-development",
    },
    {
        id: 2,
        icon: <Smartphone className="h-4 w-4" />,
        title: "Web & Mobile App Development",
        description: "Powerful web and mobile applications that drive engagement",
        href: "/services/web-mobile-development",
    },
    {
        id: 3,
        icon: <ShoppingCart className="h-4 w-4" />,
        title: "Ecommerce",
        description: "End-to-end ecommerce solutions to grow your online business",
        href: "/services/ecommerce",
    },
    {
        id: 4,
        icon: <Sparkles className="h-4 w-4" />,
        title: "Digital Transformation",
        description: "Modernize your business with cutting-edge digital strategies",
        href: "/services/digital-transformation",
    },
    {
        id: 5,
        icon: <Box className="h-4 w-4" />,
        title: "3D Website Development",
        description: "Immersive 3D experiences that captivate and convert visitors",
        href: "/services/3d-website-development",
    },
    {
        id: 6,
        icon: <Bot className="h-4 w-4" />,
        title: "AI & Automation",
        description: "Intelligent automation solutions powered by AI technology",
        href: "/services/ai-automation",
    },
    {
        id: 7,
        icon: <MessageSquare className="h-4 w-4" />,
        title: "IT Consulting",
        description: "Strategic IT guidance to optimize your technology investments",
        href: "/services/it-consulting",
    },
    {
        id: 8,
        icon: <Cloud className="h-4 w-4" />,
        title: "Cloud & DevOps Engineering",
        description: "Scalable cloud infrastructure and streamlined DevOps practices",
        href: "/services/cloud-devops",
    },
]

interface ServicesDropdownProps {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
}

export function ServicesDropdown({ isOpen, onMouseEnter, onMouseLeave }: ServicesDropdownProps) {
    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Trigger Button */}
            <button
                className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-200",
                    "text-muted-foreground hover:bg-muted",
                    isOpen && "bg-primary/10 text-primary"
                )}
            >
                <Briefcase size={18} strokeWidth={2} />
                <span className="font-medium text-sm">Services</span>
                <ChevronDown
                    size={14}
                    className={cn(
                        "transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {/* Dropdown Panel */}
            <div
                className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3",
                    "transition-all duration-300 ease-out",
                    isOpen
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
                        "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    )}
                >
                    {/* Header */}
                    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 dark:border-neutral-800">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 transition-colors duration-300">
                            <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Our Services</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Comprehensive digital solutions
                            </p>
                        </div>
                    </div>

                    {/* Services List */}
                    <div className="px-2 py-3 max-h-[400px] overflow-y-auto">
                        <div className="space-y-1">
                            {services.map((service, index) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className={cn(
                                        "flex items-start gap-3 rounded-xl p-3",
                                        "transition-all duration-300 ease-out",
                                        "hover:bg-neutral-100 dark:hover:bg-neutral-800/50",
                                        "group",
                                        isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                                    )}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                                    }}
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300">
                                        <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary transition-colors duration-300">
                                            {service.icon}
                                        </span>
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
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-neutral-100 dark:border-neutral-800">
                        <Link
                            href="/services"
                            className={cn(
                                "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl",
                                "bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20",
                                "text-primary font-medium text-sm transition-all duration-300"
                            )}
                        >
                            View All Services
                            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
