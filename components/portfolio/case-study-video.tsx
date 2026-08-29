'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Video } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyVideoProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyVideo({ data, lang }: CaseStudyVideoProps) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Don't render if no video defined
  if (!data.video) return null

  const sectionLabel = lang === 'fr' ? 'Vidéo' : 'Video'
  const sectionTitle = lang === 'fr' ? 'Découvrez la réalisation en vidéo' : 'Discover the project in video'

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <section className="py-16">
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
            <Video className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-black/40"
        >
          {/* Video element */}
          <div className="relative aspect-video bg-black">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              src={data.video}
              controls={playing}
              playsInline
              preload="metadata"
              className="size-full object-cover"
              aria-label={`${data.title[lang]} — vidéo de présentation`}
            />

            {/* Play overlay — shown before play */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
                <button
                  onClick={handlePlay}
                  className="group flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={lang === 'fr' ? 'Lancer la vidéo' : 'Play video'}
                >
                  <Play className="size-8 translate-x-0.5" fill="currentColor" />
                </button>
              </div>
            )}
          </div>

          {/* Decorative gradient frame */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
