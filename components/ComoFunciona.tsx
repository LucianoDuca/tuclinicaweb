import { AGENCIA } from "@/lib/agency";

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
            style={{ color: AGENCIA.colores.primario }}
          >
            Cómo funciona
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            De cero a tu web funcionando, sin vueltas
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PASOS.map((paso) => (
            <div key={paso.numero} className="text-center">
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: AGENCIA.colores.primario }}
              >
                {paso.numero}
              </div>
              <h3 className="font-semibold text-neutral-900">{paso.titulo}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
