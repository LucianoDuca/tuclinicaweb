"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "max-w-md",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  // Portal a <body>: evita que un ancestro con backdrop-filter (el header)
  // atrape el position:fixed y rompa el overlay.
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-[#0C2A3A]/50 backdrop-blur-sm"
      />
      <div
        className={`relative w-full ${maxWidth} animate-[modal-in_0.18s_ease-out] rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8`}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
