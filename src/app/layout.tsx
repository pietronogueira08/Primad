import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Primad Marcenaria | Móveis Planejados de Luxo — RJ, Niterói e Região dos Lagos",
  description:
    "Marcenaria sob medida de alto padrão com tecnologia CNC e modelagem Promob. Cozinhas, closets, painéis ripados e ambientes corporativos exclusivos no Rio de Janeiro, Niterói e Região dos Lagos.",
  keywords: [
    "marcenaria luxo RJ",
    "móveis planejados Niterói",
    "marcenaria CNC Rio de Janeiro",
    "armários sob medida Barra da Tijuca",
    "cozinha planejada alto padrão RJ",
    "closet planejado Ipanema",
    "marcenaria Promob",
    "móveis planejados Região dos Lagos",
    "Primad Marcenaria",
  ],
  openGraph: {
    title: "Primad Marcenaria | Móveis Planejados de Luxo",
    description:
      "Transformamos projetos arquitetônicos em obras de arte vivas. Marcenaria sob medida com precisão CNC e modelagem Promob.",
    type: "website",
    locale: "pt_BR",
    siteName: "Primad Marcenaria",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-onyx text-ivory antialiased overflow-x-hidden">
        {/* Custom cursor — desktop only via CSS */}
        <CustomCursor />
        {/* Subtle noise texture overlay */}
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
