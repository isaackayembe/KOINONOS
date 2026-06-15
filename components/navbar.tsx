'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300',
            scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent',
          )}
        >
          <a href="#home" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/koinonos-logo.jpeg"
              alt="KOINONOS"
              className="h-10 w-auto max-w-[160px] rounded-xl bg-white object-contain px-2 py-1 shadow-sm shadow-black/20 sm:max-w-[190px]"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              aria-label={
                lang === 'fr' ? 'Switch to English' : 'Passer en français'
              }
              title={lang === 'fr' ? 'English' : 'Français'}
            >
              <Globe className="size-3.5" />
              {lang.toUpperCase()}
            </button>
            <Button
              render={<a href="#quote" />}
              className="hidden sm:inline-flex"
            >
              {t.nav.quote}
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <Button
                render={<a href="#quote" onClick={() => setOpen(false)} />}
                className="mt-1 w-full"
              >
                {t.nav.quote}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
