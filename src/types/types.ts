/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Enterprise {
  name: string
  link?: string
}

export interface Experience {
  date: string
  title: string
  enterprise: Enterprise
  description: string
}

export interface Tags {
  name: string
  class: string
  icon?: any
}

export interface Project {
  title: string
  demoUrl: string
  codeUrl?: string
  description: string
  thumbnailUrl: string
  tags: Tags[]
}

export interface Skill {
  name: string
  icon: any
  level: number
}

export interface PersonalInfo {
  name: string
  fullName: string
  title: string
  description: string
  profileImage: string
  contacts: {
    email: string
    linkedin: string
    github: string
  }
}

export interface AboutInfo {
  title: string
  description: string
  profileImage: string
}
