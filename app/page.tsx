import Link from "next/link";
import Hero from "@/components/Hero";
import ConfianzaBadges from "@/components/ConfianzaBadges";
import DemoMockup from "@/components/DemoMockup";
import Garantia from "@/components/Garantia";
import PortfolioMini from "@/components/PortfolioMini";
import Reveal from "@/components/Reveal";
import { AGENCIA } from "@/lib/agency";

export default function Home() {
  return (
    <>
      <Hero />
      <ConfianzaBadges />

      <section id="demo" className="px-6 py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: AGENCIA.colores.acento }}
          >
            Compruébalo tú mismo
          </p>
          <h2
            className="mt-2 text-3xl font-bold sm:text-4xl"
            style={{ color: AGENCIA.colores.tinta }}
          >
            Así queda una clínica con nosotros
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <DemoMockup />
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-16 max-w-3xl text-center text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Demos de muestra
          </p>
          <PortfolioMini />
        </Reveal>
      </section>

      <Garantia />

      <section className="px-6 py-16 text-center md:py-24">
        <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/70 bg-white/60 px-6 py-14 shadow-[0_24px_70px_-30px_rgba(15,76,117,0.4)] backdrop-blur-md">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: AGENCIA.colores.tinta }}
          >
            ¿Quieres ver cómo quedaría la web de tu propia clínica?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Pide tu demo gratuita hoy: la preparamos con el nombre, las
            reseñas y los datos reales de tu clínica, y la ves funcionando
            antes de decidir nada.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/precios"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(15,76,117,0.6)] transition hover:brightness-110 active:scale-95"
              style={{ backgroundColor: AGENCIA.colores.primario }}
            >
              Ver precios
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/60 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:bg-white/80 active:scale-95"
              style={{ color: AGENCIA.colores.primario }}
            >
              Hablar con nosotros
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
