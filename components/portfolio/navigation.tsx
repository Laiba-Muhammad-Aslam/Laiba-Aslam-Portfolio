"use client"

import { useState, useEffect } from "react"
import { Coffee, Menu, X, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  // { name: "Volunteer", href: "#volunteer" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-[var(--crema)]/50 transition-colors">
              {/* <Coffee className="w-5 h-5 text-[var(--crema)]" /> */}
              <Code className="w-5 h-5 text-[var(--crema)]" />
            </div>
            <span className="font-bold text-lg text-[var(--steam)] hidden sm:block">
              Laiba<span className="text-[var(--crema)]">.</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-[var(--steam)] transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button
                variant="outline"
                className="border-[var(--crema)] text-[var(--crema)] hover:bg-[var(--crema)] hover:text-background transition-all bg-transparent"
              >
                <Coffee className="w-4 h-4 mr-2" />
                Let's Chat
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-[var(--steam)] hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full bg-[var(--crema)] text-background hover:bg-[var(--steam)]">
                  <Coffee className="w-4 h-4 mr-2" />
                  Let's Chat
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
