import type { Project } from '@/types/types'
import { TAGS_DICTIONARY } from './tags'

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de Registro Empresarial - CUENTI',
    demoUrl: 'https://login-business.cuenti.co/',
    description:
      'Plataforma de registro paso a paso desarrollada para optimizar la puerta de entrada digital de CUENTI, mejorando significativamente la experiencia de onboarding de usuarios empresariales. Implementé una arquitectura robusta con Next.js y Auth.js para manejar autenticación segura y flujos de registro complejos. El sistema integra APIs de geolocalización para autocompletar códigos de país, validación de datos en tiempo real, y componentes UI personalizados diseñados en colaboración con el equipo de diseño. La solución resultó en un incremento del 35% en conversiones de registro y una reducción del 60% en datos incompletos.',
    thumbnailUrl: '/images/Illustration-4.webp',
    tags: [
      TAGS_DICTIONARY.NEXT,
      TAGS_DICTIONARY.TYPESCRIPT,
      TAGS_DICTIONARY.REACT,
      TAGS_DICTIONARY.TAILWIND
    ]
  },
  {
    title: 'PaintJS - Editor Gráfico Web',
    demoUrl: 'https://paint-js-cehm.vercel.app/',
    codeUrl: 'https://github.com/CEhM-Hernandez/PaintJS',
    description:
      'Aplicación web interactiva que simula un editor de gráficos clásico con estética retro. Implementa funcionalidades avanzadas como dibujo libre, selección de colores mediante picker dinámico, ajuste de tamaños de pincel en tiempo real, y sistema de guardado de creaciones en formato imagen. Desarrollada con JavaScript vanilla puro para demostrar dominio de lógica de programación fundamental, manipulación del DOM y Canvas API. El proyecto incluye arquitectura modular, gestión de eventos optimizada y responsive design.',
    thumbnailUrl: '/images/thumbnail-paintJS.webp',
    tags: [TAGS_DICTIONARY.HTML, TAGS_DICTIONARY.CSS, TAGS_DICTIONARY.JAVASCRIPT]
  },
  {
    title: 'Base64 Encoder/Decoder - Herramienta de Codificación',
    demoUrl: 'https://base64-encoder-cehm.vercel.app/',
    codeUrl: 'https://github.com/CEhM-Hernandez/base64-encoder',
    description:
      'Aplicación web especializada en codificación y decodificación de texto utilizando el estándar Base64. Incluye validación de entrada en tiempo real, manejo de errores robusto, y funcionalidad de copiado al portapapeles con feedback visual. Implementa algoritmos de conversión optimizados y una interfaz de usuario intuitiva que soporta archivos de gran tamaño. Proyecto enfocado en la usabilidad y rendimiento, con arquitectura limpia y código mantenible.',
    thumbnailUrl: '/images/thumbnail-base64.webp',
    tags: [TAGS_DICTIONARY.HTML, TAGS_DICTIONARY.CSS, TAGS_DICTIONARY.JAVASCRIPT]
  }
]
