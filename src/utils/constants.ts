import type { Item } from "../utils/interfaces"

// root paths -------------------------------------------
const fundamentalRoot = '/0-fundamentals'

// sections -------------------------------------------
export const sections: Item[] = [
  {
    name: 'RxJs Fundamentals',
    description: 'Foundation of RxJS',
    route: fundamentalRoot,
  },
]

// lessons -------------------------------------------
export const fundamentalConceptsLessons: Item[] = [
  {
    name: 'Appetizer',
    description: '',
    route: fundamentalRoot + '/appetizer',
  },
  {
    name: 'Iterator pattern',
    description: '',
    route: fundamentalRoot + '/iterator',
  },
  {
    name: 'Observer pattern',
    description: '',
    route: fundamentalRoot + '/observer',
  },
]

export const itemCollections = {
  SECTIONS: sections, 
  FUNDAMENTAL_CONCEPTS: fundamentalConceptsLessons,
}


