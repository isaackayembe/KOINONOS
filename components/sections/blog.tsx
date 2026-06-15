'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/components/language-provider'

const images = [
  '/images/blog-ransomware.svg',
  '/images/blog-zerotrust.svg',
  '/images/blog-ai.svg',
]

export function Blog() {
  const { t } = useLanguage()

  return (
    <section id="blog" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          tag={t.blog.tag}
          title={t.blog.title}
          subtitle={t.blog.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.blog.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-colors hover:border-primary/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[i] || '/placeholder.svg'}
                  alt={post.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-semibold text-primary">
                    {post.cat}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="size-3.5" />
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-3 text-balance font-semibold leading-snug">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="group/link mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-accent"
                >
                  {t.blog.readMore}
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
