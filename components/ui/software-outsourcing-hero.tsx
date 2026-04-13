import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SoftwareOutsourcingHeroProps {
    title: string;
    description: string;
    supportingText: string;
    ctaText: string;
    ctaHref: string;
}

export function SoftwareOutsourcingHero({
    title,
    description,
    supportingText,
    ctaText,
    ctaHref,
}: SoftwareOutsourcingHeroProps) {
    return (
        <section className="relative min-h-[100svh] overflow-hidden bg-transparent text-white">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_40%)]"
            />
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[90rem] items-center px-4 pt-32 pb-14 sm:px-6 md:px-10 md:pt-36 md:pb-16 lg:px-12 xl:px-16">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                    <div className="h-px w-20 bg-white/18" />
                    <div className="mt-10 max-w-4xl">
                        <h1 className="text-balance text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.9rem]">
                            {title}
                        </h1>
                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/82 md:text-xl">
                            {description}
                        </p>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/64 md:text-lg">
                            {supportingText}
                        </p>
                        <div className="mt-10">
                            <Button
                                asChild
                                className="h-12 rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-white/90"
                            >
                                <Link href={ctaHref}>{ctaText}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-16 h-px w-full max-w-4xl bg-white/10" />
                </div>
            </div>
        </section>
    );
}
