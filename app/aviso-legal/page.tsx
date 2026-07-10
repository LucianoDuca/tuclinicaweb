import { AGENCIA } from "@/lib/agency";

export const metadata = {
  title: `Aviso legal · ${AGENCIA.nombre}`,
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-neutral-900">Aviso legal</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600">
        <p>
          En cumplimiento del deber de información recogido en el artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y el Comercio Electrónico (LSSI-CE), se informa de los
          siguientes datos:
        </p>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Datos identificativos
          </h2>
          <p className="mt-2">
            Titular: Luciano Duca, bajo el nombre comercial {AGENCIA.nombre}
            <br />
            Identificación fiscal: en proceso de alta, se publicará en cuanto
            esté disponible
            <br />
            Contacto: {AGENCIA.email}
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">Objeto</h2>
          <p className="mt-2">
            Este sitio web informa sobre los servicios de diseño y
            mantenimiento de páginas web para clínicas dentales prestados por{" "}
            {AGENCIA.nombre}, y facilita el contacto de potenciales clientes.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Condiciones de uso
          </h2>
          <p className="mt-2">
            El acceso a este sitio web es gratuito y no exige registro previo.
            El usuario se compromete a hacer un uso adecuado de los
            contenidos y servicios ofrecidos.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-neutral-900">
            Propiedad intelectual
          </h2>
          <p className="mt-2">
            Los contenidos de este sitio (textos, diseño, código) son
            propiedad de {AGENCIA.nombre} y están protegidos por la normativa
            de propiedad intelectual.
          </p>
        </section>
      </div>
    </main>
  );
}
