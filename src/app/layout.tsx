import './globals.css'
import '../tokens-build/variables.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/myriad-pro-regular.woff2'
})

export const metadata: Metadata = {
  title: 'Design Tokens',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <header>
          <nav className={styles.navbar}>
            Design Tokens
          </nav>
        </header>
        <main className={styles.main}>
        {children}
        </main>
        <footer className={styles.navbar}>
          designed and developed by Paul Patena
        </footer>
      </body>
    </html>
  )
}