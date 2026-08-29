'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, LayoutGrid } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyRelatedProps {
  relatedCategories: PortfolioCategory[]
  lang: Lang
}

const accentBorderMap: Record<string, string> = {
  red: 'group-hover:border-red-500/40',
  blue: 'group-hover:border-blue-500/40',
  purple: 'group-hover:border-purple-500/40',
  amber: 'group-hover:border-amber-500/40',
}
const accentTagMap: Record<string, string> = {
  red: 'bg-red-500/10 text-red-400',
  blue: 'bg-blue-500/10 text-blue-400',
  purple: 'bg-purple-500/10 text-purple-400',
  amber: 'bg-amber-500/10 text-amber-400',
}

export function CaseStudyRelated({ relatedCategories, lang }: CaseStudyRelatedProps) {
  const sectionLabel = lang === 'fr' ? 'Voir aussi' : 'See also'
  const sectionTitle = lang === 'fr' ? 'Découvrez aussi nos réalisations' : 'Explore more of our work'

  if (!relatedCategories.length) return null

  return (
    <section className="py-16 bg-card/10">
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
            <LayoutGrid className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Related project cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCategories.slice(0, 3).map((cat, i) => {
            const accentBorder = accentBorderMap[cat.accentColor] ?? accentBorderMap.red
            const accentTag = accentTagMap[cat.accentColor] ?? accentTagMap.red

            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/portfolio/${cat.slug}`}
                  className={`group block overflow-hidden rounded-2xl border border-border/60 bg-card/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${accentBorder}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={cat.heroImage}
                      alt={cat.title[lang]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

                    {/* Arrow icon */}
                    <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                      <ArrowUpRight className="size-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${accentTag}`}>
                      {cat.sector[lang].split('·')[0].trim()}
                    </span>
                    <h3 className="mt-3 font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {cat.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {cat.shortDescription[lang]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
