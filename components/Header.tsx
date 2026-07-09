import Link from "next/link";
import { AGENCIA, whatsappHrefAgencia } from "@/lib/agency";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-neutral-900">
          {AGENCIA.nombre}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 sm:flex">
          <a href="#como-funciona" className="hover:text-neutral-900">
            Cómo funciona
          </a>
          <a href="#demo" className="hover:text-neutral-900">
            Demo en vivo
          </a>
          <a href="#precios" className="hover:text-neutral-900">
            Precios
          </a>
        </nav>
        <a
          href={whatsappHrefAgencia()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: AGENCIA.colores.primario }}
        >
          Pedir presupuesto
        </a>
      </div>
    </header>
  );
}
