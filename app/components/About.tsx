"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Años de experiencia" },
  { value: "10+", label: "Proyectos completados" },
  { value: "9+", label: "Tecnologías dominadas" },
  { value: "100%", label: "Compromiso" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Quien soy</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre mi</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Profesional en tecnológia con formacion en{" "}
              <span className="text-white font-medium">Ingenieria en Sistemas</span>,
              y experiencia en desarrollo de software, infraestructura tecnológica
              y soporte técnico.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trabajo con tecnologías como Python, Java y JavaScript desarrollando
              aplicaciones modernas con React, Node.js y Docker. Tengo experiencia
              en administración de bases de datos MySQL y control de versiones con Git.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Conocimientos en infraestructura de redes, soporte técnico
              y mantenimiento de equipos. Desarrollo continuo de conocimientos en
              seguridad de la información y ciberseguridad.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Developer", "DevOps", "Redes y Telecomunicaciones", "Ciberseguridad"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm border border-blue-500/30 bg-blue-500/10 text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-gray-800 bg-gray-900/50 text-center"
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
