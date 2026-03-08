"use client"
import { motion } from "framer-motion"

const items = [
  {
    year: "2024 - actualidad",
    title: "Desarrollador Web",
    place: "Freelance",
    desc: "Desarrollo de aplicaciones web modernas con React, Next.js y Node.js para clientes diversos.",
    color: "#3b82f6",
    type: "work",
  },
  {
    year: "2024 - actualidad",
    title: "Soporte Tecnico e Infraestructura",
    place: "Empresa financiera",
    desc: "redes, enlaces, servidores Linux, soporte tecnico y mantenimiento de equipos.",
    color: "#10b981",
    type: "work",
  },
  {
    year: "2019 - 2024",
    title: "Ingenieria en Sistemas",
    place: "Universidad",
    desc: "Formacion en desarrollo de software, bases de datos, redes y arquitectura de sistemas.",
    color: "#6366f1",
    type: "edu",
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Trayectoria</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experiencia</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800 md:left-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div
                  className="absolute left-6 w-3 h-3 rounded-full border-2 border-gray-950 -translate-x-1/2 mt-5 md:left-1/2"
                  style={{ backgroundColor: item.color }}
                />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div
                    className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300"
                    style={{ borderColor: `${item.color}30` }}
                  >
                    <span
                      className="text-xs font-mono tracking-widest uppercase"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold mt-1 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs mb-3">{item.place}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
