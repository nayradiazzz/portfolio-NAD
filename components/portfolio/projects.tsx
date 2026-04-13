"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A responsive online store with shopping cart functionality and secure checkout process.",
    problem: "Local businesses needed an affordable way to sell products online without complex e-commerce solutions.",
    technologies: ["JavaScript", "PHP", "SQL", "CSS"],
    role: "Full-Stack Developer",
    outcome: "Learned end-to-end e-commerce development from database design to payment integration.",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task tracker with real-time updates and team management features.",
    problem: "Remote teams struggled to keep track of shared tasks and deadlines across time zones.",
    technologies: ["Java", "JavaScript", "SQL", "HTML"],
    role: "Backend Developer",
    outcome: "Deepened understanding of RESTful API design and database optimization.",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Language Learning Dashboard",
    description: "Interactive platform for tracking language learning progress with gamification elements.",
    problem: "Language learners lacked motivation to maintain consistent study habits.",
    technologies: ["JavaScript", "CSS", "HTML", "PHP"],
    role: "Frontend Developer",
    outcome: "Explored UX patterns that increase user engagement and retention.",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Restaurant Booking System",
    description: "Multi-language reservation system for a chain of international restaurants.",
    problem: "Restaurant chains with international locations needed a unified booking system supporting multiple languages.",
    technologies: ["PHP", "SQL", "JavaScript", "CSS"],
    role: "Full-Stack Developer",
    outcome: "Applied my multilingual skills to create a truly internationalized application.",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Selected Projects</h2>
        </div>
        
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A showcase of projects that demonstrate my technical skills and problem-solving approach. 
          Each project represents a learning journey and a step forward in my development career.
        </p>

        {/* Projects grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className={`group relative p-6 lg:p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover-glow transition-all duration-300 ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
              }`}
            >
              {/* Project number */}
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="space-y-4">
                {/* Title and links */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{project.description}</p>

                {/* Problem solved */}
                <div className="p-3 rounded-lg bg-secondary/50 border-l-2 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Problem: </span>
                    {project.problem}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="mt-6 lg:mt-0 space-y-4">
                  {/* Role */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">My Role</h4>
                    <p className="text-foreground">{project.role}</p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Outcome & Learning</h4>
                    <p className="text-foreground">{project.outcome}</p>
                  </div>

                  {/* View project button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 group/btn"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* View more on GitHub */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View more projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
