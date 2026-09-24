"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Mail,
  Layers,
  Bot,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Tous");
  const categories = ["Tous", "SaaS & IA", "FinTech", "IoT & Systèmes", "Growth Ops"];

  const projects = [
    {
      id: "gerant-ia",
      title: "GÉRANT-IA",
      category: "SaaS & IA",
      tag: "SaaS & Intelligence Artificielle",
      headline: "Copilote intelligent de gestion d'entreprise & automatisation RAG",
      description: "Suite unifiée pour dirigeants et PME combinant gestion commerciale, stocks, facturation et agents IA autonomes connectés aux données métiers.",
      stack: ["Next.js", "Docker", "IA / RAG", "PostgreSQL", "Tailwind"],
      stat: "+60% d'efficacité",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-GERANT-sansfond-hTZ3YypIM4L7FOeBtiWSz6X7AAR38C.png"
    },
    {
      id: "freebetcash",
      title: "Freebetcash",
      category: "FinTech",
      tag: "FinTech & Data Analytics",
      headline: "Système prédictif & optimisation financière à haute fréquence",
      description: "Plateforme web d'arbitrage de données et d'analyse en temps réel, optimisée pour un affichage asynchrone ultra-fluide sur mobile et desktop.",
      stack: ["React", "FastAPI", "WebSockets", "Finance Data"],
      stat: "< 100ms latence",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "smart-eco-waste",
      title: "Smart Eco-Waste IoT",
      category: "IoT & Systèmes",
      tag: "IoT & Ville Durable",
      headline: "Poubelle connectée autonome pour le tri urbain intelligent",
      description: "Projet de fin d'études : capteurs embarqués de détection et télémétrie en temps réel pour l'optimisation des collectes urbaines.",
      stack: ["Microcontrôleurs", "C++", "Capteurs", "Dashboard IoT"],
      stat: "Mention Excellence",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "crm-growth-engines",
      title: "Growth & CRM Ops Engine",
      category: "Growth Ops",
      tag: "Growth Ops & Relation Client",
      headline: "Architecture de support et tunnels d'acquisition haute cadence",
      description: "Déploiement de workflows CRM automatisés, stratégies d'acquisition et gestion du support client chez Yango CI et GISI Énergie Solaire.",
      stack: ["Workflows CRM", "Automation", "Analytics", "Vente B2B"],
      stat: "+25k tickets gérés",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredProjects = activeTab === "Tous" 
    ? projects 
    : projects.filter((p) => p.category === activeTab);

  const timeline = [
    { period: "Depuis Sept. 2024", role: "Promoteur Automobile", place: "SAM Motors", impact: "Vente consultative à haute valeur ajoutée, négociation directe et fidélisation de clientèle premium." },
    { period: "2023 — 2024", role: "CRM Freelance & Support Client", place: "Yango CI", impact: "Traitement à flux tendu sur une tech de mobilité urbaine. Résolution de frictions et fidélisation à fort volume." },
    { period: "2023", role: "Licence Pro Sciences Environnementales", place: "Groupe ITA", impact: "Acquisition de la pensée systémique : impacts globaux, résilience des écosystèmes et économie circulaire." },
    { period: "2021 — 2023", role: "Technico-Commercial & CM", place: "GISI (Solaire)", impact: "Synergie entre expertise technique solaire, coordination de maintenance SAV et visibilité digitale." },
    { period: "2020", role: "Licence Informatique Industrielle", place: "Groupe CERCO", impact: "Passerelle physique-logiciel : conception du prototype de Poubelle intelligente et connectée." },
    { period: "2018", role: "DUT Systèmes Électroniques", place: "CERCO", impact: "Compréhension des composants matériels, logique booléenne et diagnostic méthodique des pannes." }
  ];

  const services = [
    { icon: <Layers className="w-6 h-6 text-amber-500" />, title: "Création de SaaS", desc: "Architecture, base de données et interfaces web scalables prêtes à être monétisées." },
    { icon: <Bot className="w-6 h-6 text-sky-500" />, title: "Intégration d'IA", desc: "Agents IA métiers, pipelines RAG et workflows d'automatisation pour supprimer les tâches chronophages." },
    { icon: <TrendingUp className="w-6 h-6 text-emerald-500" />, title: "Architecture CRM", desc: "Tunnels de conversion, configuration CRM et accompagnement produit pour maximiser la rétention." },
    { icon: <Cpu className="w-6 h-6 text-purple-500" />, title: "IoT & Systèmes", desc: "Liaison entre le matériel physique (capteurs) et les dashboards cloud en temps réel." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans selection:bg-amber-400 selection:text-black">
      
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        
        {/* ========================================= */}
        {/* SIDEBAR GAUCHE (Flottante & Sombre)       */}
        {/* ========================================= */}
        <aside className="lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen z-20">
          <div className="bg-[#151515] w-full h-full rounded-[32px] p-6 sm:p-8 flex flex-col text-white shadow-2xl relative overflow-hidden">
            
            {/* Effet lumineux discret */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

            {/* Header Sidebar */}
            <div className="flex items-center gap-4 mb-8 relative">
              <div className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xl text-amber-400">
                BO
              </div>
              <div>
                <h1 className="text-lg font-bold text-white flex items-center gap-1.5">
                  Boss OYA <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h1>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5">Ingénieur Produit</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              Étudiant permanent par soif d'apprendre, bâtisseur par vocation. Je conçois des SaaS, déploie des systèmes IA et combine vision technique et maîtrise commerciale.
            </p>

            {/* Navigation */}
            <nav className="space-y-1 mb-8 flex-1">
              {[
                { id: 'about', label: '01. À propos' },
                { id: 'services', label: '02. Services' },
                { id: 'projets', label: '03. Réalisations' },
                { id: 'parcours', label: '04. Parcours' }
              ].map((item) => (
                <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-zinc-800/60 text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Status */}
            <div className="space-y-3 text-xs text-zinc-400 mb-6 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Ouvert aux missions</span>
              </div>
            </div>

            {/* Bouton CTA Principal */}
            <div className="mt-auto">
              <a
                href="https://wa.me/2250101639295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-semibold text-sm py-4 px-4 rounded-[20px] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Discuter d'un projet</span>
              </a>
            </div>
          </div>
        </aside>

        {/* ========================================= */}
        {/* CONTENU PRINCIPAL (Blanc, Centré, Aéré)   */}
        {/* ========================================= */}
        <main className="flex-1 px-4 lg:px-16 py-12 lg:py-20 max-w-5xl mx-auto overflow-hidden">
          
          {/* SECTION HERO */}
          <section id="about" className="flex flex-col items-center text-center pt-8 pb-20">
            
            {/* Badges du haut */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm">
                 @boss_oya
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Bâtisseur SaaS & IA
              </span>
            </div>

            {/* Titre Massif */}
            <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] text-[#09090B] mb-8">
              Hi I'm Boss OYA <br />
              Créateur de SaaS <br />
              <span className="text-zinc-400">&</span> Ingénieur Produit
            </h1>

            <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              L'alliance de l'ingénierie, du logiciel et de l'impact terrain. Mon parcours croise la rigueur de l'électronique, la vision de l'environnement et le réalisme de la vente.
            </p>

            {/* 4 Vignettes (Piliers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-4">
              {[
                { title: "Rigueur", desc: "Diagnostic à la racine" },
                { title: "Système", desc: "Pensée globale" },
                { title: "IA", desc: "Automatisation" },
                { title: "Humain", desc: "Sens du contact" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 block">0{i + 1}</span>
                  <h3 className="text-sm font-bold text-black">{item.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION SERVICES */}
          <section id="services" className="pt-20 border-t border-zinc-200">
            <div className="mb-12">
              <span className="px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 inline-block">
                Expertises
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Services & Offres Freelance
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((s, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 p-8 rounded-[32px] hover:border-zinc-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-6 p-4 bg-zinc-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION REALISATIONS */}
          <section id="projets" className="pt-24 mt-20 border-t border-zinc-200">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-8">
                Projects that tell stories
              </h2>
              
              {/* Filtres clairs */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveTab(c)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === c
                        ? "bg-black text-white shadow-md"
                        : "bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-300 hover:text-black"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Grille de cartes de projets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <div key={p.id} className="group relative bg-white border border-zinc-200 rounded-[32px] p-2 hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col">
                  
                  {/* Image Container */}
                  <div className="w-full h-64 bg-zinc-100 rounded-[24px] overflow-hidden mb-6 relative">
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 flex gap-2">
                       <span className="px-3 py-1 bg-white/95 backdrop-blur text-[11px] font-bold uppercase tracking-wider rounded-full text-black shadow-sm">
                         {p.tag}
                       </span>
                     </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-5 pb-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-black tracking-tight">{p.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {p.stat}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-800 mb-2">{p.headline}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">{p.description}</p>
                    
                    {/* Stack & Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-100">
                      <div className="flex flex-wrap gap-2">
                        {p.stack.slice(0,3).map((tech) => (
                          <span key={tech} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a href="https://wa.me/2250101639295" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-100 rounded-full hover:bg-amber-400 hover:text-black transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* SECTION PARCOURS */}
          <section id="parcours" className="pt-24 mt-20 border-t border-zinc-200">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Parcours & Évolution
              </h2>
            </div>

            <div className="relative border-l-2 border-zinc-100 ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-white border-[3px] border-black group-hover:scale-125 group-hover:border-amber-500 transition-all duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                    <span className="text-sm font-bold text-amber-600 w-32 shrink-0">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-black">
                      {item.role} <span className="text-zinc-400 font-normal ml-1">chez {item.place}</span>
                    </h3>
                  </div>
                  
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl sm:ml-36">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION CONTACT (Footer contrasté sombre) */}
          <section className="mt-24 bg-[#151515] rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] pointer-events-none rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10 tracking-tight">
              Prêt à bâtir votre projet ?
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-10 relative z-10">
              Que vous ayez besoin d'un SaaS performant ou d'intégrer l'IA à vos processus métiers, discutons-en.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://wa.me/2250101639295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm py-4 px-8 rounded-full transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Me contacter sur WhatsApp</span>
              </a>
              <a
                href="mailto:pierrechristianoya@gmail.com"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm py-4 px-8 rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Par Email</span>
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
