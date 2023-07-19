import Link from 'next/link'
import React from 'react'
import AndroidSvg from './icons/AndroidSvg'
import Image from 'next/image'
import RightArrowSvg from './icons/RightArrowSvg'

const CryptoEarn = () => {

    const defiListArr = [
        {
          title: "DeFi Wallet.",
          description: "Your Keys, Your Crypto.",
        },
        {
          title: "DeFi Earn.",
          description: "No lock-up period and stable returns.",
        },
        {
          title: "DeFi Swap.",
          description: "Swap DeFi coins and earn Triple Yield.",
        },
    ]

  return (
    <>
        <div className='w-full crypto_earn_container p-6 lg:p-8 xl:p-10 py-16'>
            <div className='mx-auto w-full md:w-11/12 lg:w-5/6 block lg:flex lg:flex-row-reverse lg:items-center lg:justify-between'>
                <div className="mx-auto w-full sm:w-11/12 md:w-1/2 flex flex-col justify-center items-center md:block text-center md:text-left">
                    <h2 className='my-1 text-base  font-semibold text-[#1199fa]'>CRYPTO EARN</h2>
                    <h1 className='my-3 mb-8 text-[2rem] font-semibold text-white'>Get the most out of your assets, safely</h1>
                    <h5 className='my-3 mb-8 text-sm font-normal text-[#D1D0D1]'>Choose from 21+ cryptocurrencies and stablecoins.</h5>
                    <Link href="#" className='inline-block mb-16 bg-transparent hover:bg-[#ffffff1a] text-white border-[1px] border-[#f4f4f4]  text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                        Calculate Rewards <RightArrowSvg /> 
                    </Link>
                </div>
                <div className="mx-auto relative w-full md:w-1/2">
                    <div className='w-full  '>
                        <Image 
                        className='mx-auto md:mx-0 w-[280px] md:-w-[460]'
                        src="/assets/images/crypto_earn.webp"
                        width={460}
                        height={763}
                        alt="mobile pic"
                        />
                    </div>
                    <div className='absolute top-[3.9%] left-[39%] md:top-[3.5%] md:left-[16%]'>
                        <Image 
                        className='mx-auto'
                        src="/assets/images/crypto_earn_notif1.webp"
                        width={360}
                        height={145}
                        alt="notification pic"
                        />
                    </div>
                    <div className='absolute top-[22.5%] left-[44%] md:top-[23.5%] md:left-[22%]'>
                        <Image 
                        className='mx-auto'
                        src="/assets/images/crypto_earn_notif1.webp"
                        width={360}
                        height={145}
                        alt="notification pic"
                        />
                    </div>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default CryptoEarn