'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

export function Contact() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: MapPin,
      title: t.contact.address,
      lines: [
        '83 Avenue Tabu Ley (Ex Tombalbaye)',
        'Quartier Golf, Commune de la Gombe',
        'Kinshasa, RDC',
      ],
    },
    {
      icon: Phone,
      title: t.contact.phone,
      lines: ['+243 817 490 524', 'WhatsApp: +243 817 490 524'],
    },
    {
      icon: Mail,
      title: t.contact.email,
      lines: ['contact@groupkoinonos.com'],
    },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.contact.tag}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border glass p-7">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <div className="mt-2 flex flex-col gap-1 text-sm leading-relaxed text-muted-foreground">
                      {card.lines.map((line) => (
                        <span key={line}>
                          {line.startsWith('WhatsApp:') ? (
                            <a
                              href="https://wa.me/243817490524"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline transition hover:text-primary/80"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
