"use client"

import { Globe, Code, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary via-transparent to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-primary tracking-[0.3em]">01</span>
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-foreground uppercase">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About text */}
          <div>
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 font-light">
              {t.about.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
            
            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest">2024</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <div className="group flex gap-4 p-5 border border-border hover:border-primary/50 transition-all archive-border">
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-foreground mb-1 tracking-wide">{t.about.card1Title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.about.card1Desc}
                </p>
              </div>
            </div>

            <div className="group flex gap-4 p-5 border border-border hover:border-primary/50 transition-all archive-border">
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-foreground mb-1 tracking-wide">{t.about.card2Title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.about.card2Desc}
                </p>
              </div>
            </div>

            <div className="group flex gap-4 p-5 border border-border hover:border-primary/50 transition-all archive-border">
              <div className="flex-shrink-0 w-10 h-10 border border-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-foreground mb-1 tracking-wide">{t.about.card3Title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.about.card3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
