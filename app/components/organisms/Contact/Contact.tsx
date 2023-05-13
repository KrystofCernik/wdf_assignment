import Heading from '@/atoms/Heading/Heading'
import Form from '@/molecules/Form/Form'
import ListClinics from '@/molecules/ListClinics/ListClinics'
import Image from 'next/image'

import Leaves from '/public/images/leaves.png'
import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact'>
      <Heading
        title='Kontaktujte nás'
      />
      <div className="contact__wrapper">
        <Form />
        <ListClinics />
      </div>
      <Image
        className='contact__image'
        src={Leaves.src}
        alt='leaves'
        width={227}
        height={450}
      />
    </div>
  )
}
