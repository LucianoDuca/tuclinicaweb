import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import CookieConsent from "@/components/CookieConsent";
import { AGENCIA } from "@/lib/agency";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuclinicaweb.com"),
  title: `${AGENCIA.nombre} — ${AGENCIA.eslogan}`,
  description:
    "Diseñamos, publicamos y mantenemos la web de tu clínica dental por una cuota mensual fija, sin permanencia.",
  alternates: {
    canonical: "https://tuclinicaweb.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        {/* Aurora decorativa de fondo: da profundidad para que el vidrio se lea como vidrio */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            backgroundColor: "#F4F8FB",
            backgroundImage:
              "radial-gradient(60% 40% at 15% 0%, rgba(14,165,183,0.14), transparent 60%), radial-gradient(50% 45% at 100% 10%, rgba(15,76,117,0.12), transparent 55%), radial-gradient(45% 40% at 50% 100%, rgba(14,165,183,0.10), transparent 60%)",
          }}
        />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <WhatsAppFloating />
        <CookieConsent />
      </body>
    </html>
  );
}
