'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Shield, Cpu, Code, GraduationCap } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { AiAssistant } from '@/components/ai-assistant'
import { useLanguage } from '@/components/language-provider'

const categoryMeta: Record<
  string,
  {
    icon: React.ComponentType<any>
    image: string
    colorClass: string
    glowClass: string
    gradientClass: string
    fr: { title: string; subtitle: string }
    en: { title: string; subtitle: string }
  }
> = {
  security: {
    icon: Shield,
    image: '/images/portofolio/portfolio-videosurveillance.jpg',
    colorClass: 'text-red-500 border-red-500/20 hover:border-red-500/50 focus-visible:ring-red-500/50',
    glowClass: 'shadow-red-500/10 hover:shadow-red-500/20',
    gradientClass: 'from-red-500/10 via-transparent to-transparent',
    fr: {
      title: 'Sécurité électronique',
      subtitle: 'Solutions de protection physique et de cybersécurité pour vos infrastructures critiques.',
    },
    en: {
      title: 'Electronic Security',
      subtitle: 'Integrated physical and cyber security solutions for your critical infrastructures.',
    },
  },
  network: {
    icon: Cpu,
    image: '/images/portofolio/portfolio-datacenter-reseau.jpg',
    colorClass: 'text-blue-500 border-blue-500/20 hover:border-blue-500/50 focus-visible:ring-blue-500/50',
    glowClass: 'shadow-blue-500/10 hover:shadow-blue-500/20',
    gradientClass: 'from-blue-500/10 via-transparent to-transparent',
    fr: {
      title: 'Audit sécurité et optimisation',
      subtitle: 'Audit, optimisation et architecture réseau pour une performance sécurisée.',
    },
    en: {
      title: 'Security Audit & Optimization',
      subtitle: 'Network audit, optimization, and architecture for secure performance.',
    },
  },
  dev: {
    icon: Code,
    image: '/images/portofolio/portfolio-audit-securite.jpg',
    colorClass: 'text-purple-500 border-purple-500/20 hover:border-purple-500/50 focus-visible:ring-purple-500/50',
    glowClass: 'shadow-purple-500/10 hover:shadow-purple-500/20',
    gradientClass: 'from-purple-500/10 via-transparent to-transparent',
    fr: {
      title: 'Bureau d\'étude et conseil',
      subtitle: 'Conseil et études pour vos projets informatiques et métiers.',
    },
    en: {
      title: 'Design Office & Consulting',
      subtitle: 'Consulting and design office services for your business IT projects.',
    },
  },
  training: {
    icon: GraduationCap,
    image: '/images/portofolio/portfolio-renforcement-capacite.jpg',
    colorClass: 'text-amber-500 border-amber-500/20 hover:border-amber-500/50 focus-visible:ring-amber-500/50',
    glowClass: 'shadow-amber-500/10 hover:shadow-amber-500/20',
    gradientClass: 'from-amber-500/10 via-transparent to-transparent',
    fr: {
      title: 'Renforcement des capacités en TIC',
      subtitle: 'Renforcement des compétences TIC de vos équipes selon les standards internationaux.',
    },
    en: {
      title: 'ICT Capacity Building',
      subtitle: 'Strengthening your team’s ICT skills to international standards.',
    },
  },
}

export default function CategoryPage() {
  const { t, lang } = useLanguage()
  const params = useParams()
  const category = (params?.category as string) || 'security'

  const meta = categoryMeta[category] || categoryMeta.security
  const CategoryIcon = meta.icon
  const localMeta = lang === 'fr' ? meta.fr : meta.en

  // Filter projects corresponding to the current category from translations dict
  const projects = t.portfolio.items.filter((item) => item.cat === category)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      {/* Radial ambient glow specific to the category */}
      <div
        className={`absolute inset-x-0 top-0 -z-10 h-[40rem] bg-gradient-to-b ${meta.gradientClass} blur-3xl`}
        aria-hidden="true"
      />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {lang === 'fr' ? 'Retour au portfolio' : 'Back to portfolio'}
          </Link>
        </div>

        {/* Category Hero Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 md:p-12 glass shadow-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:max-w-2xl">
              <div className={`inline-flex items-center justify-center p-3 rounded-2xl border bg-background/50 ${meta.colorClass}`}>
                <CategoryIcon className="size-8" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gradient">
                {localMeta.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {localMeta.subtitle}
              </p>
            </div>
            
            <div className="relative aspect-video w-full max-w-[280px] shrink-0 self-center overflow-hidden rounded-2xl border border-border/40 bg-background/30 p-4 shadow-inner md:self-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={meta.image}
                alt={localMeta.title}
                className="size-full object-contain opacity-80"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16">
          <h2 className="text-xl font-bold tracking-tight mb-8">
            {lang === 'fr' ? 'Réalisations & Projets' : 'Projects & Achievements'} ({projects.length})
          </h2>

          {projects.length === 0 ? (
            <p className="text-muted-foreground">
              {lang === 'fr' ? 'Aucun projet dans cette catégorie pour le moment.' : 'No projects in this category at the moment.'}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/30 p-6 glass transition-all duration-300 hover:-translate-y-1 ${meta.colorClass} ${meta.glowClass}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        {project.tag}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-tight text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-primary">
                    <span>
                      {lang === 'fr' ? 'Livré avec succès' : 'Successfully delivered'}
                    </span>
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <AiAssistant />
    </div>
  )
}
