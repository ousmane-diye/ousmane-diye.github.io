/* ════════════════════════════════════════════════════════════
   DONNÉES — c'est ici que vous modifiez le contenu du portfolio
   Les images vont dans le dossier images/
   ════════════════════════════════════════════════════════════ */

// true = cadre pointillé quand une image n'existe pas encore.
// Mettez false avant de publier : les images absentes seront cachées.
const AFFICHER_PLACEHOLDERS = true;

const PROFIL = {
  nom: "Ousmane DIYE",
  titre: "Développeur Web / Mobile",
  photo: "images/ousmane2.jpg",
  accroche:
    "Étudiant en Master Informatique à l'Université Joseph Ki-Zerbo (UJKZ), spécialisé en systèmes d'information en entreprise. " +
    "Autonome et orienté pratique, je crée des applications web et mobiles et je forme d'autres étudiants au numérique.",
  motivation:
    "Motivé par la création d'applications utiles au quotidien, je recherche un stage ou un premier poste de développeur " +
    "pour mettre mes compétences en pratique et progresser au sein d'une équipe.",
  cv: "CV.pdf",
};

const CONTACT = {
  email: "diyeousmane05@gmail.com",
  github: "https://github.com/ousmane-diye",
  tel: ["+226 75 80 64 24", "+226 73 15 34 89"],
  lieu: "Koudougou, Burkina Faso",
};

const FORMATIONS = [
  { periode: "2026-2027", titre: "Master Informatique", lieu: "Université Joseph Ki-Zerbo (UJKZ)", note: "En cours",
    desc: "Spécialisation en systèmes d'information en entreprise.",
    images: [] },
  { periode: "2024-2025", titre: "Licence Informatique", lieu: "Université Norbert Zongo (UNZ), Koudougou", note: "Obtenue en 2026",
    desc: "Formation en informatique : systèmes distribués, programmation orientée objet avancée, réseaux.",
    images: [
      { src: "images/attestation-licence.png", legende: "Attestation de Licence" },
      { src: "images/soutenance-1.jpeg", legende: "Soutenance" },
      { src: "images/soutenance-2.jpg", legende: "Soutenance" },
    ] },
  { periode: "2022-2024", titre: "DEUG Informatique", lieu: "Université Norbert Zongo (UNZ), Koudougou", note: "Obtenu en 2025",
    desc: "Premier cycle universitaire en informatique : bases de la programmation, algorithmique et mathématiques.",
    images: [{ src: "images/attestation-deug.png", legende: "Attestation de DEUG" }] },
  { periode: "2021-2022", titre: "Baccalauréat — Série D", lieu: "Lycée Municipal de Boromo", note: "Obtenu en 2022",
    desc: "Baccalauréat scientifique, série D.",
    images: [{ src: "images/attestation-bac.jpg", legende: "Attestation du Baccalauréat" }] },
  { periode: "2013-2018", titre: "BEPC", lieu: "Collège de Datomo", note: "Obtenu en 2018",
    desc: "Brevet d'études du premier cycle.",
    images: [{ src: "images/attestation-bepc.jpg", legende: "Attestation du BEPC" }] },
];

const CERTIFICATIONS = [
  { periode: "2025", titre: "Formation en pilotage de drone", lieu: "Club Les Intello du Numérique (CIN), UNZ", note: "16 au 20 juillet 2025",
    desc: "Formation pratique au pilotage de drone.",
    images: [
      { src: "images/attestation-drone.jpg", legende: "Attestation de formation" },
      { src: "images/drone-1.jpg", legende: "Formation drone" },
    ] },
];

const EXPERIENCES = [
  { periode: "2024 — 2026", titre: "Formateur en bureautique", lieu: "Club Les Intello du Numérique (CIN), Université Norbert Zongo", note: "Attestation de reconnaissance 2026",
    desc: "Formation de membres du club à la bureautique (Word, Excel, PowerPoint) dans le cadre du club de culture numérique.",
    images: [
      { src: "images/attestation-formateur.jpg", legende: "Attestation de reconnaissance" },
      { src: "images/formation-cin-1.jpg", legende: "Séance de formation" },
      { src: "images/formation-cin-2.jpg", legende: "Séance de formation" },
    ] },
];

const PROJETS = [
  { titre: "Application Transport", tech: "Java · Android Studio · Firebase Auth · Firestore", note: "Android",
    desc: "Application Android de billetterie de transport, construite de zéro, avec trois rôles : administrateur, entreprise et client.",
    points: [
      "Création de programmes de voyage avec plusieurs types de récurrence",
      "Paiement Orange Money / Moov Money simulé",
      "Génération de tickets PDF avec le logo de l'entreprise, validation et annulation avec restitution de la place",
      "Impression groupée des tickets par véhicule, vue « Mes tickets » pour le client",
      "Module Restaurant en cours de développement",
    ],
    images: [
      { src: "images/transport-1.png", legende: "Capture d'écran" },
      { src: "images/transport-2.png", legende: "Capture d'écran" },
      { src: "images/transport-3.png", legende: "Capture d'écran" },
    ] },
];

const COMPETENCES = [
  ["Développement Web", [["HTML","#E34F26"],["CSS","#1572B6"],["JavaScript","#E0B400"],["PHP","#777BB4"],["React","#00A8D6"]]],
  ["Développement Mobile", [["React Native","#00A8D6"],["Android Studio","#3DDC84"],["Firebase / Firestore","#FFA000"]]],
  ["Programmation réseau", [["Sockets TCP/UDP","#00796B"],["Java RMI","#ED8B00"]]],
  ["Langages", [["C","#00599C"],["C++","#00599C"],["Python","#3776AB"],["Java","#ED8B00"]]],
  ["Outils & Systèmes", [["Git / GitHub","#F05032"],["Linux","#2B2B2B"],["Windows","#0078D4"]]],
  ["Bureautique", [["Word","#2B579A"],["Excel","#217346"],["PowerPoint","#D24726"],["LaTeX","#008080"]]],
];

const GALERIE = [
  { src: "images/soutenance-1.jpeg", legende: "Soutenance" },
  { src: "images/soutenance-2.jpg", legende: "Soutenance" },
  { src: "images/soutenance-3.jpg", legende: "Soutenance" },
  { src: "images/drone-1.jpg", legende: "Formation drone" },
  { src: "images/drone-2.jpg", legende: "Formation drone" },
  { src: "images/formation-cin-1.jpg", legende: "Formation CIN" },
  { src: "images/formation-cin-2.jpg", legende: "Formation CIN" },
];
