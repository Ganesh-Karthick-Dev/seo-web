import type { Metadata } from 'next';
import AIReadinessAssessmentClientPage from './page-client';

export const metadata: Metadata = {
    title: "AI Readiness Assessment | Data & Architecture Evaluation",
    description: "Evaluate your organization's capability to scale AI. Take our comprehensive AI Readiness Assessment to analyze your data architecture, decision confidence, operational awareness, compliance readiness, and AI enablement.",
    openGraph: {
        title: "Free AI Readiness Assessment",
        description: "Transform your data foundation into a competitive advantage. Complete the 8-minute assessment and get your AI readiness maturity score immediately.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Readiness Assessment",
        description: "Is your business ready to scale AI? Find out your readiness score based on engineering excellence, data trust, operational resilience, and compliance risk.",
    }
};

export default function AIReadinessAssessmentPage() {
    return <AIReadinessAssessmentClientPage />;
}
