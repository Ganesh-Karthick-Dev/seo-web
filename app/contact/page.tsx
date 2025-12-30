import { Spotlight } from "@/components/ui/spotlight";

export default function Contact() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-8 text-center">
                    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                        Contact Us
                    </h1>
                    <p className="max-w-lg text-base font-normal text-neutral-300 md:text-lg">
                        Have a question or want to work together? We&apos;d love to hear from you.
                        Send us a message and we&apos;ll respond as soon as possible.
                    </p>

                    <div className="mt-8 w-full max-w-2xl">
                        <form className="p-8 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-left text-white font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/[0.1] text-white placeholder-neutral-500 focus:outline-none focus:border-white/[0.3]"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-left text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/[0.1] text-white placeholder-neutral-500 focus:outline-none focus:border-white/[0.3]"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-left text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/[0.1] text-white placeholder-neutral-500 focus:outline-none focus:border-white/[0.3] resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
