import { AGENCIA } from "@/lib/agency";
import PresupuestoButton from "@/components/PresupuestoButton";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(135deg, ${AGENCIA.colores.primario} 0%, ${AGENCIA.colores.primario} 60%, #0A2540 140%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-white/90">
          Para clínicas dentales de España
        </p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {AGENCIA.eslogan}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          Diseñamos, publicamos y mantenemos la web de tu clínica por una
          cuota mensual fija, sin permanencia. Y lo mejor: ves tu web
          terminada, con tus datos reales, antes de invertir un solo euro.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02]"
            style={{ color: AGENCIA.colores.primario }}
          >
            Ver una demo real
          </a>
          <PresupuestoButton variant="outline">
            Hablar por WhatsApp
          </PresupuestoButton>
        </div>
      </div>
    </section>
  );
}
