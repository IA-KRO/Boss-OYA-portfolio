"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Bot, 
  TrendingUp, 
  GraduationCap, 
  Briefcase,
  Layers,
  ExternalLink
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
      description:
        "Suite unifiée pour dirigeants et PME combinant gestion commerciale, stocks, facturation et agents IA autonomes connectés aux données métiers.",
      stack: ["Next.js", "Docker", "IA / RAG", "PostgreSQL", "Tailwind"],
      stat: "+60% d'efficacité opérationnelle",
      featured: true,
    },
    {
      id: "freebetcash",
      title: "Freebetcash",
      category: "FinTech",
      tag: "FinTech & Data Analytics",
      headline: "Système prédictif & optimisation financière à haute fréquence",
      description:
        "Plateforme web d'arbitrage de données et d'analyse en temps réel, optimisée pour un affichage asynchrone ultra-fluide sur mobile et desktop.",
      stack: ["React", "FastAPI", "WebSockets", "Finance Data"],
      stat: "< 100ms de latence",
      featured: false,
    },
    {
      id: "smart-eco-waste",
      title: "Smart Eco-Waste IoT",
      category: "IoT & Systèmes",
      tag: "IoT & Ville Durable",
      headline: "Poubelle connectée autonome pour le tri urbain intelligent",
      description:
        "Projet de fin d'études en informatique industrielle : capteurs embarqués de détection et télémétrie en temps réel pour l'optimisation des collectes urbaines.",
      stack: ["Microcontrôleurs", "C++", "Capteurs Ultrasons", "Dashboard IoT"],
      stat: "Mention d'Excellence CERCO",
      featured: false,
    },
    {
      id: "crm-growth-engines",
      title: "Growth & CRM Ops Engine",
      category: "Growth Ops",
      tag: "Growth Ops & Relation Client",
      headline: "Architecture de support et tunnels d'acquisition haute cadence",
      description:
        "Déploiement de workflows CRM automatisés, de stratégies d'acquisition ciblées et de gestion du support client chez Yango CI et GISI Énergie Solaire.",
      stack: ["Workflows CRM", "Support Automation", "Analytics", "Vente B2B"],
      stat: "+25k tickets & flux gérés",
      featured: false,
    },
  ];

  const filteredProjects =
    activeTab === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const timeline = [
    {
      period: "Depuis Sept. 2024",
      role: "Promoteur Automobile",
      place: "SAM Motors",
      type: "Expérience Terrain",
      impact: "Vente consultative à haute valeur ajoutée, négociation directe et fidélisation de clientèle premium."
    },
    {
      period: "2023 — 2024",
      role: "CRM Freelance & Support Client",
      place: "Yandex / Yango CI",
      type: "Expérience Terrain",
      impact: "Traitement à flux tendu sur une tech de mobilité urbaine grand public. Résolution de frictions et fidélisation à fort volume."
    },
    {
      period: "2023",
      role: "Licence Pro Sciences Environnementales",
      place: "Groupe ITA",
      type: "Formation Académique",
      impact: "Acquisition de la pensée systémique : appréhender les impacts globaux, la résilience des écosystèmes et l'économie circulaire."
    },
    {
      period: "2021 — 2023",
      role: "Technico-Commercial & Community Manager",
      place: "GISI (Énergie Solaire)",
      type: "Expérience Terrain",
      impact: "Synergie entre expertise technique solaire, coordination de maintenance SAV et amplification de la visibilité digitale."
    },
    {
      period: "2020",
      role: "Licence Informatique Industrielle & Télécoms",
      place: "Groupe CERCO",
      type: "Formation Académique",
      impact: "Passerelle physique-logiciel : conception du prototype de Poubelle intelligente et connectée (Smart Eco-Waste)."
    },
    {
      period: "2018",
      role: "DUT Systèmes Électroniques & Informatiques",
      place: "CERCO",
      type: "Formation Académique",
      impact: "Compréhension profonde des composants matériels, logique booléenne et diagnostic méthodique des pannes."
    },
    {
      period: "2016",
      role: "Baccalauréat F2 (Électronique) & Art Oratoire",
      place: "GS André Malraux",
      type: "Formation Académique",
      impact: "Rigueur des circuits logiques doublée de l'apprentissage de l'éloquence et de la structuration du discours."
    },
    {
      period: "2013",
      role: "BEPC & Formation Fondamentale",
      place: "Petit Séminaire",
      type: "Ancrage Éthique & Moral",
      impact: "Discipline intellectuelle, probité, étude des humanités et patience de l'analyse qui régissent ma méthode de travail."
    }
  ];

  const services = [
    {
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      title: "Conception & Création de SaaS",
      desc: "De la modélisation de base de données à l'interface utilisateur épurée. Développement d'applications web scalables, sécurisées et prêtes à être monétisées."
    },
    {
      icon: <Bot className="w-6 h-6 text-sky-400" />,
      title: "Intégration d'IA & Automatisation",
      desc: "Implémentation d'agents IA métiers, pipelines RAG sur vos documents d'entreprise et workflows d'automatisation pour supprimer les tâches chronophages."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Architecture CRM & Stratégie Produit",
      desc: "Structuration de tunnels de conversion, configuration de CRM sur mesure et accompagnement produit pour maximiser l'adoption et la rétention client."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Solutions Connectées & IoT",
      desc: "Liaison entre le matériel physique (capteurs, automates) et les dashboards cloud en temps réel pour le monitoring industriel et environnemental."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f12] text-zinc-100 font-sans antialiased selection:bg-amber-400 selection:text-black">
      {/* Conteneur Global Format Bento */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* SIDEBAR GAUCHE : Widget Mobile Card (Inspiré du template) */}
          {/* ======================================================== */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="bg-[#14171c] border border-zinc-800/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Effet visuel dégradé en arrière-plan */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

              {/* Photo & Rôle */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-amber-400/40 overflow-hidden flex items-center justify-center font-bold text-xl text-amber-300">
                    BO
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#14171c] rounded-full" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                    Boss OYA
                    <Sparkles className="w-4 h-4 text-amber-400 inline" />
                  </h1>
                  <p className="text-xs font-medium text-zinc-400">
                    Créateur de SaaS • Ingénieur Produit
                  </p>
                </div>
              </div>

              {/* Mini-Bio */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 border-b border-zinc-800 pb-5">
                Étudiant permanent par soif d'apprendre, bâtisseur par vocation. Je conçois des SaaS, déploie des systèmes IA et combine vision technique et maîtrise commerciale pour résoudre des problèmes concrets.
              </p>

              {/* Liens de navigation rapide */}
              <nav className="space-y-2 mb-6 text-sm font-medium">
                <a href="#about" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 transition text-zinc-300 hover:text-white">
                  <span>01. À propos</span>
                  <span className="text-xs text-zinc-500">Perspective</span>
                </a>
                <a href="#parcours" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 transition text-zinc-300 hover:text-white">
                  <span>02. Parcours & Formations</span>
                  <span className="text-xs text-zinc-500">Du Séminaire au SaaS</span>
                </a>
                <a href="#services" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 transition text-zinc-300 hover:text-white">
                  <span>03. Services & Freelance</span>
                  <span className="text-xs text-zinc-500">Expertises</span>
                </a>
                <a href="#projets" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 transition text-zinc-300 hover:text-white">
                  <span>04. Réalisations</span>
                  <span className="text-xs text-zinc-500">GÉRANT-IA & Plus</span>
                </a>
              </nav>

              {/* Statuts & Infos */}
              <div className="space-y-2.5 text-xs text-zinc-400 mb-6 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Abidjan, Côte d'Ivoire (Remote friendly)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Disponible pour missions Freelance & SaaS</span>
                </div>
              </div>

              {/* Bouton CTA Principal */}
              <a
                href="https://wa.me/2250101639295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-sm py-3.5 px-4 rounded-2xl shadow-lg transition-all transform active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Discuter d'un projet</span>
              </a>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* CONTENU PRINCIPAL : Bento Feed (Centre & Droite)         */}
          {/* ======================================================== */}
          <main className="lg:col-span-8 space-y-12">

            {/* SECTION 01 : HERO & A PROPOS */}
            <section id="about" className="space-y-6">
              {/* Badges du haut */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                  @boss_oya
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Bâtisseur Produit & IA
                </span>
              </div>

              {/* Titre Principal */}
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  L'alliance de l'ingénierie, du logiciel et de l'impact terrain.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
                  Mon parcours atypique est mon plus grand avantage stratégique : 
                  la rigueur morale acquise au <strong>Petit Séminaire</strong>, 
                  la vérité brute des circuits en <strong>Électronique</strong>, 
                  la vision d'ensemble des <strong>Sciences Environnementales</strong> 
                  et le réalisme de la <strong>vente & relation client (Yango, SAM Motors)</strong>.
                </p>
              </div>

              {/* Bento Highlights (4 piliers de pensée) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#14171c] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">01. Rigueur & Analyse</span>
                  <h3 className="text-base font-semibold text-white mt-1">Diagnostic à la racine</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-normal">
                    Héritage de l'électronique : un signal passe ou ne passe pas. Recherche systématique de la cause première sans superflu.
                  </p>
                </div>
                <div className="bg-[#14171c] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">02. Pensée Systémique</span>
                  <h3 className="text-base font-semibold text-white mt-1">Écologie & Durabilité</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-normal">
                    Appris en sciences de l'environnement : toute modification locale impacte la totalité du système. Idéal pour concevoir des SaaS résilients.
                  </p>
                </div>
                <div className="bg-[#14171c] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">03. Intelligence Métier</span>
                  <h3 className="text-base font-semibold text-white mt-1">IA & Automatisation</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-normal">
                    Générer de la valeur réelle en concevant des copilotes autonomes intégrés directement dans les flux de travail récurrents.
                  </p>
                </div>
                <div className="bg-[#14171c] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">04. Sens du Contact</span>
                  <h3 className="text-base font-semibold text-white mt-1">L'Humain avant le Code</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-normal">
                    Le code le plus élaboré n'a de valeur que s'il est compris et adopté avec enthousiasme par l'utilisateur final.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 02 : SERVICES & FREELANCE */}
            <section id="services" className="space-y-6 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Services & Offres Freelance</h2>
                  <p className="text-sm text-zinc-400 mt-1">Ce que je conçois et déploie pour mes clients et partenaires.</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                  Sur-Mesure
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, idx) => (
                  <div key={idx} className="bg-[#14171c] border border-zinc-800/70 p-6 rounded-2xl hover:border-zinc-700 transition">
                    <div className="mb-4">{s.icon}</div>
                    <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 03 : REALISATIONS (PROJETS PHARE) */}
            <section id="projets" className="space-y-6 pt-4 border-t border-zinc-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Réalisations & SaaS</h2>
                  <p className="text-sm text-zinc-400 mt-1">Des projets bâtis pour résoudre de vrais besoins.</p>
                </div>

                {/* Filtres de catégories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveTab(c)}
                      className={`text-xs px-3 py-1.5 rounded-full transition font-medium ${
                        activeTab === c
                          ? "bg-amber-400 text-black font-semibold shadow-md"
                          : "bg-zinc-800/70 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grille des cartes de projets */}
              <div className="grid grid-cols-1 gap-5">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    className={`bg-[#14171c] border rounded-3xl p-6 sm:p-7 transition relative overflow-hidden ${
                      p.featured
                        ? "border-amber-400/30 bg-gradient-to-br from-[#14171c] to-[#1a1712]"
                        : "border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800/90 text-amber-300 w-fit">
                        {p.tag}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono font-medium">
                        {p.stat}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-300 mt-1">
                      {p.headline}
                    </p>
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://wa.me/2250101639295"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 transition"
                      >
                        <span>En savoir plus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 04 : PARCOURS & FORMATIONS */}
            <section id="parcours" className="space-y-6 pt-4 border-t border-zinc-800/80">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Parcours, Formations & Évolution
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Chaque étape a façonné ma logique et mon adaptabilité face aux défis complexes.
                </p>
              </div>

              {/* Timeline verticale stylisée */}
              <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Pastille sur la ligne */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-800 border-2 border-amber-400 group-hover:scale-125 transition" />

                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {item.period}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {item.role} <span className="text-zinc-400 font-normal">· {item.place}</span>
                    </h3>

                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 05 : ME CONTACTER (FOOTER BENTO) */}
            <section id="contact" className="bg-[#14171c] border border-zinc-800 p-8 rounded-3xl text-center space-y-5 relative overflow-hidden">
              <div className="max-w-md mx-auto space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Bâtissons votre prochain projet
                </h2>
                <p className="text-xs text-zinc-400">
                  Besoin d'un SaaS performant, d'une solution d'intelligence artificielle ou d'une mission de conseil produit ?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/2250101639295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm py-3 px-6 rounded-2xl transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp direct (+225 0101639295)</span>
                </a>
                <a
                  href="mailto:pierrechristianoya@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm py-3 px-6 rounded-2xl border border-zinc-700/60 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>pierrechristianoya@gmail.com</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 pt-4">
                © {new Date().getFullYear()} Boss OYA (Christian OYA) • Conçu avec rigueur & ambition.
              </p>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
