import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Development Services | Machine Learning & Automation Solutions",
    description: "Our AI development services help you design and deploy practical AI, machine learning, and automation solutions that enhance decision-making, streamline operations, and drive growth.",
};

export default function AIAutomationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
