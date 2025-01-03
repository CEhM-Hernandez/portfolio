export interface Enterprice {
  name: string;
  link?: string;
}

export interface Experience {
  date: string;
  title: string;
  enterprice: Enterprice;
  description: string;
}

export interface Tags {
  name: string;
  class: string;
  icon?: any;
}

export interface Project {
  title: string;
  demoUrl: string;
  codeUrl: string;
  description: string;
  thumbnailUrl: string;
  tags: Tags[];
}

export interface Skill {
  name: string;
  icon: any;
  level: number;
}