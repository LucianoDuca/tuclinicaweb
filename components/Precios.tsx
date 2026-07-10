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
              className={`h-full rounded-2xl border-2 p-8 transition hover:-translate-y-1 ${
                plan.destacado ? "shadow-xl" : "border-neutral-200"
              }`}
              style={
                plan.destacado
                  ? { borderColor: AGENCIA.colores.primario }
                  : undefined
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
              <h3 className="text-lg font-semibold text-neutral-900">
                {plan.nombre}
              </h3>
              <p className="mt-4">
                <span className="text-3xl font-bold text-neutral-900">
                  {plan.setup} €
                </span>
                <span className="text-sm text-neutral-500"> de alta</span>
              </p>
              <p className="text-neutral-600">
                + {plan.mensual} €<span className="text-sm">/mes</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: AGENCIA.colores.primario }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappHrefAgencia()}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition active:scale-95 ${
                  plan.destacado
                    ? "text-white hover:opacity-90"
                    : "border border-neutral-300 text-neutral-900 hover:bg-neutral-50"
                }`}
                style={plan.destacado ? { backgroundColor: AGENCIA.colores.primario } : undefined}
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
