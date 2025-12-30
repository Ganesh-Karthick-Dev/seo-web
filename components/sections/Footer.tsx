"use client";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/[0.1] bg-black">
            <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent">
                            Your Brand
                        </h3>
                        <p className="text-sm text-neutral-400">
                            Creating exceptional digital experiences that drive growth and innovation.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="Twitter"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-all hover:border-white/[0.3] hover:bg-white/[0.05]">
                                    <svg className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="GitHub"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-all hover:border-white/[0.3] hover:bg-white/[0.05]">
                                    <svg className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="LinkedIn"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-all hover:border-white/[0.3] hover:bg-white/[0.05]">
                                    <svg className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="Instagram"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] transition-all hover:border-white/[0.3] hover:bg-white/[0.05]">
                                    <svg className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    SEO Optimization
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                    Digital Marketing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Stay Updated
                        </h4>
                        <p className="text-sm text-neutral-400">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-white/[0.1] bg-black/[0.5] px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-white/[0.3] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/[0.1] pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-neutral-400">
                            © {new Date().getFullYear()} Your Brand. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
        </footer>
    );
}
