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
    <section
      className="px-6 py-16 text-center text-white md:py-20"
      style={{
        background: `linear-gradient(135deg, ${AGENCIA.colores.primario} 0%, ${AGENCIA.colores.primario} 65%, #0A2540 140%)`,
      }}
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/90">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {titulo}
        </h1>
        {descripcion && (
          <p className="mx-auto mt-4 max-w-xl text-white/85">{descripcion}</p>
        )}
      </div>
    </section>
  );
}
