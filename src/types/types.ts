export interface Enterprice {
  name: string
  link?: string
}

export interface Experience {
  date: string
  title: string
  enterprice: Enterprice
  description: string
}

export type AstroIconComponent = (props?: { class?: string; [key: string]: unknown }) => unknown

export interface Tags {
  name: string
  class: string
  icon?: AstroIconComponent
}

export interface Project {
  title: string
  demoUrl: string
  codeUrl: string
  description: string
  thumbnailUrl: string
  tags: Tags[]
}

export interface Skill {
  name: string
  icon: AstroIconComponent
  level: number
}
