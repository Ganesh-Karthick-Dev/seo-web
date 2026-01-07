import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecommerce Development Company | Custom Ecommerce Development Solutions",
    description: "As a leading ecommerce development company, we specialize in creating high-performance online stores that drive sales and deliver exceptional customer experiences.",
};

export default function EcommerceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
