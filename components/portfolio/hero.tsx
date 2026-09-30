"use client";

import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
    >
      {/* Contenido principal */}
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge de presentación */}
        <div className="inline-block mb-6 opacity-0 animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
            Aspirante a Ingeniero de Sistemas
          </span>
        </div>

        {/* Nombre del estudiante */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Hola, soy{" "}
          <span className="text-primary">Tu Nombre</span>
        </h1>

        {/* Frase de presentación */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200 text-pretty">
          Estudiante apasionado por la programación, la ciberseguridad y las nuevas tecnologías.
          Construyendo el futuro, una línea de código a la vez.
        </p>

        {/* Botón de contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <a
            href="#contacto"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Contáctame
          </a>
          <a
            href="#proyectos"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-200"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
