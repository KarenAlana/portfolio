"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-light text-gray-400 mb-4"
          >
            Olá.
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            Sou Karen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl text-gray-400 mb-8"
          >
            Desenvolvedora de Software
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity text-center font-medium shadow-lg"
            >
              Quer um projeto?
            </Link>
            <Link
              href="#resume"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 transition-colors text-center font-medium"
            >
              Meu currículo
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          {/* Profile image with gradient border */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-1">
              <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                <img
                  src="/img/img.jpeg"
                  alt="Karen Alana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Animated circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-72 h-72 border-2 border-pink-500/30 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-80 h-80 border-2 border-blue-500/30 rounded-full pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
