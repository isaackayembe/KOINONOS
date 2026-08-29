'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import type { Lang } from '@/lib/portfolio-data'

interface CaseStudyCTAProps {
  lang: Lang
}

export function CaseStudyCTA({ lang }: CaseStudyCTAProps) {
  const isFr = lang === 'fr'

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 grid-bg opacity-30"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {isFr ? 'Votre prochain projet' : 'Your next project'}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
            {isFr ? 'Vous avez un projet similaire ?' : 'Have a similar project?'}
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {isFr
              ? 'Notre équipe d\'experts est prête à étudier votre besoin et à vous proposer la solution la mieux adaptée.'
              : 'Our team of experts is ready to analyze your needs and propose the most suitable solution.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center">
            <Link
              href="/#quote"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-auto"
              id="cta-final-quote"
            >
              {isFr ? 'Demander un devis' : 'Request a quote'}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-auto"
              id="cta-final-contact"
            >
              <MessageCircle className="size-4" />
              {isFr ? 'Parlons de votre projet' : 'Let\'s talk about your project'}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {isFr ? 'Réponse en 24h' : 'Response within 24h'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {isFr ? 'Devis gratuit' : 'Free quote'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {isFr ? 'Experts certifiés' : 'Certified experts'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
