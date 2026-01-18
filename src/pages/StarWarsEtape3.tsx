import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, Database, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SQLHighlighter from '../components/SQLHighlighter'

const requetes = [
  {
    id: 1,
    title: "Liste des films triée par chronologie",
    description: "Liste détaillée des films triée selon la chronologie et l'année de sortie",
    sql: `SELECT * FROM G04_Films
ORDER BY chronologie, film_annee;`
  },
  {
    id: 2,
    title: "Personnages contenant 'wa' ou un chiffre",
    description: "Liste des personnages dont le nom contient 'wa' ou un chiffre (REGEXP)",
    sql: `SELECT * FROM G04_Personnages
WHERE pers_nom REGEXP 'wa|[0-9]';`
  },
  {
    id: 3,
    title: "Productions entre 2010 et 2020",
    description: "Liste des séries et des films sortis entre 2010 et 2020",
    sql: `SELECT * FROM G04_Films
WHERE film_annee BETWEEN 2010 AND 2020;

SELECT * FROM G04_Series
WHERE serie_annee BETWEEN 2010 AND 2020;`
  },
  {
    id: 4,
    title: "Nombre de personnages",
    description: "Compter le nombre total de personnages dans la base",
    sql: `SELECT COUNT(*)
FROM G04_Personnages;`
  },
  {
    id: 5,
    title: "Personnages dans films 1980-1995",
    description: "Liste des personnages et leurs films sortis entre 1980 et 1995 (JOIN)",
    sql: `SELECT G04_Personnages.pers_nom, G04_Films.film_titre, 
       G04_Films.film_annee, G04_Joue_film.importance, 
       G04_Joue_film.acteur
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Personnages.pers_id = G04_Joue_film.pers_id
JOIN G04_Films ON G04_Joue_film.film_id = G04_Films.film_id
WHERE G04_Films.film_annee BETWEEN 1980 AND 1995;`
  },
  {
    id: 6,
    title: "Personnages de The Mandalorian",
    description: "Liste des personnages de la série 'The Mandalorian'",
    sql: `SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, 
       G04_Personnages.pers_camp, G04_Joue_serie.importance, 
       G04_Joue_serie.acteur
FROM G04_Personnages
JOIN G04_Joue_serie ON G04_Personnages.pers_id = G04_Joue_serie.pers_id
JOIN G04_Series ON G04_Joue_serie.serie_id = G04_Series.serie_id
WHERE G04_Series.serie_nom = 'The Mandalorian';`
  },
  {
    id: 7,
    title: "Apparitions de R2-D2",
    description: "Titres des films et séries dans lesquels R2-D2 apparaît",
    sql: `-- Films où apparaît R2-D2
SELECT G04_Films.film_titre
FROM G04_Films
JOIN G04_Joue_film ON G04_Films.film_id = G04_Joue_film.film_id
JOIN G04_Personnages ON G04_Joue_film.pers_id = G04_Personnages.pers_id
WHERE G04_Personnages.pers_nom = 'R2-D2';

-- Séries où apparaît R2-D2
SELECT G04_Series.serie_nom
FROM G04_Series
JOIN G04_Joue_serie ON G04_Series.serie_id = G04_Joue_serie.serie_id
JOIN G04_Personnages ON G04_Joue_serie.pers_id = G04_Personnages.pers_id
WHERE G04_Personnages.pers_nom = 'R2-D2';`
  },
  {
    id: 8,
    title: "Personnages de L'Empire contre-attaque",
    description: "Liste des personnages ayant participé à 'L'empire contre-attaque'",
    sql: `SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, 
       G04_Personnages.pers_camp, G04_Joue_film.importance, 
       G04_Joue_film.acteur
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Personnages.pers_id = G04_Joue_film.pers_id
JOIN G04_Films ON G04_Joue_film.film_id = G04_Films.film_id
WHERE G04_Films.film_titre = 'L''empire contre-attaque';`
  },
  {
    id: 9,
    title: "Nombre de films par personnage",
    description: "Compte le nombre de films pour chaque personnage (GROUP BY)",
    sql: `SELECT G04_Personnages.pers_nom, COUNT(G04_Joue_film.film_id)
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Joue_film.pers_id = G04_Personnages.pers_id
GROUP BY G04_Personnages.pers_id, G04_Personnages.pers_nom;`
  },
  {
    id: 10,
    title: "Personnages dans 3+ films",
    description: "Personnages présents dans 3 films ou plus (HAVING)",
    sql: `SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, 
       G04_Personnages.pers_camp, COUNT(G04_Joue_film.film_id)
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Joue_film.pers_id = G04_Personnages.pers_id
GROUP BY G04_Personnages.pers_id, G04_Personnages.pers_nom, 
         G04_Personnages.pers_espece, G04_Personnages.pers_camp
HAVING COUNT(G04_Joue_film.film_id) >= 3;`
  }
]

export default function StarWarsEtape3() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <Link 
              to="/starwars" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour au projet
            </Link>
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                Étape 3/3
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Database size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Requêtes SQL
                </h1>
                <p className="text-gray-600 dark:text-gray-400">10 requêtes pour interroger la base de données Star Wars</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            <a 
              href="https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars/blob/main/Ressources/MySQL_Star_Wars_Requetes.sql"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-purple-700 dark:text-purple-400 group-hover:underline">MySQL</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Voir sur GitHub</p>
              </div>
              <ExternalLink size={18} className="text-purple-500" />
            </a>
            
            <a 
              href="https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars/blob/main/Ressources/PostgreSQL_Star_Wars_Requetes.sql"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-200 dark:border-pink-800 hover:border-pink-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <Database size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-pink-700 dark:text-pink-400 group-hover:underline">PostgreSQL</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Voir sur GitHub</p>
              </div>
              <ExternalLink size={18} className="text-pink-500" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {requetes.map((requete, index) => (
              <motion.div
                key={requete.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {requete.id}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{requete.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{requete.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 dark:bg-black p-4 sm:p-6 overflow-x-auto">
                  <SQLHighlighter code={requete.sql} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 sm:p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Concepts SQL utilisés</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h3 className="font-semibold mb-2">SELECT / ORDER BY</h3>
                <p className="text-sm text-purple-100">Sélection et tri des données</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h3 className="font-semibold mb-2">WHERE / REGEXP</h3>
                <p className="text-sm text-purple-100">Filtrage avec expressions régulières</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h3 className="font-semibold mb-2">JOIN</h3>
                <p className="text-sm text-purple-100">Jointures entre tables</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <h3 className="font-semibold mb-2">GROUP BY / HAVING</h3>
                <p className="text-sm text-purple-100">Agrégation et filtrage de groupes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-between items-center mt-10 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <Link 
              to="/starwars/etape2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeft size={20} />
              Étape précédente
            </Link>
            
            <Link 
              to="/starwars"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl hover:shadow-lg transition-all"
            >
              Retour à l'aperçu
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
