import type { Experience } from '@/types/types'

export const EXPERIENCE: Experience[] = [
  {
    date: 'Octubre 2024 - Agosto 2025',
    title: 'Desarrollador Full-Stack',
    enterprise: { name: 'CUENTI', link: 'https://cuenti.com' },
    description:
      'Mi periodo en esta empresa ha sido una experiencia de aprendizaje y crecimiento significativo. He tenido la oportunidad de trabajar en proyectos desafiantes que me han permitido aplicar y expandir mis conocimientos en desarrollo. He desarrollado diferentes aplicaciones web que dan soporte a las operaciones internas de la empresa, aplicaciones específicas para clientes y, Además, he colaborado con un equipo talentoso, he aportado en la mejora de procesos de desarrollo para el equipo implementando mejores prácticas, seguridad y optimización de código.'
  },
  {
    date: 'Febrero 2023 - Octubre 2024',
    title: 'Desarrollador Frontend & Estudiante',
    enterprise: { name: 'CEhM' },
    description:
      'Período de crecimiento profesional enfocado en el desarrollo de habilidades técnicas avanzadas a través de proyectos personales desafiantes, formación continua en plataformas como Alura Latam y desarrollo de pequeños proyectos para clientes. Durante este tiempo, consolidé mi conocimientos en tecnologías frontend, patrones de diseño y arquitectura de software. Simultaneamente, inicié mi formación universitaria en Ingeniería Informática, fortaleciendo mis fundamentos teóricos en algoritmos, estructuras de datos y principios de la computación.'
  }
] as const
