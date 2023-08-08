"use client"

import { inter, noto_sans, roboto_mono } from '@/fonts/fonts'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation';
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//   title: 'Crypto App',
//   description: 'Its Crypto App Developed Using Nextjs',
// }


export default function RootLayout({ children }) {

const pathname = usePathname();

console.log(' pathname ',pathname)

const nftMarketplaceRelatedPathsRegex = /^\/nft/;

  return (
    <html lang="en" className={`${roboto_mono.variable} ${inter.variable} ${noto_sans.variable}`}>
      <body>
      <SessionProvider>
        <Box className='w-full min-h-screen'>
          {
            nftMarketplaceRelatedPathsRegex.test(pathname)?
            <>
              {children}
            </>
            :
            
            <>
            <Navbar>
            {children}
            </ Navbar>
            <Footer />
            </>
          }
          
        </Box>
      </SessionProvider>
      </body>
    </html>
  )
}

















































        {/* <Navbar>
        {children}
        </ Navbar>
        <Footer /> */}