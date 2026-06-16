'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Share2,
  AtSign,
  Rss,
  Globe,
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/components/language-provider'

export function Footer() {
  const { t } = useLanguage()
  const [subscribed, setSubscribed] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const quickLinks = [
    { label: t.nav.home, href: isHome ? '#home' : '/#home' },
    { label: t.nav.services, href: isHome ? '#services' : '/#services' },
    { label: t.nav.portfolio, href: isHome ? '#portfolio' : '/#portfolio' },
    { label: t.nav.blog, href: isHome ? '#blog' : '/#blog' },
    { label: t.nav.contact, href: isHome ? '#contact' : '/#contact' },
  ]

  const socials = [Share2, AtSign, Rss, Globe]

  return (
    <footer id="about" className="relative border-t border-border pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/koinonos-logo.jpeg"
              alt="KOINONOS"
              className="h-12 w-auto max-w-[220px] rounded-xl bg-white object-contain px-2 py-1 shadow-sm shadow-black/20"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.about}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.quickLinks}</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.servicesTitle}</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              {t.services.items.map((s) => (
                <li key={s.title}>
                  <Link
                    href={isHome ? '#services' : '/#services'}
                    className="transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.newsletter}</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              {t.footer.newsletterDesc}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
              }}
              className="mt-4 flex gap-2"
            >
              <Input
                type="email"
                required
                placeholder={t.footer.newsletterPlaceholder}
                aria-label={t.footer.newsletterPlaceholder}
              />
              <Button type="submit" size="icon" aria-label={t.footer.subscribe}>
                <Send className="size-4" />
              </Button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-accent">{t.quote.success}</p>
            )}

            <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                Kinshasa, RDC
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                +243 812 949 128
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                contactkoinonos@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} KOINONOS. {t.footer.rights}
          </p>
          <p>Kinshasa &middot; RDC</p>
        </div>
      </div>
    </footer>
  )
}
