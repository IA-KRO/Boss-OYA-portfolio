import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boss OYA | Créateur de SaaS & Ingénieur Produit",
  description: "Portfolio de Boss OYA (Christian OYA) — Architecte SaaS IA, Systèmes IoT et Ingénierie Produit à Abidjan.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-[#09090B] antialiased">
        {children}
      </body>
    </html>
  );
}
