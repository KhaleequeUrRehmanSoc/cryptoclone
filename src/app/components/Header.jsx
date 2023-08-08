"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import QrSvg from './icons/QrSvg'

const Header = () => {
  const headerVideoRef = useRef(null)

  useEffect(() => {
      console.log('headerVideoRef ',headerVideoRef)
  }, [])
  

  return (
    <>
        <section className='w-full pb-[128px] bg-[#010118]'>
          <div className='w-full min-h-screen relative' ref={headerVideoRef}>
            <video className="header_video" autoPlay muted loop playsInline>
              <source src="/assets/videos/header_bg_video.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
            </video>
            <div className='w-full h-full absolute top-0 overlay_bg'>
              <div className='mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-[70%] px-6 sm:px-0 header_content_container md:text-center'>
                <h1 className='mt-[2rem] sm:mt-[9rem] mb-8 text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-semibold text-white  leading-tight'>The World’s Leading Cryptocurrency Platform</h1>

                <div className='w-full mb-12'>
                  <div className='mb-2 w-full flex items-center'>
                    <div className='mr-4'>
                        <DoneIcon sx={{width:"1.5rem",height:"1.5rem",borderRadius:"100%",backgroundColor:"#1199fa",color:"#f4f4f4"}} />
                    </div>
                    <p className='text-sm lg:text-base font-normal text-[#D1D0D1]'>Trusted by more than <span className='text-[#1199fa]'>80M users </span>  world-wide</p>
                  </div>

                  <div className='mb-2 w-full flex items-center'>
                    <div className='mr-4'>
                        <DoneIcon sx={{width:"1.5rem",height:"1.5rem",borderRadius:"100%",backgroundColor:"#1199fa",color:"#f4f4f4"}} />
                    </div>
                    <p className='text-sm lg:text-base font-normal text-[#D1D0D1]'>Leader in  <span className='text-[#1199fa]'>regulatory compliance </span> and  <span className='text-[#1199fa]'>security certifications</span></p>
                  </div>

                  <div className='mb-2 w-full flex items-center'>
                    <div className='mr-4'>
                        <DoneIcon sx={{width:"1.5rem",height:"1.5rem",borderRadius:"100%",backgroundColor:"#1199fa",color:"#f4f4f4"}} />
                    </div>
                    <p className='text-sm lg:text-base font-normal text-[#D1D0D1]'>The industry’s most comprehensive  <span className='text-[#1199fa]'>rinsurance coverage</span> and  <span className='text-[#1199fa]'>verified proof of reserves</span></p>
                  </div>
                  {/* <button className='bg-[#1199fa] text-white py-3 px-4 rounded-lg' onClick={()=>{headerVideoRef.current.play()}}>play video</button>
                  <button className='ml-5 bg-[#1199fa] text-white py-3 px-4 rounded-lg' onClick={()=>{headerVideoRef.current.play()}}>pause video</button> */}
                </div>

                <Link href="#" className='hidden md:inline-block mb-16 bg-transparent border-[1px] border-[#f4f4f4] text-base sm:text-lg text-white font-semibold capitalize  px-6 py-3 rounded-[40px]'>
                  Download App <QrSvg />
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-5 w-full header_mobile_img_container'>
            <div className='w-full flex justify-center items-center'>
                <Image 
                src="/assets/images/mobile_header.webp"
                width={470}
                height={960}
                alt="mobile pic"
                />
            </div>
          </div>
        </section>
    </>
  )
}

export default Header