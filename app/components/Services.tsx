"use client"
import { motion } from "framer-motion"

const services = [
  {
    icon: "Web",
    title: "Desarrollo Web",
    desc: "Aplicaciones modernas y responsivas con React, Node.js y JavaScript. Desde landing pages hasta sistemas completos.",
    tags: ["React", "Node.js", "TypeScript"],
    color: "#3b82f6",
  },
  {
    icon: "Net",
    title: "Infraestructura",
    desc: "Implementación, configuración y administración de redes, infraestructura, cableado estructurado, instalación de sistema de videovigilancia.",
    tags: ["Linux", "Docker", "Redes"],
    color: "#10b981",
  },
  {
    icon: "Fix",
    title: "Soporte Técnico",
    desc: "Instalación de sistemas operativos, mantenimiento preventivo y correctivo de equipos de computo.",
    tags: ["Hardware", "Windows", "Linux"],
    color: "#f59e0b",
  },
  {
    icon: "DB",
    title: "Bases de Datos",
    desc: "Diseño, optimización y administración de bases de datos relacionales para proyectos de cualquier escala.",
    tags: ["MySQL", "SQL", "Modelado"],
    color: "#8b5cf6",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Que ofrezco</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Servicios</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900/60 border border-gray-800 p-8 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, ${service.color}15, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ backgroundColor: `${service.color}18`, border: `1px solid ${service.color}30` }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${service.color}15`, color: service.color, border: `1px solid ${service.color}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
