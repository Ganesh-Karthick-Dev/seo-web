"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
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
    AlertTriangle,
    Clock,
    TrendingUp,
    Trophy
} from "lucide-react";
import { Hero } from "@/components/ui/hero-1";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DitheringCard } from "@/components/ui/hero-dithering-card";
import { Rocket, Cpu, Cloud, Code2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// ============================================
// ESTIMATOR TOOL SECTION (Section 4) - 10 PHASE CALCULATOR
// ============================================

import {
    FileText,
    Layers,
    Server,
    Database,
    Lock,
    Settings,
    PenTool,
    TestTube,
    Wallet,
    Rocket as RocketDeploy,
    Building2,
    Smartphone as Phone,
    Monitor,
    TabletSmartphone,
    Layout,
    HardDrive
} from "lucide-react";

// 10-Phase Configuration
const estimatorPhases = [
    {
        id: "discovery",
        phase: 1,
        title: "Project Discovery",
        description: "Define your vision - we'll document it properly",
        icon: FileText,
        multiSelect: true,
        options: [
            { id: "frd", label: "FRD (Functional Requirements)", ourCost: 300, competitorCost: 3000, days: 0.5 },
            { id: "brd", label: "BRD (Business Requirements)", ourCost: 300, competitorCost: 3000, days: 0.5 },
            { id: "prd", label: "PRD (Product Requirements)", ourCost: 400, competitorCost: 4000, days: 0.5 },
            { id: "techSpec", label: "Technical Specification", ourCost: 500, competitorCost: 5000, days: 1 },
            { id: "wireframes", label: "Wireframes/Mockups", ourCost: 700, competitorCost: 6000, days: 1 },
        ],
    },
    {
        id: "appType",
        phase: 2,
        title: "Application Type",
        description: "What are we building?",
        icon: Monitor,
        multiSelect: false,
        options: [
            { id: "landing", label: "Landing Page / Portfolio", ourCost: 1500, competitorCost: 8000, days: 3, complexity: 1.0 },
            { id: "cmsWebsite", label: "Multi-page Website with CMS", ourCost: 2500, competitorCost: 15000, days: 5, complexity: 1.2 },
            { id: "webApp", label: "Web Application (SaaS)", ourCost: 4000, competitorCost: 35000, days: 8, complexity: 1.5 },
            { id: "mobileApp", label: "Mobile App (React Native)", ourCost: 5000, competitorCost: 45000, days: 10, complexity: 1.8 },
            { id: "pwa", label: "Progressive Web App (PWA)", ourCost: 3500, competitorCost: 30000, days: 7, complexity: 1.4 },
            { id: "fullPlatform", label: "Full-Stack Platform (Web + Mobile)", ourCost: 10000, competitorCost: 80000, days: 15, complexity: 2.5 },
        ],
    },
    {
        id: "architecture",
        phase: 3,
        title: "System Architecture",
        description: "Built to scale from day one",
        icon: Server,
        multiSelect: false,
        options: [
            { id: "monolith", label: "Monolithic Architecture", ourCost: 200, competitorCost: 5000, days: 0.5 },
            { id: "modular", label: "Modular Monolith", ourCost: 500, competitorCost: 8000, days: 1 },
            { id: "serverless", label: "Serverless (Lambda/Vercel)", ourCost: 600, competitorCost: 10000, days: 1 },
            { id: "microservices", label: "Microservices Architecture", ourCost: 1200, competitorCost: 15000, days: 2 },
            { id: "cloudNative", label: "Cloud-Native with Auto-scaling", ourCost: 1000, competitorCost: 14000, days: 1.5 },
        ],
    },
    {
        id: "database",
        phase: 4,
        title: "Database & Data",
        description: "Where your data lives and thrives",
        icon: Database,
        multiSelect: false,
        options: [
            { id: "noDb", label: "No Database (Static)", ourCost: 0, competitorCost: 0, days: 0 },
            { id: "sql", label: "SQL Database (PostgreSQL)", ourCost: 400, competitorCost: 6000, days: 1 },
            { id: "nosql", label: "NoSQL Database (MongoDB)", ourCost: 400, competitorCost: 5500, days: 1 },
            { id: "multiDb", label: "Multi-database Setup", ourCost: 1000, competitorCost: 12000, days: 2 },
            { id: "realtimeSync", label: "Real-time Database Sync", ourCost: 700, competitorCost: 9000, days: 1.5 },
        ],
    },
    {
        id: "auth",
        phase: 5,
        title: "Authentication & Security",
        description: "Secure access, simplified",
        icon: Lock,
        multiSelect: false,
        options: [
            { id: "noAuth", label: "No Authentication Required", ourCost: 0, competitorCost: 0, days: 0 },
            { id: "basic", label: "Email/Password Auth", ourCost: 300, competitorCost: 4000, days: 1 },
            { id: "oauth", label: "OAuth 2.0 (Google, GitHub)", ourCost: 400, competitorCost: 5000, days: 1 },
            { id: "mfa", label: "Multi-factor Authentication", ourCost: 600, competitorCost: 7000, days: 1.5 },
            { id: "rbac", label: "Role-Based Access Control", ourCost: 800, competitorCost: 9000, days: 2 },
            { id: "sso", label: "Single Sign-On (SSO)", ourCost: 1000, competitorCost: 12000, days: 2 },
        ],
    },
    {
        id: "features",
        phase: 6,
        title: "Core Features",
        description: "What makes your app unique (select up to 6)",
        icon: Settings,
        multiSelect: true,
        maxSelections: 6,
        options: [
            { id: "dashboard", label: "User Dashboard", ourCost: 500, competitorCost: 5000, days: 1 },
            { id: "adminPanel", label: "Admin Panel", ourCost: 700, competitorCost: 7000, days: 1.5 },
            { id: "cms", label: "Content Management System", ourCost: 1000, competitorCost: 10000, days: 2 },
            { id: "search", label: "Search & Filtering", ourCost: 400, competitorCost: 4000, days: 1 },
            { id: "fileUpload", label: "File Upload/Management", ourCost: 500, competitorCost: 5000, days: 1 },
            { id: "chat", label: "Real-time Chat/Messaging", ourCost: 1200, competitorCost: 12000, days: 2 },
            { id: "notifications", label: "Notifications (Email, Push)", ourCost: 600, competitorCost: 6000, days: 1.5 },
            { id: "booking", label: "Booking/Scheduling System", ourCost: 1000, competitorCost: 10000, days: 2 },
            { id: "ecommerce", label: "E-commerce Functionality", ourCost: 1500, competitorCost: 15000, days: 3 },
            { id: "aiMl", label: "AI/ML Integration", ourCost: 2000, competitorCost: 25000, days: 3 },
            { id: "apiIntegrations", label: "Third-party API Integrations", ourCost: 400, competitorCost: 5000, days: 1 },
        ],
    },
    {
        id: "design",
        phase: 7,
        title: "UI/UX Design",
        description: "Beautiful, fast, accessible",
        icon: PenTool,
        multiSelect: false,
        options: [
            { id: "template", label: "Template-based Design (Fast)", ourCost: 400, competitorCost: 5000, days: 1 },
            { id: "custom", label: "Custom Design (Brand-aligned)", ourCost: 1000, competitorCost: 12000, days: 2 },
            { id: "premium", label: "Premium Design + Branding", ourCost: 2000, competitorCost: 20000, days: 3 },
        ],
    },
    {
        id: "testing",
        phase: 8,
        title: "Testing & QA",
        description: "Ship with confidence",
        icon: TestTube,
        multiSelect: true,
        options: [
            { id: "manual", label: "Manual Testing", ourCost: 300, competitorCost: 4000, days: 1 },
            { id: "unit", label: "Automated Unit Testing", ourCost: 400, competitorCost: 5000, days: 1 },
            { id: "e2e", label: "End-to-End Testing (E2E)", ourCost: 700, competitorCost: 8000, days: 1.5 },
            { id: "security", label: "Security Audit", ourCost: 1200, competitorCost: 15000, days: 2 },
            { id: "performance", label: "Performance Testing", ourCost: 500, competitorCost: 6000, days: 1 },
        ],
    },
    {
        id: "payments",
        phase: 9,
        title: "Payment Integration",
        description: "Get paid, globally",
        icon: Wallet,
        multiSelect: false,
        options: [
            { id: "noPayment", label: "No Payment Integration", ourCost: 0, competitorCost: 0, days: 0 },
            { id: "stripe", label: "Stripe (International)", ourCost: 500, competitorCost: 6000, days: 1 },
            { id: "razorpay", label: "Razorpay (India-focused)", ourCost: 500, competitorCost: 6000, days: 1 },
            { id: "multiple", label: "Multiple Payment Gateways", ourCost: 1000, competitorCost: 12000, days: 2 },
            { id: "subscriptions", label: "Subscription/Recurring Billing", ourCost: 700, competitorCost: 8000, days: 1.5 },
        ],
    },
    {
        id: "deployment",
        phase: 10,
        title: "Deployment & CI/CD",
        description: "From code to customers in minutes",
        icon: RocketDeploy,
        multiSelect: true,
        options: [
            { id: "cloudHosting", label: "Cloud Hosting (AWS/GCP)", ourCost: 500, competitorCost: 6000, days: 1 },
            { id: "managed", label: "Managed Platform (Vercel)", ourCost: 300, competitorCost: 4000, days: 0.5 },
            { id: "docker", label: "Containerized (Docker)", ourCost: 600, competitorCost: 7000, days: 1 },
            { id: "cicd", label: "CI/CD Pipeline Setup", ourCost: 500, competitorCost: 8000, days: 1 },
            { id: "monitoring", label: "Monitoring & Logging", ourCost: 500, competitorCost: 6000, days: 1 },
            { id: "ssl", label: "SSL & Security Config", ourCost: 100, competitorCost: 2000, days: 0.5 },
        ],
    },
];

interface EstimatorSelection {
    phaseId: string;
    selectedOptions: string[];
    ourCost: number;
    competitorCost: number;
    days: number;
}

function EstimatorToolSection() {
    const [currentPhase, setCurrentPhase] = useState(0);
    const [selections, setSelections] = useState<Record<string, EstimatorSelection>>({});
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailHighlight, setEmailHighlight] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    // Calculate totals
    const totals = useMemo(() => {
        let ourCost = 0;
        let competitorCost = 0;
        let days = 0;

        Object.values(selections).forEach((sel) => {
            ourCost += sel.ourCost;
            competitorCost += sel.competitorCost;
            days += sel.days;
        });

        // Apply competitor overhead (30%)
        competitorCost *= 1.3;

        // Cap our timeline at 15 days for MVP messaging
        const displayDays = Math.min(days, 15);
        const competitorDays = Math.ceil(days * 4); // 4x slower

        const savings = competitorCost - ourCost;
        const savingsPercent = competitorCost > 0 ? ((savings / competitorCost) * 100).toFixed(0) : 0;

        return {
            ourCost: Math.round(ourCost),
            competitorCost: Math.round(competitorCost),
            ourDays: displayDays > 0 ? `${displayDays}` : "0",
            competitorDays: competitorDays > 0 ? `${competitorDays}` : "0",
            savings: Math.round(savings),
            savingsPercent,
            isSprintReady: days <= 15,
        };
    }, [selections]);

    const completedPhases = Object.keys(selections).length;
    const showEmailGate = completedPhases >= 5;
    const allPhasesComplete = completedPhases === estimatorPhases.length;

    // Auto-scroll to email input when all phases are complete
    useEffect(() => {
        if (allPhasesComplete && emailInputRef.current) {
            setTimeout(() => {
                emailInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                emailInputRef.current?.focus();
            }, 300);
        }
    }, [allPhasesComplete]);

    const handleOptionToggle = (phaseId: string, optionId: string, option: { ourCost: number; competitorCost: number; days: number }) => {
        const phase = estimatorPhases.find((p) => p.id === phaseId);
        if (!phase) return;

        setSelections((prev) => {
            const existing = prev[phaseId] || { phaseId, selectedOptions: [], ourCost: 0, competitorCost: 0, days: 0 };

            if (phase.multiSelect) {
                // Multi-select logic
                const isSelected = existing.selectedOptions.includes(optionId);
                let newOptions: string[];

                if (isSelected) {
                    newOptions = existing.selectedOptions.filter((id) => id !== optionId);
                } else {
                    // Check max selections
                    if (phase.maxSelections && existing.selectedOptions.length >= phase.maxSelections) {
                        return prev;
                    }
                    newOptions = [...existing.selectedOptions, optionId];
                }

                // Recalculate costs
                let ourCost = 0;
                let competitorCost = 0;
                let days = 0;

                newOptions.forEach((id) => {
                    const opt = phase.options.find((o) => o.id === id);
                    if (opt) {
                        ourCost += opt.ourCost;
                        competitorCost += opt.competitorCost;
                        days += opt.days;
                    }
                });

                if (newOptions.length === 0) {
                    const { [phaseId]: _, ...rest } = prev;
                    return rest;
                }

                return {
                    ...prev,
                    [phaseId]: { phaseId, selectedOptions: newOptions, ourCost, competitorCost, days },
                };
            } else {
                // Single select
                return {
                    ...prev,
                    [phaseId]: {
                        phaseId,
                        selectedOptions: [optionId],
                        ourCost: option.ourCost,
                        competitorCost: option.competitorCost,
                        days: option.days,
                    },
                };
            }
        });
    };

    const isOptionSelected = (phaseId: string, optionId: string) => {
        return selections[phaseId]?.selectedOptions.includes(optionId) || false;
    };

    const isPhaseComplete = (phaseId: string) => {
        return !!selections[phaseId];
    };

    const handleNext = () => {
        if (currentPhase < estimatorPhases.length - 1) {
            setCurrentPhase(currentPhase + 1);
        } else {
            // On last phase, focus email input with highlight
            if (emailInputRef.current) {
                emailInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                emailInputRef.current.focus();
                setEmailHighlight(true);
                setTimeout(() => setEmailHighlight(false), 2000);
            }
        }
    };

    const handlePrev = () => {
        if (currentPhase > 0) {
            setCurrentPhase(currentPhase - 1);
        }
    };

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async () => {
        if (!isValidEmail(email)) return;
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/estimator/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    selections,
                    totals,
                    completedPhases,
                }),
            });
            if (response.ok) {
                setIsSubmitted(true);
                // Trigger confetti celebration!
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                });
                // Fire more confetti for extra celebration
                setTimeout(() => {
                    confetti({
                        particleCount: 50,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                    });
                }, 200);
                setTimeout(() => {
                    confetti({
                        particleCount: 50,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                    });
                }, 400);
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentPhaseData = estimatorPhases[currentPhase];
    const PhaseIcon = currentPhaseData.icon;

    return (
        <section id="estimator" className="py-24 relative overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-blue-300 text-sm font-medium">10-Phase Project Estimator</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Build Your{" "}
                    <span className="text-blue-400">
                        MVP Estimate
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8"
                >
                    See exactly what you&apos;ll save compared to traditional agencies.
                    <span className="block mt-2 text-blue-400 font-medium">
                        We deliver in 15 days what others take 90 days to build.
                    </span>
                </motion.p>

                {/* Stats Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm"
                >
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">$10K</div>
                        <div className="text-xs text-neutral-500">Starting at</div>
                    </div>
                    <div className="w-px h-8 bg-neutral-700" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">15</div>
                        <div className="text-xs text-neutral-500">Days to Launch</div>
                    </div>
                    <div className="w-px h-8 bg-neutral-700" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">85%</div>
                        <div className="text-xs text-neutral-500">Avg. Savings</div>
                    </div>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {/* Left: Phase Navigator */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Progress Bar with Labels */}
                    <div className="mb-8">
                        <div className="flex items-center gap-1 overflow-x-auto pb-4 scrollbar-hide">
                            {estimatorPhases.map((phase, index) => {
                                const PIcon = phase.icon;
                                return (
                                    <div key={phase.id} className="flex items-center group">
                                        <button
                                            onClick={() => setCurrentPhase(index)}
                                            className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${isPhaseComplete(phase.id)
                                                ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                                                : currentPhase === index
                                                    ? "bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2 ring-offset-neutral-950"
                                                    : "bg-neutral-800/80 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300"
                                                }`}
                                        >
                                            {isPhaseComplete(phase.id) ? (
                                                <Check className="w-5 h-5" />
                                            ) : (
                                                <PIcon className="w-5 h-5" />
                                            )}

                                            {/* Tooltip */}
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                                {phase.title}
                                            </span>
                                        </button>
                                        {index < estimatorPhases.length - 1 && (
                                            <div
                                                className={`w-3 md:w-6 h-0.5 mx-0.5 rounded-full transition-all ${isPhaseComplete(phase.id)
                                                    ? "bg-gradient-to-r from-blue-500 to-blue-400"
                                                    : "bg-neutral-800"
                                                    }`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Current Phase Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPhase}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-3xl border border-neutral-800/80 p-6 md:p-8 overflow-hidden"
                        >
                            {/* Subtle gradient glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                            {/* Phase Header */}
                            <div className="flex items-start gap-4 mb-8 relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                                    <PhaseIcon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-medium">
                                            Phase {currentPhaseData.phase}/10
                                        </span>
                                        {currentPhaseData.multiSelect && (
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-medium">
                                                Multi-select
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{currentPhaseData.title}</h3>
                                    <p className="text-neutral-400 mt-2">{currentPhaseData.description}</p>
                                </div>
                            </div>

                            {/* Options Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {currentPhaseData.options.map((option) => {
                                    const isSelected = isOptionSelected(currentPhaseData.id, option.id);
                                    const savingsPercent = option.competitorCost > 0
                                        ? Math.round(((option.competitorCost - option.ourCost) / option.competitorCost) * 100)
                                        : 0;

                                    return (
                                        <motion.button
                                            key={option.id}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleOptionToggle(currentPhaseData.id, option.id, option)}
                                            className={`relative p-5 rounded-2xl border-2 text-left transition-all group ${isSelected
                                                ? "border-blue-500 bg-gradient-to-br from-blue-500/15 to-blue-600/10 shadow-lg shadow-blue-500/10"
                                                : "border-neutral-700/50 bg-neutral-800/30 hover:border-neutral-600 hover:bg-neutral-800/50"
                                                }`}
                                        >
                                            {/* Savings badge */}
                                            {savingsPercent > 0 && (
                                                <span className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold ${isSelected
                                                    ? "bg-green-500 text-white"
                                                    : "bg-green-500/20 text-green-400 border border-green-500/30"
                                                    }`}>
                                                    Save {savingsPercent}%
                                                </span>
                                            )}

                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex-1">
                                                    <div className={`font-semibold text-base md:text-lg transition-colors ${isSelected ? "text-white" : "text-neutral-200 group-hover:text-white"
                                                        }`}>{option.label}</div>
                                                </div>
                                                {currentPhaseData.multiSelect ? (
                                                    <div
                                                        className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center transition-all ${isSelected
                                                            ? "bg-blue-500"
                                                            : "border-2 border-neutral-600 group-hover:border-neutral-500"
                                                            }`}
                                                    >
                                                        {isSelected && <Check className="w-4 h-4 text-white" />}
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isSelected
                                                            ? "bg-blue-500 ring-2 ring-blue-400/50"
                                                            : "border-2 border-neutral-600 group-hover:border-neutral-500"
                                                            }`}
                                                    >
                                                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-3 mt-3">
                                                <span className={`px-2.5 py-1 rounded-lg text-sm font-medium ${isSelected
                                                    ? "bg-blue-500/30 text-blue-300"
                                                    : "bg-blue-500/10 text-blue-400"
                                                    }`}>
                                                    ${option.ourCost.toLocaleString()}
                                                </span>
                                                <span className="text-neutral-500 line-through text-sm">
                                                    ${option.competitorCost.toLocaleString()}
                                                </span>
                                                <span className="text-neutral-500 text-sm ml-auto flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {option.days}d
                                                </span>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-8">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentPhase === 0}
                                    className="px-4 py-2 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    ← Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    className={`px-6 py-2 text-white rounded-lg transition-all flex items-center gap-2 ${currentPhase === estimatorPhases.length - 1
                                        ? "bg-green-600 hover:bg-green-500"
                                        : "bg-blue-600 hover:bg-blue-500"
                                        }`}
                                >
                                    {currentPhase === estimatorPhases.length - 1 ? (
                                        <>
                                            Get Roadmap <Send className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            Next <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: Results Panel */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-6">
                        {/* Live Comparison Card */}
                        <div className="relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-3xl border border-neutral-800/80 p-6 overflow-hidden">

                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-blue-400" />
                                <h3 className="text-lg font-semibold text-white">Live Comparison</h3>
                            </div>

                            {/* Our Cost - Highlighted */}
                            <motion.div
                                layout
                                className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-500/30 relative overflow-hidden"
                            >
                                <div className="absolute top-2 right-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 text-xs text-blue-300 font-medium">
                                        <Clock className="w-3 h-3" /> 15 Days
                                    </span>
                                </div>
                                <div className="text-sm text-blue-400 mb-2 font-medium">Zylex Engineering</div>
                                <motion.div
                                    key={totals.ourCost}
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    className="text-4xl font-bold text-white"
                                >
                                    ${totals.ourCost.toLocaleString()}
                                </motion.div>
                            </motion.div>

                            {/* Competitor Cost */}
                            <div className="mb-4 p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-500">Traditional Agency</span>
                                    <span className="text-xs text-neutral-600 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {totals.competitorDays}+ days
                                    </span>
                                </div>
                                <div className="text-2xl font-bold text-neutral-500 line-through">
                                    ${totals.competitorCost.toLocaleString()}
                                </div>
                            </div>

                            {/* Savings - Animated & Highlighted */}
                            <AnimatePresence>
                                {totals.savings > 0 && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="relative p-5 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 overflow-hidden"
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 pointer-events-none opacity-50">
                                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-400/20 rounded-full blur-2xl" />
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                            <Trophy className="w-5 h-5 text-green-400" />
                                            <span className="text-sm text-green-400 font-medium">Total Savings</span>
                                        </div>
                                        <motion.div
                                            key={totals.savings}
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            className="text-3xl font-bold text-green-400"
                                        >
                                            ${totals.savings.toLocaleString()}
                                            <span className="text-xl ml-2 text-green-500">({totals.savingsPercent}%)</span>
                                        </motion.div>

                                        {/* Achievement badge */}
                                        {Number(totals.savingsPercent) >= 80 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30"
                                            >
                                                <span className="text-yellow-400 text-xs font-medium">🏆 Massive Savings!</span>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Progress with milestone indicators */}
                            <div className="mt-6 pt-5 border-t border-neutral-800">
                                <div className="flex justify-between text-sm mb-3">
                                    <span className="text-neutral-400 flex items-center gap-2">
                                        Progress
                                        {completedPhases === 10 && (
                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-500/20 text-xs text-blue-400">Complete!</span>
                                        )}
                                    </span>
                                    <span className="text-white font-medium">{completedPhases}/10</span>
                                </div>
                                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 relative"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(completedPhases / 10) * 100}%` }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                    </motion.div>
                                </div>

                                {/* Milestone dots */}
                                <div className="flex justify-between mt-2 px-0.5">
                                    {[2, 5, 8, 10].map((milestone) => (
                                        <div key={milestone} className="flex flex-col items-center">
                                            <div className={`w-1.5 h-1.5 rounded-full ${completedPhases >= milestone ? "bg-blue-400" : "bg-neutral-700"}`} />
                                            <span className={`text-xs mt-1 ${completedPhases >= milestone ? "text-blue-400" : "text-neutral-600"}`}>
                                                {milestone === 10 ? "✓" : milestone}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Email Gate - Premium CTA */}
                        {showEmailGate && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-3xl border border-neutral-800/80 p-6 overflow-hidden"
                            >
                                {/* Premium border glow */}
                                <div className="absolute inset-0 rounded-3xl border border-blue-500/20 pointer-events-none" />
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                                {!isSubmitted ? (
                                    <>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                                <Sparkles className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">Get Your Roadmap</h3>
                                                <p className="text-xs text-neutral-400">
                                                    {allPhasesComplete ? "Estimate ready!" : `${10 - completedPhases} phases left`}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-neutral-400 mb-5">
                                            {allPhasesComplete
                                                ? "Your estimate is complete! Enter your email to receive a detailed Technical Roadmap with timeline & milestones."
                                                : "Complete your estimate to unlock your personalized Technical Roadmap."}
                                        </p>

                                        <div className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    ref={emailInputRef}
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="work-email@company.com"
                                                    className={`w-full px-4 py-3.5 bg-neutral-800/80 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-all ${emailHighlight
                                                        ? "border-blue-500 ring-4 ring-blue-500/30 animate-pulse"
                                                        : "border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                                        }`}
                                                />
                                                {isValidEmail(email) && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                                    >
                                                        <Check className="w-5 h-5 text-green-400" />
                                                    </motion.div>
                                                )}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleSubmit}
                                                disabled={!isValidEmail(email) || isSubmitting}
                                                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                            >
                                                {isSubmitting ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send Me The Roadmap
                                                    </>
                                                )}
                                            </motion.button>

                                            <p className="text-xs text-neutral-500 text-center">
                                                📧 We&apos;ll send you a detailed PDF with your project scope
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Check your inbox!</h3>
                                        <p className="text-sm text-neutral-400">
                                            Your Technical Roadmap is on its way.
                                        </p>
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

// ============================================
// SECTION 3 - AGENCY ECOSYSTEM
// ============================================

function Section3() {
    return (
        <section className="py-24 px-4 md:px-6">
            <DitheringCard
                badge="White-Label Partnership"
                title={
                    <>
                        The Agency Owner
                    </>
                }
                description="I have clients needing dev work. I need a white-label partner. Let Zylex become your silent engineering arm."
                ctaText="Partner With Us"
                ctaHref="#estimator"
            />
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
