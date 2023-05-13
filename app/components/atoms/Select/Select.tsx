'use client'
import Image from 'next/image'

import Select, { components, DropdownIndicatorProps } from 'react-select'
import chevronIcon from '../../../assets/icons/chevron-down.svg'
import './Select.scss'

interface Option {
  value: string,
  label: string
}

const DropdownIndicator = (
  props: DropdownIndicatorProps<Option, true>
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

export default function SelectInput({ label, options, required, fullWidth }: { label: string, options: Array<Option>, required: boolean, fullWidth?: boolean }) {
  return (
    <label
      className='select__wrapper'
      style={fullWidth ? { width: '100%' } : {}}
    >
      <span>{`${label} ${required ? '*' : ''}`}</span>
      <Select
        className="select"
        id='basic-select'
        instanceId='basic-select'
        classNamePrefix="select"
        components={{ DropdownIndicator }}
        defaultValue={options[0]}
        name="color"
        options={options}
        isSearchable={false}
      />
    </label>
  )
}
