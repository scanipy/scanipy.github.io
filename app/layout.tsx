import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl, siteTitle, siteDescription } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: '/scanipy-favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/scanipy-favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/scanipy-favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/scanipy-favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/scanipy-favicon-256.png', sizes: '256x256', type: 'image/png' },
      { url: '/scanipy-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'Scanipy',
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-body)" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
