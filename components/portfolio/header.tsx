"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          AC
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary font-mono text-xs">0{index + 1}.</span>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="rounded border border-primary px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary font-mono text-xs">0{index + 1}.</span>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="rounded border border-primary px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
