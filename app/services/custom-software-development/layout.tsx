import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Software Development Company | Enterprise, MVP & Product Engineering",
    description: "Zylex delivers custom software development, MVP engineering, and enterprise software solutions — designed for scalability, performance, and predictable delivery from strategy to execution.",
};

export default function CustomSoftwareDevelopmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
