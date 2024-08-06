import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brianna Haferman',
  description: 'Creative media portfolio for Brianna Haferman',
  keywords: ['Brianna Haferman', 'photography', 'creative', 'design', 'drone'],
  authors: [{ name: 'Jason', url: 'https://jeodell.github.io' }],
  creator: 'Brianna Haferman',
  publisher: 'Brianna Haferman',
  metadataBase: new URL('https://briannahaferman.com'),
  openGraph: {
    title: 'Brianna Haferman',
    description: 'Creative media portfolio for Brianna Haferman',
    url: 'https://briannahaferman.com',
    siteName: 'Brianna Haferman',
    images: [{ url: './img/brianna.jpg', alt: 'Brianna Haferman' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brianna Haferman',
    description: 'Creative media portfolio for Brianna Haferman',
    images: [{ url: './img/brianna.jpg', alt: 'Brianna Haferman' }],
  },
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-white text-gray-700')}>
        <Navbar />
        <main className="min-h-[calc(100vh-112px-144px)]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
