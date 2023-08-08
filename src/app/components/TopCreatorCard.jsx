import Image from 'next/image'
import React from 'react'
import BlueTickSvg from './icons/BlueTickSvg'

const TopCreatorCard = ({imgSrc,title,price}) => {
  return (
    <>
    <div className='p-2.5 min-h-[15.875rem] flex flex-col justify-center items-center'>
        <Image 
        src={imgSrc && imgSrc}
        className='rounded-[50%]'
        width={154}
        height={154}
        alt='brand image'
        />
        <div className='mt-4 flex justify-center items-center'>
            <BlueTickSvg />
            <p className='ml-2'>{title && title}</p>
        </div>
        <div className='mt-2 flex justify-center items-center'>
            <div className='bg-[#1199fa] w-4 h-4 rounded-[50%] text-xs text-black font-semibold'>i</div>
            <p className='ml-2 text-base font-normal text-[#1199fa]'>{price && price}</p>
        </div>
    </div>
    </>
  )
}

export default TopCreatorCard