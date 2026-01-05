"use client";

import React from "react";
import { ServiceCTA } from "@/components/ui/service-cta";

interface ServiceCTASectionProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export function ServiceCTASection({
    title,
    description,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
}: ServiceCTASectionProps) {
    return (
        <section className="relative bg-black overflow-hidden py-24 md:py-32 px-4 md:px-6 lg:px-8">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05),transparent_60%)] pointer-events-none" />

            <ServiceCTA
                title={title}
                description={description}
                primaryButtonText={primaryButtonText}
                primaryButtonHref={primaryButtonHref}
                secondaryButtonText={secondaryButtonText}
                secondaryButtonHref={secondaryButtonHref}
            />
        </section>
    );
}
