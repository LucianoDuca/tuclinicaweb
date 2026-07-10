"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "clinicaweb-cookies-aceptadas";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const yaDecidido = window.localStorage.getItem(STORAGE_KEY);
    if (!yaDecidido) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function aceptar() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  function rechazar() {
    window.localStorage.setItem(STORAGE_KEY, "false");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:left-auto">
      <p className="text-sm text-neutral-600">
        Usamos cookies técnicas y analíticas para mejorar tu experiencia. Puedes
        leer más en nuestra{" "}
        <Link href="/cookies" className="font-medium text-neutral-900 underline">
          política de cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={rechazar}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
        >
          Rechazar
        </button>
        <button
          onClick={aceptar}
          className="rounded-full bg-[#123A5C] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
