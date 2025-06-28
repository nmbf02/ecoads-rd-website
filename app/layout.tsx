import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoAds RD',
  description: 'Publicidad que limpia, no contamina',
  generator: 'nmbf02',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
