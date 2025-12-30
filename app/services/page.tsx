import { Spotlight } from "@/components/ui/spotlight";

export default function Services() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-8 text-center">
                    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                        Our Services
                    </h1>
                    <p className="max-w-lg text-base font-normal text-neutral-300 md:text-lg">
                        We offer a wide range of professional services to help your business grow and succeed in the digital world.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <div className="p-6 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                            <p className="text-neutral-300">
                                Custom web applications built with modern technologies and best practices.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                            <p className="text-neutral-300">
                                Beautiful and intuitive user interfaces that provide exceptional user experiences.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <h3 className="text-2xl font-bold text-white mb-4">SEO Optimization</h3>
                            <p className="text-neutral-300">
                                Improve your search engine rankings and drive more organic traffic to your site.
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
                            <p className="text-neutral-300">
                                Comprehensive digital marketing strategies to reach your target audience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
