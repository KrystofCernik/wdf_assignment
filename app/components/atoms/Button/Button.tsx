import Image from 'next/image'
import Link from 'next/link'
import './Button.scss'

export default function Button({ type, size, label, icon, href }: { type: string, size: string, label?: string, icon?: string, href?: string }) {
  return (
    <Link href={''}>
      <button className={`${type} ${size} ${!label ? 'no-label' : ''}`}>
        {label ? label : ''}
        {icon ? (
          <Image
            src={icon}
            alt={`${label} icon`}
            width={size === 'small' ? 16 : 24 }
            height={size === 'small' ? 16 : 24 }
          />
        ) : null}
      </button>
    </Link>
  )
}
