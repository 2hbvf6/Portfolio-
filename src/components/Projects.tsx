import { otherProjects, projects } from "@/data/content";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="rounded-2xl border border-line bg-white/60 p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-2xl text-ink">{project.title}</h3>
        {project.publication && (
          <span className="whitespace-nowrap rounded-full bg-turmeric/15 px-3 py-1 text-xs text-turmeric">
            {project.publication.label}
          </span>
        )}
      </div>
      <p className="mt-2 text-ink-soft">{project.tagline}</p>

      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-soft/70">
            Problem
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
            {project.problem}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-ink-soft/70">
            What I built
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
            {project.built}
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <div className="text-xs uppercase tracking-wide text-ink-soft/70">
          Technologies
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs uppercase tracking-wide text-ink-soft/70">
          Key features
        </div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
          {project.keyFeatures.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <details className="mt-5 rounded-lg border border-line/70 bg-paper/60 p-4 text-sm">
        <summary className="cursor-pointer text-signal">
          Technical details
        </summary>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {project.technicalDetails}
        </p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          <span className="text-ink">My contribution: </span>
          {project.contribution}
        </p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          <span className="text-ink">Result: </span>
          {project.result}
        </p>
        {project.publication && (
          <p className="mt-3 leading-relaxed text-ink-soft">
            <span className="text-ink">Publication note: </span>
            {project.publication.note}
          </p>
        )}
      </details>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="rounded-full border border-line px-4 py-2 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="rounded-full border border-line px-4 py-2 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Live Demo
          </a>
        )}
        {project.publication && (
          <a
            href={project.publication.url}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-turmeric px-4 py-2 text-paper transition-transform hover:-translate-y-0.5"
          >
            View IEEE Publication ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-t border-line bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl text-ink">Featured Projects</h2>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Case studies for the projects I can speak to in depth — problem,
          approach, and outcome.
        </p>

        <div className="mt-10 space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-xl text-ink">Other Projects</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <a
                key={p.title}
                href={p.githubUrl}
                className="rounded-xl border border-line bg-white/60 p-4 text-sm transition-colors hover:border-signal"
              >
                <div className="text-ink">{p.title}</div>
                <div className="mt-1 text-ink-soft">{p.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
