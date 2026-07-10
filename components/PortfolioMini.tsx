const DEMOS = [
  {
    nombre: "Clínica Dental Sonrisalud",
    ciudad: "Salamanca",
    url: "https://sonrisalud-demo.onrender.com",
    colores: { primario: "#0E7C7B", acento: "#F4A259" },
  },
  {
    nombre: "Clínica Dental Vallmar",
    ciudad: "Burgos",
    url: "https://vallmar-demo.onrender.com",
    colores: { primario: "#7C2D3A", acento: "#D4A24C" },
  },
];

export default function PortfolioMini() {
  return (
    <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
      {DEMOS.map((demo) => (
        <a
          key={demo.url}
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div
            className="h-12 w-12 shrink-0 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${demo.colores.primario}, ${demo.colores.acento})`,
            }}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-neutral-900">
              {demo.nombre}
            </p>
            <p className="text-xs text-neutral-500">
              {demo.ciudad} · demo de muestra ↗
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
