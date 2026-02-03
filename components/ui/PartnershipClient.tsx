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
            if (response.ok) setIsSubmitted(true);
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentPhaseData = estimatorPhases[currentPhase];
    const PhaseIcon = currentPhaseData.icon;

    return (
        <section id="estimator" className="py-24 relative">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-sm font-medium">10-Phase Project Estimator</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Build Your <span className="text-blue-400">MVP Estimate</span>
                </h2>

                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                    See exactly what you&apos;ll save compared to traditional agencies. We deliver in 15 days what others take 90 days to build.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Left: Phase Navigator */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Progress Bar */}
                    <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
                        {estimatorPhases.map((phase, index) => (
                            <div key={phase.id} className="flex items-center">
                                <button
                                    onClick={() => setCurrentPhase(index)}
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all flex-shrink-0 ${isPhaseComplete(phase.id)
                                        ? "bg-blue-500 text-white"
                                        : currentPhase === index
                                            ? "bg-blue-600 text-white ring-2 ring-blue-400"
                                            : "bg-neutral-800 text-neutral-500 hover:bg-neutral-700"
                                        }`}
                                >
                                    {isPhaseComplete(phase.id) ? <Check className="w-4 h-4" /> : index + 1}
                                </button>
                                {index < estimatorPhases.length - 1 && (
                                    <div
                                        className={`w-4 md:w-8 h-1 mx-0.5 rounded-full transition-all ${isPhaseComplete(phase.id) ? "bg-blue-500" : "bg-neutral-800"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Current Phase Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPhase}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6 md:p-8"
                        >
                            {/* Phase Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <PhaseIcon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-blue-400 font-medium mb-1">Phase {currentPhaseData.phase} of 10</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{currentPhaseData.title}</h3>
                                    <p className="text-neutral-400 mt-1">{currentPhaseData.description}</p>
                                </div>
                            </div>

                            {/* Options Grid */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                {currentPhaseData.options.map((option) => {
                                    const isSelected = isOptionSelected(currentPhaseData.id, option.id);
                                    return (
                                        <motion.button
                                            key={option.id}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            onClick={() => handleOptionToggle(currentPhaseData.id, option.id, option)}
                                            className={`p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                                ? "border-blue-500 bg-blue-500/10"
                                                : "border-neutral-700 bg-neutral-800/50 hover:border-neutral-600"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="font-medium text-white text-sm md:text-base">{option.label}</div>
                                                {currentPhaseData.multiSelect && (
                                                    <div
                                                        className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center ${isSelected ? "bg-blue-500" : "border border-neutral-600"
                                                            }`}
                                                    >
                                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">
                                                    ${option.ourCost.toLocaleString()}
                                                </span>
                                                <span className="text-neutral-500 line-through">
                                                    ${option.competitorCost.toLocaleString()}
                                                </span>
                                                <span className="text-neutral-500">+{option.days}d</span>
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
                                    disabled={currentPhase === estimatorPhases.length - 1}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                                >
                                    Next <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: Results Panel */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-6">
                        {/* Live Comparison */}
                        <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Live Comparison</h3>

                            {/* Our Cost */}
                            <div className="mb-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <div className="text-sm text-blue-400 mb-1">Zylex (15 Days)</div>
                                <div className="text-3xl font-bold text-white">
                                    ${totals.ourCost.toLocaleString()}
                                </div>
                            </div>

                            {/* Competitor Cost */}
                            <div className="mb-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                                <div className="text-sm text-neutral-400 mb-1">Traditional Agency ({totals.competitorDays}+ days)</div>
                                <div className="text-2xl font-bold text-neutral-500 line-through">
                                    ${totals.competitorCost.toLocaleString()}
                                </div>
                            </div>

                            {/* Savings */}
                            {totals.savings > 0 && (
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                                >
                                    <div className="text-sm text-green-400 mb-1">You Save</div>
                                    <div className="text-2xl font-bold text-green-400">
                                        ${totals.savings.toLocaleString()}
                                        <span className="text-lg ml-2">({totals.savingsPercent}%)</span>
                                    </div>
                                </motion.div>
                            )}

                            {/* Progress */}
                            <div className="mt-6 pt-4 border-t border-neutral-800">
                                <div className="flex justify-between text-sm text-neutral-400 mb-2">
                                    <span>Progress</span>
                                    <span>{completedPhases}/10 phases</span>
                                </div>
                                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(completedPhases / 10) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email Gate */}
                        {showEmailGate && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6"
                            >
                                {!isSubmitted ? (
                                    <>
                                        <h3 className="text-lg font-semibold text-white mb-2">🎉 Get Your Full Roadmap</h3>
                                        <p className="text-sm text-neutral-400 mb-4">
                                            {allPhasesComplete
                                                ? "Your estimate is ready! Enter your email to receive the detailed breakdown."
                                                : "Complete your estimate and receive a detailed Technical Roadmap."}
                                        </p>

                                        <div className="space-y-4">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="work-email@company.com"
                                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-all"
                                            />

                                            <button
                                                onClick={handleSubmit}
                                                disabled={!isValidEmail(email) || isSubmitting}
                                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send Me The Roadmap
                                                    </>
                                                )}
                                            </button>
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
