import HtmlIcon from '@icons/HtmlIcon.astro'
import NextIcon from '@icons/NextIcon.astro'
import CssIcon from '@icons/CssIcon.astro'
import TailwindIcon from '@icons/TailwindIcon.astro'
import ReactIcon from '@icons/ReactIcon.astro'
import NodeIcon from '@icons/NodeIcon.astro'
import ExpressIcon from '@icons/ExpressIcon.astro'
import AstroIcon from '@icons/AstroIcon.astro'
import JavascriptIcon from '@icons/JavascriptIcon.astro'
import TypescriptIcon from '@icons/TypescriptIcon.astro'
import MySQLIcon from '@icons/MySQLIcon.astro'
import MariaDBIcon from '@icons/MariaDBIcon.astro'
import MongoDBIcon from '@icons/MongoDBIcon.astro'

import type { Tags } from '@/types/types'

export const TAGS_DICTIONARY: Record<string, Tags> = {
  HTML: {
    name: 'HTML',
    class: 'border border-[#ef652a] hover:bg-[#ef652a]/40 hover:text-white uppercase',
    icon: HtmlIcon
  },
  NEXT: {
    name: 'Next.js',
    class: 'border border-black hover:bg-black/40 hover:text-white',
    icon: NextIcon
  },
  CSS: {
    name: 'CSS',
    class: 'border border-[#663398] hover:bg-[#663398]/40 hover:text-white uppercase',
    icon: CssIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'border border-[#F0DC4E] hover:bg-[#F0DC4E]/40 hover:text-black',
    icon: JavascriptIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'border border-[#2D79C7] hover:bg-[#2D79C7]/40 hover:text-white',
    icon: TypescriptIcon
  },
  REACT: {
    name: 'React',
    class: 'border border-[#00D8FF] hover:bg-[#00D8FF]/40 hover:text-black',
    icon: ReactIcon
  },
  NODE: {
    name: 'Node.js',
    class: 'border border-[#4CAF50] hover:bg-[#4CAF50]/40 hover:text-white',
    icon: NodeIcon
  },
  EXPRESS: {
    name: 'Express.js',
    class: 'border border-[#222222] hover:bg-[#222222]/40 hover:text-white',
    icon: ExpressIcon
  },
  ASTRO: {
    name: 'Astro',
    class: 'border border-[#36147B] hover:bg-[#36147B]/40 hover:text-white',
    icon: AstroIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'border border-[#38B2AC] hover:bg-[#38B2AC]/40 hover:text-white',
    icon: TailwindIcon
  },
  MYSQL: {
    name: 'MySQL',
    class: 'border border-[#00546B] hover:bg-[#00546B]/40 hover:text-white',
    icon: MySQLIcon
  },
  MARIADB: {
    name: 'MariaDB',
    class: 'border border-[#BA4A47] hover:bg-[#BA4A47]/40 hover:text-white',
    icon: MariaDBIcon
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'border border-[#4DB33D] hover:bg-[#4DB33D]/40 hover:text-white',
    icon: MongoDBIcon
  }
}
