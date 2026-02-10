"use client"

import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    stage: "Green Bean",
    title: "Web Developer - Intern",
    company: "CodSoft",
    location: "Remote",
    period: "Oct 2023 - Nov 2023",
    description: "Started my journey learning the fundamentals of web development. Built responsive interfaces using HTML, CSS and JS.",
    icon: "🌱",
  },
  {
    stage: "Roasting",
    title: "MERN STACK Intern",
    company: "10 Pearls",
    location: "Remote",
    period: "March 2025 - April 2025",
    description: "Developed a full-stack MERN Notes application with integrated testing and code quality practices to support scalable development.",
    icon: "🔥",
  },
  // {
  //   stage: "Grinding",
  //   title: "Senior Developer",
  //   company: "CloudPress Inc.",
  //   location: "Remote",
  //   period: "2021 - 2023",
  //   description: "Architected scalable solutions for enterprise clients. Mentored junior developers and established best practices for code quality and testing.",
  //   icon: "⚙️",
  // },
  {
    stage: "The Perfect Pour",
    title: "Associate Application Engineer",
    company: "Next Generation Innovation ",
    location: "Karachi",
    period: "August 2025 - Present",
    description: "Working as a Frontend Developer on a micro-frontend architecture, building and integrating independent UI modules for scalable and maintainable web applications.",
    icon: "☕",
  },
]

function TimelineItem({ experience, index, isLast }: { experience: typeof experiences[0]; index: number; isLast: boolean }) {
  const isEven = index % 2 === 0
  
  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
      {/* Content card */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left w-full md:w-auto`}>
        <div className={`bg-card border border-border rounded-xl p-6 hover:border-[var(--crema)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--crema)]/5 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
          {/* Stage label */}
          <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
            <span className="text-2xl">{experience.icon}</span>
            <span className="text-sm font-mono text-[var(--crema)]">{experience.stage}</span>
          </div>
          
          <h3 className="text-xl font-bold text-[var(--steam)] mb-1">{experience.title}</h3>
          <p className="text-foreground font-medium mb-2">{experience.company}</p>
          
          <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start flex-wrap`}>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </span>
            <span className="font-mono">{experience.period}</span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>
        </div>
      </div>
      
      {/* Timeline node */}
      <div className="relative flex flex-col items-center my-4 md:my-0">
        {/* Coffee bean node */}
        <div className="w-12 h-12 rounded-full bg-secondary border-4 border-[var(--crema)] flex items-center justify-center z-10 shadow-lg shadow-[var(--crema)]/20">
          <span className="text-lg">{experience.icon}</span>
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="hidden md:block absolute top-full w-0.5 h-32 bg-gradient-to-b from-[var(--crema)] to-border" />
        )}
      </div>
      
      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background coffee beans pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-8 h-12 bg-[var(--coffee-bean)] rounded-full rotate-45" />
        <div className="absolute top-40 right-20 w-6 h-10 bg-[var(--coffee-bean)] rounded-full -rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-10 h-14 bg-[var(--coffee-bean)] rounded-full rotate-30" />
        <div className="absolute bottom-20 right-1/3 w-7 h-11 bg-[var(--coffee-bean)] rounded-full -rotate-45" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-4">
            <Briefcase className="w-4 h-4 text-[var(--crema)]" />
            <span className="text-sm font-mono text-muted-foreground">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--steam)] mb-4">
            From Bean to Cup
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Like brewing coffee, my career has grown through learning, iteration, and constant refinement.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-16">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
