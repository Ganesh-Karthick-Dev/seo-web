import { Card, CardHeader } from '@/components/ui/card'
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
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Globe} title="Global Commerce" description="Multi-currency and multi-language storefronts, managed from one interface." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Package} title="Real-Time Inventory" description="Automatic synchronization across all sales channels and warehouses." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={Users} title="Complete CRM" description="Track every customer touchpoint from lead to loyalty." />
                        </CardHeader>
                    </FeatureCard>
                    <FeatureCard>
                        <CardHeader className="pb-0">
                            <CardHeading icon={BarChart3} title="Enterprise Resource Planning" description="Streamline procurement, finance, and logistics in one system." />
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
