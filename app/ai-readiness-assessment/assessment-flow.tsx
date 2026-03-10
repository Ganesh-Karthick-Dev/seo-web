"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assessmentData } from "./data";
import { ArrowLeft, CheckCircle2, X, ChevronRight } from "lucide-react";
import HighlightedText from "@/components/ui/highlighted-text";

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
                className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-neutral-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
                {/* Glow Effects */}
                <div
                    className={`absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-1000 ${isCompleted ? "bg-white/10" : [
                        "bg-blue-500/10", "bg-emerald-500/10", "bg-indigo-500/10", "bg-rose-500/10", "bg-amber-500/10"
                    ][currentQ?.sIdx || 0]
                        }`}
                />
                <div
                    className={`absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-1000 ${isCompleted ? "bg-white/5" : [
                        "bg-blue-500/5", "bg-emerald-500/5", "bg-indigo-500/5", "bg-rose-500/5", "bg-amber-500/5"
                    ][currentQ?.sIdx || 0]
                        }`}
                />

                {/* Header Ribbon */}
                <div
                    className={`shrink-0 px-6 py-4 flex items-center justify-between border-b transition-colors duration-1000 ease-in-out ${isCompleted ? "bg-white text-black border-neutral-300" : [
                        "bg-sky-100 text-sky-950 border-sky-300",     // Engineering Excellence
                        "bg-emerald-100 text-emerald-950 border-emerald-300",  // Data Trust
                        "bg-indigo-100 text-indigo-950 border-indigo-300",   // Operational Resilience
                        "bg-rose-100 text-rose-950 border-rose-300",     // Compliance & Risk
                        "bg-amber-100 text-amber-950 border-amber-300"     // AI Enablement
                    ][currentQ?.sIdx || 0]
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-1000 shadow-sm ${isCompleted ? "bg-black text-white" : [
                                "bg-sky-800 text-sky-50",
                                "bg-emerald-800 text-emerald-50",
                                "bg-indigo-800 text-indigo-50",
                                "bg-rose-800 text-rose-50",
                                "bg-amber-800 text-amber-50"
                            ][currentQ?.sIdx || 0]
                                }`}
                        >
                            Z
                        </div>
                        <span className="font-semibold text-current">AI Readiness Assessment</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-black/5 text-current hover:opacity-75 transition-colors cursor-pointer"
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
                                                <div className="text-4xl md:text-6xl font-black text-white mb-1">
                                                    {results.overallPercentage}%
                                                </div>
                                                <div className="text-white font-bold tracking-widest text-xs md:text-sm mb-2">
                                                    {results.totalScore} / 75 POINTS
                                                </div>
                                                <div className="text-sm md:text-base text-neutral-300 font-medium">Overall Readiness Score</div>
                                            </div>

                                            <div className="border border-white/10 bg-black/40 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
                                                <div className="text-white font-bold tracking-widest uppercase mb-1 text-xs md:text-sm">
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
                                                        <span className="font-bold text-white text-sm">{section.percentage}%</span>
                                                    </div>
                                                    <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${section.percentage}%` }}
                                                            transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                                                            className="h-full bg-white rounded-full"
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
                        <div className="flex-1 flex flex-col md:flex-row w-full max-w-5xl mx-auto my-auto justify-center md:items-stretch gap-8 lg:gap-12">
                            {/* Vertical Stepper Progress */}
                            <div className="md:w-64 shrink-0 flex flex-col md:border-r border-white/10 md:pr-8 md:py-4 mb-6 md:mb-0">
                                <div className="flex flex-row md:flex-col justify-between items-center md:items-start mb-6 md:mb-10 text-xs md:text-sm font-bold tracking-widest uppercase gap-2 md:gap-4 w-full">
                                    <span className="text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                        <span className="relative flex h-2 w-2 shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                        </span>
                                        Question {currentQIndex + 1} of {flatQuestions.length}
                                    </span>
                                    <span className="text-neutral-500 font-extrabold text-[10px] md:text-xs">
                                        {Math.round((currentQIndex / flatQuestions.length) * 100)}% Completed
                                    </span>
                                </div>
                                {/* Show 5 section bars vertically */}
                                <div className="flex flex-row md:flex-col gap-2 md:gap-6 flex-1 md:flex-none">
                                    {assessmentData.map((section, idx) => {
                                        const sectionStartIdx = flatQuestions.findIndex((q) => q.sIdx === idx);
                                        const questionsInSection = section.questions.length;

                                        let fillPercentage = 0;
                                        if (idx < currentQ.sIdx) {
                                            fillPercentage = 100;
                                        } else if (idx === currentQ.sIdx) {
                                            const currentQInSectionIdx = currentQIndex - sectionStartIdx;
                                            // Make progress dynamic per user click within the section
                                            fillPercentage = Math.round(((currentQInSectionIdx + 1) / questionsInSection) * 100);
                                        }

                                        return (
                                            <div key={idx} className="flex flex-col gap-2 flex-1 md:flex-none group">
                                                <span className={`hidden md:block text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors ${idx === currentQ.sIdx ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : idx < currentQ.sIdx ? "text-white" : "text-neutral-600"}`}>
                                                    {section.title.split(":")[1].trim()}
                                                </span>
                                                <div className="h-1.5 md:h-2 w-full rounded-full relative overflow-hidden bg-white/5">
                                                    <motion.div
                                                        className="absolute inset-y-0 left-0 bg-white"
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: `${fillPercentage}%` }}
                                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                                    />
                                                    {idx <= currentQ.sIdx && fillPercentage > 0 && (
                                                        <div className="absolute inset-0 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Step Question Content */}
                            <div className="w-full flex-col flex flex-1 overflow-hidden">
                                {/* Title only animates on section change */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentQ.sIdx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="mb-6 md:mb-8 text-center md:text-left"
                                    >
                                        <HighlightedText className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" delay={0.1} from="left">
                                            {currentQ.sectionTitle.split(":")[1].trim()}
                                        </HighlightedText>
                                    </motion.div>
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentQ.id}
                                        initial={{ opacity: 0, x: 30, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full"
                                    >
                                        <div className="bg-white/[0.02] p-6 md:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl w-full relative overflow-hidden backdrop-blur-md">
                                            {/* Subtle inner top glow */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-white/20 blur-[1px]" />

                                            <h3 className="text-base md:text-lg lg:text-xl font-medium mb-8 flex gap-4 text-neutral-100 leading-relaxed tracking-wide">
                                                <span>
                                                    {currentQ.text}
                                                </span>
                                            </h3>

                                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
                                                {currentQ.options.map((opt, idx) => {
                                                    const isChecked = answers[currentQ.id] === opt.score;
                                                    return (
                                                        <motion.button
                                                            key={opt.score}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.4, delay: idx * 0.05 + 0.1, ease: "easeOut" }}
                                                            whileHover={{ scale: isChecked ? 1.02 : 1.04, y: isChecked ? 0 : -2 }}
                                                            whileTap={{ scale: 0.96 }}
                                                            onClick={() => handleSelect(currentQ.id, opt.score)}
                                                            className={`group relative flex sm:flex-col items-center sm:justify-center p-4 sm:p-5 outline-none rounded-2xl border transition-all duration-300 text-left sm:text-center gap-3 sm:gap-4 overflow-hidden shadow-lg ${isChecked
                                                                ? "bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] z-10"
                                                                : "bg-black/60 border-white/10 hover:border-white/60 hover:bg-neutral-900/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
                                                                }`}
                                                        >
                                                            {/* Subtle hover background gradient */}
                                                            {!isChecked && (
                                                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
                                                            )}

                                                            <AnimatePresence>
                                                                {isChecked && (
                                                                    <motion.div
                                                                        initial={{ scale: 0, rotate: -180 }}
                                                                        animate={{ scale: 1, rotate: 0 }}
                                                                        exit={{ scale: 0, rotate: 180 }}
                                                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                                        className="absolute right-3 sm:top-3 sm:right-3 bg-white rounded-full text-black shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20"
                                                                    >
                                                                        <CheckCircle2 className="w-5 h-5" />
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>

                                                            <div className={`text-2xl sm:text-3xl lg:text-4xl font-black transition-colors duration-300 relative z-10 ${isChecked ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" : "text-neutral-600 group-hover:text-white"}`}>
                                                                {opt.score}
                                                            </div>
                                                            <div className={`text-xs md:text-sm tracking-wide leading-relaxed flex-1 transition-colors duration-300 relative z-10 ${isChecked ? "text-white font-bold" : "text-neutral-400 group-hover:text-neutral-100"}`}>
                                                                {opt.label}
                                                            </div>
                                                        </motion.button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
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
                                    ? "bg-white text-black cursor-pointer hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] hover:bg-neutral-200"
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
