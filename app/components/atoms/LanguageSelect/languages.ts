import CzechIcon from '@/icons/czech.svg'
import GermanIcon from '@/icons/germany.svg'
import FrenchIcon from '@/icons/france.svg'

interface Lang {
  value: string,
  image: string
}

export const languages: Array<Lang> = [
  {
    value: 'czech',
    image: CzechIcon.src
  },
  {
    value: 'german',
    image: GermanIcon.src
  },
  {
    value: 'french',
    image: FrenchIcon.src
  },
]