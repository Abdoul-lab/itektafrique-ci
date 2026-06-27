import { CONTACT } from '../constants/contact';

// ---- Types ----

export interface IaScenarioOption {
  keywords: string[];
  next: string;
}

export interface IaScenario {
  text: string;
  options: IaScenarioOption[];
}

export interface QuestionNode {
  key: string;
  text: string;
  type: 'text' | 'select';
  options?: string[];
  next: string | null | ((form: Record<string, string>) => string | null);
}

// ---- IA Scenarios ----

export const iaScenarios: Record<string, IaScenario> = {
  menu: {
    text: `Bonjour 👋 ! Je suis ITEBOT, l'assistant d'ITEKTAFRIQUE CI.

1️⃣ Nos offres & services
2️⃣ Nos domaines d'expertise
3️⃣ Questions fréquentes
4️⃣ Prendre rendez-vous

Tapez un numéro ou un mot-clé. Tapez "Menu" pour revenir ici à tout moment.`,
    options: [
      { keywords: ['1', 'offre', 'offres', 'service', 'services', 'solution'], next: 'offres' },
      { keywords: ['2', 'domaine', 'domaines', 'expertise'], next: 'domaines' },
      { keywords: ['3', 'question', 'questions', 'faq', 'aide'], next: 'faq' },
      { keywords: ['4', 'rdv', 'rendez-vous', 'prendre', 'contact'], next: 'rdv' },
    ],
  },

  offres: {
    text: `Nos 7 offres, adaptées à chaque profil :

🌐 Starter Digital — Site pro en 2 à 4 semaines (PME, Startup)
📈 Croissance PME — Digitalisez et vendez 24h/24 ⭐ Populaire
⚡ MVP Startup — De l'idée au produit en 4 à 8 semaines
🏢 Enterprise 360 — Centralisez et automatisez votre SI
🏛️ Numérique Public — Modernisez vos services aux citoyens
🤖 Intelligence IA — Automatisez vos tâches avec l'IA
☁️ Sérénité Cloud — Hébergement et maintenance sereine

1️⃣ Starter Digital / Croissance PME
2️⃣ MVP Startup
3️⃣ Enterprise 360 / Numérique Public
4️⃣ Intelligence IA / Sérénité Cloud
5️⃣ Prendre rendez-vous
6️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'starter', 'croissance', 'pme', 'site'], next: 'offres_web' },
      { keywords: ['2', 'mvp', 'startup', 'produit'], next: 'offres_mvp' },
      { keywords: ['3', 'enterprise', 'numérique', 'public', 'institution'], next: 'offres_enterprise' },
      { keywords: ['4', 'ia', 'intelligence', 'cloud', 'serenite', 'sérénité'], next: 'offres_ia' },
      { keywords: ['5', 'rdv', 'rendez-vous', 'diagnostic'], next: 'rdv' },
      { keywords: ['6', 'menu', 'revenir'], next: 'menu' },
    ],
  },

  offres_web: {
    text: `🌐 Starter Digital
Site professionnel 5 pages · Domaine + hébergement 1 an · SEO de base · Support 3 mois.
→ Vos clients vous trouvent en ligne dès le lancement.

📈 Croissance PME ⭐
Site pro + boutique e-commerce + CRM + application mobile + paiement Mobile Money.
→ Vendez 24h/24 et pilotez tout depuis une seule plateforme.

Tapez "RDV" pour votre diagnostic gratuit ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'diagnostic'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  offres_mvp: {
    text: `⚡ MVP Startup
Conception UX/UI · Développement web ou mobile · Intégration IA · Hébergement cloud 6 mois inclus.
→ Testez votre marché et convainquez vos investisseurs avec un vrai produit, pas des slides.

Délai de livraison rapide garanti — idéal avant une levée de fonds.

Tapez "RDV" pour un échange gratuit ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'diagnostic'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  offres_enterprise: {
    text: `🏢 Enterprise 360
ERP personnalisé · Intégration APIs · Automatisation RPA · IA embarquée · Cloud dédié · Support 24/7.
→ Toutes vos données centralisées, vos tâches automatisées, vos décisions basées sur vos vrais chiffres.

🏛️ Numérique Public
Portail citoyen · OCR intelligent · Gestion des dossiers · Formation agents.
→ Adapté aux marchés publics et appels d'offres.

Tapez "RDV" pour planifier un audit ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'audit'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  offres_ia: {
    text: `🤖 Intelligence IA
Chatbot 24/7 · OCR intelligent · Automatisation RPA · Analyse prédictive · Dashboard temps réel.
→ Vos tâches répétitives exécutées sans erreur, vos décisions basées sur des données réelles.
Offre modulaire — choisissez uniquement ce dont vous avez besoin.

☁️ Sérénité Cloud
Hébergement sécurisé · Sauvegardes automatiques · Maintenance préventive · Supervision continue.
→ Concentrez-vous sur votre métier, on s'occupe du reste.

Tapez "RDV" pour un diagnostic IA gratuit ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'diagnostic'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  domaines: {
    text: `Nos 6 domaines d'expertise :

🌐 Web & E-commerce — Sites vitrines, boutiques, portails
💼 Logiciels métier & IA — ERP, CRM, chatbots, OCR, RPA
📱 Applications mobiles — Android & iOS, apps terrain
✅ Qualité & Tests — Validation avant mise en ligne
🔗 Infrastructure & Réseau — Connexion, sécurité, vidéosurveillance
☁️ Cloud & Maintenance — Hébergement, sauvegardes, supervision

Nous intervenons dans 7 secteurs : PME, Éducation, Santé, Administration, Commerce, Sport/Associations, Startups.

Tapez "Offres" pour voir nos formules ou "Menu" pour revenir.`,
    options: [
      { keywords: ['offre', 'offres', 'formule'], next: 'offres' },
      { keywords: ['rdv', 'rendez-vous'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  faq: {
    text: `Questions fréquentes :

1️⃣ Quels secteurs accompagnez-vous ?
2️⃣ Quels sont vos délais ?
3️⃣ Comment fonctionne le diagnostic gratuit ?
4️⃣ Vos tarifs ?
5️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'secteur', 'secteurs', 'domaine'], next: 'faq_secteurs' },
      { keywords: ['2', 'delai', 'délai', 'temps', 'durée', 'duree'], next: 'faq_delais' },
      { keywords: ['3', 'diagnostic', 'gratuit', 'comment'], next: 'faq_diagnostic' },
      { keywords: ['4', 'tarif', 'tarifs', 'prix', 'coût', 'cout'], next: 'faq_tarifs' },
      { keywords: ['5', 'menu', 'revenir'], next: 'menu' },
    ],
  },

  faq_secteurs: {
    text: `Nous intervenons dans 7 secteurs :

• PME & Grandes entreprises
• Éducation (écoles, universités, e-learning)
• Santé (cliniques, laboratoires)
• Administrations publiques & collectivités
• Commerce & Distribution
• Sport & Associations
• Startups & Innovation

Votre secteur n'est pas listé ? Contactez-nous — nous nous adaptons.

Tapez "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'contact'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  faq_delais: {
    text: `Nos délais selon l'offre :

• Starter Digital : 2 à 4 semaines
• Croissance PME : 6 à 12 semaines
• MVP Startup : 4 à 8 semaines
• Enterprise 360 / Numérique Public : sur mesure
• Intelligence IA : modulaire selon les besoins
• Sérénité Cloud : mise en place en 1 à 2 semaines

Tapez "RDV" pour démarrer ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  faq_diagnostic: {
    text: `Le diagnostic gratuit, c'est un échange de 30 minutes avec un de nos experts.

Vous décrivez votre situation, vos besoins et votre budget. Nous vous proposons une feuille de route concrète — sans engagement et sous 48h.

Tapez "RDV" pour planifier le vôtre ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous', 'planifier', 'oui'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  faq_tarifs: {
    text: `Toutes nos offres sont "sur devis" — le tarif dépend de votre périmètre et de vos priorités.

Quelques repères :
• Starter Digital : accessible aux TPE et startups
• Croissance PME : périmètre ajustable selon votre budget
• Sérénité Cloud : à partir d'un contrat mensuel

Le diagnostic gratuit permet d'établir une proposition adaptée à votre budget réel.

Tapez "RDV" pour en savoir plus ou "Menu" pour revenir.`,
    options: [
      { keywords: ['rdv', 'rendez-vous'], next: 'rdv' },
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },

  rdv: {
    text: `Pour prendre rendez-vous :

📋 Formulaire en ligne → page "Consultation" du site
📞 Téléphone : ${CONTACT.phone}
✉️ Email : ${CONTACT.email}
🌐 Site : ${CONTACT.website}

Ou utilisez l'onglet "Prendre RDV" ci-dessus pour un formulaire guidé.

Tapez "Menu" pour revenir.`,
    options: [
      { keywords: ['menu', 'revenir'], next: 'menu' },
    ],
  },
};

// ---- IA helper ----

export function findIaScenario(userInput: string, currentScenarioKey = 'menu'): string {
  const input = userInput.trim().toLowerCase();
  if (input === 'menu') return 'menu';
  const scenario = iaScenarios[currentScenarioKey];
  if (scenario?.options) {
    for (const opt of scenario.options) {
      if (opt.keywords.some((kw) => input.includes(kw))) return opt.next;
    }
  }
  for (const key in iaScenarios) {
    if (iaScenarios[key].options?.some((opt) => opt.keywords.some((kw) => input.includes(kw)))) {
      return key;
    }
  }
  return currentScenarioKey;
}

// ---- RDV Question flow ----

export const questionFlow: Record<string, QuestionNode> = {
  company_type: {
    key: 'company_type',
    text: 'Merci. Vous êtes :',
    type: 'select',
    options: [
      'Entreprise / PME',
      'Grande entreprise',
      'Startup / Porteur de projet',
      'Institution / Administration',
      'Indépendant / Freelance',
      'Autre',
    ],
    next: (form) => {
      switch (form.company_type) {
        case 'Entreprise / PME':        return 'pme_name';
        case 'Grande entreprise':       return 'enterprise_name';
        case 'Startup / Porteur de projet': return 'startup_project';
        case 'Institution / Administration': return 'institution_name';
        case 'Indépendant / Freelance': return 'independant_name';
        default:                        return 'other_name';
      }
    },
  },

  // Entreprise / PME
  pme_name: { key: 'pme_name', text: "🏢 Nom de votre entreprise *", type: 'text', next: 'pme_sector' },
  pme_sector: { key: 'pme_sector', text: "💼 Secteur d'activité *", type: 'text', next: 'pme_service' },
  pme_service: {
    key: 'pme_service',
    text: "🛠️ Quel service vous intéresse ? *",
    type: 'select',
    options: ['Starter Digital', 'Croissance PME', 'Intelligence IA', 'Sérénité Cloud', 'Autre / Je ne sais pas encore'],
    next: 'pme_contact',
  },
  pme_contact: { key: 'pme_contact', text: "👤 Votre nom et prénom *", type: 'text', next: 'pme_email' },
  pme_email: { key: 'pme_email', text: "📩 Email *", type: 'text', next: 'pme_phone' },
  pme_phone: { key: 'pme_phone', text: "☎️ Téléphone *", type: 'text', next: null },

  // Grande entreprise
  enterprise_name: { key: 'enterprise_name', text: "🏢 Nom de votre entreprise *", type: 'text', next: 'enterprise_sector' },
  enterprise_sector: { key: 'enterprise_sector', text: "💼 Secteur d'activité *", type: 'text', next: 'enterprise_service' },
  enterprise_service: {
    key: 'enterprise_service',
    text: "🛠️ Quel service vous intéresse ? *",
    type: 'select',
    options: ['Enterprise 360', 'Intelligence IA', 'Sérénité Cloud', 'Développement sur mesure', 'Autre / Je ne sais pas encore'],
    next: 'enterprise_contact',
  },
  enterprise_contact: { key: 'enterprise_contact', text: "👤 Votre nom et prénom *", type: 'text', next: 'enterprise_email' },
  enterprise_email: { key: 'enterprise_email', text: "📩 Email *", type: 'text', next: 'enterprise_phone' },
  enterprise_phone: { key: 'enterprise_phone', text: "☎️ Téléphone *", type: 'text', next: null },

  // Startup / Porteur de projet
  startup_project: { key: 'startup_project', text: "💡 Nom ou description de votre projet *", type: 'text', next: 'startup_service' },
  startup_service: {
    key: 'startup_service',
    text: "🛠️ Quel service vous intéresse ? *",
    type: 'select',
    options: ['MVP Startup', 'Starter Digital', 'Intelligence IA', 'Autre / Je ne sais pas encore'],
    next: 'startup_name',
  },
  startup_name: { key: 'startup_name', text: "👤 Votre nom et prénom *", type: 'text', next: 'startup_email' },
  startup_email: { key: 'startup_email', text: "📩 Email *", type: 'text', next: 'startup_phone' },
  startup_phone: { key: 'startup_phone', text: "☎️ Téléphone *", type: 'text', next: null },

  // Institution / Administration
  institution_name: { key: 'institution_name', text: "🏛️ Nom de votre institution *", type: 'text', next: 'institution_type' },
  institution_type: { key: 'institution_type', text: "📋 Type (Ministère, Mairie, École, Hôpital…) *", type: 'text', next: 'institution_service' },
  institution_service: {
    key: 'institution_service',
    text: "🛠️ Quel service vous intéresse ? *",
    type: 'select',
    options: ['Numérique Public', 'Enterprise 360', 'Intelligence IA', 'Autre / Je ne sais pas encore'],
    next: 'institution_contact',
  },
  institution_contact: { key: 'institution_contact', text: "👤 Votre nom et prénom *", type: 'text', next: 'institution_email' },
  institution_email: { key: 'institution_email', text: "📩 Email *", type: 'text', next: 'institution_phone' },
  institution_phone: { key: 'institution_phone', text: "☎️ Téléphone *", type: 'text', next: null },

  // Indépendant / Freelance
  independant_name: { key: 'independant_name', text: "👤 Votre nom et prénom *", type: 'text', next: 'independant_activity' },
  independant_activity: { key: 'independant_activity', text: "💼 Votre activité *", type: 'text', next: 'independant_service' },
  independant_service: {
    key: 'independant_service',
    text: "🛠️ Quel service vous intéresse ? *",
    type: 'select',
    options: ['Starter Digital', 'MVP Startup', 'Intelligence IA', 'Autre / Je ne sais pas encore'],
    next: 'independant_email',
  },
  independant_email: { key: 'independant_email', text: "📩 Email *", type: 'text', next: 'independant_phone' },
  independant_phone: { key: 'independant_phone', text: "☎️ Téléphone *", type: 'text', next: null },

  // Autre
  other_name: { key: 'other_name', text: "👤 Votre nom et prénom *", type: 'text', next: 'other_need' },
  other_need: { key: 'other_need', text: "💬 Décrivez votre besoin *", type: 'text', next: 'other_email' },
  other_email: { key: 'other_email', text: "📩 Email *", type: 'text', next: 'other_phone' },
  other_phone: { key: 'other_phone', text: "☎️ Téléphone *", type: 'text', next: null },
};

// ---- Utilities ----

export const getNextKey = (key: string, form: Record<string, string>): string | null => {
  const next = questionFlow[key]?.next;
  if (typeof next === 'function') return next(form);
  return next ?? null;
};

export const getFormValue = (keys: string[], form: Record<string, string>): string => {
  for (const key of keys) {
    if (form[key]) return form[key];
  }
  return '';
};

// ---- Accueil typewriter lines ----

export const accueilLines: string[] = [
  '',
  "👋 Bienvenue chez ITEKTAFRIQUE CÔTE D'IVOIRE !",
  '',
  'Nous digitalisons votre activité — de la création de site',
  "à l'intégration de l'IA dans vos processus métier.",
  '',
  'Nos offres :',
  '🌐 Starter Digital — Votre site pro en 2 à 4 semaines',
  '📈 Croissance PME — Vendez 24h/24, pilotez tout en un',
  "⚡ MVP Startup — De l'idée au produit en 8 semaines",
  '🏢 Enterprise 360 — Centralisez et automatisez votre SI',
  '🤖 Intelligence IA — Automatisez vos tâches répétitives',
  '☁️ Sérénité Cloud — Hébergement et maintenance sereins',
  '',
  'Diagnostic gratuit · Réponse sous 48h',
  `📞 ${CONTACT.phone}`,
  `✉️ ${CONTACT.email}`,
  '',
  'Cliquez sur "Prendre RDV" pour démarrer 👇',
];
