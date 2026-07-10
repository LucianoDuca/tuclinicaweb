import PageHero from "@/components/PageHero";
import ComoFunciona from "@/components/ComoFunciona";
import { AGENCIA, whatsappHrefAgencia } from "@/lib/agency";

export const metadata = {
  title: `Servicios · ${AGENCIA.nombre}`,
  description:
    "Diseño, hosting, mantenimiento y cumplimiento legal para la web de tu clínica dental, todo incluido en una cuota mensual.",
};

const INCLUIDO = [
  {
    titulo: "Landing a medida",
    descripcion:
      "Diseño profesional con tu nombre, tus fotos y tus reseñas reales de Google, pensado para que un paciente pida cita en segundos.",
    icon: DesignIcon,
  },
  {
    titulo: "Hosting, dominio y SSL",
    descripcion:
      "Tu web queda funcionando en tu propio dominio, con candado de seguridad, sin que tengas que administrar nada técnico.",
    icon: ServerIcon,
  },
  {
    titulo: "WhatsApp y llamada directa",
    descripcion:
      "Botón flotante y llamada con un toque, para que cada visita se convierta en una cita, no en una visita perdida.",
    icon: ChatIcon,
  },
  {
    titulo: "Reseñas de Google integradas",
    descripcion:
      "Mostramos tus reseñas reales como prueba social, para que un paciente nuevo confíe antes de escribirte.",
    icon: StarIcon,
  },
  {
    titulo: "Cumplimiento legal",
    descripcion:
      "Aviso legal, política de privacidad y cookies conforme a RGPD y LSSI, incluidos desde el primer día.",
    icon: ShieldIcon,
  },
  {
    titulo: "Mantenimiento mensual",
    descripcion:
      "Cambios de horarios, fotos o servicios incluidos en tu cuota — nos escribís y lo actualizamos nosotros.",
    icon: WrenchIcon,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        titulo="Todo lo que necesita tu clínica, en un solo lugar"
        descripcion="No vendemos una página web suelta: nos encargamos de que tu presencia online funcione, mes a mes."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUIDO.map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: AGENCIA.colores.primario }}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComoFunciona />

      <section
        className="px-6 py-16 text-center text-white md:py-20"
        style={{ backgroundColor: AGENCIA.colores.primario }}
      >
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Tenés dudas sobre qué incluye cada plan?
          </h2>
          <a
            href={whatsappHrefAgencia()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02]"
            style={{ color: AGENCIA.colores.primario }}
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function DesignIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 4v14" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.9 8.4A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
    </svg>
  );
}
