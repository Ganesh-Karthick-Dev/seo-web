"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assessmentData } from "./data";
import { ArrowLeft, CheckCircle2, X, ChevronRight } from "lucide-react";

export default function AssessmentFlow({ onClose }: { onClose: () => void }) {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isCompleted, setIsCompleted] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Flatten questions so we navigate one-by-one (15 total steps)
    const flatQuestions = assessmentData.flatMap((section, sIdx) =>
        section.questions.map((q) => ({
            ...q,
            sectionTitle: section.title,
            sIdx,
        }))
    );

    // Safely fallback to the last question if index somehow out of bounds
    const currentQ = flatQuestions[Math.min(currentQIndex, flatQuestions.length - 1)];
    const isAnswered = currentQ ? answers[currentQ.id] !== undefined : false;

    const handleSelect = (questionId: string, score: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: score }));

        // Auto-advance gracefully after a short delay so user sees the checkmark
        setTimeout(() => {
            if (currentQIndex < flatQuestions.length - 1) {
                setCurrentQIndex((prev) => prev + 1);
            } else {
                setIsCompleted(true);
            }
        }, 500);
    };

    const handleNext = () => {
        if (currentQIndex < flatQuestions.length - 1) {
            setCurrentQIndex((prev) => prev + 1);
        } else {
            setIsCompleted(true);
        }
    };

    const handleBack = () => {
        if (currentQIndex > 0) {
            setCurrentQIndex((prev) => prev - 1);
        }
    };

    const calculateResults = () => {
        let totalScore = 0;
        const sectionScores = assessmentData.map((section) => {
            const sectionTotal = section.questions.reduce(
                (acc, q) => acc + (answers[q.id] || 0),
                0
            );
            totalScore += sectionTotal;
            return {
                title: section.title,
                percentage: Math.round((sectionTotal / 15) * 100),
            };
        });

        const overallPercentage = Math.round((totalScore / 75) * 100);

        let level = "Level 1";
        let label = "Fragile Foundation";
        if (overallPercentage >= 86) {
            level = "Level 5";
            label = "AI-Ready";
        } else if (overallPercentage >= 71) {
            level = "Level 4";
            label = "Scalable";
        } else if (overallPercentage >= 56) {
            level = "Level 3";
            label = "Operational";
        } else if (overallPercentage >= 36) {
            level = "Level 2";
            label = "Developing";
        }

        return { sectionScores, totalScore, overallPercentage, level, label };
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 font-sans">
            {/* Backdrop overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-neutral-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

                {/* Header Ribbon */}
                <div className="shrink-0 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                            Z
                        </div>
                        <span className="font-semibold text-white">AI Readiness Assessment</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 lg:p-8 flex flex-col">
                    {isCompleted ? (
                        <div className="animate-fade-in-up my-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">Your Assessment Results</h2>
                                <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
                                    Based on your responses, here is a detailed breakdown of your organization's data readiness.
                                </p>
                            </div>

                            {(() => {
                                const results = calculateResults();
                                return (
                                    <>
                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            <div className="border border-white/10 bg-black/40 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
                                                <div className="text-4xl md:text-6xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                                                    {results.overallPercentage}%
                                                </div>
                                                <div className="text-cyan-400 font-bold tracking-widest text-xs md:text-sm mb-2">
                                                    {results.totalScore} / 75 POINTS
                                                </div>
                                                <div className="text-sm md:text-base text-neutral-300 font-medium">Overall Readiness Score</div>
                                            </div>

                                            <div className="border border-white/10 bg-black/40 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
                                                <div className="text-cyan-400 font-bold tracking-widest uppercase mb-1 text-xs md:text-sm">
                                                    {results.level}
                                                </div>
                                                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                    {results.label}
                                                </div>
                                                <p className="text-neutral-400 text-xs md:text-sm">
                                                    {results.level === "Level 5" && "Excellent data foundation ready to scale AI."}
                                                    {results.level === "Level 4" && "Strong foundation with room for targeted improvements."}
                                                    {results.level === "Level 3" && "Processes are operational but may require modernization."}
                                                    {results.level === "Level 2" && "Developing infrastructure with significant manual efforts."}
                                                    {results.level === "Level 1" && "Urgent need for strategic data architecture upgrade."}
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Pillar Breakdown</h3>
                                        <div className="space-y-3 mb-2">
                                            {results.sectionScores.map((section, idx) => (
                                                <div key={idx} className="border border-white/5 bg-white/5 rounded-xl p-3 md:p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h4 className="font-medium text-sm md:text-base text-white">{section.title.split(": ")[1]}</h4>
                                                        <span className="font-bold text-cyan-400 text-sm">{section.percentage}%</span>
                                                    </div>
                                                    <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${section.percentage}%` }}
                                                            transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col w-full max-w-3xl mx-auto my-auto justify-center">
                            {/* Stepper Progress */}
                            <div className="mb-6 md:mb-8">
                                <div className="flex justify-between items-center mb-2 text-xs font-medium">
                                    <span className="text-cyan-400 uppercase tracking-widest font-bold">
                                        Question {currentQIndex + 1} of {flatQuestions.length}
                                    </span>
                                    <span className="text-neutral-500">
                                        {Math.round((currentQIndex / flatQuestions.length) * 100)}% Completed
                                    </span>
                                </div>
                                {/* Show 5 section bars */}
                                <div className="flex gap-1 md:gap-2">
                                    {assessmentData.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1 flex-1 rounded-full transition-all duration-500 ${idx <= currentQ.sIdx ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" : "bg-white/10"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Step Question Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentQ.id}
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full flex-col flex"
                                >
                                    <div className="mb-4 md:mb-6 border-b border-white/10 pb-3 md:pb-4 text-center md:text-left">
                                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                                            {currentQ.sectionTitle.split(":")[1].trim()}
                                        </h2>
                                    </div>

                                    <div className="bg-white/[0.02] p-4 md:p-6 lg:p-8 rounded-2xl border border-white/5 shadow-lg w-full">
                                        <h3 className="text-base md:text-lg lg:text-xl font-medium mb-6 flex gap-3 text-neutral-100 leading-snug">
                                            <span className="text-cyan-500 font-bold shrink-0">Q{currentQ.id.replace('q', '')}.</span>
                                            {currentQ.text}
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
                                            {currentQ.options.map((opt) => {
                                                const isChecked = answers[currentQ.id] === opt.score;
                                                return (
                                                    <button
                                                        key={opt.score}
                                                        onClick={() => handleSelect(currentQ.id, opt.score)}
                                                        className={`relative flex sm:flex-col items-center sm:justify-center p-3 sm:p-4 rounded-xl border transition-all duration-300 text-left sm:text-center gap-3 sm:gap-2 ${isChecked
                                                            ? "bg-cyan-500/15 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-[1.02] sm:scale-[1.03]"
                                                            : "bg-black/40 border-white/5 hover:border-cyan-500/40 hover:bg-white/5 cursor-pointer hover:translate-y-0 sm:hover:-translate-y-1"
                                                            }`}
                                                    >
                                                        {isChecked && (
                                                            <motion.div
                                                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                                className="absolute right-3 sm:top-2 sm:right-2"
                                                            >
                                                                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                                            </motion.div>
                                                        )}
                                                        <div className={`text-xl sm:text-2xl lg:text-3xl font-black ${isChecked ? "text-cyan-400" : "text-neutral-600"} shrink-0 w-6 sm:w-auto text-center`}>
                                                            {opt.score}
                                                        </div>
                                                        <div className={`text-xs md:text-sm tracking-wide leading-tight flex-1 ${isChecked ? "text-cyan-400 font-medium" : "text-neutral-400"}`}>
                                                            {opt.label}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="shrink-0 p-6 border-t border-white/10 bg-black/50 flex items-center justify-between">
                    {!isCompleted ? (
                        <>
                            <button
                                onClick={handleBack}
                                disabled={currentQIndex === 0}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${currentQIndex === 0 ? "opacity-0 pointer-events-none" : "hover:bg-white/10 text-neutral-300 cursor-pointer"
                                    }`}
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={!isAnswered}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${isAnswered
                                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]"
                                    : "bg-white/5 text-neutral-500 cursor-not-allowed border border-white/5"
                                    }`}
                            >
                                {currentQIndex === flatQuestions.length - 1 ? "Submit Assessment" : "Next"}
                                {currentQIndex !== flatQuestions.length - 1 && <ChevronRight className="w-4 h-4" />}
                            </button>
                        </>
                    ) : (
                        <div className="w-full flex justify-end">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all bg-white text-black hover:bg-neutral-200 hover:scale-[1.02] cursor-pointer"
                            >
                                Close Results
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
