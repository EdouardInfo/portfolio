import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowDown, 
  Github, 
  Mail, 
  MapPin,
  GraduationCap,
  Code2,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Copy,
  Check
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Timeline from '../components/Timeline'
import AnimatedCounter from '../components/AnimatedCounter'
import SkillCard from '../components/SkillCard'
import { projects, skillsData, timelineData, stats } from '../data/projects'

export default function Home() {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const featuredProjects = projects.slice(0, 3)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('edouardlh.lecocq@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-primary-500/15 sm:bg-primary-500/30 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-accent-500/10 sm:bg-accent-500/25 rounded-full blur-[50px] sm:blur-[120px] pointer-events-none" />
          <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-8 shadow-xl shadow-primary-500/10"
            >
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent font-semibold">
                Étudiant en L2 Informatique
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              <motion.span 
                className="text-gray-900 dark:text-white block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Bonjour, je suis
              </motion.span>
              <motion.span 
                className="gradient-text block mt-1 sm:mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Edouard LECOCQ
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Passionné par l'<span className="text-primary-500 font-semibold">informatique</span> et la <span className="text-accent-500 font-semibold">programmation</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
            >
              {['Python', 'SQL', 'Java', 'HTML', 'CSS', 'C', 'Bash'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px -10px rgba(34,197,94,0.3)" }}
                  className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 cursor-default transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            >
              <Link to="/projets" className="w-full sm:w-auto">
                <motion.span 
                  className="btn-primary flex items-center justify-center gap-2 sm:gap-3 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code2 size={20} className="sm:w-[22px] sm:h-[22px]" />
                  Voir mes projets
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-2 transition-transform duration-300" />
                </motion.span>
              </Link>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
                Me contacter
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('stats')}
              className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors cursor-pointer group"
            >
              <span className="text-sm mb-2 group-hover:text-primary-500 transition-colors">Découvrir</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-primary-500/50 transition-colors"
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id="stats" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">En quelques chiffres</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Mon parcours résumé</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.end}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <Section
        id="about"
        title="Mon Parcours"
        subtitle="De la découverte de l'informatique à la passion du développement"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 scale-110" />
              
              <div className="relative aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 p-1.5 shadow-2xl shadow-primary-500/30">
                <div className="w-full h-full rounded-[22px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img src="/portfolio/favicon.svg" alt="Avatar" className="w-32 h-32 sm:w-36 sm:h-36" />
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <Code2 className="text-primary-500" size={28} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <GraduationCap className="text-accent-500" size={28} />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <MapPin size={24} className="text-primary-500 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                <p className="font-bold text-gray-900 dark:text-white">Le Havre</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <GraduationCap size={24} className="text-accent-500 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Formation</p>
                <p className="font-bold text-gray-900 dark:text-white">L2 Info</p>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <Timeline items={timelineData} />
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        title="Compétences"
        subtitle="Les technologies et langages que je maîtrise"
        className="bg-gray-50/50 dark:bg-gray-900/30"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard 
            title="Langages de programmation" 
            skills={skillsData.languages}
            delay={0}
          />
          <SkillCard 
            title="Technologies & Outils" 
            skills={skillsData.technologies}
            delay={0.2}
          />
        </div>
      </Section>

      <Section
        id="projects"
        title="Projets Récents"
        subtitle="Aperçu de mes dernières réalisations"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveUrl || project.githubUrl || '#'}
              target={project.liveUrl?.startsWith('http') || project.githubUrl ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative block cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 group-hover:border-primary-500/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-700 dark:text-gray-300">
                    {project.category}
                  </span>
                  
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2.5 sm:p-3 bg-primary-500 text-white rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 sm:mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 rounded-md sm:rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projets">
            <motion.span 
              className="btn-primary inline-flex items-center gap-2 sm:gap-3 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir tous les projets
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.span>
          </Link>
        </motion.div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Les moyens de me contacter"
        className="bg-gray-50/50 dark:bg-gray-900/30"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-[2rem] blur-xl opacity-20" />
            
            <div className="relative bg-white dark:bg-gray-900 p-10 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-2xl">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-primary-500/40 rotate-3"
                >
                  <Mail size={40} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Me contacter
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-lg">
                  N'hésitez pas à me contacter via ces différents moyens.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.a
                  href="https://fr.linkedin.com/in/edouard-lecocq-bb417238b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#0077B5] dark:hover:border-[#0077B5] transition-all group"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 bg-[#0077B5] rounded-xl flex items-center justify-center shadow-lg">
                    <Linkedin size={28} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors">LinkedIn</span>
                </motion.a>
                
                <motion.button
                  onClick={() => setShowEmailPopup(!showEmailPopup)}
                  className="relative flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail size={28} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-500 transition-colors">Email</span>
                  
                  <AnimatePresence>
                    {showEmailPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 min-w-[280px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-l border-t border-gray-200 dark:border-gray-700" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-left">Mon adresse email :</p>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-mono text-gray-800 dark:text-gray-200">
                            edouardlh.lecocq@gmail.com
                          </code>
                          <button
                            onClick={(e) => { e.stopPropagation(); copyEmail(); }}
                            className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                            title="Copier"
                          >
                            {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                          </button>
                        </div>
                        {emailCopied && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-primary-500 mt-2 text-center"
                          >
                            Copié !
                          </motion.p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.a
                  href="https://github.com/KazoxFR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition-all group"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-14 h-14 bg-gray-900 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Github size={28} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
