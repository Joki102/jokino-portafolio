"use client"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = "service_hdo6lso"
const EMAILJS_TEMPLATE_ID = "template_mpq6eec"
const EMAILJS_PUBLIC_KEY = "nyanHj1NB3oIE541Q"
const WHATSAPP_NUMBER = "50248772106"
const MY_EMAIL = "jokinomartin13@gmail.com"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus("sending")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("sent")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Jokino, vi tu portafolio y me gustaria contactarte.")}`

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">Hablemos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contacto</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tienes un proyecto en mente o quieres colaborar? Enviame un mensaje y te respondo pronto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <a href={`mailto:${MY_EMAIL}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm group-hover:bg-blue-500/20 transition-colors">
                @
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Email</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">
                  {MY_EMAIL}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">WhatsApp</p>
                <p className="text-white font-medium group-hover:text-green-400 transition-colors text-sm">
                  Enviar mensaje directo
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                MX
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Ubicacion</p>
                <p className="text-white font-medium text-sm">Guatemala</p>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Joki102"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-white text-sm transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-green-800 hover:border-green-500 text-green-600 hover:text-green-400 text-sm transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4 text-green-400 font-bold text-lg">
                  OK
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mensaje enviado</h3>
                <p className="text-gray-400 text-sm">Gracias, te respondere a la brevedad.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 focus:border-blue-500 outline-none p-3.5 rounded-lg text-white placeholder-gray-600 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Correo</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 focus:border-blue-500 outline-none p-3.5 rounded-lg text-white placeholder-gray-600 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Mensaje</label>
                  <textarea
                    placeholder="Cuentame sobre tu proyecto..."
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 focus:border-blue-500 outline-none p-3.5 rounded-lg text-white placeholder-gray-600 transition-colors resize-none text-sm"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Hubo un error al enviar. Intentalo de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95 disabled:opacity-50"
                  style={{ background: "linear-gradient(90deg, #2563eb, #0ea5e9)" }}
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
