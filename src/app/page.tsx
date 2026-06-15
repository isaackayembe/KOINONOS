import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { WhyChoose } from '@/components/sections/why-choose'
import { Portfolio } from '@/components/sections/portfolio'
import { Industries } from '@/components/sections/industries'
import { Testimonials } from '@/components/sections/testimonials'
import { Blog } from '@/components/sections/blog'
import { Faq } from '@/components/sections/faq'
import { Quote } from '@/components/sections/quote'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { AiAssistant } from '@/components/ai-assistant'
import { WhatsappButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChoose />
        <Portfolio />
        <Industries />
        <Testimonials />
        <Blog />
        <Faq />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
      <WhatsappButton />
    </div>
  )
}
