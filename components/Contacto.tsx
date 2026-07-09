import { AGENCIA, whatsappHrefAgencia } from "@/lib/agency";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="px-6 py-16 text-center text-white md:py-24"
      style={{ backgroundColor: AGENCIA.colores.primario }}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl">
          ¿Le mostramos a tu clínica cómo quedaría su web?
        </h2>
        <p className="mt-3 text-white/85">
          Escribinos y te mandamos una propuesta armada con los datos reales
          de tu clínica, sin compromiso.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappHrefAgencia()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02]"
            style={{ color: AGENCIA.colores.primario }}
          >
            Escribir por WhatsApp
          </a>
          <a
            href={`mailto:${AGENCIA.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            {AGENCIA.email}
          </a>
        </div>
      </div>
    </section>
  );
}
