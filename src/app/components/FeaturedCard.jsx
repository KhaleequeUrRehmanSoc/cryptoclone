import React from 'react'
import Image from 'next/image'

const FeaturedCard = ({title, src, number}) => {

  return (
    <>
        {/* <div className={`featured_card featured_card${number} w-[360px] h-[360px]`}> */}
        <div className={`featured_card featured_card${number} w-full h-full`}>
            <div className='featured_card_bg'>
                <div className='featured_card_content'></div>
                <div className='featured_card_main_content'>
                    <Image 
                    className='rounded-[50%] text-center'
                    src={src && src}
                    width={34}
                    height={34}
                    alt='image'
                    />
                    <p className='text-base font-semibold text-white ml-2.5'>{title && title}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeaturedCard