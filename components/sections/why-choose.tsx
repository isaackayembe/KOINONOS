'use client'

import { motion } from 'framer-motion'
import {
  Award,
  HeartHandshake,
  Lock,
  Lightbulb,
  Smile,
  Headphones,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const icons: LucideIcon[] = [
  Award,
  HeartHandshake,
  Lock,
  Lightbulb,
  Smile,
  Headphones,
]

export function WhyChoose() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.why.tag}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex gap-4 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/20">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
