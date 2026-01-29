"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react"

const testimonials = [
    {
        quote: "Zylex delivered our MVP in just 12 days. What impressed us most was their engineering-first approach — the codebase is clean, scalable, and production-ready.",
        author: "Priya Sharma",
        role: "Founder & CEO",
        company: "FinStack",
    },
    {
        quote: "We struggled with three agencies before finding Zylex. They understood our complex integration needs and shipped a solution that just works — no drama, no delays.",
        author: "James Mitchell",
        role: "CTO",
        company: "LogiCore Systems",
    },
    {
        quote: "The team operates like an extension of our own. Their structured sprint model brought clarity to our chaotic roadmap and accelerated our go-to-market by 4 months.",
        author: "Ankit Reddy",
        role: "VP of Product",
        company: "MedFirst Health",
    },
    {
        quote: "From cloud architecture to CI/CD pipelines, Zylex transformed our infrastructure. We went from 2-hour deployments to 8-minute automated releases.",
        author: "Sarah Williams",
        role: "Engineering Manager",
        company: "RetailEdge",
    },
    {
        quote: "What sets Zylex apart is their obsession with quality. Every line of code, every architectural decision — it's built to last, not just to launch.",
        author: "Vikram Patel",
        role: "Head of Technology",
        company: "GreenPath Energy",
    },
]

export function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse position for magnetic effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Transform for parallax on the large number
    const numberX = useTransform(x, [-200, 200], [-20, 20])
    const numberY = useTransform(y, [-200, 200], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            mouseX.set(e.clientX - centerX)
            mouseY.set(e.clientY - centerY)
        }
    }

    const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    useEffect(() => {
        const timer = setInterval(goNext, 12000)
        return () => clearInterval(timer)
    }, [])

    const current = testimonials[activeIndex]

    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="mb-16 md:mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        What Our Clients Say <br />
                        <span className="text-neutral-500">Stories of partnership & impact</span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
                        Real feedback from founders, CTOs, and engineering leaders who trusted us to build their vision.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div ref={containerRef} className="relative w-full max-w-5xl mx-auto" onMouseMove={handleMouseMove}>
                    {/* Oversized index number - positioned to bleed off left edge */}
                    <motion.div
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-bold text-neutral-500/[0.2] select-none pointer-events-none leading-none tracking-tighter"
                        style={{ x: numberX, y: numberY }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                {String(activeIndex + 1).padStart(2, "0")}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Main content - asymmetric layout */}
                    <div className="relative flex flex-col md:flex-row">
                        {/* Left column - vertical text */}
                        <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-neutral-800">
                            <motion.span
                                className="text-xs font-mono text-neutral-400 tracking-widest uppercase"
                                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Testimonials
                            </motion.span>

                            {/* Vertical progress line */}
                            <div className="relative h-32 w-px bg-neutral-800 mt-8">
                                <motion.div
                                    className="absolute top-0 left-0 w-full bg-white origin-top"
                                    animate={{
                                        height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </div>
                        </div>

                        {/* Center - main content */}
                        <div className="flex-1 md:pl-16 py-8 md:py-12">
                            {/* Company badge */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mb-8"
                                >
                                    <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 border border-neutral-700 rounded-full px-3 py-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {current.company}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Quote with character reveal */}
                            <div className="relative mb-12 min-h-[100px] md:min-h-[140px]">
                                <AnimatePresence mode="wait">
                                    <motion.blockquote
                                        key={activeIndex}
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.15] tracking-tight"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {current.quote.split(" ").map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-block mr-[0.3em]"
                                                variants={{
                                                    hidden: { opacity: 0, y: 20, rotateX: 90 },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        rotateX: 0,
                                                        transition: {
                                                            duration: 0.5,
                                                            delay: i * 0.05,
                                                            ease: [0.22, 1, 0.36, 1],
                                                        },
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10,
                                                        transition: { duration: 0.2, delay: i * 0.02 },
                                                    },
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.blockquote>
                                </AnimatePresence>
                            </div>

                            {/* Author row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="flex items-center gap-4"
                                    >
                                        {/* Animated line before name */}
                                        <motion.div
                                            className="w-8 h-px bg-white"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            style={{ originX: 0 }}
                                        />
                                        <div>
                                            <p className="text-base font-medium text-white">{current.author}</p>
                                            <p className="text-sm text-neutral-400">{current.role}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="flex items-center gap-4">
                                    <motion.button
                                        onClick={goPrev}
                                        className="group relative w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center overflow-hidden hover:border-neutral-500 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "0%" }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="relative z-10 text-white group-hover:text-black transition-colors"
                                        >
                                            <path
                                                d="M10 12L6 8L10 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.button>

                                    <motion.button
                                        onClick={goNext}
                                        className="group relative w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center overflow-hidden hover:border-neutral-500 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white"
                                            initial={{ x: "100%" }}
                                            whileHover={{ x: "0%" }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="relative z-10 text-white group-hover:text-black transition-colors"
                                        >
                                            <path
                                                d="M6 4L10 8L6 12"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom ticker - subtle repeating company names */}
                    <div className="absolute -bottom-16 left-0 right-0 overflow-hidden opacity-[0.08] pointer-events-none">
                        <motion.div
                            className="flex whitespace-nowrap text-4xl md:text-6xl font-bold tracking-tight text-white"
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <span key={i} className="mx-8">
                                    {testimonials.map((t) => t.company).join(" • ")} •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
