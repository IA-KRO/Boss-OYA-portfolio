"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Mail,
  Menu
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Tous");
  const categories = ["Tous", "SaaS & IA", "FinTech", "IoT & Systèmes", "Growth Ops"];

  // (Garde tes données de projets exactes ici)
  const projects = [
    {
      id: "gerant-ia",
      title: "GÉRANT-IA",
      category: "SaaS & IA",
      tag: "SaaS & IA",
      description: "Copilote intelligent de gestion d'entreprise & automatisation RAG.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "freebetcash",
      title: "Freebetcash",
      category: "FinTech",
      tag: "FinTech",
      description: "Système prédictif & optimisation financière à haute fréquence.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    // Fond global blanc, texte noir
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-amber-400 selection:text-black">
      
      {/* Layout Principal : Flex Row pour séparer la Sidebar du Contenu */}
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        
        {/* ========================================= */}
        {/* SIDEBAR GAUCHE (Flottante & Sombre)       */}
        {/* ========================================= */}
        <aside className="lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen z-20">
          <div className="bg-[#151515] w-full h-full rounded-[32px] p-6 sm:p-8 flex flex-col text-white shadow-2xl relative overflow-hidden">
            
            {/* Header Sidebar */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-amber-400">
                BO
              </div>
              <div>
                <h1 className="text-base font-bold text-white">Boss OYA</h1>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5">Ingénieur Produit</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              Je conçois et déploie des SaaS complets, connectés et dopés à l'IA. De l'architecture système à l'acquisition utilisateur.
            </p>

            {/* Navigation */}
            <nav className="space-y-1 mb-8 flex-1">
              {['À propos', 'Services', 'Réalisations', 'Parcours'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  {item}
                </a>
              ))}
            </nav>

            {/* Footer Sidebar (Bouton Blanc) */}
            <div className="mt-auto">
              <a
                href="https://wa.me/2250101639295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-semibold text-sm py-4 px-4 rounded-[20px] transition-all"
              >
                <span>Discuter d'un projet</span>
              </a>
            </div>
          </div>
        </aside>

        {/* ========================================= */}
        {/* CONTENU PRINCIPAL (Blanc, Centré, Aéré)   */}
        {/* ========================================= */}
        <main className="flex-1 px-4 lg:px-16 py-12 lg:py-24 max-w-5xl mx-auto overflow-hidden">
          
          {/* SECTION HERO (Identique à Framer) */}
          <section className="flex flex-col items-center text-center pt-8 lg:pt-16 pb-24">
            
            {/* Badges du haut */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm">
                <Phone className="w-3.5 h-3.5" /> @boss_oya
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponible pour missions
              </span>
              <span className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm ml-auto">
                Based in Abidjan
              </span>
            </div>

            {/* Titre Massif (Typo Oversized) */}
            <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] text-[#09090B] mb-8">
              Hi I'm Boss OYA <br />
              Créateur de SaaS <br />
              <span className="text-zinc-400">&</span> IA Architect
            </h1>

            {/* 4 Vignettes décoratives type Framer */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-zinc-100 border border-zinc-200 overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
                  <img src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop&sig=${i}`} alt="Abstract" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION PROJETS (Bento Grid Clair) */}
          <section id="réalisations" className="pt-20 border-t border-zinc-200">
            <div className="flex flex-col items-center mb-16 text-center">
              <span className="px-4 py-1.5 rounded-full bg-zinc-100 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Latest Projects
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black">
                Projects that <br /> tell stories
              </h2>
            </div>

            {/* Filtres clairs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === c
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Grille de cartes (Style clair et épuré) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.id} className="group relative bg-white border border-zinc-200 rounded-[32px] p-2 hover:shadow-xl hover:border-zinc-300 transition-all duration-300">
                  <div className="w-full h-64 bg-zinc-100 rounded-[24px] overflow-hidden mb-4 relative">
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-black shadow-sm">
                         {p.tag}
                       </span>
                     </div>
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="text-xl font-bold text-black">{p.title}</h3>
                    <p className="text-sm text-zinc-500 mt-2">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
