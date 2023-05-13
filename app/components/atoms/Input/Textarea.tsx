import styles from './Input.module.scss'

export default function Textarea({ label }: { label: string }) {
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <textarea
        
      />
    </label>
  )
}
