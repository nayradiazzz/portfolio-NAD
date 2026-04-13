"use client"

import { Calendar, MapPin, ArrowRight, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      role: t.experience.role1,
      company: t.experience.role1Company,
      location: t.experience.role1Location,
      period: t.experience.role1Period,
      type: t.experience.role1Type,
      description: t.experience.role1Desc,
      achievements: [
        t.experience.role1Achievement1,
        t.experience.role1Achievement2,
        t.experience.role1Achievement3,
        t.experience.role1Achievement4,
      ],
      technologies: ["Windows", "Linux", "Networking", "Hardware", "IT Support"],
      featured: true
    },
    {
      id: 2,
      role: t.experience.role2,
      company: t.experience.role2Company,
      location: t.experience.role2Location,
      period: t.experience.role2Period,
      type: t.experience.role2Type,
      description: t.experience.role2Desc,
      achievements: [
        t.experience.role2Achievement1,
        t.experience.role2Achievement2,
        t.experience.role2Achievement3,
        t.experience.role2Achievement4,
      ],
      technologies: ["English C2", "Communication", "Teaching", "Teamwork"],
      featured: false
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.25_0.01_0)_1px,transparent_1px),linear-gradient(90deg,oklch(0.25_0.01_0)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono text-primary tracking-[0.3em]">03</span>
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-foreground uppercase">
            {t.experience.title}
          </h2>
        </div>

        <p className="text-muted-foreground mb-16 max-w-xl text-sm">
          {t.experience.subtitle}
        </p>

        {/* Experience timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="group relative"
            >
              {/* Content */}
              <div className={`p-6 border border-border hover:border-primary/50 transition-all bg-card/30 backdrop-blur-sm ${exp.featured ? 'border-l-2 border-l-primary' : ''}`}>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {exp.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary text-xs font-mono tracking-wider">
                      <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                      {t.experience.current}
                    </div>
                  )}
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-border text-muted-foreground text-xs font-mono tracking-wider">
                    <Briefcase className="w-3 h-3" />
                    {exp.type}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-mono text-foreground group-hover:text-primary transition-colors tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-foreground mb-3 tracking-wider uppercase">{t.experience.achievements}:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-primary mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Index number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-border/30 font-mono">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 p-6 border border-primary/30 bg-primary/5 text-center">
          <p className="text-foreground font-mono text-sm mb-2">
            {t.experience.cta}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm tracking-wider"
          >
            {t.experience.ctaLink}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
