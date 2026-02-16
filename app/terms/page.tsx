import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Zylex",
    description: "Read our terms and conditions for using Zylex services. We provide clear guidelines on intellectual property, liability, and user responsibilities.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 tracking-tight">
                    Zylex – Terms & Conditions
                </h1>

                <div className="prose prose-lg prose-neutral max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Introduction</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            These Terms & Conditions ("Agreement") govern the use of the Zylex website and services. By
                            accessing or using our website or services, you agree to be bound by this Agreement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Definitions</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                            <li>"Zylex", "we", "us", "our" refers to Zylex.</li>
                            <li>"User" or "Client" refers to any individual or entity using our services.</li>
                            <li>"Services" refers to IT consulting, software development, support, and related digital solutions.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Acceptance of Terms</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            By accessing or using our services, you confirm that you have read, understood, and agreed to
                            these Terms & Conditions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Scope of Services</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Zylex provides IT services as described in proposals, quotations, or Statements of Work (SOW)
                            agreed upon with clients. Specific deliverables, timelines, and responsibilities are governed by
                            such agreements.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">User Responsibilities</h2>
                        <p className="text-neutral-600 mb-2">Users agree to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                            <li>Provide accurate and complete information.</li>
                            <li>Maintain confidentiality of account credentials.</li>
                            <li>Use the services in compliance with applicable laws and regulations.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Fees and Payments</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            All fees are communicated through proposals or invoices. Payments must be made within the
                            agreed timelines. Late payments may attract interest or service suspension.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Intellectual Property Rights</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Zylex retains ownership of all pre-existing intellectual property, including tools, frameworks, and
                            methodologies. Upon full payment, ownership of client-specific deliverables may be transferred
                            as agreed in writing.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Confidentiality</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Both parties agree to keep confidential any proprietary or sensitive information shared during
                            the course of the engagement, except where disclosure is required by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Warranties and Disclaimers</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Services are provided on an "as is" and "as available" basis. Zylex does not guarantee
                            uninterrupted or error-free services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Zylex shall not be liable for indirect, incidental, or consequential damages. Total liability shall not
                            exceed the fees paid by the client to Zylex in the preceding twelve months.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Indemnification</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Clients agree to indemnify and hold harmless Zylex from any claims, damages, or losses arising
                            from misuse of the services or violation of these terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Term and Termination</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Either party may terminate services in accordance with the terms outlined in the applicable
                            service agreement or SOW.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Governing Law</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            These Terms & Conditions shall be governed by and construed in accordance with the laws of
                            India.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Amendments</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Zylex reserves the right to modify these Terms & Conditions at any time. Updates will be
                            effective upon posting on the website.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
