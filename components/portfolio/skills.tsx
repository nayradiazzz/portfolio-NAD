"use client"

import { Code, Languages, Heart } from "lucide-react"

const technicalSkills = {
  "Frontend": ["HTML", "CSS", "JavaScript"],
  "Backend": ["Java", "PHP", "SQL"],
  "Herramientas": ["Git", "REST APIs", "Diseno Responsivo"],
}

const languageSkills = [
  { name: "Espanol", level: "Nativo", code: "ES" },
  { name: "Ingles", level: "Avanzado (C1)", code: "EN" },
  { name: "Frances", level: "Avanzado (B2)", code: "FR" },
  { name: "Coreano", level: "Intermedio (B1)", code: "KO" },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-2">
            <Code className="w-4 h-4" />
            Skills y Habilidades
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Skills Tecnicas
            </h3>
            <div className="space-y-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-primary mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-md transition-all cursor-default"
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
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              Idiomas
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              El multilinguismo es mi superpoder, permitiendome trabajar con equipos diversos y entender matices culturales en diseno y UX.
            </p>
            <div className="space-y-3">
              {languageSkills.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary">
                      {lang.code}
                    </span>
                    <span className="font-medium text-foreground">{lang.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-secondary">{lang.level}</span>
                </div>
              ))}
            </div>

            {/* Why languages matter */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-sm text-foreground/80 italic">
                &ldquo;Hablar multiples idiomas significa entender diferentes formas de pensar, 
                crucial para crear experiencias de usuario que realmente resuenen globalmente.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
