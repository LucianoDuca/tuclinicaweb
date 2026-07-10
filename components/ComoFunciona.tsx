import { AGENCIA } from "@/lib/agency";
import Reveal from "@/components/Reveal";

const PASOS = [
  {
    numero: "1",
    titulo: "Vemos tu clínica en Google",
    descripcion:
      "Analizamos tus reseñas y tu presencia online actual, sin compromiso.",
  },
  {
    numero: "2",
    titulo: "Te armamos una demo real",
    descripcion:
      "Con el nombre, las fotos y las reseñas de tu propia clínica, para que veas el resultado antes de pagar nada.",
  },
  {
    numero: "3",
    titulo: "La activamos en 48-72 horas",
    descripcion:
      "Si te gusta, conectamos tu dominio y queda funcionando con WhatsApp, mapa y reserva de cita.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.acento }}
          >
            Cómo funciona
          </p>
          <h2
            className="mt-2 text-3xl font-bold sm:text-4xl"
            style={{ color: AGENCIA.colores.tinta }}
          >
            De cero a tu web funcionando, sin vueltas
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PASOS.map((paso, i) => (
            <Reveal key={paso.numero} delay={i * 120} className="text-center">
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-[0_10px_28px_-10px_rgba(15,76,117,0.6)]"
                style={{ backgroundColor: AGENCIA.colores.primario }}
              >
                {paso.numero}
              </div>
              <h3
                className="font-semibold"
                style={{ color: AGENCIA.colores.tinta }}
              >
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {paso.descripcion}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
