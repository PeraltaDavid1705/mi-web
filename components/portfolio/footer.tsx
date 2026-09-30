"use client";

import { Github, Instagram, MessageCircle } from "lucide-react";

// Enlaces de redes sociales - Actualizar con tus URLs
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tunombre",
    ariaLabel: "Visitar perfil de GitHub",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/tunombre",
    ariaLabel: "Visitar perfil de Instagram",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    ariaLabel: "Enviar mensaje por WhatsApp",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Nombre */}
          <div className="text-center md:text-left">
            <a
              href="#inicio"
              className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              {"<Dev />"}
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Estudiante de Ingeniería de Sistemas
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Tu Nombre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
