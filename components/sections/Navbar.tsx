"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "@/components/ui/navbar-menu";

export function Navbar() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
            <Menu setActive={setActive}>
                <Link href="/" className="text-neutral-700 dark:text-neutral-200 hover:text-black">
                    Home
                </Link>
                <Link href="/services" className="text-neutral-700 dark:text-neutral-200 hover:text-black">
                    Services
                </Link>
                <Link href="/about" className="text-neutral-700 dark:text-neutral-200 hover:text-black">
                    About Us
                </Link>
                <Link href="/contact" className="text-neutral-700 dark:text-neutral-200 hover:text-black">
                    Contact Us
                </Link>
            </Menu>
        </div>
    );
}
