"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <main className="min-h-screen relative">
        <div className="noise-overlay" />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
