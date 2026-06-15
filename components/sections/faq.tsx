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
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading tag={t.faq.tag} title={t.faq.title} />

        <Reveal className="mt-10">
          <Accordion
            defaultValue={[0]}
            className="rounded-2xl border border-border glass px-6"
          >
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={i}>
                <AccordionTrigger className="py-5 text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
