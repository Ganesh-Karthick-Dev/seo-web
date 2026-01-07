import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Transformation Services | Legacy Modernization & Business Process Transformation",
    description: "Our Digital Transformation Services help modernize systems, streamline workflows, and build digital capabilities that create lasting business value.",
};

export default function DigitalTransformationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
