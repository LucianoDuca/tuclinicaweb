import Link from "next/link";
import Logo from "@/components/Logo";
import { AGENCIA } from "@/lib/agency";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <Logo className="mb-8" />
      <p className="text-7xl font-bold" style={{ color: AGENCIA.colores.primario }}>
        404
      </p>
      <h1
        className="mt-4 text-2xl font-bold sm:text-3xl"
        style={{ color: AGENCIA.colores.tinta }}
      >
        Esta página se perdió como un paciente sin GPS
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        El enlace que seguiste no existe o cambió de lugar. Volvamos al
        principio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(15,76,117,0.6)] transition hover:brightness-110 active:scale-95"
        style={{ backgroundColor: AGENCIA.colores.primario }}
      >
        Volver al inicio
      </Link>
    </section>
  );
}
