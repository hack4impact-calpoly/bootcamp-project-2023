import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar';
import Footer from './components/footer';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bootcamp Milestone #2',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">

      <body className={openSans.className}> 
        <Navbar/>
        <Footer/>
        {children}
        </body>
    </html>
  )
}
