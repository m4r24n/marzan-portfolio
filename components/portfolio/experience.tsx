"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Amazon",
    title: "CPT Auditor",
    date: "Jan 2022 — Sept 2022",
    description: [
      "Monitoring outbound logistics processes and material flow to support timely CPT operations.",
      "Handling of confidential operational data, supported issue identification in a fast-paced warehouse environment.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities",
      "Provide leadership within small team through on-demand tasks and guidance",
    ],
  },
  {
    company: "WebAppick LLC",
    title: "Research Analyst",
    date: "May 2018 — Aug 2020",
    description: [
      "Research, technical writing, content analysis, product communication, usability, and customer understanding.",
      "Manually testing wordpress plugins developed by the team to ensure compatibility",
      "Product documentation, and customer-facing technical materials for eCommerce plugin products",
      "Collaborated with designers and programmers to improve user experience",
    ],
  },
  {
    company: "Jonakir Alo",
    title: "Project Organizer and Webmaster",
    date: "Jan 2016 — April 2018",
    description: [
      "Collaborated with a small team of trainees to preapare and organize events for non-profit organization working to develop rural Bangladesh.",
      "Built and maintained company website using JavaScript and HTML/CSS.",
      "Trained interns on-field to navigate and understand various project tasks.",
      "Architected and implemented the front-end of web applications as well as designed project blueprints",
    ],
  },
  {
    company: "Freelance",
    title: "Interactive Article Writer",
    date: "Jun 2015 — Aug 2016",
    description: [
      "Developed interesting stories to drive targeted traffic using Search Engine Optimizaation",
      "Created responsive, mobile-first designs using modern CSS techniques",
      "Managed multiple projects simultaneously while meeting strict deadlines",
      "Built lasting relationships with client through exceptional communication and quality work",
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
