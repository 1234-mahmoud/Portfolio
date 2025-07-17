'use client'
import { AiOutlineCloseCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const showSide = () => setShowNav(true);
  const hideSide = () => setShowNav(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/80">
      {/* Mobile menu icon */}
      <div className="block lg:hidden text-3xl text-white cursor-pointer">
        <AiOutlineUnorderedList onClick={showSide} />
      </div>

      {/* Logo (visible on lg) */}
      <div className="font-bold text-xl text-white">
        <Link href="/" className="hover:text-gray-300 transition duration-300">
          Mahmoud Elbalhi
        </Link>
      </div>

      {/* Desktop Nav (lg and up) */}
      <nav className="hidden lg:flex gap-8 text-white font-medium">
        <Link href="/projects_" className="hover:text-gray-300 transition duration-300">
          My Projects
        </Link>
        <a href="#contact" className="hover:text-gray-300 transition duration-300">
          Contact Me
        </a>
      </nav>

      {/* Sidebar Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 text-white lg:hidden ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="font-semibold text-lg">Menu</span>
          <AiOutlineCloseCircle
            onClick={hideSide}
            className="text-2xl cursor-pointer hover:text-red-400 transition"
          />
        </div>

        <div className="flex flex-col p-6 gap-6 text-lg">
          <Link href="/projects_" className="hover:text-indigo-400 transition" onClick={hideSide}>
            My Projects
          </Link>
          <a href="#contact" className="hover:text-indigo-400 transition" onClick={hideSide}>
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
