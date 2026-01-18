import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function StarWarsEtape1() {
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
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-medium">
                Étape 1/3
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
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Modélisation Entité-Association
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Analyse, conception et justification du modèle E/A</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">I. Introduction</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contexte du projet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                L'univers Star Wars est constitué de nombreux films et séries organisés en différents cycles et chronologies. 
                On a donc cherché à proposer une modélisation de base de données permettant de représenter l'ensemble des 
                productions de l'univers Star Wars ainsi que les personnages qui y apparaissent.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Table Films</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    titre, durée, année, cycle, chronologie (BBY/ABY)
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Table Séries</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    nom, durée moyenne, date de sortie, nombre de saisons
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Table Personnages</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    nom, espèce, camp (Rebelle, Sith, etc.)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Précisions :</strong><br />
                  <span className="text-yellow-700 dark:text-yellow-400">BBY</span> = Before the Battle of Yavin → "Avant la bataille de Yavin"<br />
                  <span className="text-yellow-700 dark:text-yellow-400">ABY</span> = After the Battle of Yavin → "Après la bataille de Yavin"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Exemple de données</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Episode IV - Un Nouvel Espoir</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm mb-6">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">film_id</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">film_titre</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">film_duree</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">film_annee</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">cycle</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">chronologie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">1</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Un Nouvel Espoir</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">121</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">1977</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Trilogie Originale</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">0 ABY</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Personnages associés</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">pers_nom</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">pers_espece</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">pers_camp</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">importance</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">acteur</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Luke Skywalker</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Humain</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Rebelle</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Principal</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Mark Hamill</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Han Solo</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Humain</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Rebelle</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Principal</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Harrison Ford</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Dark Vador</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Humain</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Sith</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Principal</td>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">David Prowse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">II. Modèle Entité-Association</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Description des entités</h3>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Films</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_id</code> (clé primaire) : Identifiant unique</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_titre</code> : Titre du film</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_duree</code> : Durée en minutes</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">film_annee</code> : Année de sortie</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cycle</code> : Cycle ou ère (ex: "Trilogie Originale")</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">chronologie</code> : Position dans la timeline (ex: "0 ABY")</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Séries</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_id</code> (clé primaire) : Identifiant unique</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_nom</code> : Nom de la série</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_duree</code> : Durée moyenne d'un épisode</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_annee</code> : Année de première diffusion</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">serie_saison</code> : Nombre de saisons</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Personnages</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pers_id</code> (clé primaire) : Identifiant unique</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pers_nom</code> : Nom complet du personnage</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pers_espece</code> : Espèce (Humain, Droïde...)</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">pers_camp</code> : Camp (Jedi, Sith, Rebelle...)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Description des associations</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Joue_film (n:m)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Associe Films ↔ Personnages</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">importance</code> : Principal, Secondaire, Mineur</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">acteur</code> : Nom de l'acteur</li>
                  </ul>
                </div>

                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-200 dark:border-pink-800">
                  <h4 className="font-bold text-pink-700 dark:text-pink-400 mb-2">Joue_serie (n:m)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Associe Séries ↔ Personnages</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">importance</code> : Principal, Secondaire, Mineur</li>
                    <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">acteur</code> : Nom de l'acteur</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Schémas Entité-Association</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Avec attributs</h3>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape1_Modelisation/G4_Projet_SGBD_Univers_Star_Wars/StarWars_E_A_avec_attributs.drawio.svg"
                      alt="Schéma E/A avec attributs"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Sans attributs (simplifié)</h3>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <img 
                      src="/portfolio/Projet_L2Info_SGBD_Starwars/Projet/Etape1_Modelisation/G4_Projet_SGBD_Univers_Star_Wars/Starwars_sans_attributs.drawio.svg"
                      alt="Schéma E/A simplifié"
                      className="max-w-full h-auto mx-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Légende :</strong> Rectangles = Entités | Losanges = Associations | Cercles = Attributs | (x,y) = Cardinalités
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">III. Justification des cardinalités</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Films ↔ Joue_film ↔ Personnages</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Films → Joue_film : (0,n)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Un film peut avoir 0 ou plusieurs personnages. Minimum 0 car un film peut être enregistré sans que ses personnages soient saisis.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Personnages → Joue_film : (1,n)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Un personnage doit apparaître dans au moins un film, sinon il n'a pas de raison d'être dans la base.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Séries ↔ Joue_serie ↔ Personnages</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Séries → Joue_serie : (0,n)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Une série peut avoir 0 ou plusieurs personnages enregistrés.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Personnages → Joue_serie : (0,n)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Un personnage peut apparaître dans 0 ou plusieurs séries. Certains personnages n'apparaissent que dans les films.
                      </p>
                    </div>
                  </div>
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
              to="/starwars"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              <ChevronLeft size={20} />
              Aperçu du projet
            </Link>
            
            <Link 
              to="/starwars/etape2"
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
