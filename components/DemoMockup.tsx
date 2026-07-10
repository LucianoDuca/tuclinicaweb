"use client";

import { useState } from "react";
import { AGENCIA } from "@/lib/agency";
import Modal from "@/components/Modal";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-300/50">
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-center text-xs text-neutral-400 ring-1 ring-neutral-200">
          sonrisalud-demo.onrender.com
        </div>
      </div>
      {children}
    </div>
  );
}

function HeroSlice() {
  return (
    <div
      className="relative px-6 py-10 text-white sm:px-10 sm:py-14"
      style={{
        background:
          "linear-gradient(135deg, #0E7C7B 0%, #0E7C7B 55%, #F4A259 140%)",
      }}
    >
      <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
        Clínica Dental Sonrisalud · Salamanca
      </p>
      <h3 className="max-w-sm text-xl font-bold leading-snug sm:text-2xl">
        Tu sonrisa, en las mejores manos de Salamanca
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0E7C7B]">
          Pedir cita por WhatsApp
        </span>
        <span className="rounded-full border border-white/50 px-4 py-2 text-xs font-semibold">
          Llamar ahora
        </span>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-xs text-white/85">
        <span className="text-amber-300">
          <StarRow />
        </span>
        <span>4,8 · 47 reseñas en Google</span>
      </div>
    </div>
  );
}

function ServiciosSlice() {
  return (
    <div className="grid grid-cols-3 gap-px bg-neutral-100 text-center text-xs font-medium text-neutral-500">
      {["Implantes", "Ortodoncia", "Blanqueamiento"].map((s) => (
        <div key={s} className="bg-white py-4">
          {s}
        </div>
      ))}
    </div>
  );
}

const RESENAS = [
  { autor: "María G.", texto: "Un trato excelente desde el primer momento. Muy recomendable." },
  { autor: "Javier R.", texto: "Le tenía pánico al dentista y aquí me cambiaron la percepción." },
];

function ResenasSlice() {
  return (
    <div className="grid gap-px bg-neutral-100 sm:grid-cols-2">
      {RESENAS.map((r) => (
        <div key={r.autor} className="bg-white p-5 text-left">
          <div className="flex text-amber-400">
            <StarRow />
          </div>
          <p className="mt-2 text-xs text-neutral-600">&ldquo;{r.texto}&rdquo;</p>
          <p className="mt-2 text-xs font-semibold text-neutral-900">
            {r.autor}
          </p>
        </div>
      ))}
    </div>
  );
}

function CtaBar() {
  return (
    <a
      href={AGENCIA.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      style={{ backgroundColor: AGENCIA.colores.primario }}
    >
      Abrir la demo completa en tu navegador ↗
    </a>
  );
}

export default function DemoMockup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => setOpen(true)}
          className="block w-full text-left transition duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.5deg] active:scale-[0.99]"
        >
          <BrowserFrame>
            <HeroSlice />
            <ServiciosSlice />
          </BrowserFrame>
        </button>
        <p className="mt-3 text-center text-xs text-neutral-400">
          Haz clic para recorrer más secciones de esta demo ↑
        </p>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <p className="mb-4 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
          Recorrido de la demo
        </p>
        <BrowserFrame>
          <HeroSlice />
          <ServiciosSlice />
          <ResenasSlice />
          <CtaBar />
        </BrowserFrame>
      </Modal>
    </>
  );
}

function StarRow() {
  return (
    <span className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.6 1.28 6.57L12 17.35l-5.92 3.15 1.28-6.57-4.86-4.6 6.6-.77L12 2.5Z" />
        </svg>
      ))}
    </span>
  );
}
