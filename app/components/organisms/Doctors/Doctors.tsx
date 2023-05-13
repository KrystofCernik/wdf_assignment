import Image from 'next/image'
import Signature from '@/atoms/Signature/Signature'

import image from '/public/images/doctors.png'
import signature from '/public/images/signature.png'
import './Doctors.scss'

interface Signature {
  image: string,
  name: string,
  description: string
}

const signatures: Array<Signature> = [
  {
    image: signature.src,
    name: 'MUDr. Tomáš Bagócsi',
    description: 'Vedoucího lékař Reprofit Bratislava'
  },
  {
    image: signature.src,
    name: 'MUDr. Pavel Otevřel',
    description: 'Vedoucího lékař Reprofit Brno'
  },
  {
    image: signature.src,
    name: 'MUDr. Andrea R. Kagánková',
    description: 'Vedoucího lékař Reprofit Ostrava'
  }
]

export default function Doctors() {
  return (
    <div className='doctors'>
      <div className='doctors__content'>
        <Image
          src={image.src}
          alt='doctors'
          width={520}
          height={402}
        />
        <p className='big'>Od samotného počátku se zaměřujeme na odhalení příčiny neplodnosti a ke každému páru přistupujeme individuálně. Vždy postupujeme od jednodušších způsobů léčby k těm složitějším.</p>
      </div>
      <div className='doctors__signatures'>
        {signatures.map(signature => (
          <Signature
            image={signature.image}
            name={signature.name}
            description={signature.description}
          />
        ))}
      </div>
    </div>
  )
}
