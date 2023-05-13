import Image from "next/image"

import './NewsCard.scss'

export default function NewsCard({ image, title, date, clinic }: { image: string, title: string, date: string, clinic: string }) {
  return (
    <div className="news-card">
      <div className="news-card__image">
        <Image
          src={image}
          alt="article image"
          width={800}
          height={570}
        />
        <span className="news-card__image__tag">{clinic}</span>
      </div>
      <div className="news-card__content">
        <h5>{title}</h5>
        <p className="tiny">{date}</p>
      </div>
    </div>
  )
}
