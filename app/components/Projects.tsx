"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Joki102/starred?per_page=6&sort=created")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const langColor: Record<string, string> = {
    TypeScript: "#3b82f6",
    JavaScript: "#facc15",
    Python: "#22c55e",
    CSS: "#a78bfa",
    HTML: "#f97316",
    Java: "#ED8B00",
    Shell: "#89e051",
  };

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">GitHub</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyectos</h2>
          <p className="text-gray-500 text-sm">Repositorios destacados</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center text-gray-500">No se encontraron repositorios.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-blue-500/40 p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              >
                {/* Top glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.07), transparent 60%)" }}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
                      {repo.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  {repo.stargazers_count > 0 && (
                    <span className="text-yellow-400 text-xs font-medium bg-yellow-400/10 border border-yellow-400/20 px-2 py-1 rounded-full whitespace-nowrap">
                      {repo.stargazers_count} stars
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {repo.description || "Proyecto desarrollado en GitHub"}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 4).map(topic => (
                      <span
                        key={topic}
                        className="text-xs bg-gray-800/80 text-gray-400 border border-gray-700/60 px-2.5 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-800/60">
                  {repo.language ? (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: langColor[repo.language] ?? "#6b7280" }}
                      />
                      {repo.language}
                    </span>
                  ) : (
                    <span />
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                  >
                    Ver repositorio
                    <span className="text-base leading-none">&#8594;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Joki102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-white text-sm transition-all duration-300"
          >
            Ver todos los repositorios en GitHub
            <span>&#8594;</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
