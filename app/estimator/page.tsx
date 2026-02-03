import { Metadata } from "next";
import EstimatorClient from "@/components/ui/EstimatorClient";

export const metadata: Metadata = {
    title: "Project Estimator | Zylex - Get Your 15-Day Build Quote",
    description: "Calculate your project timeline and cost in minutes. Our 15-Day Feasibility Engine tells you if your SaaS, AI, or cloud project fits our high-velocity sprint.",
    keywords: ["project estimator", "saas development cost", "ai development quote", "15 day sprint", "software development pricing"],
};

export default function EstimatorPage() {
    return <EstimatorClient />;
}
