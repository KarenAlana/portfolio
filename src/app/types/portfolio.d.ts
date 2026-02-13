declare module '@/types' {
  export interface Project {
    title: string
    description: string
    image: string
    demo?: string
    repo?: string
    technologies?: string[]
    category?: string
  }

  export interface SkillItem {
    icon: React.ReactNode
    name: string
    description: string
  }
  
  export interface SkillCategory {
    title: string
    icon: React.ReactNode
    items: SkillItem[]
  }
}