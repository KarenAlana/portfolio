'use client'
import { motion } from 'framer-motion'

const techWords = [
  "Backend",
  "Frontend",
  "Fullstack",
  "AWS Cloud",
  "Java",
  "Spring Boot",
  "Python",
  "Javascript",
  "Docker",
  "Node.js",
  "React",
  "Angular",
  "Vue.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Next.js",
  "CI/CD",
  "Tailwind CSS",
]

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-4 border-y border-gray-800">
        <motion.div
          className="flex gap-8 text-xl font-semibold uppercase tracking-wider"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...techWords, ...techWords].map((word, i) => (
            <span
              key={i}
              className="px-2 text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
            >
              {word}
              <span className="ml-2 text-xs text-pink-500">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
  )
}