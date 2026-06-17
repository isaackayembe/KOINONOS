'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Handshake,
  ShieldCheck,
  School,
  Globe2,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const icons: LucideIcon[] = [
  Users,
  Handshake,
  ShieldCheck,
  School,
  Globe2,
  Briefcase,
]

export function Industries() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className="relative py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.industries.tag}
          title={t.industries.title}
          subtitle={t.industries.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {t.industries.items.map((label, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border glass p-6 text-center transition-colors hover:border-primary/40"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
