"use client";
import { useItemsPerPage } from "@/app/hooks/useItemsPerPage";
import { useProjectsCarousel } from "@/app/hooks/useProjectsCarousel";
import { projects } from "@/app/constants/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function ProjectsSection() {
  const itemsPerPage = useItemsPerPage();

  const {
    currentIndex,
    next,
    prev,
    goToIndex,
    isPaused,
    setIsPaused,
    canGoNext,
    canGoPrev,
  } = useProjectsCarousel(projects, itemsPerPage);

  const slides = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left flex flex-col justify-between items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Meus trabalhos e contribuições
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-6 mx-auto lg:mx-0"
          />
          <div className="w-[120px] h-[80px]  flex items-center justify-between mb-4">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className="p-3 rounded-lg border border-gray-700 hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              disabled={!canGoNext}
              className="p-3 rounded-lg border border-gray-700 hover:bg-gray-800/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div
          className="flex gap-6 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 transition-transform duration-500 ease-in-out"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className=" flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(projects.length / itemsPerPage),
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsPaused(true);
                goToIndex(i * itemsPerPage);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex / itemsPerPage === i
                  ? "bg-blue-500 w-6"
                  : "bg-gray-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
