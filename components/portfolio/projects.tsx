import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "EcoProcure IQ",
    description:
      "A sustainability-driven supplier selection tool that evaluates vendors using cost, lead time, delivery reliability, quality, transport distance, packaging impact, and CO₂ footprint.",
    image: "/images/project-1.jpg",
    tech: ["Sustainable Procurement", "ESG Analytics", "Supplier Risk Scoring"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
  {
    title: "Lean Six Sigma Warehouse Waste Analysis",
    description:
      "Applied DMAIC methodology to analyze warehouse process waste, identify root causes of delays and rework, and propose measurable improvements for operational efficiency.",
    image: "/images/project-2.jpg",
    tech: ["Lean Six Sigma", "DMAIC", "Process Optimization", "Root Cause Analysis"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
  {
    title: "Sustainable SC Traceability",
    description:
      "Built a practical logistics-tech project that tracks green hydrogen batches from production to certification, using supply chain data, carbon-intensity indicators, document verification, and dashboard reporting.",
    image: "/images/project-3.jpg",
    tech: ["React", "MySQL", "IPFS", "Ethereum"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
]

const otherProjects = [
  {
    title: "Carbon Emission Calculator",
    description:
      "Built a logistics emission analysis tool to compare transport modes, calculate CO₂ impact by shipment route, and support sustainable logistics planning through dashboard-based insights.",
    tech: ["MySQL", "JavaScript", "Power Query"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
  {
    title: "Green Network Design and Facility Location ",
    description:
      "Comparative analysis of which problems arise if network and facility location design are not green.",
    tech: ["Network Design", "Facility Location", "Sustainability"],
    github: "https://github.com",
  },
  {
    title: "Sustainability in maritime networks",
    description:
      "Case study conducted to determine the sustainability in maritime networks with implementation of wind-assisted ship propulsion technology.",
    tech: ["Real-Time Simulation", "Python", "WASP"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
  {
    title: "IoT based air pollution monitoring system",
    description:
      "Air pollution monitoring system for warehouses to be implemented using Internet of Things.",
    tech: ["React", "GitHub API", "Microcontrollers"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
  {
    title: "Last-Mile Delivery Sustainability Optimizer",
    description:
      "A project comparing delivery route options based on distance, emissions, vehicle type, and delivery time.",
    tech: ["KPI visuals", "Python", "Data Visualization"],
    github: "https://github.com",
  },
  {
    title: "Supplier Sustainability Scorecard",
    description:
      "A dashboard that ranks suppliers based on sustainability and operational performance.",
    tech: ["CO₂ footprint", "ESG", "SAP MM"],
    github: "https://github.com",
    external: "https://marzan.info",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-xl">03.</span>
          Some Things I&apos;ve Built
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative aspect-video rounded overflow-hidden group ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? "md:left-0 md:text-left" : "md:right-0 md:text-right"
                } z-20`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-5">
                  <Link href={project.external} className="hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <div className="bg-card p-6 rounded shadow-lg mb-5">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-5 ${
                    index % 2 === 1 ? "" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "" : "md:justify-end"}`}>
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Link"
                    >
                      <Github size={22} />
                    </Link>
                  )}
                  {project.external && (
                    <Link
                      href={project.external}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={22} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-center text-2xl font-bold text-foreground mb-2">
          Other Noteworthy Projects
        </h3>
        <p className="text-center text-primary font-mono text-sm mb-12">view the archive</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card p-7 rounded flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="text-primary" size={40} strokeWidth={1} />
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Link"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                  {project.external && (
                    <Link
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mt-6">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
