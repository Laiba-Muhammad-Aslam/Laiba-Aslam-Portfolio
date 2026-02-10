"use client"

import { Coffee } from "lucide-react"

const skillCategories = [
  {
    name: "Espresso Shot",
    subtitle: "Frontend Technologies",
    description: "Strong & Bold",
    skills: ["HTML", "CSS", "JS", "Bootstrap", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    icon: "☕",
  },
  {
    name: "Cold Brew",
    subtitle: "Backend Technologies",
    description: "Smooth & Reliable",
    skills: ["Node.js", "Express Js",  "MongoDB"],
    icon: "🧊",
  },
  // {
  //   name: "Cappuccino",
  //   subtitle: "DevOps & Cloud",
  //   description: "Layered & Balanced",
  //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
  //   icon: "☁️",
  // },
  {
    name: "Americano",
    subtitle: "Tools & Practices",
    description: "Classic & Essential",
    skills: ["Git & Github", "Postman", "Vercel", "Netlify", "Bitbucket", "Jira", "Jest", "Sonar qube", "Mocha - Chai"],
    icon: "⚡",
  },
]

function SkillCard({ category }: { category: typeof skillCategories[0] }) {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-[var(--crema)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--crema)]/5">
      {/* Menu-style header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-xl font-bold text-[var(--steam)]">{category.name}</h3>
          </div>
          <p className="text-sm font-mono text-[var(--crema)]">{category.subtitle}</p>
        </div>
        <span className="text-xs text-muted-foreground italic">{category.description}</span>
      </div>
      
      {/* Divider styled like a menu line */}
      <div className="border-t border-dashed border-border my-4" />
      
      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-secondary text-sm font-mono text-foreground rounded-md border border-border hover:border-[var(--crema)]/30 hover:bg-secondary/80 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Coffee bean decorative element */}
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--coffee-bean)] rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Section header */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-4">
            <Coffee className="w-4 h-4 text-[var(--crema)]" />
            <span className="text-sm font-mono text-muted-foreground">Skills Menu</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--steam)] mb-4">
            Brewed Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I've refined through hands-on experience and continuous learning.
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
