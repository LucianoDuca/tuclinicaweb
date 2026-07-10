"use client";

import { useState } from "react";
import { AGENCIA } from "@/lib/agency";
import Reveal from "@/components/Reveal";

const CUOTA_PROFESIONAL = 29;

export default function CalculadoraROI() {
  const [pacientes, setPacientes] = useState(2);
  const [ticket, setTicket] = useState(200);

  const ingresoMensual = pacientes * ticket;
  const veces = ingresoMensual / CUOTA_PROFESIONAL;

  return (
    <section className="px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.primario }}
          >
            Haz la cuenta tú mismo
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            ¿Cuánto te tiene que traer la web para que valga la pena?
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-neutral-700">
                  Pacientes nuevos por mes
                </label>
                <span className="text-lg font-bold text-neutral-900">
                  {pacientes}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={pacientes}
                onChange={(e) => setPacientes(Number(e.target.value))}
                className="mt-3 w-full accent-[#123A5C]"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-neutral-700">
                  Ticket promedio por paciente
                </label>
                <span className="text-lg font-bold text-neutral-900">
                  {ticket} €
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={1000}
                step={25}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="mt-3 w-full accent-[#123A5C]"
              />
            </div>
          </div>

          <div
            className="mt-8 rounded-xl p-6 text-center text-white"
            style={{ backgroundImage: AGENCIA.degradeRaro }}
          >
            <p className="text-sm text-white/80">
              Con eso, tu web te generaría aproximadamente
            </p>
            <p className="mt-1 text-3xl font-bold sm:text-4xl">
              {ingresoMensual.toLocaleString("es-ES")} € / mes
            </p>
            <p className="mt-2 text-sm text-white/85">
              El plan Profesional (29 €/mes) sería{" "}
              <strong>{veces.toFixed(0)}x</strong> más barato que eso.
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            Cálculo orientativo, ajustá los valores según tu clínica.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
