/**
 * Página principal del portafolio
 * 
 * Este archivo importa todos los componentes del portafolio y los renderiza
 * en el orden correcto para crear una experiencia de navegación fluida.
 */

import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <>
      {/* Barra de navegación fija */}
      <Navbar />
      
      {/* Contenido principal */}
      <main>
        {/* Sección Hero / Inicio */}
        <Hero />
        
        {/* Sección Sobre mí */}
        <About />
        
        {/* Sección Habilidades */}
        <Skills />
        
        {/* Sección Proyectos */}
        <Projects />
        
        {/* Sección Contacto */}
        <Contact />
      </main>
      
      {/* Pie de página */}
      <Footer />
    </>
  );
}
