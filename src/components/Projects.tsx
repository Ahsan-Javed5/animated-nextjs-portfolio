import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-24">
      <Reveal>
        <p className="mb-3 text-sm text-brass-bright">Selected work</p>
        <h2 className="max-w-2xl font-display text-3xl text-bone md:text-5xl">
          Things I&apos;ve shipped and studied.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-ink p-8 transition-colors duration-300 hover:border-brass md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl text-bone md:text-3xl">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-hairline px-3 py-1 text-xs text-bone-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-bone transition-colors group-hover:border-brass group-hover:text-brass-bright"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-bone transition-colors group-hover:border-brass group-hover:text-brass-bright"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FolderGit2 size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
