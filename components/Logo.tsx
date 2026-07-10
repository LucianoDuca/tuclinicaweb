import { AGENCIA } from "@/lib/agency";

export default function Logo({
  className,
  light,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect
          width="32"
          height="32"
          rx="9"
          fill={light ? "rgba(255,255,255,0.14)" : AGENCIA.colores.primario}
        />
        <g transform="translate(6,7) scale(0.83)">
          <path
            d="M12 2C9.5 2 8 3.5 6.5 3.5C5.2 3.5 4 4.7 4 6.5C4 8.8 4.8 10.3 5.3 12.5C5.8 14.8 6 17.5 7.5 18.5C9 19.5 9.8 17 10.5 14.8C10.9 13.5 11.4 13 12 13C12.6 13 13.1 13.5 13.5 14.8C14.2 17 15 19.5 16.5 18.5C18 17.5 18.2 14.8 18.7 12.5C19.2 10.3 20 8.8 20 6.5C20 4.7 18.8 3.5 17.5 3.5C16 3.5 14.5 2 12 2Z"
            fill="white"
          />
        </g>
      </svg>
      <span
        className="text-lg font-bold tracking-tight"
        style={{ color: light ? "#ffffff" : AGENCIA.colores.tinta }}
      >
        ClinicaWeb
      </span>
    </div>
  );
}
