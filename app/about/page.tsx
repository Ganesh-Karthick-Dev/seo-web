import { Spotlight } from "@/components/ui/spotlight";

export default function About() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-8 text-center">
                    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                        About Us
                    </h1>
                    <p className="max-w-2xl text-base font-normal text-neutral-300 md:text-lg">
                        We are a team of passionate professionals dedicated to creating exceptional digital experiences.
                        Our mission is to help businesses thrive in the digital age through innovative solutions and
                        cutting-edge technology.
                    </p>

                    <div className="mt-8 max-w-4xl">
                        <div className="p-8 rounded-lg border border-white/[0.1] bg-black/[0.5]">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-neutral-300 text-lg mb-6">
                                To empower businesses with innovative digital solutions that drive growth,
                                enhance user experiences, and create lasting value.
                            </p>

                            <h2 className="text-3xl font-bold text-white mb-6 mt-8">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                                    <p className="text-neutral-400">
                                        Constantly pushing boundaries and exploring new technologies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
                                    <p className="text-neutral-400">
                                        Delivering excellence in every project we undertake.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Integrity</h3>
                                    <p className="text-neutral-400">
                                        Building trust through transparency and honest communication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
