import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Laiba | Application Developer',
  description: 'Full-Stack Developer fueling code with caffeine. Specializing in React, Node.js, and modern web technologies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/coder.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/coder.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/coder.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple:  '/coder.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
