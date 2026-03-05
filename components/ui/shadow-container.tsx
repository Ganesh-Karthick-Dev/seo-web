"use client";

import { useRef, useEffect } from "react";

interface ShadowContainerProps {
    html: string;
    css?: string;
    className?: string;
}

/**
 * Renders HTML + CSS content inside a Shadow DOM to prevent
 * style conflicts between custom blog content and the global project styles.
 *
 * - Global CSS cannot leak INTO this container  
 * - Custom CSS cannot leak OUT of this container
 */
export default function ShadowContainer({ html, css, className }: ShadowContainerProps) {
    const hostRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<ShadowRoot | null>(null);

    useEffect(() => {
        if (!hostRef.current) return;

        // Create shadow root only once
        if (!shadowRef.current) {
            shadowRef.current = hostRef.current.attachShadow({ mode: "open" });
        }

        const shadow = shadowRef.current;

        // Build the shadow DOM content
        const content = `
            ${css ? `<style>${css}</style>` : ""}
            ${html}
        `;

        shadow.innerHTML = content;
    }, [html, css]);

    return <div ref={hostRef} className={className} />;
}
