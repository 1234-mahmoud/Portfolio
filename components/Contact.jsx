import Icon from "./Icon";

const socials = [
  ["GitHub", "https://github.com/1234-mahmoud", "github"],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/mahmoud-elbalhi-86a3661b9/",
    "linkedin",
  ],
  ["WhatsApp", "https://wa.me/201064218085", "whatsapp"],
  ["Email", "mailto:mahmoudelbalhi0@gmail.com?subject=Hello%20Mahmoud", "mail"],
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_.65fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-black/45">
              05 — Contact
            </p>
            <h2 className="display mt-5 max-w-3xl text-5xl leading-[.95] tracking-[-.04em] text-[#111111] sm:text-7xl">
              Have a project in mind?
            </h2>
            <a
              href="mailto:mahmoudelbalhi0@gmail.com"
              className="mt-8 inline-block text-lg text-black/60 underline decoration-black/20 underline-offset-8 transition hover:text-black"
            >
              mahmoudelbalhi0@gmail.com
            </a>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-md text-sm leading-7 text-black/55">
              Feel free to reach out about front-end and full stack
              opportunities, freelance collaborations, or any questions about
              my work.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {socials.map(([label, href, icon]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring flex items-center justify-between rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:border-black/30 hover:bg-black/[.03]"
                >
                  <span>{label}</span>
                  <Icon name={icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-black/10 pt-5 text-xs text-black/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Mahmoud Elbalhi</span>
          {/* <span>Damietta, Egypt</span> */}
        </div>
      </div>
    </footer>
  );
}
