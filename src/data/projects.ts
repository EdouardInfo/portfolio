import { GraduationCap, BookOpen } from 'lucide-react'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  category?: string
  date?: string
}

export const projects: Project[] = [
  {
    id: 11,
    title: "Projet de Base de données Starwars L2",
    description: "Modélisation et implémentation d'une base de données complète sur l'univers Star Wars. Inclut le modèle E/A, la transformation relationnelle, les scripts SQL (MySQL/PostgreSQL) et des requêtes avancées.",
    image: "/portfolio/mysql.jpg",
    tags: ["SQL", "MySQL", "PostgreSQL"],
    category: "Académique",
    date: "2025",
    liveUrl: "#/starwars",
    githubUrl: "https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars"
  },
  {
    id: 9,
    title: "Site Web Lupin - L1",
    description: "Premier projet web réalisé en L1. Un site complet sur la série Lupin développé avec HTML, CSS et JavaScript, démontrant les bases du développement frontend et la compréhension des principes de design web.",
    image: "/portfolio/Lupin-L1/Maquette/Menu.png",
    tags: ["HTML", "CSS"],
    category: "Académique",
    date: "2025",
    liveUrl: "/portfolio/Lupin-L1/HTML/index.html",
    githubUrl: "https://github.com/EdouardInfo/Projet_L1Info_Site_Web_Lupin/tree/main"
  }
  ,
  {
    id: 10,
    title: "Processing Java - L1",
    description: "Premier projet de Jeu 2D réalisé en L1 en processing (Java).",
    image: "/portfolio/processing.png",
    tags: ["Processing"],
    category: "Académique",
    date: "2025",
    liveUrl: "#/processing-l1",
    githubUrl: "https://github.com/EdouardInfo/Processing-Java-L1-Info/tree/main"
  }
]

// Compétences avec niveau de maîtrise sur 100
export const skillsData = {
  languages: [
    { name: 'Python', level: 95, color: '#3776ab' },
    { name: 'SQL', level: 90, color: '#cc6600' },
    { name: 'Java', level: 60, color: '#5382a1' },
    { name: 'HTML', level: 60, color: '#e34f26' },
    { name: 'CSS', level: 50, color: '#264de4' },
    { name: 'C', level: 40, color: '#555555' },
    { name: 'Bash', level: 30, color: '#4eaa25' }
  ],
  technologies: [
    { name: 'Python Idle', level: 95, color: '#ffde57' },
    { name: 'MySQL/PostgreSQL', level: 90, color: '#00758f' },
    { name: 'VS Code', level: 85, color: '#007acc' },
    { name: 'Notion', level: 70, color: '#000000' },
    { name: 'Canva', level: 60, color: '#00c4cc' },
    { name: 'Figma', level: 50, color: '#a259ff' },
    { name: 'Git & Github', level: 50, color: '#181717' }, 
  ]
}

export const timelineData = [
  {
    year: '2022-2024',
    title: 'Lycée Jules Siegfried',
    description: 'Début de mon parcours en informatique avec la spécialitée NSI. Apprentissage des fondamentaux : algorithmique, programmation python, SQLite et léger développement web.',
    icon: GraduationCap
  },
  {
    year: '2024-2025',
    title: 'L1 Informatique',
    description: 'Suite de mon parcours en informatique. Apprentissages : algorithmique plus poussé, programmation Java, Python, HTML, CSS',
    icon: GraduationCap
  },
  {
    year: '2025-2026',
    title: 'L2 Informatique',
    description: 'Approfondissement des compétences en programmation orientée objet (Java), structures de données, base de données (MySQL & PostgreSQL) et programmation C',
    icon: BookOpen
  },
]

export const stats = [
  { end: 3, label: 'Projets réalisés' },
  { end: 7, label: 'Langages maîtrisés' },
  { end: 2, label: 'Années d\'études supérieures' },
]

