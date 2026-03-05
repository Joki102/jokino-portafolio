"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm tracking-widest uppercase"
      >
        ¡Desarrollo de software modernos y soluciones tecnológicas!
      </motion.div>

      {/* Name */}
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

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-blue-400 text-lg md:text-xl tracking-widest uppercase mb-6 font-light"
      >
        Cierre de pensum Ingenieria en Sistemas &nbsp;-&nbsp; Junior Developer
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
      >
        Desarrollo software moderno y soluciones de infraestructura tecnologica
        con React, Node.js, Python y Docker.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300"
          style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-lg font-medium text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-white transition-all duration-300"
        >
          Contacto
        </a>
      </motion.div>

      {/* Scroll indicator */}
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
