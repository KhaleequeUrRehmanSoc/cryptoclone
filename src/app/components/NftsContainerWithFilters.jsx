import React from 'react'
import NftsFilterBar from './NftsFilterBar'
import { useState } from 'react'

const NftsContainerWithFilters = ({children}) => {

    const [toggleFilters, setToggleFilters] = useState(true)

    const listTypeCheckboxDatArr = [
        {
            title:"Listing Type",
            list:["Buy Now","Auction",]
        },
        {
            title:"Curation",
            list:["Buy Now","Auction",]
        },
        {
            title:"Price",
        },
        {
            title:"Collections",
        },
        {
            title:"Chains",
        },
        {
            title:"Categories",
        },
    ]

  return (
    <>
    <div className="w-full flex ">
        {
        toggleFilters && (
        <div className='hidden md:block'>
            <div className='max-w-[330px] w-[326px] maxh-[100dvh] overflow-y-auto '>
                <div className='flex items-center justify-center'>
                    <div className='w-full'>
                        <div className='w-full flex justify-between items-center border-b border-b-[#626973] py-2.5 pl-[.75rem] pr-4'>
                            <h1 className='text-lg font-semibold'>Filters</h1>
                            <div>
                                <svg className='white' width={24} height={24} viewBox="0 0 24 24" fill="white"><path d="M5.5 16.75L1.5 12.25L5.5 7.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="9.75" y1="4.25" x2="21.25" y2="4.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /><line x1="9.75" y1="12.25" x2="21.25" y2="12.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /><line x1="9.75" y1="20.25" x2="21.25" y2="20.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </div>
                        </div>
                        {
                        Array.isArray(listTypeCheckboxDatArr) && listTypeCheckboxDatArr.length>0 && listTypeCheckboxDatArr?.map((item,i)=> (
                            <>
                            <div className="w-full border-b border-b-[#626973]">
                                <div className='w-full flex justify-between items-center'>
                                    <h1 className='text-lg font-medium py-2.5 pl-[.75rem] pr-4'>{item?.title && item?.title}</h1>
                                    <svg width={10} height={8} viewBox="0 0 10 7" className="styles_filterArrow__WSQxx css-109ml0w" data-test-id="undefined-filter-arrow" fill="none"><path d="M9 5.33301L5 1.33301L1 5.33301" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                                {
                                Array.isArray(item?.list) && item?.list?.length>0 && item?.list?.map((listItem,i)=> (
                                    <div className='w-full flex items-center py-2.5 pl-[.75rem] pr-4' key={i}>
                                        <input type="checkbox" className='mr-2.5' />
                                        <p className='text-sm sm:text-base font-medium'>{listItem && listItem}</p>
                                    </div>
                                ))
                                }
                            </div>    
                            </>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
        )
        }
        <div className='pl-6 flex-grow '>
            <div>  
                <NftsFilterBar filterBtnOnClickHandler={()=> {setToggleFilters(!toggleFilters)}} />
            </div>
            <div className='w-full p-3'>
                {children && children}
            </div>
            {/* <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                <h1 className='text-black text-base font-semibold'>TabPanel</h1>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default NftsContainerWithFilters