import { Metadata } from "next";

export const metadata: Metadata = {
    title: "3D Website Development Services | Immersive & Interactive Web Experiences",
    description: "Our 3D website development services help you create immersive, visually engaging, and interactive web experiences — from product visualization and virtual showrooms to 3D storytelling pages.",
};

export default function ThreeDWebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
