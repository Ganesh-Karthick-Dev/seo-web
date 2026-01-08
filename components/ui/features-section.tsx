import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Globe, Package, Users, BarChart3, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        The Zylex360 Solution <br />
                        <span className="text-neutral-500">A single platform that gives you complete operational visibility:</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {/* Card 1: Global Commerce */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Globe}
                                title="Global Commerce"
                                description="Multi-currency and multi-language storefronts, managed from one interface."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3840&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3840&auto=format&fit=crop"
                                    alt="global commerce"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Real-Time Inventory */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Package}
                                title="Real-Time Inventory"
                                description="Automatic synchronization across all sales channels and warehouses."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop"
                                    alt="inventory management"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Complete CRM */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Users}
                                title="Complete CRM"
                                description="Track every customer touchpoint from lead to loyalty."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3840&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3840&auto=format&fit=crop"
                                    alt="crm relationship"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 4: Enterprise Resource Planning */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={BarChart3}
                                title="Enterprise Resource Planning"
                                description="Streamline procurement, finance, and logistics in one system."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    alt="erp dashboard"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-zinc-950/5 flex flex-col overflow-hidden bg-zinc-900/50 backdrop-blur-md border-white/10', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-4 text-orange-500" />
            <span className="text-sm font-medium uppercase tracking-wider text-neutral-400">{title}</span>
        </span>
        <p className="mt-4 text-2xl font-semibold text-white leading-snug">{description}</p>
    </div>
)

interface DualModeImageProps {
    darkSrc: string
    lightSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

const DualModeImage = ({ darkSrc, lightSrc, alt, width, height, className }: DualModeImageProps) => (
    <>
        <img
            src={darkSrc}
            className={cn('hidden dark:block rounded-lg opacity-80', className)}
            alt={`${alt} dark`}
            width={width}
            height={height}
        />
        <img
            src={lightSrc}
            className={cn('shadow dark:hidden rounded-lg', className)}
            alt={`${alt} light`}
            width={width}
            height={height}
        />
    </>
)
