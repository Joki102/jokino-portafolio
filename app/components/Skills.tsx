"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React / Next.js", level: 85, color: "#61DAFB" },
  { name: "JavaScript / TypeScript", level: 88, color: "#F7DF1E" },
  { name: "Python", level: 80, color: "#3776AB" },
  { name: "Node.js", level: 78, color: "#68A063" },
  { name: "Docker", level: 70, color: "#2496ED" },
  { name: "MySQL", level: 82, color: "#4479A1" },
  { name: "Redes / Infraestructura", level: 75, color: "#10b981" },
  { name: "Git", level: 90, color: "#F05032" },
]

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-mono" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-green-400 text-sm tracking-widest uppercase mb-3">Nivel</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Habilidades</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
