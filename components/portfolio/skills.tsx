"use client";

// Habilidades técnicas con su nivel de progreso
const skills = [
  { name: "HTML", level: 85, color: "bg-orange-500" },
  { name: "CSS", level: 80, color: "bg-blue-500" },
  { name: "Python", level: 70, color: "bg-yellow-500" },
  { name: "Git / GitHub", level: 75, color: "bg-gray-400" },
  { name: "Linux", level: 65, color: "bg-amber-600" },
  { name: "Ciberseguridad Básica", level: 60, color: "bg-green-500" },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tecnologías y herramientas que he aprendido y continúo desarrollando
          </p>
        </div>

        {/* Grid de habilidades */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-foreground font-medium">{skill.name}</h3>
                <span className="text-primary text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>
              
              {/* Barra de progreso */}
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-700 ease-out group-hover:opacity-80`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
