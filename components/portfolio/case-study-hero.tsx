'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Tag, Briefcase, MessageCircle } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyHeroProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyHero({ data, lang }: CaseStudyHeroProps) {
  const t = lang === 'fr' ? data : { ...data, title: data.title, shortDescription: data.shortDescription }

  const title = data.title[lang]
  const desc = data.shortDescription[lang]
  const sector = data.sector[lang]
  const projectType = data.projectType[lang]

  const accentMap: Record<string, string> = {
    red: 'from-red-500/20 via-red-500/5 to-transparent border-red-500/30 text-red-400 shadow-red-500/20',
    blue: 'from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/30 text-blue-400 shadow-blue-500/20',
    purple: 'from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/30 text-purple-400 shadow-purple-500/20',
    amber: 'from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30 text-amber-400 shadow-amber-500/20',
  }
  const glowMap: Record<string, string> = {
    red: 'from-red-500/30 to-transparent',
    blue: 'from-blue-500/30 to-transparent',
    purple: 'from-purple-500/30 to-transparent',
    amber: 'from-amber-500/30 to-transparent',
  }
  const accent = accentMap[data.accentColor] ?? accentMap.red
  const glow = glowMap[data.accentColor] ?? glowMap.red

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className={`absolute inset-x-0 top-0 -z-10 h-[60rem] bg-gradient-to-br ${glow} opacity-20 blur-3xl`}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 pt-6 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ── Left: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Category badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1.5 text-xs font-semibold ${accent}`}
            >
              <span className="size-1.5 rounded-full bg-current animate-pulse" />
              {lang === 'fr' ? 'Réalisation KOINONOS' : 'KOINONOS Achievement'}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {desc}
            </p>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Tag className="size-3 text-primary" />
                {sector}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <MapPin className="size-3 text-primary" />
                {data.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Briefcase className="size-3 text-primary" />
                {projectType}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                id="hero-cta-quote"
              >
                {lang === 'fr' ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                id="hero-cta-contact"
              >
                <MessageCircle className="size-4" />
                {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
              </Link>
            </div>

            {/* Delivered status */}
            <div className="flex items-center gap-2 pt-1">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-500">
                {lang === 'fr' ? 'Projets livrés avec succès' : 'Projects successfully delivered'}
              </span>
            </div>
          </motion.div>

          {/* ── Right: Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative order-1 lg:order-2"
          >
            {/* Image container with premium frame */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-black/40">
              {/* Aspect ratio container */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={data.heroImage}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-10`} />
              </div>
            </div>

            {/* Decorative glow behind image */}
            <div
              className={`absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br ${glow} opacity-15 blur-2xl`}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
