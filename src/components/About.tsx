import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Presentación" title="Sobre mí" />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="leading-7 text-white/75">
              Soy Ignacio Cabrera, desarrollador enfocado en construir soluciones
              digitales con tecnologías modernas como Next.js, FastAPI y MySQL.
              Me interesa crear productos funcionales, escalables y visualmente bien resueltos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="leading-7 text-white/75">
              CabLabs nace como una forma de reunir mi perfil profesional, mis
              proyectos, mis intereses y mi identidad digital en un solo lugar,
              con una estética simple, intuitiva y entretenida.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}