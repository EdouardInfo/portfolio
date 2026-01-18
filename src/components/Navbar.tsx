import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, FolderKanban } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Accueil', href: '#hero', isAnchor: true },
  { name: 'À propos', href: '#about', isAnchor: true },
  { name: 'Projets', href: '/projets', isAnchor: false },
  { name: 'Compétences', href: '#skills', isAnchor: true },
  { name: 'Contact', href: '#contact', isAnchor: true },
]

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return activeSection
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (!link.isAnchor) return location.pathname === link.href
    if (location.pathname !== '/') return false
    return activeSection === link.href.replace('#', '')
  }

  const handleNavClick = (e: React.MouseEvent, href: string, isAnchor: boolean) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (!isAnchor) return
    
    const targetId = href.replace('#', '')
    
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <motion.span
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Edouard LECOCQ
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link)
                const isHovered = hoveredLink === link.name
                
                return link.isAnchor ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, true)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {link.name}
                    </span>
                  </motion.a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium"
                  >
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 flex items-center gap-1.5 ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      <FolderKanban size={14} />
                      {link.name}
                    </span>
                  </Link>
                )
              })}
            </div>
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden glass border-t border-gray-200/20 dark:border-gray-700/20"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, true)}
                className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors font-medium flex items-center gap-2 ${
                  location.pathname === link.href 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <FolderKanban size={16} />
                {link.name}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
