import Image from "next/image"

import './Bubble.scss'

export default function Bubble({ icon, title }: { icon: string, title: string }) {
  return (
    <div className="bubble">
      <div className="bubble__icon">
        <Image
          src={icon}
          alt="reason icon"
          width={64}
          height={64}
        />
      </div>
      <h4 className="bubble__title">{title}</h4>
    </div>
  )
}
