
export default function Heading({ text }: { text: string }) {
  return (
    <p
      style={{ 
        textAlign: 'center',
        margin: '0 auto',
        width: '80%'
      }}
    >
      {text}
    </p>
  )
}
