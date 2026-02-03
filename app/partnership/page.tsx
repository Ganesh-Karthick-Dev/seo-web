import { Metadata } from "next";
import PartnershipClient from "@/components/ui/PartnershipClient";

export const metadata: Metadata = {
    title: "Agency Partnership | Zylex - White-Label Development Partner",
    description: "Partner with Zylex for white-label SaaS, AI, and cloud development. Scale your agency without hiring. Your clients, our execution.",
    keywords: ["white-label development", "agency partnership", "development partner", "saas development agency", "outsource development"],
};

export default function PartnershipPage() {
    return <PartnershipClient />;
}
