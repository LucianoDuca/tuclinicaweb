export default function PhoneMockup() {
  return (
    <div className="mx-auto w-56 shrink-0 rounded-[2.5rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl">
      <div className="relative overflow-hidden rounded-[1.8rem] bg-[#E5DDD5]">
        <div className="absolute top-0 left-1/2 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />

        <div
          className="flex items-center gap-2 px-4 pt-8 pb-3 text-white"
          style={{ backgroundColor: "#075E54" }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
            CW
          </div>
          <div>
            <p className="text-xs font-semibold">ClinicaWeb</p>
            <p className="text-[10px] text-white/70">en línea</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 py-4">
          <div className="max-w-[80%] self-start rounded-lg rounded-tl-none bg-white px-3 py-2 text-[11px] text-neutral-700 shadow-sm">
            Hola 👋 Vi tu clínica en Google, ¿te muestro cómo quedaría tu web?
          </div>
          <div
            className="max-w-[80%] self-end rounded-lg rounded-tr-none px-3 py-2 text-[11px] text-neutral-800 shadow-sm"
            style={{ backgroundColor: "#DCF8C6" }}
          >
            Vale, muéstramela 🙌
          </div>
          <div className="max-w-[80%] self-start rounded-lg rounded-tl-none bg-white px-3 py-2 text-[11px] text-neutral-700 shadow-sm">
            sonrisalud-demo.onrender.com ✨
          </div>
          <div
            className="max-w-[80%] self-end rounded-lg rounded-tr-none px-3 py-2 text-[11px] text-neutral-800 shadow-sm"
            style={{ backgroundColor: "#DCF8C6" }}
          >
            Me encantó, ¿la activamos con mi dominio?
          </div>
        </div>
      </div>
    </div>
  );
}
