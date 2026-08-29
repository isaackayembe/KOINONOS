'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Quote } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyChallengeProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyChallenge({ data, lang }: CaseStudyChallengeProps) {
  const sectionLabel = lang === 'fr' ? 'Le Besoin' : 'The Challenge'
  const sectionTitle = lang === 'fr' ? 'La problématique du client' : 'The client\'s challenge'
  const challenge = data.challenge[lang]

  return (
    <section className="py-16 bg-card/10">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <AlertCircle className="size-3" />
            {sectionLabel}
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>

          {/* Quote-style challenge block */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-card/40 p-8 glass"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />

            {/* Quote icon */}
            <Quote className="mb-4 size-8 text-primary/30" aria-hidden="true" />

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {challenge}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
