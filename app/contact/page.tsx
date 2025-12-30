"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { InlineWidget } from "react-calendly";
import {
    Calendar,
    Mail,
    MessageSquare,
    Phone,
    MapPin,
    ArrowRight,
    Sparkles,
    Clock,
    CheckCircle
} from "lucide-react";

export default function Contact() {
    const [activeTab, setActiveTab] = useState<"form" | "calendar">("calendar");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            value: "hello@seopro.com",
            link: "mailto:hello@seopro.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "123 Business Ave, NY 10001",
            link: "#",
        },
        {
            icon: Clock,
            title: "Business Hours",
            value: "Mon-Fri: 9AM - 6PM EST",
            link: "#",
        },
    ];

    return (
        <div className="relative min-h-screen w-full bg-black/[0.96] antialiased overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02]" />

            {/* Orange/Amber Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-medium text-orange-400">Get in Touch</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
                            Let&apos;s Talk
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg text-neutral-400">
                            Ready to transform your digital presence? Schedule a free consultation
                            or send us a message. We&apos;re here to help you succeed.
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 backdrop-blur-xl">
                                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                                <div className="space-y-4">
                                    {contactInfo.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.link}
                                            className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <item.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-neutral-400">{item.title}</p>
                                                <p className="text-white font-medium">{item.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us Card */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Free initial consultation",
                                        "Customized strategies",
                                        "Transparent pricing",
                                        "Proven track record",
                                        "24/7 support available",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-neutral-300">
                                            <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Column - Form/Calendar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <div className="rounded-2xl bg-neutral-900/50 border border-white/10 backdrop-blur-xl overflow-hidden">
                                {/* Tab Switcher */}
                                <div className="flex border-b border-white/10">
                                    <button
                                        onClick={() => setActiveTab("calendar")}
                                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all ${activeTab === "calendar"
                                            ? "text-orange-400 bg-orange-500/10 border-b-2 border-orange-400"
                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Schedule a Meeting
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("form")}
                                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all ${activeTab === "form"
                                            ? "text-orange-400 bg-orange-500/10 border-b-2 border-orange-400"
                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Send a Message
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    {activeTab === "calendar" ? (
                                        <div className="min-h-[600px]">
                                            <div className="mb-6">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    Book Your Free Consultation
                                                </h3>
                                                <p className="text-neutral-400">
                                                    Choose a time that works best for you. Our team will discuss
                                                    your goals and create a tailored strategy.
                                                </p>
                                            </div>

                                            {/* Calendly Widget */}
                                            <div className="rounded-xl overflow-hidden bg-white">
                                                <InlineWidget
                                                    url="https://calendly.com/ganeshkarthik18697/30min"
                                                    styles={{
                                                        height: "600px",
                                                        width: "100%",
                                                    }}
                                                    pageSettings={{
                                                        backgroundColor: "ffffff",
                                                        hideEventTypeDetails: false,
                                                        hideLandingPageDetails: false,
                                                        primaryColor: "f97316", // Orange-500 hex
                                                        textColor: "374151",
                                                    }}
                                                />
                                            </div>

                                            <p className="text-sm text-neutral-500 mt-4 text-center">
                                                💡 Tip: Replace the Calendly URL with your actual Calendly link in the code
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="mb-6">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    Send Us a Message
                                                </h3>
                                                <p className="text-neutral-400">
                                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                                            placeholder="john@company.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Company Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                                            placeholder="Your Company"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                                                            placeholder="+1 (555) 000-0000"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                                                        Your Message *
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        rows={5}
                                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all resize-none"
                                                        placeholder="Tell us about your project and goals..."
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25"
                                                >
                                                    {/* Gradient background */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />

                                                    {/* Animated shine */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                                    {formSubmitted ? (
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            <CheckCircle className="w-5 h-5" />
                                                            Message Sent!
                                                        </span>
                                                    ) : (
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            Send Message
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </span>
                                                    )}
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
