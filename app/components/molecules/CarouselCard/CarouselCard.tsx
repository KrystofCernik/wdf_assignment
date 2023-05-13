import Button from '@/components/atoms/Button/Button'
import Image from 'next/image'

import ArrowRight from '@/icons/arrow-right.svg'
import './CarouselCard.scss'

export default function CarouselCard({ description, image, href }: { description: string, image: string, href: string }) {
  return (
    <div className='carousel-card'>
      <div className="carousel-card__content">
        <h4>{description}</h4>
        <Button
          type='primary'
          size='big'
          label='Další spokojení klienti'
          icon={ArrowRight.src}
          href={href}
        />
      </div>
      <div className='carousel-card__image'>
        <Image
          src={image}
          alt="testimonial image"
          width={385}
          height={385}
        />
      </div>
    </div>
  )
}
