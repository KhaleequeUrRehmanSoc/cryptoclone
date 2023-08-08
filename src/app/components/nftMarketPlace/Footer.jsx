import Link from 'next/link'
import React from 'react'
import Instagram from '../icons/Instagram'
import TwitterSvg from '../icons/TwitterSvg'
import DiscordSvg from '../icons/DiscordSvg'
import TelegramSvg from '../icons/TelegramSvg'

const Footer = () => {
  return (
    <>
        <footer className='bg-[#0b1426] px-6 py-[1.875rem] flex flex-wrap justify-between items-end text-white'>
            <div>
                <div className='flex items-center gap-6'>
                    <Link href="#" className='no-underline'>
                        <Instagram />
                    </Link>
                    <Link href="#" className='no-underline'>
                        <TwitterSvg />
                    </Link>
                    <Link href="#" className='no-underline'>
                        <DiscordSvg />
                    </Link>
                    <Link href="#" className='no-underline'>
                        <TelegramSvg />
                    </Link>
                </div>
                <p className='mt-4 text-white text-sm font-normal'>Copyright © 2023 Crypto.com. All rights reserved.</p>
            </div>
            <div className='mt-5'>
                {
                    ["Help Center","Blog","T&C","Privacy Notice","Cookies Preference"].map((item,i) => (
                        <Link href="#" className='no-underline text-sm font-normal text-[#b0b4b9] mr-6' key={i}>
                            {item}
                        </Link>
                    ))
                }
                
            </div>
        </footer>
    </>
  )
}

export default Footer