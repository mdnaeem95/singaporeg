import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../app/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Singapore G Building - Modern Office & Warehouse Spaces',
  description: 'Premium office and warehouse spaces with state-of-the-art facilities. Short and long-term leases available.',
  keywords: 'office space singapore, warehouse rental, commercial property, singapore g building',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}