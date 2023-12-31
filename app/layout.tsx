import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layout/header'
import Footer from './layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Najot talim',
  description: 'Zamonaviy kasblar maktabi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
