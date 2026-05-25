// Version checkpoint - Marzanul Islam portfolio
import Image from "next/image"

const skills = [
  "SAP MM & EWM",
  "Business Insights",
  "Six Sigma",
  "AI at SCN",
  "Sustainability",
  "Leadership",
  "Traceability Frameworks",
  "Blockchain Network",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! My name is Marzan and I enjoy developing Supply Chain Networks that 
              makes Earth a little more breathable. My interest in logistics started back 
              in 2014 when I, along with some friends took the charge of making a local 
              concert happen — turns out having access to right things at the right moment 
              can create magic!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of having learned 
              in-depth of modern logistics and supply chain at{" "}
              <span className="text-primary">Universität Duisburg-Essen</span>. My main 
              focus these days is building accessible, sustainable and efficient networks 
              of supply chain and stepping into the world of logistics, the backbone of 
              every industry to ever exist!
            </p>
            <p>
              Here are a few things I&apos;ve been working on recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 rounded overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-primary rounded -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
