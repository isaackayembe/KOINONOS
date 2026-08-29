'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyProjectProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyProject({ data, lang }: CaseStudyProjectProps) {
  const title = lang === 'fr' ? 'Le Projet' : 'The Project'
  const description = data.description[lang]
  const paragraphs = description.split('\n\n').filter(Boolean)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <FileText className="size-3" />
              {title}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {data.title[lang]}
            </h2>
          </motion.div>

          {/* Description paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
