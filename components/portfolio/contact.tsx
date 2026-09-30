"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Manejador del envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío (reemplazar con lógica real)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });

    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? ¡No dudes en contactarme!
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo nombre */}
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <User size={16} className="text-primary" />
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Tu nombre"
              />
            </div>

            {/* Campo email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail size={16} className="text-primary" />
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* Campo mensaje */}
            <div className="space-y-2">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <MessageSquare size={16} className="text-primary" />
                Mensaje
              </label>
              <textarea
                id="mensaje"
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensaje
                </>
              )}
            </button>

            {/* Mensaje de éxito */}
            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center text-sm">
                ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
