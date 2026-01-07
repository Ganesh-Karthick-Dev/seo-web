import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud & DevOps Engineering Services | Infrastructure, CI/CD & Cloud Migration",
    description: "Our Cloud and DevOps engineering services help organizations modernize infrastructure, automate delivery pipelines, and build scalable cloud-native systems.",
};

export default function CloudDevOpsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
