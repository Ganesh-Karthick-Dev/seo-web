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
    CheckCircle,
    AlertCircle
} from "lucide-react";

export default function Contact() {
    const [activeTab, setActiveTab] = useState<"form" | "calendar">("calendar");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
        };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone Number is required";
            isValid = false;
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = "Phone number must be exactly 10 digits";
            isValid = false;
        }

        // Company validation
        if (!formData.company.trim()) {
            newErrors.company = "Company Name is required";
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                });
                setTimeout(() => setFormSubmitted(false), 5000);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
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

            {/* Cyan/Sky Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-400">Get in Touch</span>
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
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-white/10">
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
                                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                                            ? "text-cyan-400 bg-cyan-500/10 border-b-2 border-cyan-400"
                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Schedule a Meeting
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("form")}
                                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all ${activeTab === "form"
                                            ? "text-cyan-400 bg-cyan-500/10 border-b-2 border-cyan-400"
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
                                                        primaryColor: "06b6d4", // Cyan-500 hex
                                                        textColor: "374151",
                                                    }}
                                                />
                                            </div>


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
                                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all`}
                                                            placeholder="John Doe"
                                                        />
                                                        {errors.name && (
                                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.name}
                                                            </p>
                                                        )}
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
                                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all`}
                                                            placeholder="john@company.com"
                                                        />
                                                        {errors.email && (
                                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.email}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Company Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.company ? 'border-red-500' : 'border-white/10'} text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all`}
                                                            placeholder="Your Company"
                                                        />
                                                        {errors.company && (
                                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.company}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                                                            Phone Number *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all`}
                                                            placeholder="10-digit number"
                                                        />
                                                        {errors.phone && (
                                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.phone}
                                                            </p>
                                                        )}
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
                                                        rows={5}
                                                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none`}
                                                        placeholder="Tell us about your project and goals..."
                                                    />
                                                    {errors.message && (
                                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                            <AlertCircle className="w-3 h-3" /> {errors.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {/* Gradient background */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-sky-500" />

                                                    {/* Animated shine */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                                    {formSubmitted ? (
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            <CheckCircle className="w-5 h-5" />
                                                            Message Sent!
                                                        </span>
                                                    ) : isSubmitting ? (
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Sending...
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
