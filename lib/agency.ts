export const AGENCIA = {
  nombre: "ClinicaWeb",
  eslogan: "Webs para clínicas dentales que convierten búsquedas en citas",
  email: "hola@tuclinicaweb.com",
  whatsapp: "5492615368176",
  whatsappMensaje: "Hola, quiero información sobre las webs para clínicas",
  colores: {
    primario: "#0F4C75", // navy-teal profundo (confianza, clínico)
    acento: "#0EA5B7", // cian-teal fresco (limpieza, salud)
    fondo: "#F4F8FB", // blanco cálido suave
    tinta: "#0C2A3A", // tinta para titulares
  },
  demoUrl: "https://sonrisalud-demo.onrender.com",
};

// Tarjeta de vidrio esmerilado reutilizable en todo el sitio.
export const GLASS =
  "rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md shadow-[0_16px_50px_-20px_rgba(15,76,117,0.28)]";

export function whatsappHrefAgencia(): string {
  const mensaje = encodeURIComponent(AGENCIA.whatsappMensaje);
  return `https://wa.me/${AGENCIA.whatsapp}?text=${mensaje}`;
}
