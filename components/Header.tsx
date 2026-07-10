import Link from "next/link";
import Logo from "@/components/Logo";
import { whatsappHrefAgencia } from "@/lib/agency";

const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappHrefAgencia()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#123A5C] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          Pedir presupuesto
        </a>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-neutral-100 px-6 py-2 text-xs font-medium text-neutral-600 md:hidden">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-neutral-900">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
