"use client"

import { Heart, Users, Code, BookOpen } from "lucide-react"

const volunteerActivities = [
  {
    icon: Users,
    title: "Code & Coffee Meetups",
    description: "Organizing monthly developer meetups that combine coding sessions with local coffee tastings.",
  },
  {
    icon: Code,
    title: "Open Source Contributor",
    description: "Active contributor to accessibility-focused libraries and developer tooling projects.",
  },
  {
    icon: BookOpen,
    title: "Tech Mentor",
    description: "Mentoring aspiring developers from underrepresented backgrounds through Code2040 and similar programs.",
  },
]

export function VolunteerSection() {
  return (
    <section id="volunteer" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-[var(--crema)]" />
            <span className="text-sm font-mono text-muted-foreground">Giving Back</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--steam)] mb-4">
            Community Impact
          </h2>
        </div>
        
        {/* Minimalist content block */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            Beyond code, I believe in brewing a stronger tech community. Here's how I give back:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {volunteerActivities.map((activity) => (
              <div key={activity.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-[var(--crema)]/50 transition-colors">
                  <activity.icon className="w-6 h-6 text-[var(--crema)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--steam)] mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
          
          {/* Quote */}
          <blockquote className="mt-16 text-center">
            <p className="text-xl italic text-foreground/80 mb-4">
              "The best code is written when we lift others as we climb."
            </p>
            <cite className="text-sm font-mono text-muted-foreground">— Coffee-fueled wisdom</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
