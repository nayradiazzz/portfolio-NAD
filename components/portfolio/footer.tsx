"use client"

import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-border bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="flex items-center gap-1 justify-center md:justify-start">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> y{" "}
              <span className="text-primary font-medium">Next.js</span>
            </p>
            <p className="mt-1">&copy; {currentYear} Nayra Atencia Diaz. Todos los derechos reservados.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:nayra@example.com"
              className="p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Language toggle hint */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-primary font-medium">ES</span>
            <span>|</span>
            <span>EN</span>
            <span>|</span>
            <span>FR</span>
            <span>|</span>
            <span>KO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
