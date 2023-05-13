import './assets/styles/globals.scss'

export const metadata = {
  title: 'WDF | Krystof Cernik',
  description: 'Build in Next',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
