'use client'
import Image from 'next/image'

import Select, { components, DropdownIndicatorProps } from 'react-select'
import chevronIcon from '../../../assets/icons/chevron-down.svg'
import { languages } from './languages'
import './LanguageSelect.scss'

interface Lang {
  value: string,
  image: string
}


const DropdownIndicator = (
  props: DropdownIndicatorProps<Lang, true>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image
        src={chevronIcon.src}
        alt='open select'
        height={24}
        width={24}
      />
    </components.DropdownIndicator>
  )
}


export default function LanguageSelect() {
  return (
    <div className='language-select__wrapper'>
      <Select
        className="language-select"
        id='language-select'
        instanceId='language-select'
        classNamePrefix="select"
        components={{ DropdownIndicator }}
        defaultValue={languages[0]}
        name="color"
        options={languages}
        formatOptionLabel={lang => (
          <Image
            src={lang.image}
            alt={lang.value}
            height={24}
            width={24}
          />
        )}
        isSearchable={false}
      />
    </div>
  )
}
