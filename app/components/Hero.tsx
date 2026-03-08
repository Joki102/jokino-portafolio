"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = [
  "Ingeniero en Sistemas",
  "Full Stack Developer",
  "DevOps Engineer",
  "Especialista en Redes",
  "Ciberseguridad",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm tracking-widest uppercase"
      >
        Transformando ideas en codigo y soluciones tecnologicas.
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
      >
        <span className="text-white">Jokino</span>{" "}
        <span style={{ background: "linear-gradient(90deg, #3b82f6, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Martin
        </span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-lg md:text-xl tracking-widest uppercase mb-6 font-light h-8 flex items-center gap-1"
      >
        <span style={{ color: "#3b82f6" }}>{displayed}</span>
        <span
          className="w-0.5 h-5 bg-blue-400 animate-pulse"
          style={{ animationDuration: "0.8s" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
      >
        Desarrollo software moderno y soluciones de infraestructura tecnologica
        con React, Node.js, Python y Docker.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
        >
          Ver proyectos
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-8 py-3 rounded-lg font-medium text-green-400 border border-green-500/40 hover:bg-green-500/10 transition-all duration-300"
        >
          Descargar CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-lg font-medium text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-white transition-all duration-300"
        >
          Contacto
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>

    </section>
  )
}
