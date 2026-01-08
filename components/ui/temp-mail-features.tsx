import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Zap, Trash2, TrendingUp, Plug, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function TempMailFeatures() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        How Temp Mail Blocker Works <br />
                        <span className="text-neutral-500">A complete solution for email verification:</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {/* Card 1: Real-Time Blocking */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Zap}
                                title="Real-Time Blocking"
                                description="Instantly validates against 100,000+ disposable domains via API, JavaScript, or native plugins."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    alt="real time blocking"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Database Cleanup */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Trash2}
                                title="Database Cleanup"
                                description="Scan existing CRM records to identify and purge temporary accounts."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                    alt="database cleanup"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Better ROI */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={TrendingUp}
                                title="Better ROI"
                                description="Focus your marketing budget on real business opportunities."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    alt="better roi"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 4: Plug & Play */}
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Plug}
                                title="Plug & Play"
                                description="Integrate with your signup flow in minutes, not days."
                            />
                        </CardHeader>

                        <div className="relative flex-1 min-h-[300px] w-full mt-6 border-t border-dashed border-white/10">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),transparent_125%)]"></div>
                            <div className="relative h-full w-full p-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                    alt="plug and play"
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
