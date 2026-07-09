import { AGENCIA } from "@/lib/agency";

export default function Demo() {
  return (
    <section id="demo" className="bg-neutral-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.primario }}
          >
            Trabajo real
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Así queda una clínica con nosotros
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div
            className="flex h-40 items-center justify-center text-white"
            style={{
              background: `linear-gradient(135deg, #0E7C7B, #F4A259)`,
            }}
          >
            <span className="text-sm text-white/80">
              Clínica Dental Sonrisalud — demo
            </span>
          </div>
          <div className="flex items-center justify-between p-6">
            <div>
              <h3 className="font-semibold text-neutral-900">
                Clínica Dental Sonrisalud
              </h3>
              <p className="text-sm text-neutral-500">
                Landing completa: reseñas, servicios, mapa y WhatsApp
              </p>
            </div>
            <a
              href={AGENCIA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: AGENCIA.colores.primario }}
            >
              Ver demo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
