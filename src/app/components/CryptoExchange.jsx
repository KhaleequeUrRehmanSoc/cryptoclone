import React from 'react'
import AndroidSvg from './icons/AndroidSvg'
import Link from 'next/link'
import LinkSvg from './icons/LinkSvg'
import QrSvg from './icons/QrSvg'

const CryptoExchange = () => {
  return (
    <>
        <div className='w-full min-h-[1526px] pt-[96px] pb-[72px] crypto_exchange_container'>
            <div className='mx-auto mb-[196px] w-full md:w-3/4 lg:w-5/6'>
                <div className='mx-auto w-11/12 sm:w-1/2 md:w-4/5 flex flex-col justify-center items-center text-center'>
                    <h2 className='my-1 text-sm lg:text-lg font-semibold text-[#1199fa]'>CRYPTO.COM DEFI</h2>
                    <h1 className='my-1 text-[2rem] lg:text-5xl font-semibold text-white'>Trade with confidence on the world’s fastest and most secure crypto exchange</h1>
                    {/* <div className='my-3'>
                        <h1 className='text-[2rem] lg:text-5xl font-semibold text-white'>Trade with confidence on the </h1>
                        <h1 className='text-[2rem] lg:text-5xl font-semibold text-white'>world’s fastest and most secure</h1>
                        <h1 className='text-[2rem] lg:text-5xl font-semibold text-white'>crypto exchange</h1>
                    </div> */}
                </div>
            </div>
            <div className='w-full min-h-[463px] lg:min-h-[245px] md:min-h-[524px]'>
                <div className='w-1/2 min-h-full hidden  lg:flex lg:flex-col lg:items-center lg:justify-center'>
                    <div className='my-3 text-center'>
                        <h2 className='my-1 text-sm lg:text-lg font-semibold text-[#1199fa] uppercase'>DESKTOP</h2>
                        <div className="mt-5">
                            <Link href="#" className='inline-block text-[#F4F4F4] border-[1px] border-[#F4F4F4] bg-transparent text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                                Download DeFi Wallet <LinkSvg />
                            </Link>
                        </div>
                    </div>

                    <div className='mt-8 text-center'>
                        <h2 className='my-1 text-sm lg:text-lg font-semibold text-[#1199fa] uppercase'>DESKTOP</h2>
                        <div className="mt-5">
                            <Link href="#" className='inline-block text-[#F4F4F4] border-[1px] border-[#F4F4F4] bg-transparent text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                                Download DeFi Wallet <QrSvg />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-[349px] hidden md:block'></div>
            <div className='p-6 md:p-0 md:mx-auto w-11/12 sm:w-1/2 md:w-4/5 md:flex md:gap-5 md:items-center'>
                {
                    [1,2,3].map((item,i)=> (
                        <div className='my-7 w-full md:w-1/3' key={i}>
                            <h5 className='mb-8 text-[22px] md:text-3xl font-semibold text-white capitalize'>Liquidity</h5>
                            <h5 className='mb-3 text-[#C9CFDD] font-normal text-base md:text-xl'>
                                Deep order book liquidity in all market conditions  
                            </h5>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default CryptoExchange