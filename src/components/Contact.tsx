import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Conexión" title="Contacto" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-white/75">
            Si quieres conocer mi trabajo, colaborar en un proyecto o simplemente
            conectar, aquí irá mi sección de contacto con redes, GitHub, LinkedIn y correo.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]">
              GitHub
            </button>

            <button className="rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white hover:text-black">
              LinkedIn
            </button>

            <button className="rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white hover:text-black">
              Email
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}