import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAProps {
    badgeText?: string;
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

function CTA({
    badgeText = "Get started",
    title = "Try our platform today!",
    description = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
    primaryButtonText = "Sign up here",
    primaryButtonHref = "/contact",
    secondaryButtonText,
    secondaryButtonHref,
}: CTAProps) {
    return (
        <div className="w-full py-20 lg:py-32">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col text-center bg-neutral-100 rounded-2xl p-8 lg:p-16 gap-8 items-center">
                    <div>
                        <Badge className="bg-black text-white hover:bg-black/90">{badgeText}</Badge>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-black">
                            {title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {secondaryButtonText && (
                            <Button className="gap-2" variant="outline" asChild>
                                <Link href={secondaryButtonHref || "#"}>
                                    {secondaryButtonText}
                                    <PhoneCall className="w-4 h-4" />
                                </Link>
                            </Button>
                        )}
                        <Button className="gap-2 bg-black text-white hover:bg-black/90" asChild>
                            <Link href={primaryButtonHref}>
                                {primaryButtonText}
                                <MoveRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CTA };
