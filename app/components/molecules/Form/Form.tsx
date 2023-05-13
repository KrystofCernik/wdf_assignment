'use client'
import ButtonSubmit from "@/atoms/Button/ButtonSubmit";
import Checkbox from "@/atoms/Checkbox/Checkbox";
import Input from "@/atoms/Input/Input";
import Textarea from "@/atoms/Input/Textarea";
import Select from "@/atoms/Select/Select";

import './Form.scss'

const options = [
  { value: 'brno', label: 'Brno' },
  { value: 'ostrava', label: 'Ostrava' },
  { value: 'bratislava', label: 'Bratislava' },
  { value: 'martin', label: 'Martin' }
]

export default function Form() {
  return (
    <div className="form">
      <h3>Kontaktní formulář</h3>
      <form>
        <div className="form__wrapper">
          <Input
            type="text"
            label="Jméno"
            required={true}
          />
          <Input
            type="text"
            label="Příjmení"
            required={true}
          />
          <Input
            type="tel"
            label="Telefon"
            required={true}
          />
          <Input
            type="email"
            label="Email"
            required={true}
          />
          <Select
            label="V jakém jazyce chcete komunikovat?"
            options={options}
            required={true}
          />
          <Select
            label="Preferovaná klinika?"
            options={options}
            required={true}
          />
          <div style={{width: '47%'}}>
            <Select
              label="O jakou léčbu máte prosím zájem?"
              options={options}
              required={true}
              fullWidth={true}
            />
            <Checkbox />
          </div>
          <Textarea
            label="Váš dotaz"
          />
        </div>
        <div className="form__submit">
          <ButtonSubmit />
          <p className="tiny grey">
            Nebo můžete rovnou vyplnit<span style={{ fontWeight: 'bold' }}> detailní informace o vaší anamnéze</span>.
          </p>
        </div>
      </form>
    </div>
  )
}
