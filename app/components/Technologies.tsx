"use client";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaDocker, FaGitAlt, FaNodeJs, FaShieldAlt, FaNetworkWired } from "react-icons/fa";
import { SiJavascript, SiReact, SiMysql, SiTypescript, SiLinux } from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    color: "#3b82f6",
    items: [
      { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    ],
  },
  {
    label: "Backend",
    color: "#10b981",
    items: [
      { name: "Python", icon: <FaPython size={32} color="#3776AB" /> },
      { name: "Java", icon: <FaJava size={32} color="#ED8B00" /> },
      { name: "Node.js", icon: <FaNodeJs size={32} color="#68A063" /> },
    ],
  },
  {
    label: "DevOps & DB",
    color: "#8b5cf6",
    items: [
      { name: "Docker", icon: <FaDocker size={32} color="#2496ED" /> },
      { name: "MySQL", icon: <SiMysql size={32} color="#4479A1" /> },
      { name: "Git", icon: <FaGitAlt size={32} color="#F05032" /> },
    ],
  },
  {
    label: "Infraestructura",
    color: "#f59e0b",
    items: [
      { name: "Linux", icon: <SiLinux size={32} color="#FCC624" /> },
      { name: "Redes", icon: <FaNetworkWired size={32} color="#94a3b8" /> },
      { name: "Ciberseguridad", icon: <FaShieldAlt size={32} color="#10b981" /> },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tecnologias</h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-sm font-medium tracking-widest uppercase" style={{ color: cat.color }}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              {/* Items */}
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    whileHover={{ scale: 1.06, borderColor: cat.color }}
                    className="bg-gray-900/60 border border-gray-800 p-5 rounded-xl flex flex-col items-center gap-3 cursor-default transition-colors duration-300"
                  >
                    {item.icon}
                    <p className="text-gray-300 text-sm font-medium">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
