export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Inicio", href: "#" },
    { label: "Sobre mi", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-800/60 bg-gray-950/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2563eb, #10b981)" }}
              >
                J
              </div>
              <span className="font-bold text-white text-lg">Jokino Martin</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Estudiante de Ingenieria en Sistemas especializado en desarrollo de software,
              infraestructura y soluciones tecnologicas modernas.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Navegacion
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-gray-600 text-xs">GitHub</span>
                <a
                  href="https://github.com/Joki102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  github.com/Joki102
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-600 text-xs">Email</span>
                <span className="text-gray-400 text-sm">jokino@email.com</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/Joki102"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-white text-xs transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-white text-xs transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            {year} Jokino Martin. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Hecho con Next.js, TypeScript y Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
