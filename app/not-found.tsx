import Link from "next/link";
import Logo from "@/components/Logo";
import { AGENCIA } from "@/lib/agency";

export default function NotFound() {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center text-white"
      style={{
        background: `linear-gradient(135deg, ${AGENCIA.colores.primario} 0%, ${AGENCIA.colores.primario} 65%, #0A2540 140%)`,
      }}
    >
      <Logo dark className="mb-8" />
      <p className="text-7xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
        Esta página se perdió como un paciente sin GPS
      </h1>
      <p className="mt-3 max-w-md text-white/85">
        El link que seguiste no existe o cambió de lugar. Volvamos al
        principio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02] active:scale-95"
        style={{ color: AGENCIA.colores.primario }}
      >
        Volver al inicio
      </Link>
    </section>
  );
}
