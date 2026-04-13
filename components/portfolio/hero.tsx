"use client"

import { ArrowDown, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "ES", name: "Espanol", greeting: "Hola" },
  { code: "EN", name: "English", greeting: "Hello" },
  { code: "FR", name: "Francais", greeting: "Bonjour" },
  { code: "KO", name: "Korean", greeting: "annyeong" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.15_340_/_0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.80_0.12_290_/_0.1),_transparent_50%)]" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
      
      <div className="max-w-5xl relative z-10">
        {/* Language badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {languages.map((lang) => (
            <span
              key={lang.code}
              className="px-4 py-2 text-xs font-medium rounded-full bg-card text-card-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default shadow-sm"
            >
              <span className="text-primary font-semibold">{lang.greeting}</span>
              <span className="text-muted-foreground ml-2">({lang.code})</span>
            </span>
          ))}
        </div>

        {/* Name intro */}
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary tracking-wide">Hi, I&apos;m</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="gradient-text">Nayra Atencia Diaz</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80 mb-8">
          Web Developer & Polyglot
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty">
          Desarrolladora web junior con perspectiva global. Escribo codigo en JavaScript, Java y PHP, 
          y me comunico con fluidez en <span className="text-primary font-medium">4 idiomas</span>. 
          Lista para aportar creatividad e inteligencia cultural a tu equipo internacional.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-full shadow-lg shadow-primary/25"
            asChild
          >
            <a href="#experience" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Ver Mi Experiencia
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:border-primary/50 hover:bg-primary/5 rounded-full"
            asChild
          >
            <a href="#contact">Contactame</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:nayra@example.com"
            className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" className="p-2 rounded-full bg-card border border-border shadow-sm">
          <ArrowDown className="w-5 h-5 text-primary" />
        </a>
      </div>
    </section>
  )
}
