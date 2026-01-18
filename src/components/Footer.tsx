import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'

export default function Footer() {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('edouardlh.lecocq@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1"
          >
            Visuels du site développé en collaboration avec l'IA.
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/KazoxFR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://fr.linkedin.com/in/edouard-lecocq-bb417238b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <div className="relative">
              <motion.button
                onClick={() => setShowEmailPopup(!showEmailPopup)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.button>
              
              <AnimatePresence>
                {showEmailPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full right-0 mb-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 min-w-[280px]"
                  >
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-r border-b border-gray-200 dark:border-gray-700" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Mon adresse email :</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-mono text-gray-800 dark:text-gray-200">
                        edouardlh.lecocq@gmail.com
                      </code>
                      <button
                        onClick={copyEmail}
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
