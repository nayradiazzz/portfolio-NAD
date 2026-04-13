import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-heading"
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
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
