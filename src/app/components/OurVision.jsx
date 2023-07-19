import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurVision = () => {
  return (
    <>
        <div className='w-full bg-[#061121] p-6 lg:p-8 xl:p-10'>
            <div className='mx-auto w-full md:w-11/12 lg:w-5/6 py-32'>
                <h4 className="w-full text-center capitalize text-lg font-semibold text-[#1199FA] mb-4">OUR VISION</h4>
                <h1 className="w-full text-center capitalize text-3xl lg:text-5xl font-semibold text-[#F4F4F4] mb-4 leading-[125%]">Cryptocurrency in <br /> Every Wallet™</h1>
                <div className='mx-auto flex justify-center items-center'>
                    <Image src="/assets/images/our_vision_pic.png" alt="our vision" width={555} height={587} />
                </div>
                <div className='w-full flex justify-between mb-20'>
                    <div className='w-1/2'>
                        <div className='w-full my-2 text-center'>
                            <h5 className="text-lg lg:text-2xl text-white font-semibold mb-4">Founded in</h5>
                            <h5 className="text-2xl lg:text-5xlxl font-semibold text-[#1199FA]">2016</h5>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full my-2 text-center'>
                            <h5 className="text-lg lg:text-2xl text-white font-semibold mb-4">Users</h5>
                            <h5 className="text-2xl lg:text-5xlxl font-semibold text-[#1199FA]">80</h5>
                        </div>
                    </div>
                </div>
                <div className='my-5 w-full text-center'>
                    <Link href="#" className='inline-block border-[1px] border-[#f4f4f4] text-[#FFFFFF] text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                    About Us <svg className='inline-block ml-4' width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7h12M6 1l6 6-6 6" stroke="currentColor" stroke-width="2"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurVision