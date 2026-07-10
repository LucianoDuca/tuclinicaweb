import { AGENCIA } from "@/lib/agency";

export default function PageHero({
  eyebrow,
  titulo,
  descripcion,
}: {
  eyebrow: string;
  titulo: string;
  descripcion?: string;
}) {
  return (
    <section className="px-6 py-16 text-center md:py-20">
      <div className="mx-auto max-w-2xl">
        <p
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
          style={{ color: AGENCIA.colores.primario }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: AGENCIA.colores.acento }}
          />
          {eyebrow}
        </p>
        <h1
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          style={{ color: AGENCIA.colores.tinta }}
        >
          {titulo}
        </h1>
        {descripcion && (
          <p className="mx-auto mt-4 max-w-xl text-slate-600">{descripcion}</p>
        )}
      </div>
    </section>
  );
}
