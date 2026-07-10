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
          className="group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 p-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_16px_40px_-20px_rgba(15,76,117,0.35)]"
        >
          <div
            className="h-12 w-12 shrink-0 rounded-xl ring-1 ring-white/60"
            style={{
              background: `linear-gradient(135deg, ${demo.colores.primario}, ${demo.colores.acento})`,
            }}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              {demo.nombre}
            </p>
            <p className="text-xs text-slate-500">
              {demo.ciudad} · demo de muestra ↗
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
