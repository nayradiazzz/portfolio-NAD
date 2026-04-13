"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { type Language, languageNames } from "@/lib/translations"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const languages: Language[] = ["es", "en", "fr", "ko"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-sm font-mono font-bold text-foreground hover:text-primary transition-colors tracking-wider"
          >
            <span className="text-primary">&gt;</span> NAD_
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
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
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-mono text-xs tracking-wider"
              asChild
            >
              <a href="mailto:nayratenciadiaz04@gmail.com">{t.nav.contactMe}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-card border border-border p-4">
            {/* Language switcher mobile */}
            <div className="flex items-center justify-center gap-1 mb-4 pb-4 border-b border-border">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-colors ${
                    language === lang 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="block text-sm font-mono text-foreground hover:text-primary transition-colors tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  size="sm" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/80 mt-2 font-mono text-xs"
                  asChild
                >
                  <a href="mailto:nayratenciadiaz04@gmail.com">{t.nav.contactMe}</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
