"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Simula contador con localStorage
    // Para un contador real usa: countapi.xyz o una DB como Supabase
    const stored = localStorage.getItem("visit_count")
    const current = stored ? parseInt(stored) + 1 : 1
    localStorage.setItem("visit_count", current.toString())

    // Animacion de conteo
    let start = 0
    const end = current + 1240 // base de visitas simulada
    const duration = 1500
    const step = Math.ceil((end - start) / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, 16)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 text-xs text-gray-500"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      <span>{count !== null ? count.toLocaleString() : "..."} visitas</span>
    </motion.div>
  )
}
