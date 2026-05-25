import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/project-1.jpg",
    tech: ["React", "Styled Components", "Express", "Spotify API"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Build a Spotify Connected App",
    description:
      "A comprehensive video course that walks through building a full-stack web app with the Spotify Web API. Learn how to create an OAuth-authenticated Node.js app with Express and a React frontend.",
    image: "/images/project-2.jpg",
    tech: ["React", "Express", "Spotify API", "Heroku"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, and npm.",
    image: "/images/project-3.jpg",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
    github: "https://github.com",
    external: "https://example.com",
  },
]

const otherProjects = [
  {
    title: "Integrating Algolia Search",
    description:
      "Building a custom search experience for a content site using Algolia&apos;s instantsearch.js.",
    tech: ["Algolia", "JavaScript", "Sass"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single-page web app for helping people find fun activities near them using Ticketmaster&apos;s Discovery API.",
    tech: ["React", "Ticketmaster API", "Leaflet"],
    github: "https://github.com",
  },
  {
    title: "Building a Headless CMS Blog",
    description:
      "Building a blog with a headless CMS and static site generator. Exploring different CMS options and deployment strategies.",
    tech: ["Next.js", "Contentful", "Vercel"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "OctoProfile",
    description:
      "A nicer look at your GitHub profile and repositories. Includes data visualization of your top languages, starred repos, and sort options.",
    tech: ["React", "GitHub API", "Chart.js"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Google Keep Clone",
    description:
      "A simple Google Keep clone built with React and Firebase. Features note creation, editing, archiving, and real-time sync.",
    tech: ["React", "Firebase", "Material UI"],
    github: "https://github.com",
  },
  {
    title: "Apple Music Embeddable Widget",
    description:
      "Embeddable web player widget for Apple Music that works across platforms and can be customized to match any site&apos;s design.",
    tech: ["MusicKit.js", "TypeScript", "SASS"],
    github: "https://github.com",
    external: "https://example.com",
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
