"use client"

import { useLanguage } from "@/lib/language-context"

const technicalSkills = {
  frontend: ["HTML", "CSS", "JavaScript"],
  backend: ["Java", "PHP", "SQL"],
  tools: ["Git", "REST APIs", "Responsive Design"],
}

const languageSkills = [
  { name: "Espanol", code: "ES", levelKey: "native" as const },
  { name: "English", code: "EN", levelKey: "advanced" as const },
  { name: "Francais", code: "FR", levelKey: "advanced" as const },
  { name: "Korean", code: "KO", levelKey: "intermediate" as const },
]

export function Skills() {
  const { t } = useLanguage()

  const levelMap = {
    native: t.skills.native,
    advanced: t.skills.advanced,
    intermediate: t.skills.intermediate,
  }

  const categoryMap = {
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    tools: t.skills.tools,
  }

  return (
    <section id="skills" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Vertical text decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="vertical-text text-xs tracking-[0.5em] text-muted-foreground font-mono opacity-30">
          SKILLS & ABILITIES
        </span>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-primary tracking-[0.3em]">02</span>
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-foreground uppercase">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-8 tracking-wider flex items-center gap-3">
              <span className="w-2 h-2 bg-primary" />
              {t.skills.technical}
            </h3>
            <div className="space-y-8">
              {(Object.entries(technicalSkills) as [keyof typeof categoryMap, string[]][]).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-xs font-mono text-muted-foreground mb-3 tracking-widest uppercase">{categoryMap[category]}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono text-foreground border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-8 tracking-wider flex items-center gap-3">
              <span className="w-2 h-2 bg-primary" />
              {t.skills.languages}
            </h3>
            <div className="space-y-3">
              {languageSkills.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                    <div className="w-px h-6 bg-border group-hover:bg-primary transition-colors" />
                    <span className="font-mono text-sm text-foreground">{lang.name}</span>
                  </div>
                  <span className="text-xs font-mono text-primary tracking-wider">{levelMap[lang.levelKey]}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-5 border-l-2 border-primary bg-card/50">
              <p className="text-xs text-muted-foreground italic font-mono leading-relaxed">
                &ldquo;{t.skills.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
