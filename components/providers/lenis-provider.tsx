"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
            (window as unknown as { lenis: Lenis | undefined }).lenis = undefined;
            return;
        }

        const lenis = new Lenis({
            // Smoothness duration - higher = smoother but more delayed feel
            duration: 1.4,

            // Custom easing function for ultra-smooth deceleration
            // This creates a more natural, physics-based feel
            easing: (t) => {
                // Custom exponential ease-out for butter-smooth deceleration
                return t === 1 ? 1 : 1 - Math.pow(2, -12 * t);
            },

            // Orientation settings
            orientation: "vertical",
            gestureOrientation: "vertical",

            // Enable smooth wheel scrolling
            smoothWheel: true,

            // Wheel multiplier - lower = smoother, more controlled scrolling
            wheelMultiplier: 0.8,

            // Touch settings for mobile
            touchMultiplier: 1.5,

            // Infinite scroll disabled
            infinite: false,

            // Auto-resize on window resize
            autoResize: true,
        });

        lenisRef.current = lenis;

        // Integrate Lenis with GSAP ScrollTrigger for perfect sync
        lenis.on("scroll", ScrollTrigger.update);

        // Use GSAP ticker for smoother RAF loop (synced with GSAP's optimized ticker)
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's lag smoothing for real-time responsiveness
        gsap.ticker.lagSmoothing(0);

        // Expose lenis to window for external access
        (window as unknown as { lenis: Lenis }).lenis = lenis;

        // Set up ScrollTrigger to use Lenis's scroll position
        ScrollTrigger.scrollerProxy(document.documentElement, {
            scrollTop(value) {
                if (arguments.length && value !== undefined) {
                    lenis.scrollTo(value, { immediate: true });
                }
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: document.documentElement.style.transform ? "transform" : "fixed",
        });

        // Refresh ScrollTrigger on Lenis scroll
        ScrollTrigger.addEventListener("refresh", () => lenis.resize());
        ScrollTrigger.refresh();

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            (window as unknown as { lenis: Lenis | undefined }).lenis = undefined;
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
        };
    }, []);

    return <>{children}</>;
}

// Export a hook to access the Lenis instance
export function useLenis() {
    return (window as unknown as { lenis: Lenis }).lenis;
}
