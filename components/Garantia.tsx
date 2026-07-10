import { AGENCIA } from "@/lib/agency";
import Reveal from "@/components/Reveal";

const COMPROMISOS = [
  {
    titulo: "Ves antes de invertir",
    descripcion:
      "Preparamos tu web con tus datos reales y la ves funcionando. Solo si te convence, hablamos de activarla.",
    icon: EyeIcon,
  },
  {
    titulo: "Sin permanencia",
    descripcion:
      "Pagas mes a mes. Si algún día no quieres seguir, lo dejas sin penalización y sin dar explicaciones.",
    icon: UnlockIcon,
  },
  {
    titulo: "Tu dominio es tuyo",
    descripcion:
      "Pase lo que pase, el dominio queda a tu nombre. Te lo llevas siempre, con o sin nosotros.",
    icon: KeyIcon,
  },
  {
    titulo: "Una sola clínica por zona",
    descripcion:
      "No trabajamos con tu competencia de al lado. Si tu zona está libre, es tuya en exclusiva.",
    icon: PinIcon,
  },
];

export default function Garantia() {
  return (
    <section className="px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.primario }}
          >
            Por qué es una decisión segura
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Nuestro compromiso, sin letra chica
          </h2>
          <p className="mt-3 text-neutral-600">
            Cuando un paciente busca «dentista» en tu ciudad, o te encuentra
            a ti… o encuentra a otra clínica. Nosotros nos encargamos de que
            te encuentre a ti — y asumimos el riesgo para que probarlo no te
            cueste nada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISOS.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ backgroundImage: AGENCIA.degradeRaro }}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-neutral-900">{item.titulo}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UnlockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <circle cx="8" cy="15" r="4" />
      <path d="m10.85 12.15 8.5-8.5M15 7l3 3M18 4l2 2" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
