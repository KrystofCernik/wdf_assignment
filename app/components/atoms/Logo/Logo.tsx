import Image from "next/image"
import LogoWhite from '@/assets/logos/logo-white.svg'
import LogoColor from '@/assets/logos/logo-color.svg'

export default function Logo({ color }: { color?: boolean }) {
  return (
    <Image
      src={color ? LogoColor.src : LogoWhite.src}
      alt="logo"
      width={170}
      height={40}
    />
  )
}
