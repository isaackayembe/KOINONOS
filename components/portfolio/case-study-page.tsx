'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { AiAssistant } from '@/components/ai-assistant'
import { useLanguage } from '@/components/language-provider'
import { CaseStudyHero } from '@/components/portfolio/case-study-hero'
import { CaseStudyInfo } from '@/components/portfolio/case-study-info'
import { CaseStudyProject } from '@/components/portfolio/case-study-project'
import { CaseStudyChallenge } from '@/components/portfolio/case-study-challenge'
import { CaseStudySolution } from '@/components/portfolio/case-study-solution'
import { CaseStudyGallery } from '@/components/portfolio/case-study-gallery'
import { CaseStudyVideo } from '@/components/portfolio/case-study-video'
import { CaseStudyResults } from '@/components/portfolio/case-study-results'
import { CaseStudyTechnologies } from '@/components/portfolio/case-study-technologies'
import { CaseStudyRelated } from '@/components/portfolio/case-study-related'
import { CaseStudyCTA } from '@/components/portfolio/case-study-cta'
import type { PortfolioCategory } from '@/lib/portfolio-data'

interface CaseStudyPageProps {
  data: PortfolioCategory
  relatedCategories: PortfolioCategory[]
}

export function CaseStudyPage({ data, relatedCategories }: CaseStudyPageProps) {
  const { lang } = useLanguage()

  const backLabel = lang === 'fr' ? 'Retour au portfolio' : 'Back to portfolio'

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      {/* Ambient background glow — category-specific color */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[50rem] opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle at 30% 0%, var(--color-primary), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <main>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-28 pb-0">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {backLabel}
          </Link>
        </div>

        {/* ① Hero — large split layout */}
        <CaseStudyHero data={data} lang={lang} />

        {/* ② Key information bar */}
        <CaseStudyInfo data={data} lang={lang} />

        {/* ③ Project description */}
        <CaseStudyProject data={data} lang={lang} />

        {/* ④ Challenge / need */}
        <CaseStudyChallenge data={data} lang={lang} />

        {/* ⑤ Our solution steps */}
        <CaseStudySolution data={data} lang={lang} />

        {/* ⑥ Gallery + lightbox */}
        <CaseStudyGallery data={data} lang={lang} />

        {/* ⑦ Video (conditional) */}
        <CaseStudyVideo data={data} lang={lang} />

        {/* ⑧ Results / impact */}
        <CaseStudyResults data={data} lang={lang} />

        {/* ⑨ Technologies */}
        <CaseStudyTechnologies data={data} lang={lang} />

        {/* ⑩ Related projects */}
        <CaseStudyRelated relatedCategories={relatedCategories} lang={lang} />

        {/* ⑪ Final CTA */}
        <CaseStudyCTA lang={lang} />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  )
}
