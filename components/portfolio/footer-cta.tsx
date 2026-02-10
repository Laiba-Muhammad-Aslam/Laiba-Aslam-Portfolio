"use client"

import { Coffee, Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Laiba-Muhammad-Aslam",
    color: "hover:bg-[#333] hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/laiba-aslam68/",
    color: "hover:bg-[#0077B5] hover:text-white",
  },
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   href: "https://twitter.com",
  //   color: "hover:bg-[#1DA1F2] hover:text-white",
  // },
]

export function FooterCTA() {
  return (
    <footer id="contact" className="relative py-24 overflow-hidden">
      {/* Coffee grain texture */}
      <div className="coffee-texture absolute inset-0 pointer-events-none" />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--coffee-bean)] via-background to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Coffee cup icon with steam */}
          <div className="relative inline-block mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-[var(--crema)] flex items-center justify-center shadow-lg shadow-[var(--crema)]/30">
              <Coffee className="w-10 h-10 text-background" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--steam)] mb-4">
            Let's Grab a Coffee
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Have an idea? Let's talk code, coffee, and building cool things.
          </p>
          
          {/* Email CTA */}
          <div className="mb-12">
            <a href="mailto:laiba7aslam7@gmail.com">
              <Button 
                size="lg"
                className="bg-[var(--crema)] text-background hover:bg-[var(--steam)] font-semibold text-lg px-8 py-6 rounded-full shadow-lg shadow-[var(--crema)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--crema)]/40 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Say Hello
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 ${social.color}`}
                aria-label={`Connect on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-border mx-auto mb-8" />
          
          {/* Footer credits */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Crafted with <span className="text-[var(--crema)]">♥</span> and plenty of ☕
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono">
              © {new Date().getFullYear()} Laiba Aslam . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
