"use client"

const technicalSkills = {
  "Frontend": ["HTML", "CSS", "JavaScript"],
  "Backend": ["Java", "PHP", "SQL"],
  "Tools & Methods": ["Git", "REST APIs", "Responsive Design"],
}

const languageSkills = [
  { name: "Spanish", level: "Native", flag: "🇪🇸" },
  { name: "English", level: "Fluent (C1)", flag: "🇬🇧" },
  { name: "French", level: "Fluent (B2)", flag: "🇫🇷" },
  { name: "Korean", level: "Intermediate (B1)", flag: "🇰🇷" },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Skills & Expertise</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
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
            <h3 className="text-xl font-semibold text-foreground mb-8">Languages</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Multilingualism is my superpower — enabling me to work with diverse teams and understand cultural nuances in design and UX.
            </p>
            <div className="space-y-4">
              {languageSkills.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={`${lang.name} flag`}>
                      {lang.flag}
                    </span>
                    <span className="font-medium text-foreground">{lang.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>

            {/* Why languages matter */}
            <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Speaking multiple languages means understanding different ways of thinking — 
                crucial for creating user experiences that truly resonate globally.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
