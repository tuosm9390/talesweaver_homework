import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: '테일즈위버 숙제',
  description: '테일즈위버 숙제 프로젝트',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className='pb-20 pt-28 px-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
