'use client'

import { motion } from 'framer-motion'
import {
  Cctv,
  ShieldCheck,
  Network,
  Code2,
  Wrench,
  GraduationCap,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const icons: LucideIcon[] = [
  Cctv,
  ShieldCheck,
  Network,
  Code2,
  Wrench,
  GraduationCap,
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border glass p-6 transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <ul className="relative mt-4 flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
