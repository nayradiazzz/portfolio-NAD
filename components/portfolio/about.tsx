"use client"

import { Globe, Code, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About text */}
          <div>
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 text-pretty">
              I&apos;m a creative developer who believes code should transcend linguistic barriers. 
              Born curious and raised multicultural, I blend technical precision with 
              global sensibility.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              My journey through <span className="text-foreground">Spanish, English, French, and Korean</span> taught me 
              that every language shapes how we think and create. I bring this perspective to 
              every line of code — building experiences that resonate across cultures and connect 
              people worldwide.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Multilingual Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Fluent in 4 languages, enabling seamless collaboration with international teams and clients.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Full-Stack Foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Solid grounding in both frontend and backend technologies, from UI to database.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Creative Problem Solver</h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about finding elegant solutions and bringing fresh perspectives to challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
