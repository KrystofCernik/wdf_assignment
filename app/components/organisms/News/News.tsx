import Heading from '@/atoms/Heading/Heading'
import NewsCard from '@/molecules/NewsCard/NewsCard'

import image1 from '/public/images/news-card_1.png'
import image2 from '/public/images/news-card_2.png'
import image3 from '/public/images/news-card_3.png'
import './News.scss'
import Button from '@/atoms/Button/Button'

interface New {
  image: string,
  title: string,
  date: string,
  clinic: string
}

const news: Array<New> = [
  {
    image: image1.src,
    title: 'Reprofit online se zkoušenou doktorou Patrícií Nižníkovou',
    date: '08. 08. 2022',
    clinic: 'Brno'
  },
  {
    image: image2.src,
    title: 'Chat podpory před IVF léčbou s MUDr Tomášem Bagócsi',
    date: '08. 08. 2022',
    clinic: 'Bratislava'
  },
  {
    image: image3.src,
    title: 'Připojte se na náš WEBINÁŘ!',
    date: '08. 08. 2022',
    clinic: 'Ostrava'
  }
]

export default function News() {
  return (
    <div className='news'>
      <Heading
        title='Novinky'
      />
      <div className='news__wrapper'>
        {news.map(n => (
          <NewsCard
            image={n.image}
            title={n.title}
            date={n.date}
            clinic={n.clinic}
          />
        ))}
      </div>
      <div className='news__more'>
        <Button
          type='primary'
          size='big'
          label='Další novinky'
        />
      </div>
    </div>
  )
}
