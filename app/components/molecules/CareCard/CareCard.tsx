import Image from "next/image"

import './CareCard.scss'

export default function CareCard({ image, title, description }: { image: string, title: string, description: string }) {

  return (
    <div className="care-card">
      <div className="care-card__image">
        <Image
          src={image}
          alt="care image"
          width={312}
          height={408}
        />
      </div>
      <h4 className="care-card__title">{title}</h4>
      <p className="small care-card__description">{description}</p>
    </div>
  )
}
