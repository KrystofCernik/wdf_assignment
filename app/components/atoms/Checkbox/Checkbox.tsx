import Image from 'next/image'
import CheckIcon from '@/icons/check.svg'
import './Checkbox.scss'

export default function Checkbox() {
  return (
    <label className='checkbox__wrapper'>
      <div className='checkbox'>
        <input
          type="checkbox"
          required
        />
        <span className='checkmark'>
          <Image
            src={CheckIcon.src}
            alt='agree with terms'
            width={24}
            height={24}
          />
        </span>
      </div>
      <span className='tiny checkbox__agreement'>Souhlasím se zpracováním <span style={{fontWeight: 'bold'}}>osobních údajů</span>. *</span>
    </label>
  )
}
