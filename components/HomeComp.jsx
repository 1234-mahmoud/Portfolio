import Image from "next/image";
import Link from "next/link";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./projects";
import Icon from "./Icon";

export default function HomeComp() {
  return (
    <main className="page-grid min-h-screen overflow-hidden bg-[#f5f3ee]">
      <section className="relative flex min-h-[92svh] items-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-screen lg:pb-24">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_80%_20%,rgba(216,255,62,.35)_0,transparent_32%),radial-gradient(circle_at_8%_85%,rgba(109,93,252,.12)_0,transparent_28%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            <p className="reveal mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-black/50">
              <span className="h-px w-10 bg-[#111111]" /> Full Stack JavaScript Developer
            </p>
            <h1 className="display reveal reveal-delay-1 max-w-5xl text-[clamp(3.2rem,9vw,7.5rem)] font-normal leading-[.9] tracking-[-.05em] text-[#111111]">
              Building interfaces
              <br />
              <span className="text-black/35">people remember.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              I&apos;m Mahmoud Elbalhi, a Full Stack JavaScript Developer and Computer
              Science graduate from Damietta University. I build modern web
              applications with React.js, Next.js, Node.js, Express.js, and
              PostgreSQL, focused on scalable, high-quality solutions.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="focus-ring flex justify-center items-center gap-3 rounded-full bg-[#111111] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5"
              >
                <span className="text-white text-center block">Explore my work</span>
                <Icon name="arrow" size={18} className="text-white"/>
              </a>
              {/* <a
                href="/Mahmoud-Elbalhi-Resume.pdf"
                download
                className="focus-ring inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-3 font-semibold text-black transition hover:border-black/50"
              >
                Download CV <Icon name="download" size={16} />
              </a> */}
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-sm lg:mb-1">
            <div className="absolute -inset-3 rounded-[2rem] border border-black/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-black/5 shadow-sm">
              <Image
                src="/mahmoud.jpg"
                alt="Mahmoud Elbalhi"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* <div className="absolute bottom-5 left-5 right-5 flex items-end gap-2 text-white">
                <Icon name="location" size={14} />
                <p className="text-sm font-medium">Damietta, Egypt</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="overflow-hidden border-y border-black/10 bg-[#d8ff3e] py-3 text-black">
        <div className="marquee flex w-max items-center gap-8 text-xs font-black uppercase tracking-[.2em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              React.js <b>✦</b> Next.js <b>✦</b> Node.js <b>✦</b> Express.js <b>✦</b>{" "}
              PostgreSQL <b>✦</b> Tailwind CSS <b>✦</b>
            </span>
          ))}
        </div>
      </div> */}

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
              01 — About
            </p>
          </div>
          <div>
            <h2 className="display max-w-4xl text-4xl leading-tight tracking-[-.035em] sm:text-6xl">
              I care about the details that turn a working website into a{" "}
              <span className="text-black/35">convincing digital experience.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              I&apos;m a Computer Science graduate from Damietta University with
              hands-on experience gained through a full stack internship at
              ITSOLERA PVT LTD. I&apos;ve contributed to web applications in the
              e-commerce and real estate domains, and I enjoy keeping the code
              understandable, maintainable, and fast — not just making things
              look good.
            </p>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[.2em] text-black/40">Education</dt>
                <dd className="mt-1 font-semibold">B.Sc. Computer Science</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[.2em] text-black/40">University</dt>
                <dd className="mt-1 font-semibold">Damietta University, 2023</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[.2em] text-black/40">Languages</dt>
                <dd className="mt-1 font-semibold">Arabic (Native), English</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Projects />
      <Experience />
      <Skills />

      {/* <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
                Let&apos;s build something useful
              </p>
              <h2 className="display mt-5 max-w-3xl text-4xl leading-[1] tracking-[-.04em] text-[#111111] sm:text-6xl">
                Good interfaces are felt before they are noticed.
              </h2>
            </div>
            <Link
              href="#contact"
              className="focus-ring inline-flex w-fit items-center gap-3 rounded-full bg-[#111111] px-6 py-3 font-bold text-white"
            >
              Start a conversation <Icon name="arrowUpRight" size={18} />
            </Link>
          </div>
        </div>
      </section> */}

      <Contact />
    </main>
  );
}
