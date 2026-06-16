'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/243812949128"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-4 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition-transform hover:scale-105 sm:left-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping-slow" />
      <MessageCircle className="relative size-7" />
    </a>
  )
}
