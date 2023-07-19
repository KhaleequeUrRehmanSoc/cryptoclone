import Link from 'next/link'
import React from 'react'
import GraphSvg from './icons/GraphSvg'

const BuyCryptoListItem = () => {
  return (
    <>
        <div className="my-1 mt-16 mx-auto w-full md:w-11/12 lg:w-5/6 flex items-center justify-between text-white">
          <div className="py-4 border-b border-b-[#f4f4f44d] w-full flex justify-between items-center">
            <div className="flex items-center">
              <Link href="#" className="no-underline">
                <h5 className="text-2xl font-semibold text-[#d1d0d1] mr-2">Bitcoin</h5>
              </Link>
              <h6 className="text-xl font-normal text-[#7d7d7d] mr-2">BTC</h6>
            </div>
            <div className="min-w-[280px] flex justify-between items-center">
              <h5 className="text-[2rem] font-semibold text-[#f4f4f4] mr-4">$30,085.55</h5>
              <h6 className="text-base font-semibold text-[#e64b60]">-0.90%</h6>
            </div>
            <p className="text-base font-semibold text-[#f4f4f4]">$584,641,476,536.65</p>
            <div>
              <GraphSvg />
            </div>
            <div>
              <Link
                href="#"
                className="inline-block bg-[#f4f4f4] text-[#0e213b] border-[1px] border-transparent text-lg font-semibold capitalize  px-6 py-3 rounded-[40px]"
              >
                Trade
              </Link> 
            </div>
          </div>
        </div>
    </>
  )
}

export default BuyCryptoListItem