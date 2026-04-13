"use client"

import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* CTA text */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to build something{" "}
              <span className="gradient-text">amazing together?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Whether you&apos;re a startup looking for fresh talent, an agency seeking a 
              multilingual developer, or a company expanding internationally — 
              I&apos;d love to hear from you.
            </p>
            <p className="text-muted-foreground mb-8">
              Available for <span className="text-foreground font-medium">full-time positions</span>, 
              {" "}<span className="text-foreground font-medium">internships</span>, and 
              {" "}<span className="text-foreground font-medium">freelance projects</span> worldwide.
            </p>

            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              asChild
            >
              <a href="mailto:hello@example.com">
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/yourname
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">GitHub</h4>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    github.com/yourname
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Location</h4>
                  <p className="text-foreground">
                    Open to remote & relocation
                  </p>
                </div>
              </div>
            </div>

            {/* Language availability */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Available in:</span> Spanish, English, French & Korean
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
