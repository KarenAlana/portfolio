"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Shield,
  Cloud,
  Layout,
  ExternalLink,
  Search,
  X,
} from "lucide-react";

export function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "frontend",
      name: "Front-end",
      icon: <Layout className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Next.js",
        "Angular",
        "Vue.js",
      ],
    },
    {
      id: "backend",
      name: "Back-end",
      icon: <Code className="w-5 h-5" />,
      color: "from-emerald-500 to-green-500",
      skills: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Prisma",
        "Python",
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "from-amber-500 to-yellow-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      id: "security",
      name: "Security & Authentication",
      icon: <Shield className="w-5 h-5" />,
      color: "from-purple-500 to-violet-500",
      skills: [
        "JWT",
        "Token-based authentication",
        "Bcrypt",
        "Spring Security",
        "Secure HTTP Headers",
        "CORS",
        "REST APIs",
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Git",
        "AWS (S3, Route 53, EC2, Lambda, IAM)",
        "GitHub",
        "Docker",
        "CI/CD",
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.skills.length > 0 || !searchTerm);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section
      className="min-h-screen bg-gray-900 text-white py-16 px-4"
      id="habilidades"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills & Expertise
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive overview of my technical proficiencies across
            various domains.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id || !activeCategory
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
          {activeCategory && (
            <motion.button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={16} />
              <span>Show All</span>
            </motion.button>
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map(
            (category) =>
              (activeCategory === null || activeCategory === category.id) && (
                <motion.div
                  key={category.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Category Header */}
                  <div
                    className={`bg-gradient-to-r ${category.color} p-4 flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-black bg-opacity-20 p-2 rounded-lg">
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-lg">{category.name}</h3>
                    </div>
                    <div className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs font-medium text-blackk">
                      {category.skills.length} skills
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-600 cursor-default flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{skill}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span className="mr-2">View my projects</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
