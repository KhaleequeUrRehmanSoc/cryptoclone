"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import RightArrowSvg from './icons/RightArrowSvg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisaCard = () => {

  const visaCardVideoRef = useRef(null)

  useEffect(() => {
      console.log('visaCardVideoRef ',visaCardVideoRef)
  }, [])
  

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className='w-full relative'>
        <div>
            <video title="7 different coloured Crypto.com visa cards cascade on the screen"  className="visa_card_video" autoPlay muted loop playsInline ><source src="/assets/videos/visa_card_video.mp4" type="video/mp4" ref={visaCardVideoRef} />Sorry, your browser doesn't support embedded videos.</video>
        </div>
        <div className='visa_card_content_container w-full sm:w-11/12 md:w-3/4 lg:w-[70%] px-6 sm:px-0 text-center '>
          <h2 data-aos="fade-up" className='my-1 text-base md:text-lg  font-semibold text-[#1199fa]'>CRYPTO.COM VISA CARD</h2>
          <h1 data-aos="fade-up" className='my-3 mb-8 text-[2rem] md:text-5xl font-semibold text-white'>The only card you need</h1>
          <h5 data-aos="fade-up" className='my-3 mb-8 text-sm font-normal text-[#C9CFDD]'>Enjoy up to 5% back on all spending with your sleek, pure metal card. <br /> No annual fees. Top-up with fiat or crypto.</h5>
          <Link data-aos="fade-up" href="#" className='inline-block mb-16 bg-[#f4f4f4] hover:bg-transparent text-[#0e213b] hover:text-white border-[1px] border-transparent hover:border-[#1199fa] text-base sm:text-lg font-semibold capitalize  px-6 py-3 rounded-[40px]'>
            Choose Your Card <RightArrowSvg /> 
          </Link>
        </div>
      </section>
    </>
  )
}

export default VisaCard












  {/* <video className="visa_card_video_container" autoplay loop>
              <source src="/assets/images/visa_card_video.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video> */}