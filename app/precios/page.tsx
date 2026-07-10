import PageHero from "@/components/PageHero";
import Precios from "@/components/Precios";
import FAQ from "@/components/FAQ";
import { AGENCIA } from "@/lib/agency";

export const metadata = {
  title: `Precios · ${AGENCIA.nombre}`,
  description:
    "Tres planes con cuota mensual fija, sin permanencia, para la web de tu clínica dental.",
};

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        titulo="Una cuota fija, sin sorpresas y sin permanencia"
        descripcion="El pago inicial cubre el diseño de tu web. La cuota mensual incluye hosting, dominio y mantenimiento."
      />
      <Precios />
      <FAQ />
    </>
  );
}
