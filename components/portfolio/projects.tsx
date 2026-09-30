"use client";

import { ExternalLink, Code, Shield, FileCode } from "lucide-react";

// Proyectos del estudiante
const projects = [
  {
    title: "Página Web Personal",
    description:
      "Mi primer portafolio web creado con HTML, CSS y JavaScript. Un proyecto para aprender desarrollo web frontend y mostrar mis habilidades.",
    icon: Code,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Laboratorio de Ciberseguridad",
    description:
      "Entorno virtualizado para practicar técnicas de seguridad informática, incluyendo análisis de vulnerabilidades y configuración segura de sistemas.",
    icon: Shield,
    tags: ["Linux", "VirtualBox", "Kali Linux"],
    link: "#",
  },
  {
    title: "Ejercicios de Python",
    description:
      "Colección de scripts y programas en Python para automatización, resolución de problemas algorítmicos y práctica de programación.",
    icon: FileCode,
    tags: ["Python", "Algoritmos", "Automatización"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado para desarrollar mis habilidades
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icono del proyecto */}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="text-primary" size={28} />
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón ver proyecto */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium group-hover:gap-3 transition-all"
              >
                Ver proyecto
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
