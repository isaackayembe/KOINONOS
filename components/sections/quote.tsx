'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/components/language-provider'

export function Quote() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState<string>('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="relative py-24">
      <div className="absolute left-1/2 top-1/4 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          tag={t.quote.tag}
          title={t.quote.title}
          subtitle={t.quote.subtitle}
        />

        <Reveal className="mt-10">
          <div className="rounded-3xl border border-border glass-strong p-6 sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="size-8" />
                </span>
                <p className="text-lg font-semibold">{t.quote.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{t.quote.name}</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">{t.quote.company}</Label>
                    <Input id="company" name="company" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">{t.quote.phone}</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{t.quote.email}</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label>{t.quote.service}</Label>
                  <Select
                    value={service}
                    onValueChange={(v) => setService(v ?? '')}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder={t.quote.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.services.items.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">{t.quote.description}</Label>
                  <Textarea id="description" name="description" rows={4} />
                </div>

                <Button type="submit" size="lg" className="group glow-primary">
                  {t.quote.submit}
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
