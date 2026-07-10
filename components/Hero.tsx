import { AGENCIA } from "@/lib/agency";
import PresupuestoButton from "@/components/PresupuestoButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
          style={{ color: AGENCIA.colores.primario }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: AGENCIA.colores.acento }}
          />
          Para clínicas dentales de España
        </p>

        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          style={{ color: AGENCIA.colores.tinta }}
        >
          Webs para clínicas dentales que{" "}
          <span style={{ color: AGENCIA.colores.acento }}>
            convierten búsquedas en citas
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Diseñamos, publicamos y mantenemos la web de tu clínica por una
          cuota mensual fija, sin permanencia. Y lo mejor: ves tu web
          terminada, con tus datos reales, antes de invertir un solo euro.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(15,76,117,0.6)] transition hover:brightness-110 active:scale-95"
            style={{ backgroundColor: AGENCIA.colores.primario }}
          >
            Ver una demo real
          </a>
          <PresupuestoButton variant="outline">
            Pedir mi demo gratis
          </PresupuestoButton>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <span className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" />
              </svg>
            ))}
          </span>
          Demos reales con reseñas de Google integradas
        </div>
      </div>
    </section>
  );
}
