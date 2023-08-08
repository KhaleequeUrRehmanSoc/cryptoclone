import Image from 'next/image'
import React from 'react'
// import BlueTickSvg from './icons/BlueTickSvg'

const CollectionCard = () => {
  
  return (
    <>
     <div className='border-b border-b-[#1b2332] py-5 flex flex-wrap items-center min-h-[7.125rem]'>
        <div className='mr-4'>1</div>
        <div className="relative min-w-[3.75rem] min-h-[3.75rem] rounded-[50%] bg-white">
          <Image
            className="object-cover rounded-[50%]"
            src="/assets/images/top_collections/collection_card_pic1.png"
            fill
            alt="image"
          />
          <div className='absolute bottom-0 right-0'>
            <svg width={16} height={16} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
          </div>
        </div>
        <div className='min-w-[16.625rem] ml-2'>
          <p className='text-lg font-semibold text-white mb-1 text-left'>Mutant Ape Yacht Club</p>
          <div className="flex justify-between gap-4 items-center flex-wrap">
            <div className="my-1 flex-grow">
              <div className="">
                  <div className="w-full flex justify-between items-center">
                    <h6 className="text-sm font-bold">
                      Floor:
                    </h6>
                    <h6 className="text-sm font-semibold">$10.8K</h6>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <h6 className="text-sm font-medium text-[#949ba4]">
                      Volume:
                    </h6>
                    <h6 className="text-sm font-normal text-[#949ba4]">
                        $1.8M
                    </h6>
                  </div>
              </div>
            </div>
            <div className="my-1 flex flex-col justify-center items-center">
              <span className='bg-[#00a68c] px-2.5 text-white text-center rounded text-sm font-semibold'>+2.59%</span>
              <span className='text-[#d9475a] px-2.5 text-center rounded text-sm font-normal'>-3.24%</span>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default CollectionCard