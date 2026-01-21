"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

export function AnimatedCounter({
    from = 0,
    to,
    duration = 2,
    className,
    suffix = "",
}: AnimatedCounterProps) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = Math.floor(from + (to - from) * ease);
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, inView]);

    return (
        <span ref={nodeRef} className={className}>
            {count}{suffix}
        </span>
    );
}
