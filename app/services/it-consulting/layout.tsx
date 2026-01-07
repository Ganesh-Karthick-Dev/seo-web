import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IT Consulting Services | Strategy, Infrastructure & Enterprise Solutions",
    description: "We help businesses make smarter technology decisions, modernize legacy systems, streamline operations, and align IT strategy with real business outcomes.",
};

export default function ITConsultingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
