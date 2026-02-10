"use client"

import { ExternalLink, Github, Layers } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "MindPad",
    description: "Developed a full-stack Notes Web Application using the MERN STACK (MongoDB, Express.js, React.js, Node.js).",
    image: "https://static.vecteezy.com/system/resources/previews/025/729/945/non_2x/note-taking-app-icon-in-illustration-vector.jpg",
    tags: ["React", "Node.js", "Express Js", "Mongodb", "Jest", "SonarQube"],
    github: "https://github.com/Laiba-Muhammad-Aslam/laiba-mern-10pshine",
  },
  {
    title: "Chatify",
    description: "Built Chatify, a ChatGPT-style conversational UI using React and Express, integrating the Gemini API and local storage to persist user conversations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZ5xKqCX9cUKqFfXN8WCUHXtrbC_feltjWA&s",
    tags: ["React", "Node.js", "Express", "Gemini Api"],
    github: "https://github.com/Laiba-Muhammad-Aslam/Chatify",
  },
  {
    title: "Spotify Apis",
    description: "Built a backend that mirrors Spotify's core logic—specifically user authentication, music management, and album creation.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/3840px-Spotify_icon.svg.png",
    tags: ["Node.js", "Express", "Monngodb"],
    github: "https://github.com/Laiba-Muhammad-Aslam/spotify_clone",
  },
  {
    title: "Google Job Search",
    description: "Developed a high-fidelity Google Job Search UI clone using React and Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/3840px-Spotify_icon.svg.png",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/Laiba-Muhammad-Aslam/google-job-search",
  },
]

function PolaroidCard({ project }: { project: typeof projects[0] }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(Math.random() * 4 - 2);
  }, []);

  return (
    <div className="group relative">
      {/* Polaroid frame */}
      <div className="bg-[var(--steam)] p-3 pb-12 rounded-sm shadow-xl transform transition-all duration-500 hover:rotate-0 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[var(--crema)]/10"
        style={{
          // transform: `rotate(${Math.random() * 4 - 2}deg)`,
          transform: `rotate(${rotation}deg)`
        }}
      >
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/3] bg-secondary">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-[var(--crema)] hover:text-background transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            { project.live &&
              <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-[var(--crema)] hover:text-background transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            }
          </div>
        </div>
        
        {/* Caption area (like polaroid text area) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-[var(--steam)]">
          <h3 className="font-bold text-background text-lg">{project.title}</h3>
        </div>
      </div>
      
      {/* Description card that slides up */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary text-[var(--crema)] rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-4">
            <Layers className="w-4 h-4 text-[var(--crema)]" />
            <span className="text-sm font-mono text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--steam)] mb-4">
            Fresh Brews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A gallery of projects crafted with care, each one a unique blend of creativity and technical expertise.
          </p>
        </div>
        
        {/* Polaroid grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <PolaroidCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
