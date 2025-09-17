import type { Project } from '@/types/types'
import { TAGS_DICTIONARY } from './tags'

export const PROJECTS: Project[] = [
  {
    title: 'Software contable educativo - CUENTI',
    description:
      'Plataforma web de contabilidad diseñada para instituciones educativas, que facilita la enseñanza a los estudiantes. Desarrollada con Next.js y TypeScript, la aplicación ofrece una interfaz intuitiva y responsiva, permitiendo a los diferentes usuarios manejar datos de los estudiantes, revisar y realizar informes contables y más. Implementa autenticación segura, roles de usuario diferenciados y una arquitectura modular que asegura escalabilidad y mantenibilidad.',
    tags: [
      TAGS_DICTIONARY.NEXT,
      TAGS_DICTIONARY.TYPESCRIPT,
      TAGS_DICTIONARY.REACT,
      TAGS_DICTIONARY.TAILWIND
    ],
    thumbnailUrl: '/images/illustration-1.webp'
  },
  {
    title: 'Sistema de Registro Empresarial y de Usuarios - CUENTI',
    demoUrl: 'https://login-business.cuenti.co/',
    description:
      'Plataforma de registro paso a paso desarrollada para optimizar la puerta de entrada digital de CUENTI, mejorando significativamente la experiencia de onboarding de usuarios empresariales. Implementé una arquitectura robusta con Next.js y Auth.js para manejar autenticación segura y flujos de registro complejos. El sistema integra APIs de geolocalización para autocompletar códigos de país, validación de datos en tiempo real, y componentes UI personalizados diseñados en colaboración con el equipo de diseño.',
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
      'Aplicación web interactiva que simula un editor de gráficos clásico con estética retro. Implementa funcionalidades como dibujo libre, selección de colores mediante picker dinámico, ajuste de tamaños de pincel, creación de formas geométricas y más. Desarrollada con JavaScript vanilla para demostrar dominio de lógica de programación fundamental, manipulación del DOM y Canvas API.',
    thumbnailUrl: '/images/thumbnail-paintJS.webp',
    tags: [TAGS_DICTIONARY.HTML, TAGS_DICTIONARY.CSS, TAGS_DICTIONARY.JAVASCRIPT]
  },
  {
    title: 'Base64 Encoder/Decoder - Herramienta de Codificación',
    demoUrl: 'https://base64-encoder-cehm.vercel.app/',
    codeUrl: 'https://github.com/CEhM-Hernandez/base64-encoder',
    description:
      'Aplicación web especializada en codificación y decodificación de texto utilizando el estándar Base64. Incluye validación de entrada en tiempo real, manejo de errores y funcionalidad de copiado al portapapeles con feedback visual. Implementa algoritmos de conversión optimizados y una interfaz de usuario intuitiva que soporta gran cantidad de texto.',
    thumbnailUrl: '/images/thumbnail-base64.webp',
    tags: [TAGS_DICTIONARY.HTML, TAGS_DICTIONARY.CSS, TAGS_DICTIONARY.JAVASCRIPT]
  }
]
