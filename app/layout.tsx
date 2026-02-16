import type { Metadata } from "next";
import { Outfit, Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://zylex.io"),
  title: "Zylex | Strategic AI & SaaS Development Agency for US Startups",
  description: "Ship production-ready SaaS platforms in 15 days. We provide elite engineering for AI automation, custom software, and cloud infrastructure.",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K66G34JR');`,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${bebasNeue.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K66G34JR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LenisProvider>
          <FloatingHeader />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
