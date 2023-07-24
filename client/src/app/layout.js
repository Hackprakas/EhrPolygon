import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/nav'
import Foot from './components/foot'
import Providers from './components/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <div  className=' gradient-bg-welcome'>
        <Nav />
        <Providers>
          {children}
        </Providers>
        </div>
        <div className='gradient-bg-footer'>
        <Foot />
        </div>
      
        
        </body>
    </html>
  )
}
