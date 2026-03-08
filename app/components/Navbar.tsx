"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VisitorCounter from "./VisitorCounter";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Sobre mi", href: "#about" },s
  { label: "Habilidades", href: "#skills" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Experiencia", href: "#timeline" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/60 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + counter */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #2563eb, #10b981)" }}
          >
            J
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors leading-none">
              Jokino
            </span>
            <VisitorCounter />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                active === link.href
                  ? "text-white bg-blue-500/15 border border-blue-500/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/60"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
        >
          Contactame
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800 px-6 py-4 flex flex-col gap-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.href); setMenuOpen(false); }}
              className="text-gray-300 hover:text-white py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
