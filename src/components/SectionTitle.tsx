type SectionTitleProps = {
  title: string;
  eyebrow?: string;
};

export default function SectionTitle({
  title,
  eyebrow,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}