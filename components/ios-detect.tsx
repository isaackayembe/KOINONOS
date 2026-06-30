'use client'

import { useEffect } from 'react'

export default function IOSDetect() {
  useEffect(() => {
    try {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera
      const isIOS = /iP(hone|od|ad)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      if (isIOS) {
        document.documentElement.classList.add('no-blur')
      }
    } catch (e) {
      // silent
    }
  }, [])

  return null
}
