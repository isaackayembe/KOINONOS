'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const titleImages: Record<string, string> = {
  "Vidéosurveillance": '/images/portofolio/portfolio-videosurveillance.jpg',
  "Contrôle d'acces": '/images/portofolio/portfolio-videosurveillance.jpg',
  "Système Anti-intrusion Industriel": '/images/portofolio/portfolio-videosurveillance.jpg',
  "Détection Incendie Connectée": '/images/portofolio/portfolio-videosurveillance.jpg',
  "Datacenter & réseau hôtelier": '/images/portofolio/portfolio-datacenter-reseau.jpg',
  "Interconnexion Multi-sites SD-WAN": '/images/portofolio/portfolio-datacenter-reseau.jpg',
  "Réseau Sans-Fil Outdoor Métropolitain": '/images/portofolio/portfolio-datacenter-reseau.jpg',
  "Audit & Optimisation Réseau": '/images/portofolio/portfolio-audit-securite.jpg',
  "Programme de formation cyber": '/images/portofolio/portfolio-renforcement-capacite.jpg',
  "Cisco CCNA & CCNP Certification": '/images/portofolio/portfolio-renforcement-capacite.jpg',
  "Formation SecOps & DevOps": '/images/portofolio/portfolio-renforcement-capacite.jpg',
  "Gouvernance ITIL & Cybersécurité": '/images/portofolio/portfolio-renforcement-capacite.jpg',
}

const categoryImages: Record<string, string> = {
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

  // On homepage, we display only a subset of projects (e.g. first 6) for performance/UX,
  // showing the premium details on the category-specific pages.
  const visible = t.portfolio.items
    .filter((item) => filter === 'all' || item.cat === filter)
    .slice(0, 6)

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.portfolio.tag}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const isAll = f.key === 'all'
            const active = filter === f.key
            const btnClass = cn(
              'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer',
              active
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
            )

            if (isAll) {
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter('all')}
                  className={btnClass}
                >
                  {f.label}
                </button>
              )
            }

            return (
              <Link
                key={f.key}
                href={`/portfolio/${f.key}`}
                className={btnClass}
              >
                {f.label}
              </Link>
            )
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <Link
                key={item.title}
                href={`/portfolio/${item.cat}`}
                className="block outline-none"
              >
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl border border-border cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={titleImages[item.title] || categoryImages[item.cat] || '/placeholder.svg'}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <span className="inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        {item.tag}
                      </span>
                      <h3 className="mt-2 font-semibold leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all group-hover:opacity-100">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
