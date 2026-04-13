"use client"

import { GraduationCap, Award, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Education() {
  const { t } = useLanguage()

  const education = [
    {
      id: 1,
      title: t.education.edu1,
      school: t.education.edu1School,
      period: t.education.edu1Period,
      description: t.education.edu1Desc,
      current: true,
    },
    {
      id: 2,
      title: t.education.edu2,
      school: t.education.edu2School,
      period: t.education.edu2Period,
      description: t.education.edu2Desc,
      current: false,
    },
  ]

  const certifications = [
    { name: t.education.cert1, provider: t.education.certProvider },
    { name: t.education.cert2, provider: t.education.certProvider },
    { name: t.education.cert3, provider: t.education.certProvider },
    { name: t.education.cert4, provider: t.education.certProvider },
  ]

  return (
    <section id="education" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Vertical text decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="vertical-text text-xs tracking-[0.5em] text-muted-foreground font-mono opacity-30">
          学歴 / EDUCATION
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono text-primary tracking-[0.3em]">04</span>
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-foreground uppercase">
            {t.education.title}
          </h2>
        </div>

        <p className="text-muted-foreground mb-16 max-w-xl text-sm">
          {t.education.subtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-8 tracking-wider flex items-center gap-3">
              <GraduationCap className="w-4 h-4" />
              {t.education.title}
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`p-5 border border-border hover:border-primary/50 transition-all archive-border ${edu.current ? 'border-l-2 border-l-primary' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-mono text-sm text-foreground tracking-wide">
                        {edu.title}
                      </h4>
                      <p className="text-primary font-mono text-xs mt-1">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {edu.description}
                  </p>
                  {/* Index number */}
                  <div className="absolute top-2 right-4 text-4xl font-bold text-border/20 font-mono">
                    0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-mono text-primary mb-8 tracking-wider flex items-center gap-3">
              <Award className="w-4 h-4" />
              {t.skills.certifications}
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between p-4 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                    <div className="w-px h-6 bg-border group-hover:bg-primary transition-colors" />
                    <span className="font-mono text-xs text-foreground">{cert.name}</span>
                  </div>
                  <span className="text-xs font-mono text-primary tracking-wider">{cert.provider}</span>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-8 p-5 border border-primary/30 bg-primary/5">
              <p className="text-xs text-muted-foreground font-mono leading-relaxed text-center">
                // Continuous learning is key to growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
