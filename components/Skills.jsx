import skills from "@/data/skills";
import Icon from "./Icon";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
            04 — Toolkit
          </p>
          <h2 className="display mt-3 text-5xl tracking-[-.04em] sm:text-6xl">
            Skills
          </h2>
        </div>

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.group}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-black/40">
                {group.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="focus-ring flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-black/80 shadow-sm transition hover:border-black/25 hover:-translate-y-0.5"
                  >
                    <Icon name={item.icon} size={17} className="text-black/70" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
