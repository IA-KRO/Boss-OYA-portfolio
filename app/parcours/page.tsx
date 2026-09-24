import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

const timeline = [
  {
    period: "Depuis 2024",
    role: "Formation pour une Maîtrise en IA",
    place: "",
    impact: "Montée en compétence continue autour de l'intelligence artificielle, de l'automatisation et des systèmes intelligents.",
  },
  {
    period: "2024 — maintenant",
    role: "Certificats et spécialisations IA",
    place: "",
    impact: "· Learn to build with n8n — N8N Academy· Google AI Essentials — Google / Coursera· AI Essentials for Decision Makers — UNITAR (Institut des Nations Unies)",
  },
  {
    period: "2024 — 2025",
    role: "Promoteur Automobile",
    place: "SAM Motors",
    impact: "Vente consultative à haute valeur ajoutée, négociation directe et fidélisation de clientèle premium.",
  },
  {
    period: "2023 — 2024",
    role: "CRM Freelance & Support Client",
    place: "Yango CI",
    impact: "Traitement à flux tendu sur une tech de mobilité urbaine. Résolution de frictions et fidélisation à fort volume.",
  },
  {
    period: "2023",
    role: "Licence Pro Sciences Environnementales",
    place: "Groupe ITA",
    impact: "Acquisition de la pensée systémique : impacts globaux, résilience des écosystèmes et économie circulaire.",
  },
  {
    period: "2021 — 2023",
    role: "Technico-Commercial & CM",
    place: "GISI (Solaire)",
    impact: "Synergie entre expertise technique solaire, coordination de maintenance SAV et visibilité digitale.",
  },
  {
    period: "2020",
    role: "Licence Informatique Industrielle",
    place: "Groupe CERCO",
    impact: "Passerelle physique-logiciel : conception du prototype de Poubelle intelligente et connectée.",
  },
  {
    period: "2018",
    role: "DUT Systèmes Électroniques",
    place: "CERCO",
    impact: "Compréhension des composants matériels, logique booléenne et diagnostic méthodique des pannes.",
  },
];

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-8 text-[#09090B] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>

        <header className="mb-16 mt-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-700">
            <Sparkles className="h-3.5 w-3.5" />
            Parcours complet
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Parcours & Évolution</h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-500">
            Une trajectoire entre systèmes, relation client, entrepreneuriat et intelligence artificielle.
          </p>
        </header>

        <section aria-label="Chronologie du parcours" className="relative border-l-2 border-zinc-200 ml-4 pl-8 sm:ml-6 sm:pl-10">
          {timeline.map((item, idx) => (
            <article key={`${item.period}-${item.role}`} className="group relative mb-12 last:mb-0">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-[3px] border-black bg-white transition-all duration-300 group-hover:scale-125 group-hover:border-amber-500 sm:-left-[49px]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="w-36 shrink-0 text-sm font-bold text-amber-600">{item.period}</span>
                <h2 className="text-lg font-bold text-black">
                  {item.role}{item.place && <span className="ml-1 font-normal text-zinc-400"> chez {item.place}</span>}
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:ml-40">{item.impact}</p>
              {idx === 1 && <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">Certifications actuelles <ArrowUpRight className="h-3.5 w-3.5" /></div>}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
