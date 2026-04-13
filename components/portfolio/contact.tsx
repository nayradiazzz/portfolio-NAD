"use client"

import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contacto
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* CTA text */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Lista para construir algo{" "}
              <span className="gradient-text">increible juntas?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Ya seas una startup buscando talento fresco, una agencia que necesita una 
              desarrolladora multilingue, o una empresa expandiendose internacionalmente,
              me encantaria saber de ti.
            </p>
            <p className="text-muted-foreground mb-8">
              Disponible para <span className="text-primary font-medium">posiciones a tiempo completo</span>, 
              {" "}<span className="text-primary font-medium">practicas</span>, y 
              {" "}<span className="text-primary font-medium">proyectos freelance</span> en todo el mundo.
            </p>

            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group rounded-full shadow-lg shadow-primary/25"
              asChild
            >
              <a href="mailto:nayra@example.com" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Hablemos
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:nayra@example.com" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    nayra@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    linkedin.com/in/nayra-atencia
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">GitHub</h4>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    github.com/nayra-atencia
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Ubicacion</h4>
                  <p className="text-foreground font-medium">
                    Abierta a remoto y reubicacion
                  </p>
                </div>
              </div>
            </div>

            {/* Language availability */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Disponible en:</span>
              </div>
              <p className="text-sm text-foreground/80">
                Espanol, Ingles, Frances y Coreano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
