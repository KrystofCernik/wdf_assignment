import Image from "next/image"

export default function Signature({ image, name, description }: { image: string, name: string, description: string }) {
  return (
    <div className="signature">
      <Image
        src={image}
        alt="signature"
        width={115}
        height={80}
      />
      <p className="small">{name}</p>
      <p className="tiny">{description}</p>
    </div>
  )
}
