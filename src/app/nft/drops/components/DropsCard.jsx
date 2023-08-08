import CustomMediaCard from '@/app/components/CustomMediaCard'
import Image from 'next/image'
import React from 'react'

const LiveIconSvg = () => {
    return (
        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"  className='p-0 w-[1.5rem] h-[1.5rem]'><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9864 4.02629C19.3955 3.5587 20.1062 3.51131 20.5738 3.92046C22.8164 5.88272 24.2913 8.94063 24.2913 12.2671C24.2913 15.5887 22.9035 18.5636 20.5762 20.6117C20.1098 21.0221 19.3989 20.9767 18.9885 20.5103C18.578 20.0439 18.6234 19.333 19.0898 18.9226C20.9292 17.3039 22.0413 14.9455 22.0413 12.2671C22.0413 9.59358 20.8496 7.15149 19.0922 5.61375C18.6246 5.20461 18.5772 4.49388 18.9864 4.02629ZM15.9037 7.27379C16.3602 6.85237 17.072 6.88083 17.4934 7.33738C18.6652 8.60686 19.4584 10.3728 19.4584 12.2671C19.4584 14.1245 18.7732 15.9184 17.4622 17.2293C17.0229 17.6686 16.3106 17.6686 15.8713 17.2293C15.4319 16.7899 15.4319 16.0776 15.8713 15.6383C16.727 14.7825 17.2084 13.5764 17.2084 12.2671C17.2084 10.9948 16.6683 9.7607 15.8401 8.86351C15.4187 8.40697 15.4471 7.69522 15.9037 7.27379ZM5.90955 5.61166C6.37598 5.2012 6.42136 4.49033 6.01089 4.0239C5.60043 3.55747 4.88957 3.51209 4.42313 3.92255C2.09582 5.97059 0.708008 8.94551 0.708008 12.2671C0.708008 15.5936 2.18294 18.6515 4.42552 20.6138C4.89312 21.0229 5.60385 20.9755 6.01299 20.5079C6.42213 20.0403 6.37475 19.3296 5.90716 18.9205C4.14974 17.3827 2.95801 14.9406 2.95801 12.2671C2.95801 9.5887 4.0702 7.23029 5.90955 5.61166ZM9.12915 7.30495C9.56849 7.74429 9.56849 8.4566 9.12915 8.89594C8.27341 9.75169 7.79199 10.9578 7.79199 12.2671C7.79199 13.5395 8.33214 14.7735 9.16031 15.6707C9.58174 16.1273 9.55327 16.839 9.09672 17.2604C8.64018 17.6819 7.92843 17.6534 7.507 17.1968C6.33518 15.9274 5.54199 14.1614 5.54199 12.2671C5.54199 10.4098 6.22724 8.61588 7.53816 7.30495C7.9775 6.86561 8.68981 6.86561 9.12915 7.30495ZM12.5 14.5171C13.7426 14.5171 14.75 13.5097 14.75 12.2671C14.75 11.0245 13.7426 10.0171 12.5 10.0171C11.2574 10.0171 10.25 11.0245 10.25 12.2671C10.25 13.5097 11.2574 14.5171 12.5 14.5171Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0.5 0.26709)"></rect></clipPath></defs></svg>
    )
}

const DropsCard = ({hasUpcommingBtn=false,hasAccessInfoBtn=false,hasLiveBtn=false,cardImgSrc,ownerImgSrc,title,ownerName}) => {

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
       <div>
            {/* <div className="relative w-[22.3125rem] h-[22.3125rem] rounded-[.9375rem] mx-auto"> */}
            <div className="relative w-full  max-w-[22.3125rem] h-[22.3125rem] rounded-[.9375rem] mx-auto">
                <Image
                className="object-cover rounded-[.9375rem]"
                src={cardImgSrc && cardImgSrc}
                fill
                alt="image"
                />
                <div className='absolute top-0 left-0 m-4 flex flex-col justify-center items-start'>
                    {
                        hasUpcommingBtn && (
                            <div className='mb-2'>
                                <button className='rounded-[1.875rem] min-w-[8rem] py-2 px-4 text-base border-0 outline-0 font-bold bg-white text-black text-center'>
                                    Wed, Aug 09
                                </button>
                            </div>
                        )
                    }

                    {                   
                        hasAccessInfoBtn && (
                            <button className='rounded-[1.875rem] py-2 px-3 border-0 outline-0 font-semibold bg-[#e3e3e3] text-xs text-black text-center'>
                                EARLY ACCESS
                            </button>
                        )
                    }

                    {
                         hasLiveBtn && (
                            <button className='outline-0 border-0 mni-[8rem] rounded-[1.875rem] bgBlueGradient text-white text-center py-2 px-4 text-base font-bold flex justify-center items-center gap-2 '>
                                <LiveIconSvg />
                                LIVE NOW
                            </button>
                        )
                    }

                </div>
            </div>
            <div className='mt-4 mb-2'>
                <h2 className='text-base md:text-[1.25rem] font-bold overflow-hidden text-ellipsis whitespace-normal'>{title && title}</h2>
            </div>
            <CustomMediaCard
            imgSrc={ownerImgSrc && ownerImgSrc}
            // description="Tony Lopez MEDIA"
            description={ownerName}
            hasBlueTick={true}
            size="small"
            />
       </div>
    </div>
    </>
  )
}

export default DropsCard