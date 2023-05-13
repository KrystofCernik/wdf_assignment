import Image from "next/image"
import Button from "@/atoms/Button/Button"
import ArrowRight from '@/icons/arrow-right.svg'

import './FloatingCard.scss'

export default function FloatingCard({ image, description, href }: { image: string, description: string, href: string }) {
  return (
    <div className="floating-card">
      <Image
        src={image}
        alt="image of doctor"
        height={220}
        width={340}
        style={{ objectFit: 'cover' }}
      />
      <div className="floating-card__content">
        <p className="medium">{description}</p>
        <Button
          type="secondary"
          size="middle"
          label="Více info"
          icon={ArrowRight.src}
          href={href}
        />
      </div>
    </div>
  )
}
