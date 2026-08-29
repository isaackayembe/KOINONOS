'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyResultsProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyResults({ data, lang }: CaseStudyResultsProps) {
  const sectionLabel = lang === 'fr' ? 'Résultats' : 'Results'
  const sectionTitle = lang === 'fr' ? 'Les résultats obtenus' : 'Achieved outcomes'
  const results = data.results

  if (!results.length) return null

  // Separate quantitative and qualitative results
  const quantitative = results.filter((r) => !r.qualitative && r.value)
  const qualitative = results.filter((r) => r.qualitative || !r.value)

  return (
    <section className="py-16 bg-card/10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <TrendingUp className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Quantitative results — large numbers */}
        {quantitative.length > 0 && (
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quantitative.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 p-6 text-center glass"
              >
                <div className="text-4xl font-black text-gradient sm:text-5xl">
                  {result.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {result.label[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Qualitative results — check list cards */}
        {qualitative.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualitative.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/30 p-5 glass transition-all duration-200 hover:border-primary/30 hover:bg-card/50"
              >
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle className="size-3.5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {result.label[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
