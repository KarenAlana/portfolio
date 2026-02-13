"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-pink-500/30 transition-all h-full"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>

        <div className="flex justify-between items-center pt-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-white text-sm font-medium transition-colors"
          >
            Live Demo <FiExternalLink className="text-xs" />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            GitHub <FiGithub className="text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
