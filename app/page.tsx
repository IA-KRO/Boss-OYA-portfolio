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
  ChevronRight,
  Workflow,
  Radio,
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
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      headline: "Copilote intelligent de gestion d'entreprise & automatisation RAG",
      description:
        "Suite unifiée pour dirigeants et PME combinant gestion commerciale, stocks, facturation et agents IA autonomes capables d'interagir directement avec les flux de travail métiers.",
      stack: ["Next.js", "Docker", "IA / RAG", "PostgreSQL", "Tailwind CSS"],
      stat: "+60% d'efficacité opérationnelle",
      featured: true,
    },
    {
      id: "freebetcash",
      title: "Freebetcash",
      category: "FinTech",
      tag: "FinTech & Data Analytics",
      badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      headline: "Système prédictif & optimisation financière à flux continu",
      description:
        "Plateforme web d'arbitrage et d'analyse en temps réel, optimisée pour un traitement asynchrone ultra-fluide avec une latence d'affichage quasi nulle sur mobile et desktop.",
      stack: ["React", "FastAPI", "WebSockets", "Data Engine", "ChartJS"],
      stat: "< 100ms de latence",
      featured: false,
    },
    {
      id: "smart-eco-waste",
      title: "Smart Eco-Waste IoT",
      category: "IoT & Systèmes",
      tag: "IoT & Informatique Industrielle",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      headline: "Poubelle connectée autonome pour le tri écologique urbain",
      description:
        "Dispositif autonome de tri intelligent et de télémétrie en temps réel pour smart cities. Conception des capteurs électroniques embarqués et monitoring distant des flux de déchets.",
      stack: ["Microcontrôleurs", "C++", "Télémétrie Ultrasons", "Réseaux IoT"],
      stat: "Mention d'Excellence CERCO",
      featured: false,
    },
    {
      id: "crm-growth-engines",
      title: "Growth & CRM Ops Engine",
      category: "Growth Ops",
      tag: "Growth Ops & Relation Client",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      headline: "Pipelines d'acquisition et support client à haute cadence",
      description:
        "Structuration complète de workflows CRM, automatisation du support utilisateur à grande échelle et campagnes de croissance ciblées chez Yango CI et GISI Énergie Solaire.",
      stack: ["Workflows CRM", "Support Automation", "Analytics", "Vente B2B"],
      stat: "+25k flux & requêtes traités",
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
      type: "Terrain & Haute Valeur",
      impact: "Vente consultative premium, négociation directe et fidélisation de clientèle stratégique à fort pouvoir d'achat."
    },
    {
      period: "2023 — 2024",
      role: "CRM Freelance & Support Client",
      place: "Yandex / Yango CI",
      type: "Ops & Volume Tech",
      impact: "Gestion opérationnelle CRM à flux tendu sur une application de mobilité urbaine grand public. Réduction drastique des frictions utilisateurs."
    },
    {
      period: "2023",
      role: "Licence Pro Sciences Environnementales",
      place: "Groupe ITA",
      type: "Pensée Systémique",
      impact: "Acquisition d'une vision globale et durable : chaque composant impacte l'écosystème global. Fondement d'architectures logicielles résilientes."
    },
    {
      period: "2021 — 2023",
      role: "Technico-Commercial & Community Manager",
      place: "GISI (Énergie Solaire)",
      type: "Terrain & Digital",
      impact: "Synergie entre savoir-faire technique solaire, supervision du SAV et accélération de la notoriété par des campagnes ciblées."
    },
    {
      period: "2020",
      role: "Licence Informatique Industrielle & Réseaux",
      place: "Groupe CERCO",
      type: "Hardware & Logiciel",
      impact: "Conception complète du prototype de Poubelle intelligente connectée (Smart Eco-Waste IoT). Fusion de l'embarqué et du cloud."
    },
    {
      period: "2018",
      role: "DUT Systèmes Électroniques & Informatiques",
      place: "CERCO",
      type: "Logique & Matériel",
      impact: "Maîtrise des signaux, schémas logiques et algèbre booléenne. Méthode cartésienne d'isolation de la cause première."
    },
    {
      period: "2016",
      role: "Baccalauréat F2 (Électronique) & Art Oratoire",
      place: "GS André Malraux",
      type: "Rigueur & Rhétorique",
      impact: "Rigueur stricte des circuits électriques combinée à la formation en art oratoire pour vulgariser et convaincre avec impact."
    },
    {
      period: "2013",
      role: "BEPC & Formation Fondamentale",
      place: "Petit Séminaire",
      type: "Discipline & Morale",
      impact: "Apprentissage du latin, discipline personnelle intransigeante, probité intellectuelle et sens de l'analyse patiente."
    }
  ];

  const services = [
    {
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      title: "Conception & Création de SaaS",
      desc: "De la modélisation de base de données à l'interface moderne. Conception d'applications web scalables, sécurisées, monétisables et pensées pour le client."
    },
    {
      icon: <Bot className="w-5 h-5 text-sky-400" />,
      title: "Intégration d'IA & Automatisation",
      desc: "Déploiement d'agents autonomes, architectures RAG indexant vos données métiers et automatisation des flux de travail récurrents sans rupture opérationnelle."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: "Architecture CRM & Stratégie Produit",
      desc: "Structuration de tunnels de conversion, configuration de CRM sur mesure et accompagnement produit pour convertir, retenir et fidéliser."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Solutions Connectées & IoT",
      desc: "Passerelle directe entre équipement physique (capteurs, contrôleurs) et dashboards temps réel hébergés dans le cloud."
    }
  ];

  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-100 font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* Texture de fond subtile et lueurs atmosphériques */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[500px] bg-amber-500/[0.04] blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-sky-500/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* SIDEBAR GAUCHE : Widget Flottant Sombre Style Framer     */}
          {/* ======================================================== */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="bg-[#111317] border border-zinc-800/90 rounded-[32px] p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Reflet lumineux d'en-tête */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
              
              {/* Photo de profil + Status */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700/80 overflow-hidden flex items-center justify-center font-bold text-xl text-amber-400 shadow-inner">
                    BO
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-[3px] border-[#111317] rounded-full" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                    Boss OYA
                    <Sparkles className="w-4 h-4 text-amber-400 inline" />
                  </h1>
                  <span className="inline-block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mt-0.5">
                    Créateur de SaaS • Ingénieur Produit
                  </span>
                </div>
              </div>

              {/* Mini-Bio */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 border-b border-zinc-800/80 pb-6">
                Étudiant permanent par soif d'apprendre, bâtisseur par vocation. J'allie rigueur de l'électronique, vision systémique et réalisme commercial pour transformer des problèmes complexes en SaaS rentables.
              </p>

              {/* Navigation fluide */}
              <nav className="space-y-1.5 mb-6 text-sm font-medium">
                {[
                  { label: "01. À propos", desc: "Perspective & Logique", href: "#about" },
                  { label: "02. Services & Freelance", desc: "Solutions métiers", href: "#services" },
                  { label: "03. Réalisations", desc: "SaaS & Plateformes", href: "#projets" },
                  { label: "04. Parcours & Formations", desc: "Du Séminaire au SaaS", href: "#parcours" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-800/40 text-zinc-300 hover:text-white transition-all group border border-transparent hover:border-zinc-800"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    <span className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors font-normal">
                      {item.desc}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Localisation & Disponibilité */}
              <div className="space-y-2.5 text-xs text-zinc-400 mb-6 bg-zinc-900/70 p-4 rounded-2xl border border-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Abidjan, Côte d'Ivoire (Remote friendly)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Disponible pour missions Freelance & SaaS</span>
                </div>
              </div>

              {/* Bouton CTA Action */}
              <a
                href="https://wa.me/2250101639295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:opacity-95 text-black font-semibold text-sm py-3.5 px-4 rounded-2xl shadow-lg shadow-amber-500/10 transition-all transform active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Discuter d'un projet</span>
              </a>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* CONTENU PRINCIPAL : Bento Feed (Centre & Droite)         */}
          {/* ======================================================== */}
          <main className="lg:col-span-8 space-y-16">

            {/* SECTION 01 : HERO & À PROPOS */}
            <section id="about" className="space-y-8 pt-2">
              
              {/* Badges du haut */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-sm">
                  @boss_oya
                </span>
                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Product Engineer & SaaS Creator
                </span>
              </div>

              {/* Titre Principal Éditorial */}
              <div>
                <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12]">
                  L'alliance de l'ingénierie, du logiciel et de l'impact terrain.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  Mon parcours pluridisciplinaire est mon plus grand atout stratégique : 
                  la rigueur morale acquise au <strong>Petit Séminaire</strong>, 
                  la vérité brute des circuits en <strong>Électronique</strong>, 
                  la pensée systémique des <strong>Sciences Environnementales</strong> 
                  et la réalité de la <strong>vente & relation client (Yango CI, SAM Motors)</strong>.
                </p>
              </div>

              {/* Galerie Visuelle d'Univers (Les 4 Vignettes inspirées du template) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                {[
                  { label: "SaaS Architecture", sub: "Modular Code", icon: <Code2 className="w-5 h-5 text-amber-400" /> },
                  { label: "Intelligence Artificielle", sub: "LLM & Workflows", icon: <Bot className="w-5 h-5 text-sky-400" /> },
                  { label: "Hardware & IoT", sub: "Systèmes Réseaux", icon: <Radio className="w-5 h-5 text-emerald-400" /> },
                  { label: "Growth Engines", sub: "CRM & Acquisition", icon: <TrendingUp className="w-5 h-5 text-purple-400" /> },
                ].map((card, i) => (
                  <div 
                    key={i} 
                    className="bg-[#121419] border border-zinc-800/80 hover:border-zinc-700 p-4 rounded-2xl flex flex-col justify-between h-28 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white truncate">{card.label}</p>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Les 4 Piliers de réflexion (Bento Highlights) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#111317] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">01. Rigueur & Analyse</span>
                  <h3 className="text-base font-semibold text-white mt-1">Diagnostic à la racine</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Héritage de l'électronique : un signal passe ou ne passe pas. Recherche méthodique de la cause première sans superflu.
                  </p>
                </div>
                <div className="bg-[#111317] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">02. Pensée Systémique</span>
                  <h3 className="text-base font-semibold text-white mt-1">Écologie & Résilience</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Appris en sciences environnementales : chaque composant impacte l'ensemble. Conçu pour bâtir des logiciels durables et équilibrés.
                  </p>
                </div>
                <div className="bg-[#111317] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">03. Intelligence Métier</span>
                  <h3 className="text-base font-semibold text-white mt-1">IA & Automatisation</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Créer de la valeur tangible en intégrant des agents IA connectés directement aux données opérationnelles sans gadget inutile.
                  </p>
                </div>
                <div className="bg-[#111317] border border-zinc-800/80 p-5 rounded-2xl">
                  <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">04. Réalité Client</span>
                  <h3 className="text-base font-semibold text-white mt-1">L'Humain avant le Code</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Le code le plus sophistiqué n'a de valeur que s'il résout une vraie friction et s'il est adopté avec clarté par l'utilisateur.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 02 : SERVICES & FREELANCE */}
            <section id="services" className="space-y-6 pt-6 border-t border-zinc-800/80">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Services & Offres Freelance</h2>
                  <p className="text-sm text-zinc-400 mt-1">Ce que je conçois et déploie pour mes clients et partenaires.</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  Sur-Mesure
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, idx) => (
                  <div key={idx} className="bg-[#111317] border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                      {s.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 03 : RÉALISATIONS (PROJETS PHARES) */}
            <section id="projets" className="space-y-6 pt-6 border-t border-zinc-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Réalisations & SaaS</h2>
                  <p className="text-sm text-zinc-400 mt-1">Des systèmes bâtis pour répondre à des besoins concrets.</p>
                </div>

                {/* Filtres de catégories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveTab(c)}
                      className={`text-xs px-3.5 py-1.5 rounded-full transition font-medium ${
                        activeTab === c
                          ? "bg-amber-400 text-black font-semibold shadow-md"
                          : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
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
                    className={`bg-[#111317] border rounded-3xl p-6 sm:p-7 transition relative overflow-hidden ${
                      p.featured
                        ? "border-amber-400/30 bg-gradient-to-br from-[#111317] to-[#171510]"
                        : "border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border w-fit ${p.badgeColor}`}>
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
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://wa.me/2250101639295"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                      >
                        <span>Discuter de ce projet</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 04 : PARCOURS & FORMATIONS */}
            <section id="parcours" className="space-y-6 pt-6 border-t border-zinc-800/80">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Parcours, Formations & Évolution
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  De la rigueur du séminaire à l'architecture logicielle : chaque étape a forgé ma logique.
                </p>
              </div>

              {/* Timeline stylisée avec connecteurs verticaux */}
              <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-9">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Pastille sur la ligne */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />

                    <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {item.period}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 font-medium">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {item.role} <span className="text-zinc-500 font-normal">· {item.place}</span>
                    </h3>

                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 05 : ME CONTACTER (FOOTER BENTO) */}
            <section id="contact" className="bg-[#111317] border border-zinc-800/90 p-8 sm:p-10 rounded-[32px] text-center space-y-6 relative overflow-hidden">
              <div className="max-w-md mx-auto space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Bâtissons votre prochain projet
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Besoin d'un SaaS performant, d'une solution d'intelligence artificielle ou d'une mission de conseil produit ?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/2250101639295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:opacity-95 text-black font-semibold text-sm py-3.5 px-6 rounded-2xl shadow-lg transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp direct (+225 0101639295)</span>
                </a>
                <a
                  href="mailto:pierrechristianoya@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-3.5 px-6 rounded-2xl border border-zinc-800 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>pierrechristianoya@gmail.com</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 pt-4 border-t border-zinc-800/60 max-w-sm mx-auto">
                © {new Date().getFullYear()} Boss OYA (Christian OYA) • Conçu avec rigueur & ambition.
              </p>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
