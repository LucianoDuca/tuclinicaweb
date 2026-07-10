import Link from "next/link";
import Hero from "@/components/Hero";
import ConfianzaBadges from "@/components/ConfianzaBadges";
import DemoMockup from "@/components/DemoMockup";
import PortfolioMini from "@/components/PortfolioMini";
import Reveal from "@/components/Reveal";
import { AGENCIA } from "@/lib/agency";

export default function Home() {
  return (
    <>
      <Hero />
      <ConfianzaBadges />

      <section id="demo" className="bg-neutral-50 px-6 py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.primario }}
          >
            Trabajo real, no una maqueta
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
            Así queda una clínica con nosotros
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <DemoMockup />
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-sm font-semibold tracking-wide text-neutral-500 uppercase">
            Más ejemplos
          </p>
          <PortfolioMini />
        </Reveal>
      </section>

      <section className="px-6 py-16 text-center md:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            ¿Quieres ver cómo quedaría la web de tu propia clínica?
          </h2>
          <p className="mt-3 text-neutral-600">
            Mira qué incluye cada plan y escríbenos para que te armemos una
            propuesta con tus datos reales, sin compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/precios"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: AGENCIA.colores.primario }}
            >
              Ver precios
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-50 active:scale-95"
            >
              Hablar con nosotros
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
