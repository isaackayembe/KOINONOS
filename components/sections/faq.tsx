'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { useLanguage } from '@/components/language-provider'

export function Faq() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading tag={t.faq.tag} title={t.faq.title} />

        <Reveal className="mt-10">
          <Accordion
            defaultValue={[0]}
            className="space-y-4 rounded-[2rem] border border-border glass px-6 py-4"
          >
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={i}
                className="overflow-hidden rounded-3xl border border-border bg-background/80 backdrop-blur-sm shadow-sm glow-primary/10"
              >
                <AccordionTrigger className="py-6 text-base text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4 pb-5">
                  <p>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
