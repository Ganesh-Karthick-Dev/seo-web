"use client";

import { useState } from "react";
import Hero from "./hero";
import AssessmentFlow from "./assessment-flow";
import { AnimatePresence } from "framer-motion";

export default function AIReadinessAssessmentClientPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Hero onStart={() => setIsModalOpen(true)} />

            <AnimatePresence>
                {isModalOpen && (
                    <AssessmentFlow onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}
