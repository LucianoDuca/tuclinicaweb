"use client";

import { useState } from "react";
import { AGENCIA } from "@/lib/agency";
import Reveal from "@/components/Reveal";

const PREGUNTAS = [
  {
    pregunta: "Ya tengo Facebook o Instagram, ¿para qué necesito una web?",
    respuesta:
      "Tu red social no la reemplaza, la potencia. Cuando alguien te busca en Google, la web es lo que da confianza y convierte esa búsqueda en cita. Además es tuya: una red social puede cambiar sus reglas de un día para el otro.",
  },
  {
    pregunta: "¿No es caro pagar una cuota todos los meses?",
    respuesta:
      "El plan Profesional son 29 €/mes: menos que una comida. Si la web te trae un solo paciente nuevo al año, ya se pagó varias veces. Y no hay permanencia: si no te funciona, la das de baja cuando quieras.",
  },
  {
    pregunta: "¿Qué pasa si en algún momento dejo de pagar?",
    respuesta:
      "El sitio se pausa, pero el dominio sigue siendo tuyo y te lo llevas. Sin ataduras ni letra chica.",
  },
  {
    pregunta: "Mi sobrino o un freelance me la puede hacer más barata",
    respuesta:
      "Es genial tener a alguien de confianza. La diferencia es que nuestra cuota incluye hosting, dominio, mantenimiento y cambios todos los meses, sin que tengas que perseguir a nadie. Si algo falla, es nuestro problema, no el tuyo.",
  },
  {
    pregunta: "¿Cuánto tarda en estar lista mi web?",
    respuesta:
      "Entre 48 y 72 horas desde que confirmas, una vez que vimos la demo juntos y estás de acuerdo con el diseño.",
  },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.acento }}
          >
            Preguntas frecuentes
          </p>
          <h2
            className="mt-2 text-3xl font-bold sm:text-4xl"
            style={{ color: AGENCIA.colores.tinta }}
          >
            Resolvemos tus dudas antes de empezar
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/60 overflow-hidden rounded-3xl border border-white/70 bg-white/60 backdrop-blur-md">
          {PREGUNTAS.map((item, i) => (
            <div key={item.pregunta}>
              <button
                onClick={() => setAbierta(abierta === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/40"
              >
                <span
                  className="font-medium"
                  style={{ color: AGENCIA.colores.tinta }}
                >
                  {item.pregunta}
                </span>
                <span
                  className="shrink-0 text-xl transition-transform"
                  style={{
                    color: AGENCIA.colores.acento,
                    transform: abierta === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {abierta === i && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {item.respuesta}
                </p>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
