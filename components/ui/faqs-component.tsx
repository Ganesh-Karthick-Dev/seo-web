'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQItem = {
    id: string
    question: string
    answer: string
}

type FAQsProps = {
    title: string
    description: string
    faqItems: FAQItem[]
}

export default function FAQs({ title, description, faqItems }: FAQsProps) {
    return (
        <section className="bg-transparent py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold md:text-5xl">{title}</h2>
                    <p className="text-muted-foreground mt-4 max-w-3xl text-balance text-lg">{description}</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={faqItems[0]?.id}
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1"
                    >
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted"
                            >
                                <AccordionTrigger className="cursor-pointer items-start gap-4 text-base text-left hover:no-underline md:text-lg">
                                    <span className="block flex-1 text-left">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
