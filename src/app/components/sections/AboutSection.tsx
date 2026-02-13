"use client";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-purple-500/40 shadow-xl">
            <img
              src="img/img.png"
              alt="Karen Alana"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Sobre <span className="text-purple-500">mim</span>{" "}
            <span className="inline-block rotate-45 text-purple-500">↓</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Sou Desenvolvedor Full Stack com forte foco em backend com Java e
            Spring Boot, construindo sistemas seguros, escaláveis e prontos para
            produção. No frontend, atuo com React, Next.js e Angular, criando
            interfaces modernas e fáceis de manter. Também trabalho com Node.js,
            TypeScript, APIs REST, bancos de dados SQL e NoSQL e deploy em AWS,
            sempre seguindo boas práticas, código limpo e testes. Sou uma pessoa
            que trabalha bem em equipe, aprende rápido, é proativa e confiante
            para assumir desafios e contribuir com soluções de qualidade.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-400/40 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 active:scale-95">
            CONTRATAR
          </button>
        </motion.div>
      </div>
    </section>
  );
}
