'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Lang, type Dict } from '@/lib/translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang: () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr')),
    t: translations[lang] as unknown as Dict,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
