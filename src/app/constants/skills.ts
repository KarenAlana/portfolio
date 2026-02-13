import React from 'react'
import { 
  Monitor, Terminal, Database, ShieldCheck, CloudCog, Code,
  Layers3, Box, Server, GitBranch, Cpu, Package, Wrench
} from 'lucide-react'


export const skills = [
  {
    title: "Front-end",
    icon: React.createElement(Code, { className:"w-6 h-6 text-blue-500 dark:text-blue-400" }),
    items: [
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "HTML",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "CSS",
        description: "Flexbox, Grid, responsividade",
      },
       {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "React",
        description: "Componentes, hooks, SPA, JSX",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "Tailwind CSS",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "JavaScript",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "TypeScript",
        description: "",
      },
     
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "React Native",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "Next.js",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "Angular",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-blue-500" }),
        name: "Vue.js",
        description: "",
      },
    ],
  },
  {
    title: "Back-end",
    icon:  React.createElement(Terminal, { className:"w-6 h-6 text-purple-500 dark:text-purple-400" }),
    items: [
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Java",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Spring Boot",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Node.js",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Express.js",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "TypeScript",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Prisma",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-purple-500" }),
        name: "Python",
        description: "",
      },
    ],
  },
  {
    title: "Banco de Dados",
    icon: React.createElement(Database , { className:"w-6 h-6 text-green-500 dark:text-green-400" }),
    items: [
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-green-500" }),
        name: "MongoDB",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-green-500" }),
        name: "PostgreSQL",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-green-500" }),
        name: "MySQL",
        description: "",
      },
    ],
  },
  {
    title: "Segurança e Autenticação",
    icon:  React.createElement(ShieldCheck, { className:"w-6 h-6 text-red-500 dark:text-red-400" }),
    items: [
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "JWT",
        description: "Autenticação baseada em token",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "Bcrypt",
        description: "Hashing de senhas seguro",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "Spring Security",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "Roles e Permissões",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "Headers HTTP Seguros",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "CORS",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-red-500" }),
        name: "APIs REST",
        description: "",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon:  React.createElement(CloudCog, { className:"w-6 h-6 text-yellow-500 dark:text-yellow-400" }),
    items: [
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-yellow-500" }),
        name: "Git",
        description: "Controle de versão distribuído",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-yellow-500" }),
        name: "AWS ",
        description: "S3, Route 53, EC2, Lambda, IAM",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-yellow-500" }),
        name: "GitHub",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-yellow-500" }),
        name: "Docker",
        description: "",
      },
      {
        icon: React.createElement(Code, { className:"w-4 h-4 mr-2 text-yellow-500" }),
        name: "CI/CD",
        description: "",
      },
      
    ],
  },
];