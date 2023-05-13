import ClinicCard from '../ClinicCard/ClinicCard'

import imageBrno from '/public/images/Brno.png'
import imageOstrava from '/public/images/Ostrava.png'
import imageMartin from '/public/images/Martin.png'
import imageBratislava from '/public/images/Bratislava.png'
import CzechIcon from '@/icons/czech.svg'
import GermanIcon from '@/icons/germany.svg'
import './ListClinics.scss'

interface Language {
  value: string,
  image: string
}

interface Clinic {
  title: string,
  image: string,
  languages?: Array<Language>
}

const clinics: Array<Clinic> = [
  {
    title: 'Klinika Brno',
    image: imageBrno.src,
    languages: [
      {
        value: 'czech',
        image: CzechIcon.src
      },
      {
        value: 'german',
        image: GermanIcon.src
      }
    ]
  },
  {
    title: 'Klinika Ostrava',
    image: imageOstrava.src,
    languages: [
      {
        value: 'german',
        image: GermanIcon.src
      }
    ]
  },
  {
    title: 'Klinika Bratislava',
    image: imageBratislava.src,
    languages: [
      {
        value: 'czech',
        image: CzechIcon.src
      },
      {
        value: 'german',
        image: GermanIcon.src
      }
    ]
  },
  {
    title: 'Klinika Martin',
    image: imageMartin.src,
    languages: [
      {
        value: 'czech',
        image: CzechIcon.src
      }
    ]
  },
]

export default function ListClinics() {
  return (
    <div className='list-clinics'>
      <h3>Naše kliniky</h3>
      <div className="list-clinics__wrapper">
        {clinics.map(clinic => (
          <ClinicCard
            title={clinic.title}
            image={clinic.image}
            languages={clinic.languages}
          />
        ))}
      </div>
    </div>
  )
}
