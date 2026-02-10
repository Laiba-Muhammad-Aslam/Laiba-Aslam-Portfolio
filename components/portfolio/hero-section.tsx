"use client"

import { Coffee, ChevronDown } from "lucide-react"

function SteamWisp({ delay = 0, left = "50%" }: { delay?: number; left?: string }) {
  return (
    <div
      className="absolute bottom-full opacity-0"
      style={{ left, animationDelay: `${delay}s` }}
    >
      <div className="animate-steam animate-steam-drift">
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" className="text-[var(--steam)]">
          <path
            d="M10 40C10 40 5 30 5 20C5 10 10 0 10 0C10 0 15 10 15 20C15 30 10 40 10 40Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </svg>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Coffee grain texture overlay */}
      <div className="coffee-texture absolute inset-0 pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mt-6">
          {/* Coffee cup icon with steam */}
          <div className="relative inline-block mb-8">
            <div className="relative">
              <SteamWisp delay={0} left="30%" />
              <SteamWisp delay={0.5} left="50%" />
              <SteamWisp delay={1} left="70%" />
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center border border-border">
                <Coffee className="w-10 h-10 text-[var(--crema)]" />
              </div>
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-[var(--steam)]">Fueling Code</span>
            <br />
            <span className="text-[var(--crema)]">with Caffeine</span>
          </h1>
          
          {/* Subtitle/Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            Hi, I'm <span className="text-[var(--crema)] font-semibold">Laiba</span>, an Application Engineer turning ideas into smooth, scalable web experiences. Powered by coffee and clean code.
          </p>
          
          {/* Code snippet style tagline */}
          <div className="inline-block bg-secondary/50 border border-border rounded-lg px-6 py-3 mb-12">
            <code className="font-mono text-sm md:text-base text-muted-foreground">
              <span className="text-[var(--crema)]">const</span>{" "}
              <span className="text-[var(--steam)]">developer</span> = {"{"}
              <span className="text-accent"> passion</span>: <span className="text-[var(--crema)]">"∞"</span>,
              <span className="text-accent"> coffee</span>: <span className="text-[var(--crema)]">"essential"</span>
              {"}"}
            </code>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
