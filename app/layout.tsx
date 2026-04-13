import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: 'Multilingual Web Developer | JavaScript, Java, PHP | International Creative Developer',
  description: 'Creative junior web developer fluent in 4 languages (English, Spanish, French, Korean). Specializing in JavaScript, Java, PHP, and modern web technologies. Available for international opportunities.',
  keywords: ['multilingual developer', 'junior web developer', 'JavaScript developer', 'international developer', 'creative agency developer'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Multilingual Web Developer | Your Name',
    description: 'Creative junior web developer fluent in 4 languages. Building bridges between code and cultures.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
