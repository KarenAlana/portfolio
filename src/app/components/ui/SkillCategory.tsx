"use client";
import { motion } from "framer-motion";
import { SkillCategory as SkillCategoryType } from "@/types";

export function SkillCategory({
  category,
  index,
}: {
  category: SkillCategoryType;
  index: number;
}) {
  // Mapeamento de cores e gradientes para cada categoria
  const getCategoryStyles = () => {
    switch (category.title.toLowerCase()) {
      case "front-end":
        return {
          iconColor: "text-pink-400",
          textGradient: "bg-gradient-to-r from-pink-400 to-purple-500",
          hoverShadow: "hover:shadow-pink-500/10",
        };
      case "segurança e autenticação":
        return {
          iconColor: "text-emerald-400",       
          textGradient:
            "bg-gradient-to-r from-red-500 via-pink-500 to-red-500 ",
          hoverShadow: "hover:shadow-emerald-500/10",
        };
      case "back-end":
        return {
          iconColor: "text-purple-400",
          
          textGradient: "bg-gradient-to-r from-purple-400 to-indigo-500",
          hoverShadow: "hover:shadow-purple-500/10",
        };
      case "banco de dados":
        return {
          iconColor: "text-blue-400",
          textGradient: 'bg-gradient-to-r from-green-600 via-teal-400 to-emerald-800'
,
          hoverShadow: "hover:shadow-blue-500/10",
        };
      case "devops & cloud":
        return {
          iconColor: "text-amber-400",
          textGradient: "bg-gradient-to-r from-amber-400 to-orange-500",
          hoverShadow: "hover:shadow-amber-500/10",
        };
      default:
        return {
          iconColor: "text-pink-400",
          textGradient: "bg-gradient-to-r from-pink-400 to-blue-400",
          hoverShadow: "hover:shadow-pink-500/10",
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{
        y: -10,
        borderColor: "rgba(236, 72, 153, 0.4)",
      }}
      className={`bg-gray-800/80 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg ${styles.hoverShadow} transition-all duration-300 group`}
    >
      {/* Cabeçalho */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`p-3 rounded-xl bg-gradient-to-br from-${styles.iconColor.split("-")[1]}-500/20 to-${
            styles.textGradient.includes("to-")
              ? styles.textGradient.split("to-")[1].split(" ")[0]
              : "blue-500"
          }/20 border border-white/5 shadow-sm`}
        >
          <span className={`text-2xl  ${styles.iconColor}`}>
            {category.icon}
          </span>
        </motion.div>
        <h3
          className={`text-xl font-bold text-transparent bg-clip-text ${styles.textGradient}`}
        >
          {category.title}
        </h3>
      </div>

      {/* Itens */}
      <ul className="flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              x: 3,
              scale: 1.03,
            }}
            className="py-1.5 px-2.5"
          >
            <div className="flex flex-col items-start px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-700/40 text-gray-100 border border-gray-600/50 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-blue-500/10 hover:border-pink-400/30 transition-all duration-200 cursor-default">
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <span className="text-xs text-gray-400/80 mt-0.5">
                  {item.description}
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
