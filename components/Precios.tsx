import { AGENCIA, whatsappHrefAgencia } from "@/lib/agency";
import Reveal from "@/components/Reveal";

const PLANES = [
  {
    nombre: "Básico",
    setup: 99,
    mensual: 19,
    destacado: false,
    items: [
      "Landing a medida (1 página)",
      "Dominio y hosting incluidos",
      "Botón de WhatsApp y formulario",
      "1 cambio mensual incluido",
    ],
  },
  {
    nombre: "Profesional",
    setup: 149,
    mensual: 29,
    destacado: true,
    items: [
      "Landing a medida (1 página + legales)",
      "Dominio y hosting incluidos",
      "Reseñas de Google integradas",
      "3 cambios mensuales incluidos",
      "Informe mensual de visitas",
    ],
  },
  {
    nombre: "Premium",
    setup: 299,
    mensual: 49,
    destacado: false,
    items: [
      "Hasta 3 páginas",
      "Reseñas con actualización automática",
      "Reserva de cita online",
      "Cambios mensuales ilimitados razonables",
      "Informe mensual + llamada trimestral",
    ],
  },
];

export default function Precios() {
  return (
    <section id="precios" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANES.map((plan, i) => (
            <Reveal key={plan.nombre} delay={i * 100}>
            <div
              className="h-full rounded-3xl border p-8 backdrop-blur-md transition hover:-translate-y-1"
              style={
                plan.destacado
                  ? {
                      borderColor: AGENCIA.colores.acento,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      boxShadow: `0 26px 70px -30px ${AGENCIA.colores.primario}80`,
                    }
                  : {
                      borderColor: "rgba(255,255,255,0.7)",
                      backgroundColor: "rgba(255,255,255,0.55)",
                    }
              }
            >
              {plan.destacado && (
                <p
                  className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: AGENCIA.colores.acento }}
                >
                  Recomendado
                </p>
              )}
              <h3
                className="text-lg font-semibold"
                style={{ color: AGENCIA.colores.tinta }}
              >
                {plan.nombre}
              </h3>
              <p className="mt-4 text-xs font-medium tracking-wide text-slate-500 uppercase">
                Inversión inicial
              </p>
              <p>
                <span
                  className="text-3xl font-bold"
                  style={{ color: AGENCIA.colores.tinta }}
                >
                  {plan.setup} €
                </span>
              </p>
              <p className="text-slate-600">
                + {plan.mensual} €<span className="text-sm">/mes, todo incluido</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: AGENCIA.colores.acento }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappHrefAgencia()}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition active:scale-95 ${
                  plan.destacado
                    ? "text-white shadow-[0_12px_34px_-12px_rgba(15,76,117,0.7)] hover:brightness-110"
                    : "border border-white/70 bg-white/50 backdrop-blur-md hover:bg-white/80"
                }`}
                style={
                  plan.destacado
                    ? { backgroundColor: AGENCIA.colores.primario }
                    : { color: AGENCIA.colores.primario }
                }
              >
                Empezar con {plan.nombre}
              </a>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={className}
      style={style}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
