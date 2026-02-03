"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Handshake,
    Check,
    Building2,
    Users,
    Zap,
    ArrowRight,
    Mail,
    Phone,
    Globe,
    Briefcase,
    Send,
    Scale,
    Layers
} from "lucide-react";

const benefits = [
    {
        icon: Layers,
        title: "White-Label Development",
        description: "Your brand, our engineering. Clients never know we exist."
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Get priority access to senior engineers for your projects."
    },
    {
        icon: Scale,
        title: "Scale Without Hiring",
        description: "Take on more clients without the overhead of full-time devs."
    },
    {
        icon: Zap,
        title: "Revenue Share Model",
        description: "Flexible pricing that grows with your agency."
    }
];

export default function PartnershipClient() {
    const [formData, setFormData] = useState({
        agencyName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        teamSize: "",
        monthlyProjects: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission - in production, this would call an API
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            {/* Background decoration - cyan/blue theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <Handshake className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">Agency Partnership</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Your Clients. <span className="text-cyan-400">Our Execution.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        You have the clients who need development work. We have the engineering firepower.
                        Let&apos;s build something powerful together as white-label partners.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Why Partner With Zylex?</h2>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-neutral-400">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                <div className="text-2xl font-bold text-cyan-400">40+</div>
                                <div className="text-xs text-neutral-500">Agency Partners</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                <div className="text-2xl font-bold text-cyan-400">200+</div>
                                <div className="text-xs text-neutral-500">Projects Delivered</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                <div className="text-2xl font-bold text-cyan-400">98%</div>
                                <div className="text-xs text-neutral-500">Client Retention</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800 p-8"
                    >
                        {!isSubmitted ? (
                            <>
                                <h2 className="text-2xl font-bold text-white mb-2">Get the Partnership Kit</h2>
                                <p className="text-neutral-400 mb-8">Fill out the form and we&apos;ll send you our partner program details.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Agency Name *
                                            </label>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                                <input
                                                    type="text"
                                                    name="agencyName"
                                                    value={formData.agencyName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-11 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                                    placeholder="Your Agency"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Your Name *
                                            </label>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                                <input
                                                    type="text"
                                                    name="contactName"
                                                    value={formData.contactName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-11 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-11 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                                    placeholder="you@agency.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Phone
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-11 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-400 mb-2">
                                            Website
                                        </label>
                                        <div className="relative">
                                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className="w-full pl-11 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
                                                placeholder="https://youragency.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Team Size
                                            </label>
                                            <select
                                                name="teamSize"
                                                value={formData.teamSize}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all"
                                            >
                                                <option value="">Select size</option>
                                                <option value="1-5">1-5 people</option>
                                                <option value="6-15">6-15 people</option>
                                                <option value="16-50">16-50 people</option>
                                                <option value="50+">50+ people</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">
                                                Monthly Dev Projects
                                            </label>
                                            <select
                                                name="monthlyProjects"
                                                value={formData.monthlyProjects}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all"
                                            >
                                                <option value="">Select volume</option>
                                                <option value="1-2">1-2 projects</option>
                                                <option value="3-5">3-5 projects</option>
                                                <option value="6-10">6-10 projects</option>
                                                <option value="10+">10+ projects</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-400 mb-2">
                                            Tell us about your needs
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                                            placeholder="What types of projects do you typically work on? What would an ideal partnership look like?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Get Partnership Kit
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-10 h-10 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Welcome to the Partnership!
                                </h2>
                                <p className="text-neutral-400 mb-6">
                                    Your Partnership Kit is on its way. Our team will reach out within 24 hours to discuss next steps.
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                                    <span className="text-cyan-400 text-sm">Check your inbox for the welcome email</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
