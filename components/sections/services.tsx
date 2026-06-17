'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Cctv,
  ShieldCheck,
  Network,
  Code2,
  Wrench,
  GraduationCap,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const icons: LucideIcon[] = [
  Cctv,
  ShieldCheck,
  Network,
  Code2,
  Wrench,
  GraduationCap,
]

const serviceImages: Record<string, string> = {
  'Sécurité Électronique': '/images/camera.jpg',
  'Electronic Security': '/images/camera.jpg',
  'Cybersécurité': '/images/securite.png',
  'Cybersecurity': '/images/securite.png',
  'Infrastructure Réseau': '/images/infrastructure reseau.jpg',
  'Network Infrastructure': '/images/infrastructure reseau.jpg',
  'Développement Logiciel': '/images/4. BUREAU D\'ETUDE ET CONSEIL/12468.jpg',
  'Software Development': '/images/4. BUREAU D\'ETUDE ET CONSEIL/12468.jpg',
  'Maintenance Informatique': '/images/maintance infirmatique.jpg',
  'IT Maintenance': '/images/maintance infirmatique.jpg',
  'Formation IT': '/images/3. RENFORCEMENT DES CAPACITES EN TIC/cap1.jpg',
  'IT Training': '/images/3. RENFORCEMENT DES CAPACITES EN TIC/cap1.jpg',
}

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border glass p-0 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Blurred Cisco image cover area */}
                <div
                  className="relative h-32 w-full overflow-hidden border-b border-border flex items-center justify-center bg-black"
                >
                  <Image
                    src="/images/cisco.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover blur-[2px] scale-110 opacity-70 transition-transform duration-500 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Icon wrapper with glowing external shadow */}
                  <div className="absolute inset-0">
                    <Image
                      src={serviceImages[service.title] || '/images/cisco.png'}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover blur-[2px] scale-110 opacity-70 transition-transform duration-500 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div className="relative flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(227,6,19,0.5)]">
                    <Icon className="size-7" />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground min-h-[4.5rem]">
                    {service.desc}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/40 pt-4">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
