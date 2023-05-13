import Image from 'next/image'
import SendIcon from '@/icons/send.svg'
import './Button.scss'

export default function Button({  }: {  }) {

  return (
    <button className='primary big submit'>
      Odeslat
      <Image
        src={SendIcon.src}
        alt='submit icon'
        width={24}
        height={24}
      />
    </button>
  )
}
