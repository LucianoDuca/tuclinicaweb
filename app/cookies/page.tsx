import { AGENCIA } from "@/lib/agency";

export const metadata = {
  title: `Política de cookies · ${AGENCIA.nombre}`,
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-neutral-900">
        Política de cookies
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600">
        <p>
          Este sitio web de {AGENCIA.nombre} utiliza cookies propias y, en su
          caso, de terceros con fines técnicos y analíticos, de acuerdo con
          la Ley 34/2002 (LSSI-CE) y el RGPD.
        </p>

        <section>
          <h2 className="font-semibold text-neutral-900">
            ¿Qué son las cookies?
          </h2>
          <p className="mt-2">
            Son pequeños archivos que se almacenan en tu navegador y que
            permiten reconocer tu dispositivo en visitas sucesivas.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Cookies que utilizamos
          </h2>
          <p className="mt-2">
            Cookies técnicas necesarias para el funcionamiento del sitio y,
            si están activas, cookies analíticas para medir el número de
            visitas de forma agregada y anónima.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Cómo gestionar las cookies
          </h2>
          <p className="mt-2">
            Puedes permitir, bloquear o eliminar las cookies instaladas en
            tu equipo mediante la configuración de tu navegador.
          </p>
        </section>
      </div>
    </main>
  );
}
