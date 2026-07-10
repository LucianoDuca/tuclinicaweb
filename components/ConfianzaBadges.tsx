import { AGENCIA } from "@/lib/agency";

const BADGES = [
  { texto: "Demo real antes de pagar", icon: EyeIcon },
  { texto: "Sin permanencia", icon: UnlockIcon },
  { texto: "Cumplimiento RGPD y LSSI", icon: ShieldIcon },
  { texto: "Soporte directo por WhatsApp", icon: ChatIcon },
];

export default function ConfianzaBadges() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-3xl border border-white/70 bg-white/60 px-6 py-6 shadow-[0_16px_50px_-24px_rgba(15,76,117,0.3)] backdrop-blur-md sm:grid-cols-4">
        {BADGES.map((badge) => (
          <div
            key={badge.texto}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                backgroundColor: `${AGENCIA.colores.acento}18`,
                color: AGENCIA.colores.acento,
              }}
            >
              <badge.icon className="h-5 w-5" />
            </span>
            <p className="text-xs font-medium text-slate-600 sm:text-sm">
              {badge.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EyeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} style={style}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UnlockIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} style={style}>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </svg>
  );
}

function ShieldIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} style={style}>
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ChatIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} style={style}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.9 8.4A8.5 8.5 0 1 1 21 11.5Z" />
      <circle cx="8" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
