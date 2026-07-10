"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md animate-[modal-in_0.15s_ease-out] rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
