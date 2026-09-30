"use client";

import { Code, Shield, Globe, Cpu } from "lucide-react";

// Intereses del estudiante con iconos
const interests = [
  { icon: Code, label: "Programación", description: "Desarrollo de software y aplicaciones" },
  { icon: Shield, label: "Ciberseguridad", description: "Protección de sistemas e información" },
  { icon: Globe, label: "Idiomas", description: "Aprendizaje de nuevos idiomas" },
  { icon: Cpu, label: "Tecnología", description: "Nuevas tecnologías y tendencias" },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Descripción */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Soy un estudiante entusiasta con una gran pasión por la tecnología y la resolución de problemas.
              Desde que descubrí el mundo de la programación, supe que quería dedicar mi carrera a crear 
              soluciones innovadoras que impacten positivamente en la sociedad.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Mi interés por la ciberseguridad nació de entender la importancia de proteger la información
              en un mundo cada vez más digital. Me fascina aprender sobre vulnerabilidades, ethical hacking
              y las mejores prácticas de seguridad.
            </p>

            {/* Objetivo profesional */}
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Objetivo Profesional
              </h3>
              <p className="text-muted-foreground">
                Estudiar Ingeniería de Sistemas y especializarme en ciberseguridad para contribuir 
                a la creación de un entorno digital más seguro y confiable.
              </p>
            </div>
          </div>

          {/* Tarjetas de intereses */}
          <div className="grid sm:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-foreground font-semibold mb-2">
                  {interest.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
