import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { AGENCIA, whatsappHrefAgencia } from "@/lib/agency";

export const metadata = {
  title: `Nosotros · ${AGENCIA.nombre}`,
  description:
    "Quién está detrás de ClinicaWeb y por qué nos enfocamos en webs para clínicas dentales.",
};

const VALORES = [
  {
    titulo: "Transparencia",
    descripcion:
      "Precios claros, sin letra chica y sin permanencia. Si algo no te sirve, lo decimos de frente.",
  },
  {
    titulo: "Trato directo",
    descripcion:
      "Hablás con la persona que realmente construye y mantiene tu web, no con un call center.",
  },
  {
    titulo: "Resultados, no excusas",
    descripcion:
      "Cada demo se hace con tus datos reales antes de pedirte que decidas nada.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        titulo="Quién está detrás de ClinicaWeb"
      />

      <section className="px-6 py-16 md:py-24">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <img
            src="/team/luciano.webp"
            alt="Luciano Duca, fundador de ClinicaWeb"
            className="h-36 w-36 shrink-0 rounded-full object-cover shadow-lg ring-4 ring-white transition hover:scale-105"
            style={{ boxShadow: `0 0 0 4px ${AGENCIA.colores.primario}22` }}
          />
          <div>
            <h2
              className="text-xl font-bold"
              style={{ color: AGENCIA.colores.tinta }}
            >
              Luciano Duca
            </h2>
            <p
              className="text-sm font-medium"
              style={{ color: AGENCIA.colores.acento }}
            >
              Fundador y desarrollador
            </p>
            <p className="mt-3 text-slate-600">
              Me ocupo personalmente de cada clínica que trabaja con
              nosotros, del primer boceto al soporte del día a día. Antes de
              dedicarme a las clínicas dentales ayudé a otros negocios a
              resolver problemas reales con su presencia online: desde
              ordenar la gestión de cientos de familias en un centro
              educativo, hasta modernizar la forma en que un comercio atiende
              a sus clientes. Esa experiencia es la que hoy pongo al
              servicio de tu clínica: no vendo una plantilla bonita,
              resuelvo que consigas más pacientes.
            </p>
            <p className="mt-3 text-slate-600">
              La idea de ClinicaWeb nace de algo simple: hay clínicas con
              pacientes reales y buenas reseñas que todavía no tienen una web
              a la altura. Mi trabajo es cerrar esa brecha, una clínica a la
              vez.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-5xl">
          <h3
            className="text-center text-lg font-semibold"
            style={{ color: AGENCIA.colores.tinta }}
          >
            Cómo trabajamos
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALORES.map((valor, i) => (
              <Reveal key={valor.titulo} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/70 bg-white/60 p-6 text-center backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/80">
                  <h4
                    className="font-semibold"
                    style={{ color: AGENCIA.colores.tinta }}
                  >
                    {valor.titulo}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {valor.descripcion}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-xl text-center">
          <a
            href={whatsappHrefAgencia()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(15,76,117,0.6)] transition hover:brightness-110 active:scale-95"
            style={{ backgroundColor: AGENCIA.colores.primario }}
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
