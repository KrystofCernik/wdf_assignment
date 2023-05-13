import Image from 'next/image'
import Button from '@/atoms/Button/Button'

import ArrowRight from '@/icons/arrow-right.svg'
import './ClinicCard.scss'

interface Language {
  value: string,
  image: string
}

export default function ClinicCard({ image, title, languages }: { image: string, title: string, languages?: Array<Language> }) {
  return (
    <div
      className='clinic-card'
      style={title === 'Klinika Brno' ? { marginTop: '0' } : { marginTop: '1.5rem' }}
    >
      <div className="clinic-card__image__wrapper">
        <div className="clinic-card__image">
          <Image
            src={image}
            alt='clinic image'
            width={146}
            height={104}
          />
        </div>
      </div>
      <div className="clinic-card__content">
        <p
          className="tiny"
          style={{ fontWeight: 'bold' }}
        >
          {title}
        </p>
        <div className="clinic-card__content__languages">
          {languages ? languages.map(lang => (
            <Image
              src={lang.image}
              alt={lang.value}
              width={16}
              height={16}
            />
          )) : null}
        </div>
        <Button
          type='secondary'
          size='small'
          label='Více info'
          icon={ArrowRight.src}
        />
      </div>
    </div>
  )
}
