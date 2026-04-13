import {
    Clock3,
    Layers3,
    ScanSearch,
    TrendingUp,
    Workflow,
} from "lucide-react";

interface DifferenceItem {
    description: string;
    title: string;
}

interface OutsourceDifferenceGridProps {
    items: DifferenceItem[];
}

const featureIcons = [
    Clock3,
    Layers3,
    Workflow,
    ScanSearch,
    TrendingUp,
];

export function OutsourceDifferenceGrid({ items }: OutsourceDifferenceGridProps) {
    return (
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="bg-white text-neutral-950">
                <div className="grid border-t border-dashed border-neutral-900/50 md:grid-cols-2 xl:grid-cols-5">
                    {items.map((item, index) => {
                        const Icon = featureIcons[index % featureIcons.length];

                        return (
                            <article
                                key={item.title}
                                className="flex min-h-[28rem] flex-col border-b border-dashed border-neutral-900/50 px-10 py-12 md:px-12 md:py-14 xl:min-h-[34rem] xl:border-r xl:border-b-0 xl:px-14"
                            >
                                <div className="flex h-14 items-start">
                                    <Icon className="h-11 w-11 text-neutral-800" strokeWidth={1.75} />
                                </div>

                                <div className="mt-20 flex flex-1 flex-col justify-end">
                                    <h3 className="max-w-[18rem] text-[1.75rem] font-medium leading-[1.08] tracking-tight text-neutral-950 md:text-[1.95rem] xl:text-[2.05rem]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 max-w-[18rem] text-[0.98rem] leading-[1.75] text-neutral-800 md:text-[1.02rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
