import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Code, ExternalLink, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function StarWarsEtape2() {
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
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                Étape 2/3
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Transformation E/A → Relationnel
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Implémentation SQL et scripts d'initialisation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">I. Rappel du Modèle E/A</h2>
              
              <div className="bg-white rounded-xl p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto mb-4">
                <img 
                  src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/StarWars_E_A_avec_attributs.drawio.svg"
                  alt="Schéma E/A avec attributs"
                  className="max-w-full h-auto mx-auto"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                  3 Entités : Films, Séries, Personnages
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm">
                  2 Associations n:m : Joue_film, Joue_serie
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">II. Algorithme de Transformation</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Règle 1 : Transformation des entités</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Chaque entité devient une table (relation) qui reprend ses attributs et sa clé primaire.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Exemple : Entité Films → Relation Films (film_id, film_titre, ...)
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Règle 2 : Associations n:m</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Une association n:m devient une table dont la clé primaire est composée des clés des entités associées. Elle garde aussi ses attributs propres.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Exemple : Association Joue_film → Relation Joue_film (film_id, pers_id, importance, acteur)
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Règle 3 : Cardinalités minimales</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Les cardinalités minimales deviennent des contraintes :
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>• (1,n) → clé étrangère <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">NOT NULL</code></li>
                    <li>• (0,n) → clé étrangère <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">NULL possible</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">III. Application à notre Modèle</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3">G04_Films</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_130955.png"
                      alt="Table Films"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_id</code> est la clé primaire. 
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_titre</code> et <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_annee</code> sont NOT NULL.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">G04_Series</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131316.png"
                      alt="Table Series"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-3">G04_Personnages</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131340.png"
                      alt="Table Personnages"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400 mb-3">G04_Joue_film</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131409.png"
                      alt="Table Joue_film"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Clé primaire : <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">(film_id, pers_id)</code>. 
                    Clés étrangères vers Films et Personnages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-400 mb-3">G04_Joue_serie</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131457.png"
                      alt="Table Joue_serie"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">IV. Modèle Relationnel</h2>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Notation :</strong> Clé primaire : <u>soulignée</u> | Clé étrangère : préfixée par #
              </p>

              <div className="space-y-3 font-mono text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto">
                <p className="text-blue-600 dark:text-blue-400">
                  <strong>G04_Films</strong>(<u>film_id</u>, film_titre, film_duree, film_annee, cycle, chronologie)
                </p>
                <p className="text-green-600 dark:text-green-400">
                  <strong>G04_Series</strong>(<u>serie_id</u>, serie_nom, serie_duree, serie_annee, serie_saisons, cycle, chronologie)
                </p>
                <p className="text-purple-600 dark:text-purple-400">
                  <strong>G04_Personnages</strong>(<u>pers_id</u>, pers_nom, pers_espece, pers_camp)
                </p>
                <p className="text-orange-600 dark:text-orange-400">
                  <strong>G04_Joue_film</strong>(#<u>film_id</u>, #<u>pers_id</u>, importance, acteur)
                </p>
                <p className="text-pink-600 dark:text-pink-400">
                  <strong>G04_Joue_serie</strong>(#<u>serie_id</u>, #<u>pers_id</u>, importance, acteur)
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">V. Contraintes d'intégrité</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contraintes NOT NULL</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131651.png"
                      alt="Contraintes NOT NULL"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contraintes CHECK</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto mb-4">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131704.png"
                      alt="Contraintes CHECK"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_annee</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_annee</code> ≥ 1977</li>
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_duree</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_duree</code> &gt; 0</li>
                    <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_saison</code> ≥ 1</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contraintes sur importance</h3>
                  <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape2_Transformation_E_A_Relation/G4 Projet SGBD Etape 2 Univers Star Wars/Capture_dcran_2025-12-01_131719.png"
                      alt="Contraintes importance"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">VI. Scripts d'initialisation</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars/blob/main/Ressources/Script_MySQL_Star_Wars_SGBD.sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Database size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-blue-700 dark:text-blue-400 group-hover:underline">MySQL</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Voir sur GitHub</p>
                  </div>
                  <ExternalLink size={18} className="text-blue-500" />
                </a>
                
                <a 
                  href="https://github.com/EdouardInfo/Projet_L2Info_SGBD_Starwars/blob/main/Ressources/Script_PostgreSQL_Star_Wars_SGBD.sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800 hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Database size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-cyan-700 dark:text-cyan-400 group-hover:underline">PostgreSQL</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Voir sur GitHub</p>
                  </div>
                  <ExternalLink size={18} className="text-cyan-500" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">VII. Récapitulatif</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Modèle E/A initial</h3>
                  <ul className="text-sm space-y-1 text-blue-100">
                    <li>• 3 entités (Films, Séries, Personnages)</li>
                    <li>• 2 associations n:m</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Modèle relationnel final</h3>
                  <ul className="text-sm space-y-1 text-blue-100">
                    <li>• 5 tables au total</li>
                    <li>• 3 tables d'entités avec clés primaires</li>
                    <li>• 2 tables d'associations avec clés composées</li>
                    <li>• 4 contraintes de clés étrangères</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between items-center mt-10 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <Link 
              to="/starwars/etape1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeft size={20} />
              Étape précédente
            </Link>
            
            <Link 
              to="/starwars/etape3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl hover:shadow-lg transition-all"
            >
              Étape suivante
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
