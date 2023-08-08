import React from 'react'
import DownArrowSvg from './icons/DownArrowSvg'
import CutsomBtn from './CutsomBtn'

const buttonsDataArr = [
    {
        title:"Today"
    },
    {
        title:"Last 7 Days"
    },
    {
        title:"Last 30 Days"
    },
]


const FilterBar = () => {
    
  return (
    <>
        <div className='my-5 flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center'>
            <div className='my-3 flex flex-wrap items-center gap-4'>
                <p>Sort By</p>
                <button className='outline-0 border border-[#1199fa] rounded-[1.875rem] bg-transparent text-white text-center py-2 px-4 text-base font-semibold flex justify-center items-center gap-2'>
                    Sales Volume
                    <DownArrowSvg />
                </button>
            </div>
            <div className='my-3 flex flex-wrap items-center gap-2 sm:gap-3'>
                {
                    Array.isArray(buttonsDataArr) && buttonsDataArr.length>0 && buttonsDataArr.map((item,i)=>(
                        item?.title === "Today" ?
                        <>
                            <CutsomBtn variant="primary" key={i}>
                                {item && item?.title}
                            </CutsomBtn>
                        </>
                        :
                        <>
                            <CutsomBtn key={i}>
                                {item && item?.title}
                            </CutsomBtn>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default FilterBar