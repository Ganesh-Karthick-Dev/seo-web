import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Zylex | Let's Build Your Digital Future",
    description: "Ready to transform your digital presence? Schedule a free consultation or send us a message. We're here to help you scale your business.",
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
