'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Images, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { PortfolioCategory, Lang } from '@/lib/portfolio-data'

interface CaseStudyGalleryProps {
  data: PortfolioCategory
  lang: Lang
}

export function CaseStudyGallery({ data, lang }: CaseStudyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const gallery = data.gallery

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length))
  }, [gallery.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length))
  }, [gallery.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, goNext, goPrev])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const sectionLabel = lang === 'fr' ? 'Galerie' : 'Gallery'
  const sectionTitle = lang === 'fr' ? 'Aperçu de la réalisation' : 'Project showcase'

  if (!gallery.length) return null

  const [mainImage, ...thumbImages] = gallery

  return (
    <section className="py-16 bg-card/10" id="galerie">
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
            <Images className="size-3" />
            {sectionLabel}
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {/* Main / featured image — spans 2 cols & 2 rows */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => openLightbox(0)}
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl border border-border/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={lang === 'fr' ? 'Voir l\'image principale en grand' : 'View main image full size'}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={mainImage}
                alt={`${data.title[lang]} — image principale`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex size-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                  <ZoomIn className="size-5 text-primary" />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Thumbnails */}
          {thumbImages.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * (i + 1) }}
              onClick={() => openLightbox(i + 1)}
              className="group relative overflow-hidden rounded-xl border border-border/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={lang === 'fr' ? `Voir l'image ${i + 2} en grand` : `View image ${i + 2} full size`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`${data.title[lang]} — image ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ZoomIn className="size-4 text-white drop-shadow" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'fr' ? 'Galerie d\'images' : 'Image gallery'}
          >
            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={gallery[lightboxIndex]}
                  alt={`${data.title[lang]} — image ${lightboxIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={lang === 'fr' ? 'Fermer' : 'Close'}
            >
              <X className="size-5" />
            </button>

            {/* Navigation buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all hover:bg-secondary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={lang === 'fr' ? 'Image précédente' : 'Previous image'}
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all hover:bg-secondary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={lang === 'fr' ? 'Image suivante' : 'Next image'}
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              {lightboxIndex + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
