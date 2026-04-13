"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>
              Built with <span className="text-primary">passion</span> and{" "}
              <span className="text-primary">Next.js</span>
            </p>
            <p className="mt-1">&copy; {currentYear} Your Name. All rights reserved.</p>
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

          {/* Language toggle hint */}
          <div className="text-xs text-muted-foreground">
            <span>ES</span>
            <span className="mx-2">|</span>
            <span className="text-primary">EN</span>
            <span className="mx-2">|</span>
            <span>FR</span>
            <span className="mx-2">|</span>
            <span>KO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
