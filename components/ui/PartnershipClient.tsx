"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Zap,
    ArrowRight,
    Send,
    Sparkles,
    Globe,
    Smartphone,
    Bot,
    Brain,
    CreditCard,
    Store,
    Ban,
    Palette,
    FileCheck,
    AlertTriangle
} from "lucide-react";
import { Hero } from "@/components/ui/hero-1";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Rocket, Cpu, Cloud, Code2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================
// ESTIMATOR TOOL SECTION (Section 4)
// ============================================

const questions = [
    {
        id: "platform",
        title: "Target Platform",
        description: "What type of application are you building?",
        options: [
            { label: "Web Application", sublabel: "React/Next.js", days: 5, cost: 5000, icon: Globe },
            { label: "Mobile App", sublabel: "iOS/Android", days: 15, cost: 15000, icon: Smartphone },
        ],
    },
    {
        id: "ai",
        title: "Does it need AI?",
        description: "Select the AI capabilities you need",
        options: [
            { label: "No, standard logic", sublabel: "Traditional application", days: 0, cost: 0, icon: Zap },
            { label: "Generative AI", sublabel: "OpenAI/Claude integration", days: 3, cost: 3000, icon: Bot },
            { label: "Custom AI Training", sublabel: "RAG & Fine-tuning", days: 7, cost: 8000, icon: Brain },
        ],
    },
    {
        id: "payments",
        title: "How do you get paid?",
        description: "Select your monetization model",
        options: [
            { label: "No payments needed", sublabel: "Internal tool or free app", days: 0, cost: 0, icon: Ban },
            { label: "Subscription", sublabel: "Stripe/LemonSqueezy", days: 3, cost: 2500, icon: CreditCard },
            { label: "Marketplace", sublabel: "Split payments", days: 7, cost: 6000, icon: Store },
        ],
    },
    {
        id: "design",
        title: "Do you have designs ready?",
        description: "Design readiness affects timeline",
        options: [
            { label: "Yes, full designs", sublabel: "Figma/Adobe XD files", days: -2, cost: 0, icon: FileCheck },
            { label: "No, I need design", sublabel: "Full design services", days: 5, cost: 4000, icon: Palette },
        ],
    },
];

interface Selection {
    questionId: string;
    optionIndex: number;
    days: number;
    cost: number;
    label: string;
}

