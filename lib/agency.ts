export const AGENCIA = {
  nombre: "ClinicaWeb",
  eslogan: "Webs para clínicas dentales que convierten búsquedas en citas",
  email: "hola@tuclinicaweb.com",
  // TODO: reemplazar por el número real de WhatsApp de la agencia
  whatsapp: "000000000000",
  whatsappMensaje: "Hola, quiero información sobre las webs para clínicas",
  colores: {
    primario: "#123A5C",
    acento: "#FF6B4A",
  },
  demoUrl: "https://sonrisalud-demo.vercel.app",
};

export function whatsappHrefAgencia(): string {
  const mensaje = encodeURIComponent(AGENCIA.whatsappMensaje);
  return `https://wa.me/${AGENCIA.whatsapp}?text=${mensaje}`;
}
