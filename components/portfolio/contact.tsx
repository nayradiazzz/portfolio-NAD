"use client"

import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-48 bg-gradient-to-b from-border to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono text-primary tracking-[0.3em]">04</span>
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-foreground uppercase">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* CTA text */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
              {t.contact.headline.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{t.contact.headline.split(" ").slice(-1)}</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.contact.p1}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              {t.contact.p2}
            </p>

            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/80 group font-mono text-xs tracking-wider uppercase"
              asChild
            >
              <a href="mailto:nayra@example.com" className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary-foreground" />
                {t.contact.cta}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <a 
              href="mailto:nayra@example.com"
              className="flex items-center gap-4 p-5 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1 tracking-wider">{t.contact.email}</h4>
                <p className="text-foreground font-mono text-sm">nayra@example.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1 tracking-wider">LinkedIn</h4>
                <p className="text-foreground font-mono text-sm">linkedin.com/in/nayra-atencia</p>
              </div>
            </a>

            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Github className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1 tracking-wider">GitHub</h4>
                <p className="text-foreground font-mono text-sm">github.com/nayra-atencia</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 border border-border">
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1 tracking-wider">{t.contact.location}</h4>
                <p className="text-foreground font-mono text-sm">{t.contact.locationValue}</p>
              </div>
            </div>

            {/* Language availability */}
            <div className="p-5 border border-primary/30 bg-primary/5">
              <span className="text-xs font-mono text-primary tracking-wider">{t.contact.availableIn}</span>
              <div className="flex gap-3 mt-2">
                {["ES", "EN", "FR", "KO"].map((lang) => (
                  <span key={lang} className="text-xs font-mono text-foreground border border-border px-2 py-1">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
