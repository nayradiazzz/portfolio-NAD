"use client"

import { Globe, Code, Sparkles, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Sobre Mi
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About text */}
          <div>
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 text-pretty">
              Soy una desarrolladora creativa que cree que el codigo debe trascender las barreras linguisticas. 
              Nacida curiosa y criada multicultural, combino precision tecnica con 
              sensibilidad global.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Mi viaje a traves del <span className="text-primary font-medium">espanol, ingles, frances y coreano</span> me enseno 
              que cada idioma moldea como pensamos y creamos. Traigo esta perspectiva a 
              cada linea de codigo, construyendo experiencias que resuenan a traves de culturas y conectan 
              personas en todo el mundo.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Comunicacion Multilingue</h3>
                <p className="text-sm text-muted-foreground">
                  Fluida en 4 idiomas, permitiendo colaboracion perfecta con equipos y clientes internacionales.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Base Full-Stack</h3>
                <p className="text-sm text-muted-foreground">
                  Solida formacion tanto en tecnologias frontend como backend, desde UI hasta base de datos.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Solucionadora Creativa</h3>
                <p className="text-sm text-muted-foreground">
                  Apasionada por encontrar soluciones elegantes y aportar perspectivas frescas a los desafios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