function EstimatorToolSection() {
    const [selections, setSelections] = useState<Selection[]>([]);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const { totalDays, totalCost, isSprintReady } = useMemo(() => {
        const days = selections.reduce((sum, s) => sum + s.days, 0);
        const cost = selections.reduce((sum, s) => sum + s.cost, 0);
        return { totalDays: days, totalCost: cost, isSprintReady: days <= 15 };
    }, [selections]);

    const allQuestionsAnswered = selections.length === questions.length;

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleOptionSelect = (questionId: string, optionIndex: number, option: { days: number; cost: number; label: string }) => {
        setSelections((prev) => {
            const filtered = prev.filter((s) => s.questionId !== questionId);
            return [...filtered, { questionId, optionIndex, days: option.days, cost: option.cost, label: option.label }];
        });
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300);
        }
    };

    const handleSubmit = async () => {
        if (!isValidEmail(email)) return;
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/estimator/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    platform: selections.find(s => s.questionId === "platform")?.label || "",
                    aiFeatures: selections.find(s => s.questionId === "ai")?.label || "",
                    payments: selections.find(s => s.questionId === "payments")?.label || "",
                    designReady: selections.find(s => s.questionId === "design")?.label || "",
                    totalDays,
                    totalCost,
                    resultState: isSprintReady ? "sprint_ready" : "enterprise",
                }),
            });
            if (response.ok) setIsSubmitted(true);
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getSelectedOption = (questionId: string) => {
        return selections.find(s => s.questionId === questionId)?.optionIndex ?? -1;
    };

    return (
        <section className="py-24 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">Project Estimator</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    The <span className="text-cyan-400">15-Day</span> Feasibility Engine
                </h2>

                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                    Enter your specs and we&apos;ll calculate if your product fits our 15-Day High-Velocity Sprint.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Questions Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-8 px-4">
                        {questions.map((q, index) => (
                            <div key={q.id} className="flex items-center">
                                <button
                                    onClick={() => setCurrentStep(index)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${getSelectedOption(q.id) >= 0
                                        ? "bg-cyan-500 text-white"
                                        : currentStep === index
                                            ? "bg-blue-600 text-white"
                                            : "bg-neutral-800 text-neutral-400"
                                        }`}
                                >
                                    {getSelectedOption(q.id) >= 0 ? <Check className="w-5 h-5" /> : index + 1}
                                </button>
                                {index < questions.length - 1 && (
                                    <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 rounded-full transition-all ${getSelectedOption(q.id) >= 0 ? "bg-cyan-500" : "bg-neutral-800"
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Question Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-8"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{questions[currentStep].title}</h3>
                                <p className="text-neutral-400">{questions[currentStep].description}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {questions[currentStep].options.map((option, optIndex) => {
                                    const isSelected = getSelectedOption(questions[currentStep].id) === optIndex;
                                    const IconComponent = option.icon;
                                    return (
                                        <motion.button
                                            key={optIndex}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleOptionSelect(questions[currentStep].id, optIndex, option)}
                                            className={`p-6 rounded-xl border-2 text-left transition-all ${isSelected
                                                ? "border-cyan-500 bg-cyan-500/10"
                                                : "border-neutral-700 bg-neutral-800/50 hover:border-neutral-600"
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${isSelected ? "bg-cyan-500/20" : "bg-neutral-700/50"
                                                }`}>
                                                <IconComponent className={`w-6 h-6 ${isSelected ? "text-cyan-400" : "text-neutral-400"}`} />
                                            </div>
                                            <div className="font-semibold text-white mb-1">{option.label}</div>
                                            <div className="text-sm text-neutral-400 mb-3">{option.sublabel}</div>
                                            <div className="flex items-center gap-4 text-xs">
                                                <span className={`px-2 py-1 rounded ${option.days > 0 ? "bg-amber-500/20 text-amber-400" : option.days < 0 ? "bg-cyan-500/20 text-cyan-400" : "bg-neutral-700 text-neutral-400"}`}>
                                                    {option.days > 0 ? `+${option.days}` : option.days} days
                                                </span>
                                                <span className={`px-2 py-1 rounded ${option.cost > 0 ? "bg-blue-500/20 text-blue-400" : "bg-neutral-700 text-neutral-400"}`}>
                                                    {option.cost > 0 ? `+$${option.cost.toLocaleString()}` : "$0"}
                                                </span>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-8">
                                <button
                                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                    disabled={currentStep === 0}
                                    className="px-4 py-2 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    ← Previous
                                </button>
                                <button
                                    onClick={() => setCurrentStep(Math.min(questions.length - 1, currentStep + 1))}
                                    disabled={currentStep === questions.length - 1}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                                >
                                    Next <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Results Panel */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-6">
                        {/* Live Calculator */}
                        <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Live Estimate</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                    <span className="text-neutral-400">Timeline</span>
                                    <span className="text-2xl font-bold text-white">
                                        {totalDays > 0 ? `${totalDays}-${totalDays + 2}` : "0"} <span className="text-sm font-normal text-neutral-400">days</span>
                                    </span>
                                </div>

                                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                                    <span className="text-neutral-400">Investment</span>
                                    <span className="text-2xl font-bold text-white">
                                        ${totalCost.toLocaleString()} <span className="text-sm font-normal text-neutral-400">- ${(totalCost * 1.2).toLocaleString()}</span>
                                    </span>
                                </div>
                            </div>

                            {allQuestionsAnswered && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={`mt-6 p-4 rounded-xl ${isSprintReady
                                        ? "bg-cyan-500/10 border border-cyan-500/20"
                                        : "bg-amber-500/10 border border-amber-500/20"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {isSprintReady ? (
                                            <Check className="w-6 h-6 text-cyan-400" />
                                        ) : (
                                            <AlertTriangle className="w-6 h-6 text-amber-400" />
                                        )}
                                        <div>
                                            <div className={`font-semibold ${isSprintReady ? "text-cyan-400" : "text-amber-400"}`}>
                                                {isSprintReady ? "Sprint Ready" : "Enterprise Build"}
                                            </div>
                                            <div className="text-sm text-neutral-400">
                                                {isSprintReady
                                                    ? "Your project fits our 15-Day Sprint!"
                                                    : "This complexity requires a custom timeline."}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Email Gate */}
                        {allQuestionsAnswered && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6"
                            >
                                {!isSubmitted ? (
                                    <>
                                        <h3 className="text-lg font-semibold text-white mb-2">Get Your Roadmap</h3>
                                        <p className="text-sm text-neutral-400 mb-4">
                                            Download your full Technical Scope & Roadmap.
                                        </p>

                                        <div className="space-y-4">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="work-email@company.com"
                                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                            />

                                            <button
                                                onClick={handleSubmit}
                                                disabled={!isValidEmail(email) || isSubmitting}
                                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4" />Send Me The Roadmap</>)}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Check your inbox!</h3>
                                        <p className="text-sm text-neutral-400">Your Technical Roadmap is on its way.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// SECTION 1 - HERO
// ============================================

function Section1() {
    return (
        <Hero
            title="Engineering. Shipped in 15 Days."
            subtitle='Zylex allows founders and agencies to bypass the "development hell" of traditional hiring. We build production-grade SaaS, AI, and Cloud infrastructure at the speed of a hackathon.'
            eyebrow="15-Day High-Velocity Sprint"
            ctaLabel="Estimate My Project"
            ctaHref="#estimator"
        />
    );
}

// ============================================
// SECTION 2 - THE 4 CORE CAPABILITIES
// ============================================

const capabilities = [
    {
        icon: Rocket,
        title: "Rapid SaaS Development",
        tagline: "From 'Idea' to 'Invoice' in 2 Weeks.",
        description: "We don't just build MVPs; we build scalable V1s. Using our proprietary 'Zylex Core' architecture, we skip the boilerplate setup and focus 100% on your unique business logic.",
        defaultAngle: 135, // bottom-right
    },
    {
        icon: Cpu,
        title: "Enterprise AI Agents",
        tagline: "Software that Thinks, Not Just Clicks.",
        description: "Move beyond simple chatbots. We engineer autonomous AI agents that can read databases, execute workflows, and handle customer support or internal ops without human intervention.",
        defaultAngle: 225, // bottom-left
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        tagline: "Infrastructure That Scales With You.",
        description: "We design cloud architectures that handle your growth without breaking the bank. CI/CD pipelines, auto-scaling, and monitoring built from day one.",
        defaultAngle: 45, // top-right
    },
    {
        icon: Code2,
        title: "Custom Software",
        tagline: "Built Exactly For Your Business.",
        description: "Off-the-shelf tools don't cut it? We build software tailored to your unique workflows, integrations, and business logic.",
        defaultAngle: 315, // top-left
    },
];

interface CapabilityCardProps {
    area?: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
    defaultAngle?: number;
}

function CapabilityCard({ area, icon: Icon, title, tagline, description, defaultAngle = 0 }: CapabilityCardProps) {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                    defaultAngle={defaultAngle}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-800 bg-transparent p-6 shadow-sm md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-neutral-800 bg-neutral-900 p-2">
                            <Icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <p className="text-sm font-medium text-blue-400">
                                {tagline}
                            </p>
                            <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-neutral-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

function Section2() {
    return (
        <section className="py-24">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
                    What We Build. How We Deliver.
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Focus on the outcome, not the tech stack. We deliver results that transform your business.
                </p>
            </div>

            {/* Capabilities Grid */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {capabilities.map((cap, index) => (
                    <CapabilityCard
                        key={index}
                        icon={cap.icon}
                        title={cap.title}
                        tagline={cap.tagline}
                        description={cap.description}
                        defaultAngle={cap.defaultAngle}
                    />
                ))}
            </ul>
        </section>
    );
}

function Section3() {
    return (
        <section className="py-24 min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-neutral-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-neutral-600">3</span>
                </div>
                <p className="text-neutral-600 text-sm">Section 3 - Awaiting Content</p>
            </div>
        </section>
    );
}

// ============================================
// MAIN PARTNERSHIP CLIENT COMPONENT
// ============================================

export default function PartnershipClient() {
    return (
        <div className="min-h-screen bg-black">
            {/* Section 1 - Hero (Full Width) */}
            <Section1 />

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pb-20">
                {/* Section 2 - To be added */}
                <Section2 />

                {/* Section 3 - To be added */}
                <Section3 />

                {/* Section 4 - Estimator Tool */}
                <EstimatorToolSection />
            </div>
        </div>
    );
}
