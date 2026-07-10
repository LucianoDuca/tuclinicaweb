export const AGENCIA = {
  nombre: "ClinicaWeb",
  eslogan: "Webs para clínicas dentales que convierten búsquedas en citas",
  email: "hola@tuclinicaweb.com",
  whatsapp: "5492615368176",
  whatsappMensaje: "Hola, quiero información sobre las webs para clínicas",
  colores: {
    primario: "#123A5C",
    acento: "#FF6B4A",
  },
  demoUrl: "https://sonrisalud-demo.onrender.com",
};

export function whatsappHrefAgencia(): string {
  const mensaje = encodeURIComponent(AGENCIA.whatsappMensaje);
  return `https://wa.me/${AGENCIA.whatsapp}?text=${mensaje}`;
}
