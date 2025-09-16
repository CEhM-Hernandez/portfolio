# Portfolio Data Structure

Esta carpeta contiene toda la información del portafolio organizada en archivos separados para facilitar el mantenimiento y las modificaciones.

## Estructura de Archivos

### 📁 `src/data/`

- **`constants.ts`** - Constantes reutilizables (imagen de perfil, información personal)
- **`personal.ts`** - Información personal y de presentación (Hero)
- **`about.md`** - Descripción detallada para la página About (Markdown con frontmatter)
- **`experience.md`** - Experiencia laboral en formato Markdown con metadatos
- **`projects.md`** - Proyectos con descripciones detalladas en Markdown
- **`skills.ts`** - Habilidades organizadas por categorías (Frontend, Backend, Tools)
- **`tags.ts`** - Diccionario de tecnologías con iconos y estilos
- **`index.ts`** - Archivo simple para exportaciones futuras (opcional)

## Cómo Modificar el Contenido

### � Constantes Reutilizables

Edita `data/constants.ts` para cambiar valores que se usan en múltiples lugares:

```typescript
export const PROFILE_IMAGE = 'nueva-url-imagen.webp'
export const PERSONAL_CONSTANTS = {
  fullName: 'Tu Nombre Completo',
  shortName: 'Tu Nombre',
  age: 25
  // ... más constantes
}
```

### �👤 Actualizar Información Personal

Edita `data/personal.ts`:

```typescript
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Tu Nombre',
  fullName: 'Tu Nombre Completo',
  title: 'Tu Título Profesional',
  description: 'Tu descripción profesional...',
  profileImage: 'URL de tu imagen',
  contacts: {
    email: 'tu.email@gmail.com',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario'
  }
}
```

### 📝 Actualizar Página About

Edita `data/about.md` (Markdown con frontmatter):

```markdown
---
title: 'Tu Título'
profileImage: 'URL de tu imagen'
---

## Tu Sección

Tu contenido en **Markdown** con formato libre.

### Subsección

- Lista de elementos
- Más elementos

Puedes usar todo el poder de Markdown aquí.
```

### 💼 Actualizar Experiencia Laboral

Edita `data/experience.md` (Markdown con frontmatter estructurado):

```markdown
---
title: 'Experiencia Laboral'
experiences:
  - date: 'Mes Año - Mes Año'
    title: 'Tu Nuevo Cargo'
    company: 'Empresa'
    companyLink: 'https://empresa.com'
    current: true
---

## Empresa - Tu Cargo

_Periodo de trabajo_

Descripción de tu trabajo usando **Markdown**.

### Logros principales:

- 🚀 Logro importante
- 📈 Mejora implementada
```

### 🚀 Actualizar Proyectos

Edita `data/projects.md`:

```markdown
---
title: 'Mis Proyectos'
projects:
  - id: 'proyecto-id'
    title: 'Nombre del Proyecto'
    demoUrl: 'https://demo.com'
    codeUrl: 'https://github.com/...'
    technologies: ['React', 'TypeScript']
    featured: true
---

## Nombre del Proyecto

_Tipo de proyecto_

Descripción detallada en **Markdown**.
```

### 🛠️ Agregar Nueva Tecnología

1. Crear el icono en `src/assets/icons/NuevaTecnologiaIcon.astro`
2. Edita `data/tags.ts`:

```typescript
import NuevaTecnologiaIcon from '@icons/NuevaTecnologiaIcon.astro'

export const TAGS_DICTIONARY = {
  NUEVA_TECH: {
    name: 'Nueva Tecnología',
    class: 'border border-[#COLOR] hover:bg-[#COLOR]/40 hover:text-white',
    icon: NuevaTecnologiaIcon
  }
  // ... tecnologías existentes
}
```

### 📊 Agregar Nueva Habilidad

Edita `data/skills.ts` en la sección correspondiente:

```typescript
export const FRONTEND_SKILLS: Skill[] = [
  {
    name: 'Nueva Habilidad',
    icon: NuevaHabilidadIcon,
    level: 2.5 // De 1 a 3
  }
  // ... habilidades existentes
]
```

## Beneficios de esta Estructura

- ✅ **Mantenimiento fácil**: Cada tipo de información en su propio archivo
- ✅ **Escalabilidad**: Fácil agregar nuevas categorías
- ✅ **Reutilización**: Los tags son reutilizables entre proyectos
- ✅ **Tipado**: TypeScript mantiene la consistencia de datos
- ✅ **Importaciones directas**: No es necesario un archivo index complejo

## Uso Recomendado

### Importaciones Directas (Preferido)

```typescript
import { EXPERIENCE } from '@/data/experience'
import { PROJECTS } from '@/data/projects'
import { PERSONAL_INFO } from '@/data/personal'
```

### Compatibilidad (Existente)

```typescript
import { EXPERIENCE, PROJECTS } from '@utils/constants'
```

El archivo `utils/constants.ts` mantiene la compatibilidad con el código existente re-exportando todo desde la nueva estructura de datos organizados.
