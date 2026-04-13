"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "ES", name: "Español", greeting: "Hola" },
  { code: "EN", name: "English", greeting: "Hello" },
  { code: "FR", name: "Français", greeting: "Bonjour" },
  { code: "KO", name: "한국어", greeting: "안녕하세요" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.75_0.15_175_/_0.08),_transparent_50%)]" />
      
      <div className="max-w-5xl relative z-10">
        {/* Language badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {languages.map((lang) => (
            <span
              key={lang.code}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 transition-colors cursor-default"
            >
              <span className="text-primary">{lang.greeting}</span>
              <span className="text-muted-foreground ml-2">({lang.code})</span>
            </span>
          ))}
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Building Digital Experiences</span>
          <br />
          <span className="gradient-text">Across Borders & Languages</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty">
          Junior Web Developer with a global perspective. I write code in JavaScript, Java, and PHP — 
          and communicate fluently in <span className="text-foreground font-medium">4 languages</span>. 
          Ready to bring creativity and cultural intelligence to your international team.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:border-primary/50 hover:bg-secondary"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
