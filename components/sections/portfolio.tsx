'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const images: Record<string, string> = {
  security: '/images/portfolio-security.svg',
  network: '/images/portfolio-network.svg',
  dev: '/images/portfolio-dev.svg',
  training: '/images/portfolio-training.svg',
}

export function Portfolio() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string>('all')

  const filters = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'security', label: t.portfolio.filters.security },
    { key: 'network', label: t.portfolio.filters.network },
    { key: 'dev', label: t.portfolio.filters.dev },
    { key: 'training', label: t.portfolio.filters.training },
  ]

  const visible = t.portfolio.items.filter(
    (item) => filter === 'all' || item.cat === filter,
  )

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.portfolio.tag}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                filter === f.key
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[item.cat] || '/placeholder.svg'}
                    alt={item.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <span className="inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {item.tag}
                    </span>
                    <h3 className="mt-2 font-semibold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
