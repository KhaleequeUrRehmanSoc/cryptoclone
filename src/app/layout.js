import { inter, noto_sans, roboto_mono } from '@/fonts/fonts'
import './globals.css'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'Crypto App',
  description: 'Its Crypto App Developed Using Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${inter.variable} ${noto_sans.variable}`}>
      <body>
      <Box className='w-full min-h-screen'>
        <Navbar>
        {children}
        </ Navbar>
        <Footer />
      </Box>
      </body>
    </html>
  )
}
