import Link from 'next/link'
import React from 'react'
import RightArrowSvg from './icons/RightArrowSvg'

const VisaCard = () => {

  return (
    <>
      <section className='w-full relative'>
        <div>
            <video title="7 different coloured Crypto.com visa cards cascade on the screen"  className="visa_card_video" ><source src="/assets/videos/visa_card_video.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos.</video>
        </div>
        <div className='visa_card_content_container text-center'>
          <h2 className='my-1 text-base md:text-lg  font-semibold text-[#1199fa]'>CRYPTO.COM VISA CARD</h2>
          <h1 className='my-3 mb-8 text-[2rem] md:text-5xl font-semibold text-white'>The only card you need</h1>
          <h5 className='my-3 mb-8 text-sm font-normal text-[#C9CFDD]'>Enjoy up to 5% back on all spending with your sleek, pure metal card. <br /> No annual fees. Top-up with fiat or crypto.</h5>
          <Link href="#" className='inline-block mb-16 bg-[#f4f4f4] text-[#0e213b] border-[1px] border-transparent text-lg font-semibold capitalize  px-6 py-3 rounded-[40px]'>
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