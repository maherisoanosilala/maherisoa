import {
  FiCode, FiServer, FiDatabase, FiCloud, FiTerminal, FiTool,
  FiGitBranch, FiLayers, FiCpu,
} from "react-icons/fi";

export const profile = {
  firstName: "Lala Arthur",
  lastName: "Razafiarinosy",
  role: "Full-Stack Software Engineer",
  focus: "Administration Système & Réseau",
  email: "maherisoanosilala@gmail.com",
  phone: "+261 38 06 710 10",
  phone2: "+261 37 40 631 62",
  location: "Fianarantsoa, Madagascar",
  cvUrl: "https://drive.google.com/file/d/1wx-ajzJkb6_a1gWVora1LtDp7fV_7h-L/view?usp=drive_link",
  bio: "Software Engineer Full-Stack doté d'une solide expertise en administration système et réseau, je conçois, déploie et maintiens des solutions applicatives et infrastructures critiques de bout en bout. Spécialisé dans l'écosystème Next.js / Node.js, j'interviens aussi bien sur l'architecture logicielle et le packaging que sur la configuration serveur, la mise en réseau et le déploiement (on-premise ou cloud).",
  bio2: "Habitué aux environnements exigeants (administration publique, industrie, agritech, e-commerce), je veille à la fiabilité technique, la sécurité et la traçabilité des données, ainsi qu'à l'adoption terrain par les utilisateurs.",
};

export const experience = [
  {
    title: "Software Engineer & Intégrateur Solutions",
    company: "Commune Urbaine de Fianarantsoa",
    context: "Gestion des recettes & dépenses · Collectivité territoriale décentralisée",
    period: "Septembre 2025 — Décembre 2026",
    description:
      "Pilotage budgétaire et financier municipal — conception et déploiement d'une solution full-stack critique, de l'audit métier à la formation terrain.",
    bullets: [
      "Cadrage & Accompagnement Métier : audit des processus financiers existants et conception de bout en bout d'une solution de gestion des recettes et dépenses adaptée aux contraintes opérationnelles des agents municipaux.",
      "Ingénierie & Centralisation des Données : architecture full-stack (Next.js, NestJS) adossée à une base MongoDB centralisée, remplaçant les fichiers Excel dispersés par des workflows sécurisés de saisie, validation hiérarchique et consultation.",
      "Déploiement Infrastructure & Conduite du Changement : installation on-premise (configuration serveur / réseau local, automatisation via scripts .bat), rédaction de supports et formation des équipes — solution adoptée en production quotidienne par ~10 agents.",
    ],
    tags: ["Next.js", "NestJS", "MongoDB", "On-premise", "Change Management"],
  },
  {
    title: "Software Engineer Full-Stack & IoT Monitoring",
    company: "Chambre Froide Industrielle",
    context: "Environnement industriel sous température dirigée",
    period: "Janvier 2026 — Mai 2026",
    description:
      "Sécurisation de la chaîne du froid et traçabilité via une plateforme de supervision temps réel.",
    bullets: [
      "Architecture Temps Réel : conception et déploiement d'un système de télémétrie et supervision thermique en continu basé sur Firebase (Realtime Database / streaming) pour l'ingestion et la diffusion instantanée des relevés.",
      "Prévention & Alerting Automatisé : triggers et notifications en cas de dérive thermique, permettant une réaction immédiate des équipes et la réduction des risques de perte de matières premières.",
      "Digitalisation & Traçabilité : tableau de bord analytique (historique complet, séries temporelles, exports) remplaçant les relevés papier et garantissant l'intégrité des audits qualité.",
      "Intégration Opérationnelle : déploiement au cœur du workflow terrain (supervision continue, archivage sécurisé, gestion des incidents) avec focus haute disponibilité.",
    ],
    tags: ["Firebase", "Realtime", "IoT", "Dashboard", "Traçabilité"],
  },
];

export const skillGroups = [
  {
    icon: FiCode,
    title: "Frontend & Mobile",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript", "Flutter"],
  },
  {
    icon: FiServer,
    title: "Backend & APIs",
    items: ["NestJS", "Node.js", "REST APIs", "Streaming / Temps réel", "Webhooks"],
  },
  {
    icon: FiDatabase,
    title: "Bases de données",
    items: ["PostgreSQL", "MongoDB", "Firebase (Realtime DB)"],
  },
  {
    icon: FiTool,
    title: "Tests & Qualité",
    items: ["Jest", "Playwright", "Cypress"],
  },
  {
    icon: FiCloud,
    title: "Cloud & CI/CD",
    items: ["Vercel", "Docker", "GitHub Actions", "Railway", "Render", "On-premise (.bat)"],
  },
  {
    icon: FiTerminal,
    title: "Systèmes & Réseau",
    items: ["Linux (Ubuntu, 4+ ans)", "Windows", "TCP/IP & Réseau"],
  },
  {
    icon: FiLayers,
    title: "Product & Pilotage",
    items: ["Jira", "Trello", "Linear", "Notion", "Slack"],
  },
  {
    icon: FiGitBranch,
    title: "Automatisation",
    items: ["n8n", "Zapier", "Make", "Webhooks"],
  },
];

export const expertise = [
  "Cadrage & Architecture Solution",
  "Ingénierie Logicielle Full-Stack",
  "Packaging & Automatisation",
  "Déploiement & Administration Système/Réseau",
  "Conduite du Changement & Formation Terrain",
  "Data Analysis & Traçabilité",
  "Product Strategy & Digital Marketing",
];

export const education = [
  {
    degree: "Master I en Informatique",
    school: "École de Management et d'Innovation Technologique",
    location: "Fianarantsoa, Madagascar",
    period: "2024 — 2025",
  },
  {
    degree: "Licence en Informatique",
    school: "École de Management et d'Innovation Technologique",
    location: "Fianarantsoa, Madagascar",
    period: "2023 — 2024",
  },
];

export const languages = [
  { name: "Malagasy", level: "Natif" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Technique / Professionnel" },
];

export const interests = ["Lecture", "Voyage", "Musculation"];

export const stats = [
  { value: 2, suffix: "+", label: "Années d'expérience" },
  { value: 2, suffix: "", label: "Systèmes critiques en prod" },
  { value: 10, suffix: "", label: "Agents formés sur le terrain" },
  { value: 4, suffix: "+", label: "Années sur Linux" },
];