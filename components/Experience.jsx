import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-black/10 bg-[#ebe9e2] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
            03 — Experience
          </p>
          <h2 className="display mt-3 text-5xl tracking-[-.04em] sm:text-6xl">
            Experience
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="grid gap-3 py-8 sm:grid-cols-[1fr_2fr]"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-sm text-black/55">{job.company}</p>
                <p className="mt-1 text-xs uppercase tracking-[.15em] text-black/40">
                  {job.period}
                </p>
              </div>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-black/65"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
