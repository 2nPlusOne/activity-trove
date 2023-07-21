import './globals.css'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import Navbar from '../components/Navbar';

const font = Be_Vietnam_Pro({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Activity Center',
  description: 'Warmups and icebreakers for your next meeting or event.',
  icons: ['./noto-dragon.svg'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gradient-to-b from-slate-900 to-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
