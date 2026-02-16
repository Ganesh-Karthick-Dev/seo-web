import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Zylex: Build Unstoppable Software.",
    description: "Ready to scale? Contact Zylex. We engineer high-performance SaaS and custom software solutions. Stop stalling. Start building your digital empire today.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
