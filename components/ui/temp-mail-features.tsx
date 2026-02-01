import { Card, CardHeader } from '@/components/ui/card'
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
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Zap} title="Real-Time Blocking" description="Instantly validates against 100,000+ disposable domains via API, JavaScript, or native plugins." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Trash2} title="Database Cleanup" description="Scan existing CRM records to identify and purge temporary accounts." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={TrendingUp} title="Better ROI" description="Focus your marketing budget on real business opportunities." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Plug} title="Plug & Play" description="Integrate with your signup flow in minutes, not days." />
                        </CardHeader>
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
    <div className="p-6 flex items-center justify-between gap-4 w-full">
        <div className="flex-1 min-w-0">
            <span className="text-muted-foreground flex items-center gap-2">
                <Icon className="size-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-400">{title}</span>
            </span>
            <p className="mt-4 text-2xl font-semibold text-white leading-snug">{description}</p>
        </div>
        <CrispIcon icon={Icon} />
    </div>
)

interface CrispIconProps {
    icon: LucideIcon
}

const CrispIcon = ({ icon: Icon }: CrispIconProps) => (
    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-500/10 border border-white/5 flex-shrink-0">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-blue-400" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </div>
)
