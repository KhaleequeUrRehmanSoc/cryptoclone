import Image from 'next/image'
import React from 'react'

const BrandCard = ({imgSrc,title}) => {
  return (
    <>
    <div className='p-2.5 flex flex-col justify-center items-center'>
        <Image 
        src={imgSrc && imgSrc}
        className='rounded-[50%]'
        width={154}
        height={154}
        alt='brand image'
        />
        <div className='mt-4 flex justify-center items-center'>
            <p className='ml-2'>{title && title}</p>
        </div>
    </div>
    </>
  )
}

export default BrandCard