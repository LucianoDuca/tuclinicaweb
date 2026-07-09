import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
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
      <body className="min-h-full flex flex-col">
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
