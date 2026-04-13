"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden scanline">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.25_0.01_0)_1px,transparent_1px),linear-gradient(90deg,oklch(0.25_0.01_0)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      <div className="absolute right-16 top-20 bottom-20 w-px bg-border hidden lg:block" />
      
      {/* Japanese text decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="vertical-text text-xs tracking-[0.5em] text-muted-foreground font-mono opacity-50">
          ウェブ開発者
        </span>
      </div>
      
      <div className="max-w-4xl relative z-10">
        {/* Glitch name intro */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">{t.hero.greeting}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-4">
          <span className="glitch text-foreground" data-text="NAYRA">NAYRA</span>
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-2">
          <span className="text-foreground">ATENCIA</span>
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-8">
          <span className="gradient-text">DIAZ</span>
        </h1>

        <h2 className="text-lg sm:text-xl font-mono text-primary mb-8 tracking-wide">
          // {t.hero.role}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed font-light">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 font-mono text-xs tracking-wider uppercase archive-border"
            asChild
          >
            <a href="#experience" className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-foreground" />
              {t.hero.viewWork}
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:border-primary hover:bg-primary/5 font-mono text-xs tracking-wider uppercase"
            asChild
          >
            <a href="#contact">{t.hero.contact}</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">LINKS</span>
          <div className="w-8 h-px bg-border" />
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="mailto:nayra@example.com"
            className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to About section" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-primary" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-primary" />
    </section>
  )
}
