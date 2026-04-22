"use client";

import { motion } from "framer-motion";

type HeroProps = {
  title?: string;
  subtitle?: string;
};

export default function Hero({
  title = "CabLabs",
  subtitle = "by Ignacio Cabrera",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]"
      />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-400"
      >
        Portfolio · Developer · Personal Brand
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-4 text-lg text-white/70 md:text-xl"
      >
        {subtitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 max-w-2xl text-white/60"
      >
        Desarrollo, creatividad y construcción de ideas digitales con enfoque moderno.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <a
          href="#proyectos"
          className="rounded-2xl bg-emerald-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
        >
          Ver proyectos
        </a>

        <a
          href="#contacto"
          className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
        >
          Contacto
        </a>
      </motion.div>
    </section>
  );
}