// 'use client'
// import { FaUserGraduate, FaBriefcase } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { timelineData } from '@/constants/timeline'

// export function TimelineSection() {
//   return (
//     <section className="py-20 bg-gray-950">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
//         >
//           My Journey
//         </motion.h2>

//         <div className="relative">
//           {/* Linha do tempo */}
//           <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 transform -translate-x-1/2 opacity-40" />

//           {timelineData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//             >
//               <div className="md:w-5/12 md:px-6 mb-6 md:mb-0">
//                 <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/50 backdrop-blur-md">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className={`p-2 rounded-lg ${item.type === 'education' ? 'bg-pink-500/20' : 'bg-blue-500/20'}`}>
//                       {item.type === 'education' ?
//                         <FaUserGraduate className="text-pink-400 text-xl" /> :
//                         <FaBriefcase className="text-blue-400 text-xl" />
//                       }
//                     </div>
//                     <h3 className="text-xl font-bold text-white">{item.title}</h3>
//                   </div>
//                   <p className="text-gray-300">{item.description}</p>
//                   <p className="text-sm text-gray-400 mt-2">{item.period}</p>
//                 </div>
//               </div>

//               {/* Ponto na linha */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-blue-500 border-4 border-gray-900 z-10">
//                 <div className="w-2 h-2 bg-white rounded-full"></div>
//               </div>

//               <div className="md:w-5/12"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export function TimelineSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900/50 border-t border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
            Minha Jornada Profissional
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Animated central line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className=" absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 transform -translate-x-1/2 opacity-40 rounded-full"
          />

          {/* Education Block */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-24 flex flex-col md:flex-row items-center justify-between relative"
          >
            <div className="w-full md:w-5/12 md:pr-10">
              <div className="bg-gray-800/60 p-8 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md hover:border-pink-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/20 to-blue-500/20">
                    <FaUserGraduate className="text-pink-400 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-blue-300">
                    Educação
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Minha jornada acadêmica forneceu uma base sólida em princípios
                  de ciência da computação e habilidades práticas de
                  desenvolvimento de software.
                </p>
                <div className="space-y-4">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-pink-400">
                    <p className="text-lg font-semibold text-white">
                      Ciência da Computação – UNIFACS
                    </p>
                    <p className="text-sm text-gray-400">
                      Conclusão: Dezembro 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Dot - Education */}
            <div className="circle hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full  items-center justify-center shadow-lg z-10 border-4 border-gray-900/80">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="hidden md:block md:w-5/12"></div>
          </motion.div>

          {/* Experience Block */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row items-center justify-between relative"
          >
            <div className="hidden md:block md:w-5/12"></div>

            {/* Timeline Dot - Experience */}
            <div className="circle hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full  items-center justify-center shadow-lg z-10 border-4 border-gray-900/80">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="w-full md:w-5/12 md:pl-10 mt-24 md:mt-0">
              <div className="bg-gray-800/60 p-8 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-pink-500/20">
                    <FaBriefcase className="text-blue-400 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-300">
                    Experiência
                  </h3>
                </div>
                <div className="space-y-4 pr-2">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                    <p className="text-lg font-semibold text-white">
                      Toldot – Desenvolvedor Full-Stack
                    </p>
                    <p className="text-sm text-gray-400">
                      Novembro 2022 – Outubro 2025
                    </p>
                    <ul className="text-sm text-gray-300 mt-2 space-y-1">
                      <li className="font-medium">
                        Desenvolvimento full stack com:
                      </li>
                      <li>
                        • Java, Spring Boot, JPA (Hibernate), Spring Security,
                        JWT
                      </li>
                      <li>• JavaScript, TypeScript, Next.js, React.js</li>
                      <li>• MySQL, PostgreSQL</li>
                      <li className="mt-2 font-medium">Responsabilidades:</li>
                      <li>
                        • Implementação de funcionalidades e correção de bugs
                      </li>
                      <li>• Melhorias contínuas na arquitetura</li>
                      <li>• Integração via APIs REST com foco em segurança</li>
                      <li>• Trabalho em equipe ágil e colaborativo</li>
                    </ul>
                  </div>
                  <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                    <p className="text-lg font-semibold text-white">
                      SpeedBahia – Suporte Técnico
                    </p>
                    <p className="text-sm text-gray-400">
                      Março 2021 – Abril 2022
                    </p>
                    <ul className="text-sm text-gray-300 mt-2 space-y-1">
                      <li>• Suporte técnico especializado</li>
                      <li>• Utilização de MK-Auth e WinBox</li>
                      <li>• Diagnósticos e configuração de redes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
