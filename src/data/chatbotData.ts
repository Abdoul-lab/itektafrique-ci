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
    text: `Bonjour 👋 ! Je suis là pour vous aider.

1️⃣ Nos formations
2️⃣ Accompagnement entreprises & indépendants
3️⃣ Conseils personnalisés
4️⃣ Prendre rendez-vous
5️⃣ Autres questions

Tapez le numéro ou un mot-clé. Tapez "Menu" pour revenir ici à tout moment.`,
    options: [
      { keywords: ['1', 'formation', 'formations'], next: 'formations' },
      { keywords: ['2', 'accompagnement'], next: 'accompagnement' },
      { keywords: ['3', 'conseil', 'conseils'], next: 'conseils' },
      { keywords: ['4', 'rdv', 'rendez-vous', 'prendre rendez-vous'], next: 'rdv' },
      { keywords: ['5', 'autre', 'autres'], next: 'faq' },
    ],
  },
  formations: {
    text: `Nos formations disponibles :

• SST (Sauveteur Secouriste du Travail)
• Sécurité et prévention des risques au travail
• Secourisme pour particuliers et entreprises

Ces formations vous intéressent ?
1️⃣ Sont-elles certifiantes ?
2️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'oui'], next: 'formations_certif' },
      { keywords: ['2', 'non', 'menu', 'revenir'], next: 'menu' },
    ],
  },
  formations_certif: {
    text: `Oui ✅ Toutes nos formations SST et secourisme sont certifiantes et reconnues par la réglementation en vigueur.

Tapez "Menu" pour revenir au menu principal.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
  },
  accompagnement: {
    text: `Notre accompagnement comprend :

• Analyse des risques dans votre entreprise
• Mise en place de mesures de sécurité adaptées
• Formation de vos employés et plan de prévention

Nous déplaçons-nous sur site ?
1️⃣ Oui, je veux savoir
2️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'oui'], next: 'accompagnement_site' },
      { keywords: ['2', 'non', 'menu', 'revenir'], next: 'menu' },
    ],
  },
  accompagnement_site: {
    text: `Oui, nos équipes peuvent se déplacer dans vos locaux pour former vos collaborateurs et évaluer vos équipements.

Tapez "Menu" pour revenir.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
  },
  conseils: {
    text: `Nos conseils sont adaptés à votre situation :

• Particuliers
• Indépendants
• Associations

Voulez-vous fixer un rendez-vous ?
1️⃣ Oui
2️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'oui'], next: 'rdv' },
      { keywords: ['2', 'non', 'menu', 'revenir'], next: 'menu' },
    ],
  },
  rdv: {
    text: `Vous pouvez nous joindre de plusieurs façons :

1️⃣ Formulaire en ligne
2️⃣ Par téléphone
3️⃣ Par e-mail

Nos horaires : lundi au vendredi, 8h – 18h.

Tapez "Menu" pour revenir.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
  },
  faq: {
    text: `Questions fréquentes :

1️⃣ Quels types d'entreprises accompagnez-vous ?
2️⃣ Intervenez-vous partout en Afrique ?
3️⃣ Quels sont vos tarifs ?
4️⃣ Revenir au menu`,
    options: [
      { keywords: ['1', 'type', 'entreprise'], next: 'faq_entreprises' },
      { keywords: ['2', 'afrique', 'disponible'], next: 'faq_afrique' },
      { keywords: ['3', 'prix', 'tarif', 'coût', 'cout'], next: 'faq_tarifs' },
      { keywords: ['4', 'menu', 'revenir'], next: 'menu' },
    ],
  },
  faq_entreprises: {
    text: `Nous travaillons avec toutes les tailles d'entreprises : PME, grandes entreprises, industrie, BTP, services, commerces.

Tapez "Menu" pour revenir.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
  },
  faq_afrique: {
    text: `Nos services couvrent toute la Côte d'Ivoire. Nous pouvons aussi intervenir dans certains pays voisins selon les besoins.

Tapez "Menu" pour revenir.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
  },
  faq_tarifs: {
    text: `Nos tarifs varient selon la formation, sa durée et le nombre de participants. Les devis sont gratuits et personnalisés.

Tapez "Menu" pour revenir.`,
    options: [{ keywords: ['menu'], next: 'menu' }],
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
      'Personne morale (Entreprise/Association)',
      "Employé d'entreprise",
      'Travailleur indépendant/auto-entrepreneur',
      'Étudiant/stagiaire',
      'Association/collectivité',
      "Demandeur d'emploi",
      'Patient',
      'Autres',
    ],
    next: (form) => {
      switch (form.company_type) {
        case 'Personne morale (Entreprise/Association)':
          return 'company_activity';
        case "Employé d'entreprise":
          return 'employee_company';
        case 'Travailleur indépendant/auto-entrepreneur':
          return 'independant_name';
        case 'Étudiant/stagiaire':
          return 'student_name';
        case 'Association/collectivité':
          return 'collectivity_your_name';
        case "Demandeur d'emploi":
          return 'jobseeker_name';
        default:
          return null;
      }
    },
  },

  // Personne morale
  company_activity: { key: 'company_activity', text: "💼 Domaine d'activités *", type: 'text', next: 'company_staff' },
  company_staff: { key: 'company_staff', text: '🔢 Effectif du personnel *', type: 'text', next: 'company_location' },
  company_location: { key: 'company_location', text: '📍 Situation géographique *', type: 'text', next: 'company_referent' },
  company_referent: { key: 'company_referent', text: '👔 Nom du référent sécurité / RH *', type: 'text', next: 'company_phone' },
  company_phone: { key: 'company_phone', text: '☎️ Téléphone *', type: 'text', next: 'company_email' },
  company_email: { key: 'company_email', text: '📩 E-mail *', type: 'text', next: null },

  // Employé d'entreprise
  employee_company: { key: 'employee_company', text: "Nom de votre entreprise *", type: 'text', next: 'employee_job' },
  employee_job: { key: 'employee_job', text: 'Poste occupé *', type: 'text', next: 'employee_address' },
  employee_address: { key: 'employee_address', text: 'Adresse de votre lieu de travail *', type: 'text', next: 'employee_training' },
  employee_training: { key: 'employee_training', text: 'Quelle formation sécurité souhaitez-vous suivre ? *', type: 'text', next: 'employee_name' },
  employee_name: { key: 'employee_name', text: 'Nom et prénoms *', type: 'text', next: 'employee_email' },
  employee_email: { key: 'employee_email', text: 'Email *', type: 'text', next: 'employee_contact' },
  employee_contact: { key: 'employee_contact', text: 'Contact *', type: 'text', next: null },

  // Travailleur indépendant
  independant_name: { key: 'independant_name', text: 'Nom et prénoms *', type: 'text', next: 'independant_activity' },
  independant_activity: { key: 'independant_activity', text: "💼 Domaine d'activités *", type: 'text', next: 'independant_function' },
  independant_function: { key: 'independant_function', text: "Fonction d'exercice *", type: 'text', next: 'independant_email' },
  independant_email: { key: 'independant_email', text: 'Email *', type: 'text', next: 'independant_contact' },
  independant_contact: { key: 'independant_contact', text: 'Contact *', type: 'text', next: 'independant_certif' },
  independant_certif: { key: 'independant_certif', text: 'Formation(s) ou service(s) souhaité(s) (optionnel)', type: 'text', next: null },

  // Étudiant/stagiaire
  student_name: { key: 'student_name', text: 'Nom et prénoms *', type: 'text', next: 'student_school' },
  student_school: { key: 'student_school', text: 'Établissement de formation *', type: 'text', next: 'student_field' },
  student_field: { key: 'student_field', text: 'Filière / diplôme préparé *', type: 'text', next: 'student_certif' },
  student_certif: { key: 'student_certif', text: 'Formation certifiante souhaitée *', type: 'text', next: 'student_email' },
  student_email: { key: 'student_email', text: 'Email *', type: 'text', next: 'student_phone' },
  student_phone: { key: 'student_phone', text: 'Téléphone *', type: 'text', next: null },

  // Association/collectivité
  collectivity_your_name: { key: 'collectivity_your_name', text: 'Votre nom *', type: 'text', next: 'collectivity_status' },
  collectivity_status: { key: 'collectivity_status', text: 'Votre statut (Collectivité, Association, Autre) *', type: 'text', next: 'collectivity_activity' },
  collectivity_activity: { key: 'collectivity_activity', text: "Type d'activité *", type: 'text', next: 'collectivity_responsible' },
  collectivity_responsible: { key: 'collectivity_responsible', text: 'Nom du responsable *', type: 'text', next: 'collectivity_email' },
  collectivity_email: { key: 'collectivity_email', text: 'Email *', type: 'text', next: 'collectivity_phone' },
  collectivity_phone: { key: 'collectivity_phone', text: 'Téléphone *', type: 'text', next: null },

  // Demandeur d'emploi
  jobseeker_name: { key: 'jobseeker_name', text: 'Nom et prénoms *', type: 'text', next: 'jobseeker_address' },
  jobseeker_address: { key: 'jobseeker_address', text: 'Adresse *', type: 'text', next: 'jobseeker_registered' },
  jobseeker_registered: { key: 'jobseeker_registered', text: 'Êtes-vous inscrit à EMPLOI JEUNE ? (OUI/NON) *', type: 'text', next: 'jobseeker_certif' },
  jobseeker_certif: { key: 'jobseeker_certif', text: 'Quelle formation certifiante souhaitez-vous ?', type: 'text', next: 'jobseeker_phone' },
  jobseeker_phone: { key: 'jobseeker_phone', text: 'Téléphone *', type: 'text', next: null },
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
  '👋 Bienvenue chez ITEKTAFRIQUE CÔTE D\'IVOIRE !',
  '',
  'Nous vous aidons à construire et gérer vos outils informatiques.',
  '',
  'Ce que nous pouvons faire pour vous :',
  '• Créer votre site internet ou application mobile',
  '• Installer et gérer votre réseau informatique',
  '• Vous accompagner vers le numérique, étape par étape',
  '• Former vos équipes aux outils informatiques',
  '• Planifier un rendez-vous avec nos conseillers',
  '',
  'Nos coordonnées :',
  `📞 ${CONTACT.phone}`,
  `✉️ ${CONTACT.email}`,
  `🌐 ${CONTACT.website}`,
  '',
  'Cliquez ci-dessous pour évaluer vos besoins 👇',
];
