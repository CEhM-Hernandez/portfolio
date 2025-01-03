// ------------- icons ------------- //
import HtmlIcon from '@icons/HtmlIcon.astro';
import NextIcon from '@icons/NextIcon.astro';
import CssIcon from '@icons/CssIcon.astro';
import TailwindIcon from '@icons/TailwindIcon.astro';
import ReactIcon from '@icons/ReactIcon.astro';
import NodeIcon from '@icons/NodeIcon.astro';
import ExpressIcon from '@icons/ExpressIcon.astro';
import AstroIcon from '@icons/AstroIcon.astro';
import JavascriptIcon from '@icons/JavascriptIcon.astro';
import TypescriptIcon from '@icons/TypescriptIcon.astro';
import VsCodeIcon from '@icons/VsCodeIcon.astro';
import GitHubIcon from '@icons/GitHubIcon.astro';
import GitIcon from '@icons/GitIcon.astro';
import FigmaIcon from '@icons/FigmaIcon.astro';
import PostmanIcon from '@icons/PostmanIcon.astro';

// ------------- types ------------- //
import type { Experience, Project, Skill } from '@/types/types';

// ------------- constants ------------- //
export const EXPERIENCE: Experience[] = [
  {
    date: 'Octubre 2024 - Actualidad',
    title: 'Desarrollador Full-Stack',
    enterprice: { name: 'CUENTI', link: 'https://cuenti.com' },
    description:
      'Me he desempeñado realizando desarrollos Backend con Express.js y Frontend con React.js para crear APIs y herramientas que automatizan procesos internos y optimizan la comunicación y la experiencia de usuario.',
  },
  {
    date: 'Julio 2024 - Septiembre 2024',
    title: 'Desarrollador Frontend',
    enterprice: { name: 'CEhM' },
    description:
      'Durante este tiempo, he trabajado en la creación de interfaces de usuario con React.js y Tailwind CSS, implementando diseños responsivos y accesibles para mejorar la experiencia de usuario.',
  },
];

export const TAGS_DICTIONARY = {
  HTML: {
    name: 'HTML',
    class:
      'border border-[#ef652a] hover:bg-[#ef652a]/40 hover:text-white uppercase',
    icon: HtmlIcon,
  },
  NEXT: {
    name: 'Next.js',
    class: 'border border-black hover:bg-black/40 hover:text-white',
    icon: NextIcon,
  },
  CSS: {
    name: 'CSS',
    class:
      'border border-[#663398] hover:bg-[#663398]/40 hover:text-white uppercase',
    icon: CssIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'border border-[#F0DC4E] hover:bg-[#F0DC4E]/40 hover:text-black',
    icon: JavascriptIcon,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'border border-[#2D79C7] hover:bg-[#2D79C7]/40 hover:text-white',
    icon: TypescriptIcon,
  },
  REACT: {
    name: 'React',
    class: 'border border-[#00D8FF] hover:bg-[#00D8FF]/40 hover:text-black',
    icon: ReactIcon,
  },
  NODE: {
    name: 'Node.js',
    class: 'border border-[#4CAF50] hover:bg-[#4CAF50]/40 hover:text-white',
    icon: NodeIcon,
  },
  EXPRESS: {
    name: 'Express.js',
    class: 'border border-[#222222] hover:bg-[#222222]/40 hover:text-white',
    icon: ExpressIcon,
  },
  ASTRO: {
    name: 'Astro',
    class: 'border border-[#36147B] hover:bg-[#36147B]/40 hover:text-white',
    icon: AstroIcon,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'border border-[#38B2AC] hover:bg-[#38B2AC]/40 hover:text-white',
    icon: TailwindIcon,
  },
};

export const PROJECTS: Project[] = [
  {
    title: 'PaintJS',
    demoUrl: 'https://paint-js-cehm.vercel.app/',
    codeUrl: 'https://github.com/CEhM-Hernandez/PaintJS',
    description:
      'Aplicación web interactiva que permite dibujar en un lienzo, elegir colores, ajustar tamaños de pincel y guardar tus creaciones, además de una estética retro. Desarrollada con HTML, CSS y JavaScript vanilla como ejercicio de desarrollo de lógica de programación.',
    thumbnailUrl: '/images/thumbnail-paintJS.webp',
    tags: [
      TAGS_DICTIONARY.HTML,
      TAGS_DICTIONARY.CSS,
      TAGS_DICTIONARY.JAVASCRIPT,
    ],
  },
  {
    title: 'Base64 Encoder/Decoder.',
    demoUrl: 'https://base64-encoder-cehm.vercel.app/',
    codeUrl: 'https://github.com/CEhM-Hernandez/base64-encoder',
    description:
      'Aplicación web que permite codificar y decodificar texto en formato Base64, con la posibilidad de copiar el resultado al portapapeles.',
    thumbnailUrl: '/images/thumbnail-base64.webp',
    tags: [
      TAGS_DICTIONARY.HTML,
      TAGS_DICTIONARY.CSS,
      TAGS_DICTIONARY.JAVASCRIPT,
    ],
  },
];

export const FRONTEND_SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: HtmlIcon,
  },
  {
    name: 'CSS',
    icon: CssIcon,
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
  },
  {
    name: 'Astro',
    icon: AstroIcon,
  },
];

export const BACKEND_SKILLS: Skill[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressIcon,
  },
];

export const TOOLS_SKILLS: Skill[] = [
  {
    name: 'Git',
    icon: GitIcon,
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
  },
  {
    name: 'VSCode',
    icon: VsCodeIcon,
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
  },
  {
    name: 'Postman',
    icon: PostmanIcon,
  },
];