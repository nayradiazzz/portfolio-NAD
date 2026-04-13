"use client"

import { Briefcase, Calendar, MapPin, ExternalLink, Star } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Junior Web Developer",
    company: "Tu Empresa",
    location: "Madrid, Spain",
    period: "2024 - Presente",
    description: "Desarrollo de aplicaciones web modernas utilizando tecnologias frontend y backend. Colaboracion en equipos internacionales aprovechando mis habilidades multilingues.",
    achievements: [
      "Desarrollo de interfaces de usuario responsivas con HTML, CSS y JavaScript",
      "Implementacion de logica de servidor con PHP y Java",
      "Gestion de bases de datos SQL y optimizacion de consultas",
      "Colaboracion con equipos en espanol, ingles y frances"
    ],
    technologies: ["JavaScript", "PHP", "Java", "HTML/CSS", "SQL"],
    featured: true
  },
  {
    id: 2,
    role: "Practicas en Desarrollo Web",
    company: "Empresa de Practicas",
    location: "Remoto",
    period: "2023 - 2024",
    description: "Formacion practica en desarrollo web, participando en proyectos reales y aprendiendo metodologias agiles.",
    achievements: [
      "Participacion en el desarrollo de sitios web corporativos",
      "Aprendizaje de buenas practicas de codigo limpio",
      "Introduccion a sistemas de control de versiones",
      "Comunicacion con clientes internacionales"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    featured: false
  },
  {
    id: 3,
    role: "Proyectos Academicos",
    company: "Universidad / Formacion",
    location: "Tu Ciudad",
    period: "2022 - 2023",
    description: "Desarrollo de proyectos academicos aplicando conocimientos de programacion y bases de datos.",
    achievements: [
      "Creacion de aplicaciones web full-stack",
      "Diseno e implementacion de bases de datos relacionales",
      "Trabajo en equipo y presentaciones tecnicas",
      "Certificaciones en desarrollo web"
    ],
    technologies: ["Java", "SQL", "HTML/CSS", "JavaScript"],
    featured: false
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Experiencia Laboral
          </h2>
        </div>

        <p className="text-muted-foreground mb-12 max-w-xl">
          Mi trayectoria profesional en el mundo del desarrollo web, donde combino 
          habilidades tecnicas con mi capacidad multilingue.
        </p>

        {/* Experience timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`group relative ${exp.featured ? 'lg:grid lg:grid-cols-3 lg:gap-8' : ''}`}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-border to-transparent lg:hidden" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center lg:hidden">
                {exp.featured && <Star className="w-2.5 h-2.5 text-primary fill-primary" />}
              </div>

              {/* Content */}
              <div className={`pl-14 lg:pl-0 ${exp.featured ? 'lg:col-span-3' : ''}`}>
                <div className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all ${exp.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  
                  {exp.featured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      <Star className="w-3 h-3 fill-current" />
                      Posicion Actual
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Logros clave:</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <p className="text-foreground font-medium mb-2">
            Quieres saber mas sobre mi experiencia?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Hablemos
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
