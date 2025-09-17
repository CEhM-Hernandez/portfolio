import type { PersonalInfo } from '@/types/types'
import { PERSONAL_CONSTANTS, CONTACT_INFO } from '@/data/constants'

export const PERSONAL_INFO: PersonalInfo = {
  name: PERSONAL_CONSTANTS.shortName,
  fullName: PERSONAL_CONSTANTS.fullName,
  title: 'Desarrollador Full-Stack',
  description: `Mi nombre es ${PERSONAL_CONSTANTS.fullName} y soy un desarrollador full-stack Junior y estudiante de ${PERSONAL_CONSTANTS.degree} con experiencia profesional en JavaScript y TypeScript, enfocado en crear soluciones escalables y eficientes.`,
  profileImage: PERSONAL_CONSTANTS.profileImage,
  contacts: CONTACT_INFO
}
