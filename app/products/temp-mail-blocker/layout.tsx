import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Temp Mail Blocker: Stop Fake Signups. Protect Your Pipeline.",
    description: "Instantly validate against 100,000+ domains. Stop inflating metrics with fake conversions. Protect email reputation and trial economics. Plug & play.",
    alternates: {
        canonical: "/products/temp-mail-blocker",
    },
};

export default function TempMailBlockerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
