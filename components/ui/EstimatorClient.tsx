"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertTriangle, Send, ArrowRight, Sparkles } from "lucide-react";

// Question configuration based on BRD
const questions = [
    {
        id: "platform",
        title: "Target Platform",
        description: "What type of application are you building?",
        options: [
            {
                label: "Web Application",
                sublabel: "React/Next.js",
                days: 5,
                cost: 5000,
                icon: "🌐"
            },
            {
                label: "Mobile App",
                sublabel: "iOS/Android",
                days: 15,
                cost: 15000,
                icon: "📱"
            },
        ],
    },
    {
        id: "ai",
        title: "Does it need AI?",
        description: "Select the AI capabilities you need",
        options: [
            {
                label: "No, standard logic",
                sublabel: "Traditional application",
                days: 0,
                cost: 0,
                icon: "⚡"
            },
            {
                label: "Generative AI",
                sublabel: "OpenAI/Claude integration",
                days: 3,
                cost: 3000,
                icon: "🤖"
            },
            {
                label: "Custom AI Training",
                sublabel: "RAG & Fine-tuning",
                days: 7,
                cost: 8000,
                icon: "🧠"
            },
        ],
    },
    {
        id: "payments",
        title: "How do you get paid?",
        description: "Select your monetization model",
        options: [
            {
                label: "No payments needed",
                sublabel: "Internal tool or free app",
                days: 0,
                cost: 0,
                icon: "🆓"
            },
            {
                label: "Subscription",
                sublabel: "Stripe/LemonSqueezy",
                days: 3,
                cost: 2500,
                icon: "💳"
            },
            {
                label: "Marketplace",
                sublabel: "Split payments",
                days: 7,
                cost: 6000,
                icon: "🏪"
            },
        ],
    },
    {
        id: "design",
        title: "Do you have designs ready?",
        description: "Design readiness affects timeline",
        options: [
            {
                label: "Yes, full designs",
                sublabel: "Figma/Adobe XD files",
                days: -2,
                cost: 0,
                icon: "✅"
            },
            {
                label: "No, I need design",
                sublabel: "Full design services",
                days: 5,
                cost: 4000,
                icon: "🎨"
            },
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

export default function EstimatorClient() {
    const [selections, setSelections] = useState<Selection[]>([]);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    // Calculate totals
    const { totalDays, totalCost, isSprintReady } = useMemo(() => {
        const days = selections.reduce((sum, s) => sum + s.days, 0);
        const cost = selections.reduce((sum, s) => sum + s.cost, 0);
        return {
            totalDays: days,
            totalCost: cost,
            isSprintReady: days <= 15,
        };
    }, [selections]);

    const allQuestionsAnswered = selections.length === questions.length;

    // Email validation
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleOptionSelect = (questionId: string, optionIndex: number, option: { days: number; cost: number; label: string }) => {
        setSelections((prev) => {
            const filtered = prev.filter((s) => s.questionId !== questionId);
            return [...filtered, { questionId, optionIndex, days: option.days, cost: option.cost, label: option.label }];
        });

        // Auto-advance to next question
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

            if (response.ok) {
                setIsSubmitted(true);
            }
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
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">Project Estimator</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">15-Day</span> Feasibility Engine
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Most agencies won&apos;t tell you the price until the third meeting. We believe in transparency.
                        Enter your specs, and we&apos;ll calculate if your product fits our 15-Day High-Velocity Sprint.
                    </p>
                </motion.div>

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
                                                ? "bg-green-500 text-white"
                                                : currentStep === index
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-slate-800 text-slate-400"
                                            }`}
                                    >
                                        {getSelectedOption(q.id) >= 0 ? <Check className="w-5 h-5" /> : index + 1}
                                    </button>
                                    {index < questions.length - 1 && (
                                        <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 rounded-full transition-all ${getSelectedOption(q.id) >= 0 ? "bg-green-500" : "bg-slate-800"
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
                                className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 p-8"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {questions[currentStep].title}
                                    </h2>
                                    <p className="text-slate-400">
                                        {questions[currentStep].description}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {questions[currentStep].options.map((option, optIndex) => {
                                        const isSelected = getSelectedOption(questions[currentStep].id) === optIndex;
                                        return (
                                            <motion.button
                                                key={optIndex}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleOptionSelect(questions[currentStep].id, optIndex, option)}
                                                className={`p-6 rounded-xl border-2 text-left transition-all ${isSelected
                                                        ? "border-blue-500 bg-blue-500/10"
                                                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                                                    }`}
                                            >
                                                <div className="text-3xl mb-3">{option.icon}</div>
                                                <div className="font-semibold text-white mb-1">{option.label}</div>
                                                <div className="text-sm text-slate-400 mb-3">{option.sublabel}</div>
                                                <div className="flex items-center gap-4 text-xs">
                                                    <span className={`px-2 py-1 rounded ${option.days > 0 ? "bg-orange-500/20 text-orange-400" : option.days < 0 ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"}`}>
                                                        {option.days > 0 ? `+${option.days}` : option.days} days
                                                    </span>
                                                    <span className={`px-2 py-1 rounded ${option.cost > 0 ? "bg-purple-500/20 text-purple-400" : "bg-slate-700 text-slate-400"}`}>
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
                                        className="px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        ← Previous
                                    </button>

                                    <button
                                        onClick={() => setCurrentStep(Math.min(questions.length - 1, currentStep + 1))}
                                        disabled={currentStep === questions.length - 1}
                                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 p-6"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">Live Estimate</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-slate-800">
                                        <span className="text-slate-400">Timeline</span>
                                        <span className="text-2xl font-bold text-white">
                                            {totalDays > 0 ? `${totalDays}-${totalDays + 2}` : "0"} <span className="text-sm font-normal text-slate-400">days</span>
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center py-3 border-b border-slate-800">
                                        <span className="text-slate-400">Investment</span>
                                        <span className="text-2xl font-bold text-white">
                                            ${totalCost.toLocaleString()} <span className="text-sm font-normal text-slate-400">- ${(totalCost * 1.2).toLocaleString()}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Result State */}
                                {allQuestionsAnswered && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`mt-6 p-4 rounded-xl ${isSprintReady
                                                ? "bg-green-500/10 border border-green-500/20"
                                                : "bg-orange-500/10 border border-orange-500/20"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {isSprintReady ? (
                                                <Check className="w-6 h-6 text-green-400" />
                                            ) : (
                                                <AlertTriangle className="w-6 h-6 text-orange-400" />
                                            )}
                                            <div>
                                                <div className={`font-semibold ${isSprintReady ? "text-green-400" : "text-orange-400"}`}>
                                                    {isSprintReady ? "Sprint Ready" : "Enterprise Build"}
                                                </div>
                                                <div className="text-sm text-slate-400">
                                                    {isSprintReady
                                                        ? "Your project fits our 15-Day Sprint!"
                                                        : "This complexity requires a custom timeline."}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Email Gate */}
                            {allQuestionsAnswered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 p-6"
                                >
                                    {!isSubmitted ? (
                                        <>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                Don&apos;t lose this build slot.
                                            </h3>
                                            <p className="text-sm text-slate-400 mb-4">
                                                We only accept 4 sprints per month. Download your full Technical Scope & Roadmap to review with your team.
                                            </p>

                                            <div className="space-y-4">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="work-email@company.com"
                                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                                                />

                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={!isValidEmail(email) || isSubmitting}
                                                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
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
                                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Check className="w-8 h-8 text-green-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                Check your inbox!
                                            </h3>
                                            <p className="text-sm text-slate-400">
                                                Your Technical Roadmap is on its way. We&apos;ll be in touch shortly.
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Selected Options Summary */}
                            {selections.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-slate-900/50 rounded-xl border border-slate-800 p-4"
                                >
                                    <h4 className="text-sm font-medium text-slate-400 mb-3">Your Selections</h4>
                                    <div className="space-y-2">
                                        {selections.map((s) => (
                                            <div key={s.questionId} className="flex items-center justify-between text-sm">
                                                <span className="text-slate-500 capitalize">{s.questionId}</span>
                                                <span className="text-white">{s.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
