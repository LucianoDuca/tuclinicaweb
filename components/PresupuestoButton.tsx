"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { AGENCIA } from "@/lib/agency";

export default function PresupuestoButton({
  className,
  variant = "solid",
  children,
}: {
  className?: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition";
  const style =
    variant === "solid"
      ? "text-white shadow-lg hover:opacity-90"
      : "border border-white/50 text-white hover:bg-white/10";

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const mensaje = encodeURIComponent(
      `Hola, soy de la clínica "${nombre || "—"}" en ${ciudad || "—"}. Me gustaría ver una demo de mi web.`,
    );
    window.open(`https://wa.me/${AGENCIA.whatsapp}?text=${mensaje}`, "_blank");
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${style} ${className ?? ""}`}
        style={
          variant === "solid" ? { backgroundColor: AGENCIA.colores.primario } : undefined
        }
      >
        {children}
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-bold text-neutral-900">
          Contanos sobre tu clínica
        </h3>
        <p className="mt-1 text-sm text-neutral-600">
          Te escribimos por WhatsApp con una propuesta armada para vos, sin
          compromiso.
        </p>
        <form onSubmit={enviar} className="mt-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Nombre de la clínica
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Clínica Dental Sonrisalud"
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Ciudad
            </label>
            <input
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              placeholder="Ej. Salamanca"
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: AGENCIA.colores.primario }}
          >
            Continuar por WhatsApp
          </button>
        </form>
      </Modal>
    </>
  );
}
