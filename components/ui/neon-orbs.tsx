"use client"

import { useEffect, useState } from "react"

export function NeonOrbs() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-[#050a18] transition-colors duration-500">
            {/* Top-left orb */}
            <div
                className={`absolute transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                style={{
                    top: "-40%",
                    left: "-20%",
                    width: "80vw",
                    height: "80vw",
                    maxWidth: "800px",
                    maxHeight: "800px",
                }}
            >
                <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
                    <div className="beam-container beam-spin-8">
                        <div className="beam-light" />
                    </div>
                </div>
            </div>

            {/* Bottom-center orb */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{
                    bottom: "-50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100vw",
                    height: "100vw",
                    maxWidth: "1000px",
                    maxHeight: "1000px",
                }}
            >
                <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
                    <div className="beam-container beam-spin-10-reverse">
                        <div className="beam-light" />
                    </div>
                </div>
            </div>

            {/* Top-right orb */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                style={{
                    top: "-30%",
                    right: "-25%",
                    width: "70vw",
                    height: "70vw",
                    maxWidth: "700px",
                    maxHeight: "700px",
                }}
            >
                <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
                    <div className="beam-container beam-spin-6">
                        <div className="beam-light" />
                    </div>
                </div>
            </div>

            {/* Bottom-right orb */}
            <div
                className={`absolute transition-all duration-1000 ease-out delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{
                    bottom: "-35%",
                    right: "-15%",
                    width: "75vw",
                    height: "75vw",
                    maxWidth: "750px",
                    maxHeight: "750px",
                }}
            >
                <div className="w-full h-full rounded-full relative orb-light transition-all duration-500">
                    <div className="beam-container beam-spin-7-reverse">
                        <div className="beam-light" />
                    </div>
                </div>
            </div>

            {/* Center text */}
            <div className="relative z-10 text-center text-indigo-900 dark:text-white transition-colors duration-500 px-4 max-w-5xl">
                <h1
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 ease-out ${mounted
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 translate-y-8 blur-sm"
                        }`}
                    style={{ transitionDelay: "500ms" }}
                >
                    Your Vision Deserves Better Execution
                </h1>
                <p
                    className={`text-lg md:text-xl font-light max-w-3xl mx-auto text-indigo-600/70 dark:text-white/60 transition-all duration-1000 ease-out mb-8 ${mounted
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 translate-y-4 blur-sm"
                        }`}
                    style={{ transitionDelay: "800ms" }}
                >
                    Building mission-critical SaaS products requires scalable solutions and engineering excellence.
                </p>
                <div
                    className={`transition-all duration-1000 ease-out ${mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "1100ms" }}
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-white dark:hover:bg-white/90 text-white dark:text-indigo-900 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                        Let&apos;s Talk
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            <style jsx global>{`
        .beam-container {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          will-change: transform;
        }
        
        .beam-light {
          position: absolute;
          top: 0;
          left: 50%;
          width: 60px;
          height: 4px;
          margin-left: -30px;
          border-radius: 2px;
          transform: translateY(-50%);
          transition: all 0.5s;
          background: linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.5) 30%, rgba(129, 140, 248, 0.9) 70%, rgba(99, 102, 241, 1) 100%);
          box-shadow: 0 0 20px 4px rgba(99, 102, 241, 0.6), 0 0 40px 8px rgba(129, 140, 248, 0.3);
        }
        
        .dark .beam-light {
          background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.5) 30%, rgba(150, 200, 255, 0.9) 70%, white 100%);
          box-shadow: 0 0 20px 4px rgba(100, 180, 255, 0.8), 0 0 40px 8px rgba(59, 130, 246, 0.4);
        }
        
        .orb-light {
          background: radial-gradient(circle at 50% 50%, #f0f4ff 0%, #f0f4ff 90%, transparent 100%);
          box-shadow: 
            0 0 60px 2px rgba(99, 102, 241, 0.3),
            0 0 100px 5px rgba(99, 102, 241, 0.15),
            inset 0 0 60px 2px rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.4);
        }
        
        .dark .orb-light {
          background: radial-gradient(circle at 50% 50%, #050a18 0%, #050a18 90%, transparent 100%);
          box-shadow: 
            0 0 60px 2px rgba(59, 130, 246, 0.4),
            0 0 100px 5px rgba(59, 130, 246, 0.2),
            inset 0 0 60px 2px rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(100, 180, 255, 0.3);
        }
        
        .beam-spin-6 {
          animation: spin 6s linear infinite;
        }
        
        .beam-spin-7-reverse {
          animation: spin-reverse 7s linear infinite;
        }
        
        .beam-spin-8 {
          animation: spin 8s linear infinite;
        }
        
        .beam-spin-10-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
        </div>
    )
}
