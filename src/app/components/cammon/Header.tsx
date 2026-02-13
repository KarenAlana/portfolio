"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  const navItems = ["Início", "Sobre", "Projetos", "Habilidades", "Contato"];

  return (
    <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          Karen Alana
        </motion.h1>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
