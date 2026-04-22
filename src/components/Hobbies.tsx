import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Hobby = {
  id: string;
  title: string;
  description: string;
};

const hobbies: Hobby[] = [
  {
    id: "1",
    title: "Música",
    description: "Exploro mi lado creativo a través de la música, el ritmo y la identidad de Flow.",
  },
  {
    id: "2",   
    title: "Gaming",
    description: "Me gusta el gaming como espacio de entretención, estrategia y conexión con comunidades.",
  },
  {
    id: "3",
    title: "Streaming y contenido",
    description: "Me interesa comunicar, compartir ideas y construir presencia digital de forma auténtica.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Lado personal" title="Hobbies y actividades" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.map((hobby) => (
          <Reveal key={hobby.title} delay={hobby.id.length * 0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30">
              <h3 className="text-xl font-semibold">{hobby.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{hobby.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}