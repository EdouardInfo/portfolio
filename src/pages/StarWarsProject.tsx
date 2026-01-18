import { motion } from 'framer-motion'
import { ArrowLeft, Database, Code, FileText, ExternalLink, Github, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const etapes = [
  {
    id: 1,
    title: "Étape 1 - Modélisation E/A",
    description: "Analyse des entités, définition des attributs et cardinalités, création du modèle Entité-Association",
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
    link: "/starwars/etape1"
  },
  {
    id: 2,
    title: "Étape 2 - Transformation & SQL",
    description: "Transformation du modèle E/A vers relationnel, scripts d'initialisation MySQL et PostgreSQL",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    link: "/starwars/etape2"
  },
  {
    id: 3,
    title: "Étape 3 - Requêtes SQL",
    description: "Requêtes SQL avancées pour interroger et analyser la base de données Star Wars",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    link: "/starwars/etape3"
  }
]

const technologies = [
  { name: "Draw.io", category: "Modélisation" },
  { name: "MySQL", category: "SGBD" },
  { name: "PostgreSQL", category: "SGBD" },
  { name: "SQL", category: "Langage" },
  { name: "Markdown", category: "Documentation" },
]

export default function StarWarsProject() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projets" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text">Projet Base de Données</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Univers Star Wars</span>
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Licence 2 Informatique - Projet Base de Données (2025)
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Ce projet a été réalisé dans le cadre du cours de Bases de Données en L2 Informatique.
                  L'objectif est de modéliser puis d'implémenter une base de données complète basée sur
                  l'univers de Star Wars, incluant les films, les séries, les personnages et leurs relations d'apparition.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full font-medium">
                    Groupe 4
                  </span>
                  <span>Corentin Houllier, Edouard Lecocq & Tristan Leriche-Leroy</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-80 aspect-video rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl"
              >
                <img 
                  src="/portfolio/Projet_L2Info_SGBD_Starwars/Ressources/StarWars_E_A_avec_attributs.drawio.svg"
                  alt="Schéma E/A Star Wars"
                  className="w-full h-full object-contain bg-white p-4"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech.name}
                  className="px-4 py-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-sm"
                >
                  <span className="text-gray-500 dark:text-gray-400">{tech.category} : </span>
                  <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Étapes du projet</h2>
            
            <div className="grid gap-4">
              {etapes.map((etape, index) => {
                const Icon = etape.icon
                return (
                  <motion.div
                    key={etape.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link 
                      to={etape.link}
                      className="group block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${etape.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                            {etape.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {etape.description}
                          </p>
                        </div>
                        <ChevronRight size={24} className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Scripts SQL</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="/portfolio/Projet_L2Info_SGBD_Starwars/Ressources/Script_MySQL_Star_Wars_SGBD.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Database size={24} className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Script MySQL</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Initialisation BDD</p>
                </div>
                <ExternalLink size={18} className="text-gray-400" />
              </a>
              
              <a 
                href="/portfolio/Projet_L2Info_SGBD_Starwars/Ressources/Script_PostgreSQL_Star_Wars_SGBD.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Database size={24} className="text-cyan-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">Script PostgreSQL</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Initialisation BDD</p>
                </div>
                <ExternalLink size={18} className="text-gray-400" />
              </a>
              
              <a 
                href="/portfolio/Projet_L2Info_SGBD_Starwars/Ressources/MySQL_Star_Wars_Requetes.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Code size={24} className="text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">Requêtes MySQL</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">10 requêtes SQL</p>
                </div>
                <ExternalLink size={18} className="text-gray-400" />
              </a>
              
              <a 
                href="/portfolio/Projet_L2Info_SGBD_Starwars/Ressources/PostgreSQL_Star_Wars_Requetes.sql"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-pink-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center">
                  <Code size={24} className="text-pink-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors">Requêtes PostgreSQL</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">10 requêtes SQL</p>
                </div>
                <ExternalLink size={18} className="text-gray-400" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <a
              href="https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary"
            >
              <Github size={20} />
              Voir sur GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
