'use client'

import { motion } from 'framer-motion'
import { User, Building2, MapPin, Layers, Cpu } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyInfoProps {
  data: PortfolioCategory
  lang: Lang
}

const infoItems = [
  { key: 'client', icon: User, labelFr: 'Client', labelEn: 'Client' },
  { key: 'sector', icon: Building2, labelFr: 'Secteur', labelEn: 'Sector' },
  { key: 'location', icon: MapPin, labelFr: 'Localisation', labelEn: 'Location' },
  { key: 'projectType', icon: Layers, labelFr: 'Type de projet', labelEn: 'Project type' },
  { key: 'technologies', icon: Cpu, labelFr: 'Technologies clés', labelEn: 'Key technologies' },
] as const

export function CaseStudyInfo({ data, lang }: CaseStudyInfoProps) {
  const isFr = lang === 'fr'

  const values: Record<string, string> = {
    client: isFr ? data.client.fr : data.client.en,
    sector: isFr ? data.sector.fr : data.sector.en,
    location: data.location,
    projectType: isFr ? data.projectType.fr : data.projectType.en,
    technologies: data.technologies.slice(0, 4).join(' · ') + (data.technologies.length > 4 ? ' · ...' : ''),
  }

  return (
    <section className="border-y border-border/50 bg-card/20 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {infoItems.map(({ key, icon: Icon, labelFr, labelEn }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col gap-2 rounded-xl border border-border/60 bg-card/40 p-4 glass transition-all duration-200 hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-4 text-primary" />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {isFr ? labelFr : labelEn}
              </p>
              <p className="text-xs font-medium leading-relaxed text-foreground">
                {values[key]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
