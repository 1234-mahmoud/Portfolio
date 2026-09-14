import Image from "next/image";
import data from "@/data/data";
import Icon from "./Icon";

export default function Projects() {
  return (
    <section
      id="work"
      className="border-y border-black/10 bg-[#ebe9e2] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
              02 — Selected work
            </p>
            <h2 className="display mt-3 text-5xl tracking-[-.04em] sm:text-7xl">
              Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/55">
            A selection of web applications I&apos;ve built across e-commerce
            and real estate, from React and Next.js front ends to full stack
            builds.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <article
              key={project.title}
              className="project-card group overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d8d6cf]">
                <Image
                  src={project.img}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-image object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold backdrop-blur">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-[10px] uppercase tracking-[.15em] text-black/35">
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-5 text-black/55">
                  {project.description}
                </p>
                <div className="mt-1 flex gap-2">
                  <a
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold transition hover:border-black"
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <Icon name="code" size={13} />
                  </a>
                  <a
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#111111] px-3 py-1.5 text-xs font-semibold !text-white transition hover:bg-[#2a2a2a]"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <Icon name="arrowUpRight" size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
