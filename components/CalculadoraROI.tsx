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
            style={{ color: AGENCIA.colores.acento }}
          >
            Haz la cuenta tú mismo
          </p>
          <h2
            className="mt-2 text-3xl font-bold sm:text-4xl"
            style={{ color: AGENCIA.colores.tinta }}
          >
            Tu web no es un gasto: es una inversión. Haz la cuenta.
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-white/70 bg-white/60 p-6 shadow-[0_24px_70px_-30px_rgba(15,76,117,0.4)] backdrop-blur-md sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Pacientes nuevos por mes
                </label>
                <span className="text-lg font-bold text-slate-900">
                  {pacientes}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={pacientes}
                onChange={(e) => setPacientes(Number(e.target.value))}
                className="mt-3 w-full accent-[#0EA5B7]"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Ticket promedio por paciente
                </label>
                <span className="text-lg font-bold text-slate-900">
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
                className="mt-3 w-full accent-[#0EA5B7]"
              />
            </div>
          </div>

          <div
            className="mt-8 rounded-xl p-6 text-center text-white"
            style={{ backgroundColor: AGENCIA.colores.primario }}
          >
            <p className="text-sm text-white/80">
              Con eso, tu web te generaría aproximadamente
            </p>
            <p className="mt-1 text-3xl font-bold sm:text-4xl">
              {ingresoMensual.toLocaleString("es-ES")} € / mes
            </p>
            <p className="mt-2 text-sm text-white/85">
              Tu inversión de 29 €/mes se recuperaría{" "}
              <strong>{veces.toFixed(0)} veces</strong> cada mes.
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Cálculo orientativo, ajusta los valores según tu clínica.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
