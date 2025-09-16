import type { Experience } from '@/types/types'

export const EXPERIENCE: Experience[] = [
  {
    date: 'Octubre 2024 - Actualidad',
    title: 'Desarrollador Full-Stack',
    enterprise: { name: 'CUENTI', link: 'https://cuenti.com' },
    description:
      'Desarrollo soluciones integrales end-to-end utilizando tecnologías modernas como Express.js para backend robusto y React.js para interfaces de usuario dinámicas. He diseñado y implementado APIs RESTful que optimizan procesos internos, reduciendo tiempos de ejecución en un 40%. Colaboro estrechamente con equipos multidisciplinarios para entregar productos de alta calidad que superan las expectativas del cliente. Mi enfoque incluye la implementación de mejores prácticas de desarrollo, testing automatizado y deployment continuo.'
  },
  {
    date: 'Febrero 2023 - Octubre 2024',
    title: 'Desarrollador Frontend & Estudiante',
    enterprise: { name: 'CEhM' },
    description:
      'Período de crecimiento profesional enfocado en el desarrollo de habilidades técnicas avanzadas a través de proyectos personales desafiantes y formación continua en plataformas como Alura Latam. Durante este tiempo, consolidé mi expertise en tecnologías frontend modernas, patrones de diseño y arquitectura de software. Simultaneamente, inicié mi formación universitaria en Ingeniería Informática, fortaleciendo mis fundamentos teóricos en algoritmos, estructuras de datos y principios de la computación.'
  }
] as const
