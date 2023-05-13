import './Bubbles.scss'

import Bubble from "@/atoms/Bubble/Bubble"
import SuccessIcon from '@/icons/success.svg'
import BornIcon from '@/icons/born.svg'
import PriceIcon from '@/icons/price.svg'
import TimeIcon from '@/icons/time.svg'
import LanguageIcon from '@/icons/jazyk.svg'
import ExperienceIcon from '@/icons/experiences.svg'

interface Reason {
  title: string,
  src: string
}

const reasons: Array<Reason> = [
  {
    title: 'Nadprůměrná úspěšnost léčby',
    src: SuccessIcon.src
  },
  {
    title: 'Přes 16 000 narozených dětí',
    src: BornIcon.src
  },
  {
    title: 'Cenová dostupnost léčby',
    src: PriceIcon.src
  },
  {
    title: 'Žádná čekací doba',
    src: TimeIcon.src
  },
  {
    title: 'Mluvíme 8 světovými jazyky',
    src: LanguageIcon.src
  },
  {
    title: '17 let zkušeností',
    src: ExperienceIcon.src
  }
]

export default function Bubbles() {

  return (
    <div className="bubbles">
      {reasons.map(reason => (
        <Bubble
          key={reason.title}
          title={reason.title}
          icon={reason.src}
        />
      ))}
    </div>
  )
}
