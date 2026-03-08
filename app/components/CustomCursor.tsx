"use client"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)

    // Hover detection on interactive elements
    const addHover = () => {
      document.querySelectorAll("a, button, [role=button]").forEach(el => {
        el.addEventListener("mouseenter", () => setHovering(true))
        el.addEventListener("mouseleave", () => setHovering(false))
      })
    }
    addHover()
    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let frame: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      setTrail(prev => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "#10b981" : "#3b82f6"}`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          opacity: 0.7,
        }}
      />
      {/* Dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          borderRadius: "50%",
          background: hovering ? "#10b981" : "#3b82f6",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "width 0.1s, height 0.1s, background 0.2s",
        }}
      />
    </>
  )
}
