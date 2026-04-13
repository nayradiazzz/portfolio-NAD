import type { Metadata } from 'next'
import { Space_Mono, Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Nayra Atencia Diaz | Desarrolladora Web Multilingue',
  description: 'Desarrolladora web junior fluida en 4 idiomas (Espanol, Ingles, Frances, Coreano). Especializada en JavaScript, Java, PHP y tecnologias web modernas. Disponible para oportunidades internacionales.',
  keywords: ['Nayra Atencia Diaz', 'desarrolladora web', 'multilingual developer', 'junior web developer', 'JavaScript developer', 'international developer', 'creative agency developer'],
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
    title: 'Nayra Atencia Diaz | Desarrolladora Web Multilingue',
    description: 'Desarrolladora web creativa fluida en 4 idiomas. Construyendo puentes entre codigo y culturas.',
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
      <body className={`${notoSansKR.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
