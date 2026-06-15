'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, FileText, Headphones, LayoutGrid, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

type Message = { role: 'bot' | 'user'; text: string }

export function AiAssistant() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: t.chat.greeting },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, open])

  const quickActions = [
    { key: 'quote', label: t.chat.quick.quote, icon: FileText },
    { key: 'support', label: t.chat.quick.support, icon: Headphones },
    { key: 'services', label: t.chat.quick.services, icon: LayoutGrid },
    { key: 'training', label: t.chat.quick.training, icon: GraduationCap },
  ] as const

  const reply = (key: keyof typeof t.chat.replies) =>
    t.chat.replies[key] ?? t.chat.replies.default

  const sendQuick = (key: 'quote' | 'support' | 'services' | 'training', label: string) => {
    setMessages((m) => [
      ...m,
      { role: 'user', text: label },
      { role: 'bot', text: reply(key) },
    ])
  }

  const sendText = (e: React.FormEvent) => {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    setMessages((m) => [
      ...m,
      { role: 'user', text: value },
      { role: 'bot', text: t.chat.replies.default },
    ])
    setInput('')
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 z-[60] flex h-[30rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border glass-strong shadow-2xl shadow-black/40 sm:right-6"
          >
            <div className="flex items-center justify-between border-b border-border bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Bot className="size-5" />
                  <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-background bg-accent" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-none">
                    {t.chat.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-accent">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {t.chat.status}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex',
                    m.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                      m.role === 'user'
                        ? 'rounded-br-md bg-primary text-primary-foreground'
                        : 'rounded-bl-md bg-secondary text-secondary-foreground',
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {quickActions.map((a) => {
                  const Icon = a.icon
                  return (
                    <button
                      key={a.key}
                      onClick={() => sendQuick(a.key, a.label)}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <Icon className="size-3.5 text-accent" />
                      {a.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <form
              onSubmit={sendText}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                className="flex-1 rounded-xl border border-input bg-transparent px-3 py-2 text-sm outline-none focus:border-ring"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-4 z-[60] flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 glow-blue sm:right-6"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Bot className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
