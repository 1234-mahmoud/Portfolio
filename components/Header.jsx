"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const links = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Skills", "/#skills"],
  ["Contact", "/#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/90 text-[#111111] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-black text-white">
            ME
          </span>
          <span className="hidden text-sm font-semibold tracking-[.08em] sm:block">
            MAHMOUD ELBALHI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-black/60 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link focus-ring hover:text-black"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/1234-mahmoud"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-black transition hover:border-black"
          >
            <Icon name="github" size={16} /> GitHub
          </a>
        </nav>

        {/*----------------- Mobile ------------------*/}
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-full border border-black/15 p-2 md:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] min-h-screen bg-white px-5 py-5 text-[#111111] sm:px-8 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="focus-ring flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-black text-white">
                  ME
                </span>
                <span className="hidden text-sm font-semibold tracking-[.08em] sm:block">
                  MAHMOUD ELBALHI
                </span>
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-full border border-black/15 p-2"
              >
                <Icon name="close" size={20} />
              </button>
            </div>
            <nav className="mt-20 flex flex-col gap-7">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl text-black/80 transition hover:text-black"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://github.com/1234-mahmoud"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#111111] px-5 py-3 font-semibold text-white"
              >
                <Icon name="github" size={18} className="text-white"/> GitHub
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
