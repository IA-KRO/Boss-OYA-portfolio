import "./globals.css";

export const metadata = {
  title: "Boss OYA | Créateur de SaaS & Ingénieur Produit",
  description: "Portfolio de Boss OYA (Christian OYA)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#0d0f12] text-zinc-100">{children}</body>
    </html>
  );
}
