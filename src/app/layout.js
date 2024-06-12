import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css';
import SetScreenSize from '@/components/setscreensize';
import IfLandscape from '@/components/ifLandscape';
import Header from '@/components/nav';
import Footer from '@/components/footer';

// const inter = Inter({ subsets: ['latin'] })
const Ubuntu = localFont({
  src: './UbuntuMono-Regular.woff',
  weight: '45 920',
	style: 'normal',
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <SetScreenSize/>
      <html lang="ko">
        <body className={Ubuntu.className}>
          <IfLandscape/>
          <Header/>
          {children}
          <Footer/>
          <Analytics/>
        </body>
      </html>
    </>
  )
}
