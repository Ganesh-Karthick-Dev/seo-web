import React from "react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 tracking-tight">
                    Zylex – Privacy Policy
                </h1>

                <div className="prose prose-lg prose-neutral max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Introduction</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Zylex respects your privacy and is committed to protecting your personal data. This Privacy
                            Policy explains how we collect, use, disclose, and safeguard your information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Information We Collect</h2>

                        <h3 className="text-xl font-medium text-neutral-900 mb-2">Personal Information</h3>
                        <p className="text-neutral-600 leading-relaxed mb-4">
                            We may collect personal information such as name, email address, phone number, company
                            details, and billing information.
                        </p>

                        <h3 className="text-xl font-medium text-neutral-900 mb-2">Usage Information</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            We may collect technical information including IP address, browser type, device information,
                            and website usage data through cookies and analytics tools.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Methods of Data Collection</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Information is collected through account registration, contact forms, service usage, cookies, and
                            analytics technologies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Purpose of Data Processing</h2>
                        <p className="text-neutral-600 mb-2">We use collected data to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                            <li>Provide and manage our services.</li>
                            <li>Communicate with users and clients.</li>
                            <li>Improve website performance and service offerings.</li>
                            <li>Comply with legal and regulatory obligations.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Legal Basis for Processing</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Personal data is processed based on contractual necessity, legitimate business interests,
                            consent where applicable, and compliance with legal obligations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Data Sharing and Disclosure</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            We may share information with trusted third-party service providers for hosting, analytics, or
                            operational support, or with authorities when legally required.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Cookies are used to enhance user experience, analyze traffic, and improve services. Users may
                            control cookie preferences through browser settings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Data Security</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect personal data
                            against unauthorized access, alteration, or disclosure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Data Retention</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Personal data is retained only for as long as necessary to fulfill service requirements or legal
                            obligations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">User Rights</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Depending on applicable laws, users may request access to, correction of, or deletion of their
                            personal data, or restrict processing.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Policy Updates</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            This Privacy Policy may be updated periodically. Any changes will be posted on this page with
                            an updated effective date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Information</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            For questions or concerns regarding this Privacy Policy or data handling practices, please
                            contact us at <a href="mailto:contact@zylex.io" className="text-blue-600 hover:underline">contact@zylex.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
