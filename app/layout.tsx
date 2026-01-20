import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { FloatingHeader } from "@/components/ui/floating-header";
import { Footer } from "@/components/sections/Footer";
import { LenisProvider } from "@/components/providers/lenis-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Zylex — Software Development & Modernization",
  description: "Zylex helps businesses build, modernize, and scale mission-critical digital platforms through custom software development, application modernization, cloud & DevOps, AI and automation, and digital transformation services.",
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        <LenisProvider>
          <FloatingHeader />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
