'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/images/mp4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-background/70" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/35 via-background/45 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(5_9_20_/_0.82)_78%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 -z-10 size-[360px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{t.hero.headline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            render={<a href="#quote" />}
            size="lg"
            className="group glow-blue h-12 px-7 text-base"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            render={<a href="#services" />}
            size="lg"
            variant="outline"
            className="glass h-12 px-7 text-base"
          >
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-12 flex max-w-md items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-accent" />
            <span>
              <span className="font-bold text-foreground">99.9%</span>{' '}
              {t.hero.stat1}
            </span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            <span>
              <span className="font-bold text-foreground">ISO</span>{' '}
              {t.hero.stat2}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
