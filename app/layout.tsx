import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KarU Nature Club | Karatina University',
  description: 'Karatina University Nature Club – Connecting students with nature through hikes, conservation, team building, and environmental stewardship.',
  keywords: ['KarU Nature Club', 'Karatina University', 'nature', 'conservation', 'hiking', 'environmental club', 'Kenya'],
  authors: [{ name: 'Ken Ndiki' }],
  openGraph: {
    title: 'KarU Nature Club | Karatina University',
    description: 'Connecting students with nature through hikes, conservation, and environmental stewardship.',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KarU Nature Club',
    description: 'Connecting students with nature at Karatina University.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#2C5F2D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
