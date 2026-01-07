import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web and Mobile Application Development Services | Enterprise & Cross-Platform",
    description: "Our Web and Mobile Application Development services help businesses create applications that perform at scale, deliver real business value, and evolve as your organization grows — across web, iOS, and Android.",
};

export default function WebMobileApplicationDevelopmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
