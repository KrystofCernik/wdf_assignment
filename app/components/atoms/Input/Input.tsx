import styles from './Input.module.scss'

export default function Input({ type, label, required }: { type: string, label: string, required?: boolean }) {
  return (
    <label className={styles.input}>
      <span>{`${label} ${required ? '*' : ''}`}</span>
      <input
        type={type}
        placeholder=' ' // to be able to use :invalid selector properly
        required={required}
      />
    </label>
  )
}
