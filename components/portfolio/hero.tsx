// Checkpoint: Hero section updated with logistics/sustainability focus
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono mb-5 animate-fade-in">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
          Marzan.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-8 text-balance">
          I make recipies to turn dry logistics data into green decisions.
        </h2>
        <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-12">
          I enjoy making the bridge between logistics and sustainability to build smarter, 
          cleaner, and more transparent supply chains. Currently, I&apos;m developing a 
          framework for Green Hydrogen SC traceability.
        </p>
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 rounded border border-primary px-7 py-4 text-primary hover:bg-primary/10 transition-all duration-300"
        >
          Check out my work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
