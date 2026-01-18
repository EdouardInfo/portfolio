import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isInternalLink = project.liveUrl?.startsWith('#/')
  const internalPath = isInternalLink ? project.liveUrl?.replace('#', '') : null

  const CardContent = (
    <>
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {project.githubUrl && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </motion.a>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end text-sm text-gray-400 dark:text-gray-500 group-hover:text-primary-500 transition-colors">
          <span className="mr-2">Voir le projet</span>
          <ExternalLink size={16} />
        </div>
      </div>
    </>
  )

  if (isInternalLink && internalPath) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          to={internalPath}
          className="card overflow-hidden group cursor-pointer flex flex-col h-full"
        >
          {CardContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.liveUrl || '#'}
        target={project.liveUrl?.startsWith('/portfolio') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="card overflow-hidden group cursor-pointer flex flex-col h-full"
      >
        {CardContent}
      </a>
    </motion.div>
  )
}
