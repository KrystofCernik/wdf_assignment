import Heading from '@/atoms/Heading/Heading'
import Paragraph from '@/atoms/Paragraph/Paragraph'
import Carousel from '@/molecules/Carousel/Carousel'

import './Testimonials.scss'

export default function Testimonials() {
  return (
    <div className="caoursel">
      <Heading
        title='Vybralo si nás už více než 20 000 párů'
      />
      <Carousel />
    </div>
  )
}
