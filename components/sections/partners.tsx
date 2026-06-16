'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const partners = [
  { name: 'ABS', logo: '/images/ABS.png' },
  { name: 'COLTAN MS', logo: '/images/COLTAN MS.jpg' },
  { name: 'Evolutive Systems', logo: '/images/Evolutive Systems.jpeg' },
  { name: 'Hikvision', logo: '/images/Hikvision.jpg' },
  { name: 'LNK Africa', logo: '/images/LNK AFRICA.png' },
  { name: "Mbum's", logo: "/images/Mbum's.jpeg" },
  { name: 'Microsoft', logo: '/images/Microsoft.png' },
  { name: 'UAC', logo: '/images/UAC.png' },
  { name: 'Storm Technology', logo: '/images/Storm Technology.png' },
  { name: 'Orange Corners', logo: '/images/Orange Corners.png' },
]

export function Partners() {
  const { t } = useLanguage()

  return (
    <section id="partners" className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.partners.tag}
          title={t.partners.title}
          subtitle={t.partners.subtitle}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, i) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05 }}
              className="group flex min-h-32 items-center justify-center rounded-2xl border border-border bg-white p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/15"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-20 w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
