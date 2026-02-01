import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalable Cloud Infrastructure & Modern DevOps Practices | Zylex",
  description:
    "Make release day boring. We automate your updates and scale your infrastructure to handle 10x growth without blinking.",
};

export default function CloudDevOpsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
