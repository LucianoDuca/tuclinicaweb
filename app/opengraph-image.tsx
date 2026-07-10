import { ImageResponse } from "next/og";
import { AGENCIA } from "@/lib/agency";

export const dynamic = "force-static";
export const alt = "ClinicaWeb — Webs para clínicas dentales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: `linear-gradient(135deg, ${AGENCIA.colores.primario} 0%, ${AGENCIA.colores.primario} 60%, #0A2540 140%)`,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C9.5 2 8 3.5 6.5 3.5C5.2 3.5 4 4.7 4 6.5C4 8.8 4.8 10.3 5.3 12.5C5.8 14.8 6 17.5 7.5 18.5C9 19.5 9.8 17 10.5 14.8C10.9 13.5 11.4 13 12 13C12.6 13 13.1 13.5 13.5 14.8C14.2 17 15 19.5 16.5 18.5C18 17.5 18.2 14.8 18.7 12.5C19.2 10.3 20 8.8 20 6.5C20 4.7 18.8 3.5 17.5 3.5C16 3.5 14.5 2 12 2Z" />
            </svg>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>
            {AGENCIA.nombre}
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {AGENCIA.eslogan}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Sin permanencia · Demo real antes de pagar
        </div>
      </div>
    ),
    { ...size },
  );
}
