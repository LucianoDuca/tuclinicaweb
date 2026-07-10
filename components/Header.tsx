"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import PresupuestoButton from "@/components/PresupuestoButton";
import { AGENCIA } from "@/lib/agency";

const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {NAV.map((item) => {
            const activo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 transition hover:text-neutral-900"
                style={activo ? { color: AGENCIA.colores.primario } : undefined}
              >
                {item.label}
                {activo && (
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                    style={{ backgroundColor: AGENCIA.colores.acento }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <PresupuestoButton className="!px-5 !py-2 !text-sm shadow-sm">
          Pedir presupuesto
        </PresupuestoButton>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-white/60 px-6 py-2 text-xs font-medium text-neutral-600 md:hidden">
        {NAV.map((item) => {
          const activo = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900"
              style={activo ? { color: AGENCIA.colores.primario, fontWeight: 700 } : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
