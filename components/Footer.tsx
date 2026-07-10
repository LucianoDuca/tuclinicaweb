import Link from "next/link";
import Logo from "@/components/Logo";
import { AGENCIA } from "@/lib/agency";

export default function Footer() {
  return (
    <footer
      className="px-6 py-14 text-white/60"
      style={{ backgroundColor: "#0A2E44" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm text-white/50">
            {AGENCIA.eslogan}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navegación</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/servicios" className="hover:text-white">
              Servicios
            </Link>
            <Link href="/precios" className="hover:text-white">
              Precios
            </Link>
            <Link href="/nosotros" className="hover:text-white">
              Nosotros
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/aviso-legal" className="hover:text-white">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-white">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Política de cookies
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={`mailto:${AGENCIA.email}`} className="hover:text-white">
              {AGENCIA.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {AGENCIA.nombre}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
