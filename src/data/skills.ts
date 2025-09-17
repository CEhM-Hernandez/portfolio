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
import VsCodeIcon from '@icons/VsCodeIcon.astro'
import GitHubIcon from '@icons/GitHubIcon.astro'
import GitIcon from '@icons/GitIcon.astro'
import FigmaIcon from '@icons/FigmaIcon.astro'
import PostmanIcon from '@icons/PostmanIcon.astro'
import MySQLIcon from '@icons/MySQLIcon.astro'
import MariaDBIcon from '@icons/MariaDBIcon.astro'
import MongoDBIcon from '@icons/MongoDBIcon.astro'

import type { Skill } from '@/types/types'
import PowerShellIcon from '@/assets/icons/PowerShellIcon.astro'
import NestJsIcon from '@/assets/icons/NestJsIcon.astro'
import PrismaIcon from '@/assets/icons/PrismaIcon.astro'

export const FRONTEND_SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: HtmlIcon,
    level: 3
  },
  {
    name: 'CSS',
    icon: CssIcon,
    level: 2.5
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    level: 2
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
    level: 2
  },
  {
    name: 'React',
    icon: ReactIcon,
    level: 2
  },
  {
    name: 'Next.js',
    icon: NextIcon,
    level: 2
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    level: 2.5
  },
  {
    name: 'Astro',
    icon: AstroIcon,
    level: 2
  }
]

export const BACKEND_SKILLS: Skill[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
    level: 2.5
  },
  {
    name: 'Express.js',
    icon: ExpressIcon,
    level: 2.5
  },
  {
    name: 'MySQL',
    icon: MySQLIcon,
    level: 2
  },
  {
    name: 'MongoDB',
    icon: MongoDBIcon,
    level: 1.5
  },
  {
    name: 'MariaDB',
    icon: MariaDBIcon,
    level: 2
  },
  {
    name: 'NestJS',
    icon: NestJsIcon,
    level: 1.5
  },
  {
    name: 'Prisma ORM',
    icon: PrismaIcon,
    level: 2
  }
]

export const TOOLS_SKILLS: Skill[] = [
  {
    name: 'Git',
    icon: GitIcon,
    level: 2
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    level: 2.5
  },
  {
    name: 'VSCode',
    icon: VsCodeIcon,
    level: 3
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
    level: 1.5
  },
  {
    name: 'Postman',
    icon: PostmanIcon,
    level: 2
  },
  {
    name: 'Terminal',
    icon: PowerShellIcon,
    level: 2.5
  }
]
