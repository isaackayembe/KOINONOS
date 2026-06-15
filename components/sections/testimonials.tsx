'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const items = t.testimonials.items
  const count = items.length

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading tag={t.testimonials.tag} title={t.testimonials.title} />

        <div className="relative mt-12">
          <div className="absolute -left-6 -top-6 -z-10 text-primary/20">
            <Quote className="size-24" />
          </div>

          <div className="min-h-56 rounded-3xl border border-border glass-strong p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-balance text-lg leading-relaxed sm:text-xl">
                  &ldquo;{items[index].quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{items[index].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {items[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-border',
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
