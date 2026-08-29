'use client'

import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyTechnologiesProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyTechnologies({ data, lang }: CaseStudyTechnologiesProps) {
  const sectionLabel = lang === 'fr' ? 'Technologies' : 'Technologies'
  const sectionTitle = lang === 'fr' ? 'Technologies & expertises utilisées' : 'Technologies & expertise used'

  if (!data.technologies.length) return null

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Cpu className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Technology badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {data.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-2 text-sm font-medium text-foreground glass transition-all duration-200 hover:border-primary/40 hover:bg-card/70 hover:text-primary"
            >
              <span className="size-1.5 rounded-full bg-primary opacity-60 transition-opacity group-hover:opacity-100" />
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
