import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Intelligent Software Solutions | Zylex",
  description:
    "Eliminate manual bottlenecks with custom AI-driven systems. We engineer the agents and workflows that give your business unshakeable stability.",
};

export default function AIAutomationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
