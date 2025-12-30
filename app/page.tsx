"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function Home() {
  return (
    <div className="relative w-full bg-black/[0.96] antialiased">
      {/* Hero Section with Spotlight */}
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-grid-white/[0.02]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
              Spotlight Effect <br /> is the new trend.
            </h1>
            <p className="max-w-lg text-base font-normal text-neutral-300 md:text-lg">
              Spotlight effect is a great way to draw attention to a specific part
              of the page. Here, we are drawing the attention towards the text
              section of the page. I don&apos;t know why but I&apos;m running out of copy.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-black transition-colors hover:bg-neutral-200 md:w-auto"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore
              </a>
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-white/[.145] px-8 text-white transition-colors hover:bg-white/[.1] md:w-auto"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Sticky Scroll */}
      <div className="relative w-full py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Why Choose Us
          </h2>
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}
