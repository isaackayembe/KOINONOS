'use client'

import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudySolutionProps {
  data: PortfolioCategory
  lang: Lang
}

const accentBgMap: Record<string, string> = {
  red: 'from-red-500/10 to-red-500/5 border-red-500/20 hover:border-red-500/40',
  blue: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40',
  purple: 'from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:border-purple-500/40',
  amber: 'from-amber-500/10 to-amber-500/5 border-amber-500/20 hover:border-amber-500/40',
}
const accentTextMap: Record<string, string> = {
  red: 'text-red-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  amber: 'text-amber-400',
}

export function CaseStudySolution({ data, lang }: CaseStudySolutionProps) {
  const sectionLabel = lang === 'fr' ? 'Notre Solution' : 'Our Solution'
  const sectionTitle = lang === 'fr' ? 'Ce que KOINONOS a mis en place' : 'What KOINONOS implemented'

  const accentBg = accentBgMap[data.accentColor] ?? accentBgMap.red
  const accentText = accentTextMap[data.accentColor] ?? accentTextMap.red

  return (
    <section className="py-16">
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
            <Lightbulb className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.solution.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accentBg}`}
            >
              {/* Step number — large decorative */}
              <div className={`mb-4 text-5xl font-black leading-none ${accentText} opacity-20 select-none`}>
                {step.num}
              </div>

              {/* Step title */}
              <h3 className="mb-3 text-base font-bold text-foreground">
                {step.title[lang]}
              </h3>

              {/* Step description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc[lang]}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
