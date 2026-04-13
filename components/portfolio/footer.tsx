"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { type Language, languageNames } from "@/lib/translations"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const languages: Language[] = ["es", "en", "fr", "ko"]

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-border bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-xs font-mono text-muted-foreground text-center md:text-left tracking-wider">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              {t.footer.madeWith && <>{t.footer.madeWith}</>} 
              <span className="text-primary">{"<3"}</span> 
              {t.footer.and}{" "}
              <span className="text-primary">Next.js</span>
            </p>
            <p className="mt-1">&copy; {currentYear} Nayra Atencia Diaz. {t.footer.rights}</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
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

          {/* Language switcher */}
          <div className="flex items-center border border-border">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-xs font-mono tracking-wider transition-colors ${
                  language === lang 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                title={languageNames[lang]}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-border" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.5em]">NAD_</span>
            <div className="w-12 h-px bg-border" />
          </div>
        </div>
      </div>
    </footer>
  )
}
