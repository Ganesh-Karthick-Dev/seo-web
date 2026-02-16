import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zylex360 | Unified Business Operations Platform",
    description: "Consolidate your E-commerce, ERP, and CRM into one unshakeable platform. Zylex360 eliminates data silos and scales your business globally.",
    alternates: {
        canonical: "/products/zylex-360",
    },
};

export default function Zylex360Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
