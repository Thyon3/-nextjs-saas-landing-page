import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/Common/ScrollProgress'
import BackToTop from '@/components/Common/BackToTop'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ScrollProgress />
        <BackToTop />
        {children}
      </body>
    </html>
  )
}
