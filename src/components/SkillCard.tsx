import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCardProps {
  title: string
  skills: Skill[]
  delay?: number
}

export default function SkillCard({ title, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary-500/30 transition-all duration-300">
        <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />
          {title}
        </h3>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + index * 0.1 }}
              className="group/skill"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span 
                    className="w-3 h-3 rounded-full shadow-lg"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}40` }}
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-primary-500 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <motion.span 
                  className="text-sm font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: delay + index * 0.1 + 0.2 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: delay + index * 0.1, ease: "easeOut" }}
                >
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                  <div 
                    className="absolute inset-0 blur-sm opacity-50"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
