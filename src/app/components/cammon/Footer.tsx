import Link from "next/link";
import { socialLinks } from "@/app/constants/socialLinks";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Karen Alana
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Criando experiências digitais que importam
            </p>
          </div>

          <div className="flex space-x-6">
            {["Início", "Sobre", "Habilidades", "Experiência", "Contato"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Karen Alana. Todos os direitos
            reservados.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.label}</span>
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
