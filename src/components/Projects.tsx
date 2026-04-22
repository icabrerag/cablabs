import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión",
    description: "Plataforma con Next.js + FastAPI para manejar pagos, gastos y proyectos.",
    stack: ["Next.js", "FastAPI", "MySQL"],
  },
  {
    id: "2",
    title: "CabLabs",
    description: "Web personal con enfoque en marca profesional y proyectos.",
    stack: ["Next.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle title="Proyectos" eyebrow="Portafolio" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id} delay={project.id.length * 0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.02] hover:border-emerald-400/30">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-white/70">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}