import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Self-Upvote Detector — Detect Fake Engagement on Social Platforms',
  description: 'API that detects suspicious voting patterns and fake engagement across platforms. Built for platform operators, community managers, and brand safety teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f0892d07-9d80-456a-bbb0-727cc1567a8e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
