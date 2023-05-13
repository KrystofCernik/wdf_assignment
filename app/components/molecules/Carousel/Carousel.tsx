import Button from '@/components/atoms/Button/Button'
import CarouselCard from '../CarouselCard/CarouselCard'

import ChevronLeft from '@/icons/chevron-left.svg'
import ChevronRight from '@/icons/chevron-right.svg'
import image from '/public/images/testimonial-1.png'
import './Carousel.scss'

interface Testimonial {
  description: string,
  href: string,
  image: string
}

const testimonials: Array<Testimonial> = [
  {
    description: 'Po ťažkých 2 rokoch liečby, bolesti snaženia sme sa rozhodli pre vašu kliniku a teraz vieme, že to bolo to najsprávnejšie rozhodnutie v našom živote.',
    href: '',
    image: image.src
  }
]

export default function Carousel() {
  return (
    <div className='carousel'>
      <div className='carousel__navigation'>
        <Button
          type='secondary'
          size='big'
          icon={ChevronLeft.src}
        />
         <Button
          type='secondary'
          size='big'
          icon={ChevronRight.src}
        />
      </div>
      {testimonials.map(testimonial => (
        <CarouselCard
          description={testimonial.description}
          href={testimonial.href}
          image={testimonial.image}
        />
      ))}
      <div className="carousel__pagination">
        <span className='active'></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
