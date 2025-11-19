import { Activity, Smile, Zap, Code, Microscope, PenTool } from 'lucide-react';
import { Service, Location, Review, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dr. Bruno', href: '#about' },
  { label: 'Servizi', href: '#services' },
  { label: 'Studi', href: '#locations' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'AI Assistant', href: '#ai-chat' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Chirurgia Orale',
    description: 'Interventi complessi gestiti con precisione microscopica. Estrazioni, rigenerativa ossea e chirurgia mucogengivale.',
    icon: Activity,
    tags: ['Microchirurgia', 'Rigenerazione', 'Estrazioni 3.0']
  },
  {
    id: 's2',
    title: 'Implantologia',
    description: 'Protocolli digitali per il ripristino funzionale ed estetico. Impianti immediati e a carico differito.',
    icon: Zap,
    tags: ['Digital Planning', 'Carico Immediato', 'Titanio']
  },
  {
    id: 's3',
    title: 'Estetica del Volto',
    description: 'Armonizzazione facciale non invasiva. Filler, biorivitalizzazione e trattamenti per il sorriso.',
    icon: Smile,
    tags: ['Filler Labbra', 'Biorivitalizzazione', 'Armonia']
  },
  {
    id: 's4',
    title: 'Tech & Igiene',
    description: 'Prevenzione avanzata con strumenti ultrasonici e airflow. Diagnosi assistita da AI.',
    icon: Microscope,
    tags: ['Airflow', 'AI Diagnosis', 'Sbiancamento']
  }
];

export const LOCATIONS: Location[] = [
  { city: 'Verona', clinicName: 'Studio Dentistico Verona Centro' },
  { city: 'Merano', clinicName: 'Dental Unit Meran' },
  { city: 'Firenze', clinicName: 'Clinica Odontoiatrica Fiorentina' },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    patientName: 'Marco R.',
    text: 'Professionalità incredibile. Il Dr. Bruno ha spiegato l\'intervento come se fosse un codice: logico, pulito, senza bug. Guarigione perfetta.',
    rating: 5,
    tag: 'Chirurgia'
  },
  {
    id: 'r2',
    patientName: 'Giulia V.',
    text: 'Ambiente super moderno e accogliente. Ho fatto un trattamento estetico e il risultato è naturalissimo. Consiglio vivamente.',
    rating: 5,
    tag: 'Estetica'
  },
  {
    id: 'r3',
    patientName: 'Alessandro B.',
    text: 'Tecnologia al top. Scansione 3D invece delle vecchie impronte. Giovanni è giovane ma preparatissimo.',
    rating: 5,
    tag: 'Impianti'
  }
];

export const BIO_TEXT = `
const DrGiovanni = {
  education: [
    "Universidad Europea de Valencia (110/110)",
    "Università di Trieste (Chirurgia Orale)"
  ],
  passion: "Digital Dentistry & Coding",
  mission: "Innovare il sorriso con precisione algoritmica."
};
`;

export const GEMINI_SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale del Dr. Giovanni Bruno, un odontoiatra specializzato in chirurgia orale e implantologia che lavora a Verona, Merano e Firenze.
Il Dr. Bruno è noto per il suo approccio "tech", moderno e digitale.
Il tuo compito è rispondere a domande generiche su trattamenti dentali, dare informazioni sugli studi (senza dare indirizzi precisi se non sai, ma citando le città) e trasmettere professionalità e innovazione.
Usa un tono cordiale, professionale ma giovanile.
Se ti chiedono diagnosi specifiche, rispondi che l'AI non può sostituire una visita e invita a prenotare un appuntamento tramite il form o Instagram.
Sii conciso.
`;