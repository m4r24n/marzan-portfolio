"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Acme Corp",
    title: "Senior Full Stack Developer",
    date: "Jan 2023 — Present",
    description: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everlane, and Nike",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities",
      "Provide leadership within engineering department through code reviews, documentation, and technical guidance",
    ],
  },
  {
    company: "TechStart",
    title: "Full Stack Developer",
    date: "May 2021 — Dec 2022",
    description: [
      "Developed and maintained code for in-house and client websites primarily using React, TypeScript, and Next.js",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility",
      "Implemented responsive designs and optimized application performance",
      "Collaborated with designers and product managers to improve user experience",
    ],
  },
  {
    company: "Digital Agency",
    title: "Junior Developer",
    date: "Jul 2019 — Apr 2021",
    description: [
      "Collaborated with a small team of student designers to spearhead a new brand identity",
      "Built and maintained internal design tools using JavaScript and HTML/CSS",
      "Developed and shipped highly interactive web applications for multiple enterprise clients",
      "Architected and implemented the front-end of various web applications",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    date: "2017 — 2019",
    description: [
      "Designed and developed websites for small businesses and personal clients",
      "Created responsive, mobile-first designs using modern CSS techniques",
      "Managed multiple projects simultaneously while meeting strict deadlines",
      "Built lasting relationships with clients through exceptional communication and quality work",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-xl">02.</span>
          Where I&apos;ve Worked
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  activeTab === index
                    ? "text-primary bg-secondary border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="py-3 md:px-6 min-h-[350px]">
            <h3 className="text-xl font-medium text-foreground mb-1">
              {experiences[activeTab].title}{" "}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mb-6">
              {experiences[activeTab].date}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
