import Image from 'next/image'
import React from 'react'


const BlueTickSvg = () => {
  return (
      <svg width={16} height={16} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
  )
}

const TopCollectionCard = ({title, src, number}) => {
  return (
    <>
        <div className={`top_collection_card top_collection_card${number} w-full h-full`}>
            <div className='featured_card_bg'>
                <div className='top_collection_card_content  items-center'>
                  <Image 
                  className='rounded-[50%] text-center'
                  src={src && src}
                  width={31}
                  height={31}
                  alt='image'
                  />
                  <div className='flex-grow flex justify-between items-center'>
                    <div className='mx-3 text-sm font-semibold text-white overflow-hidden break-all text-ellipsis whitespace-normal'>{title && title}</div>
                    <div className=''>
                      <BlueTickSvg />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopCollectionCard