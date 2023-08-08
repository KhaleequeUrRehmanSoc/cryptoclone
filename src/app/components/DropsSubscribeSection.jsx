import React from 'react'
import SearchInputFieldWithBtn from './SearchInputFieldWithBtn'

const DropsSubscribeSection = () => {
  return (
    <>
    <div className='nftMarketPlaceBg w-full min-h-[380px] flex justify-center items-center'>
        <div className='w-full p-4 sm:p-0 md:w-3/4 lg:w-2/4 mx-auto text-center'>
            <h1 className='mb-4  text-3xl sm:text-[3.125rem] text-white font-semibold'>Never miss a drop</h1>
            <h4 className='mb-6 text-xl sm:text-[1.8125rem] text-white font-normal'>Subscribe for the latest news, drops & collectibles</h4>
            <div className='my-1'>
                <SearchInputFieldWithBtn />
            </div>
            <div className='text-white text-sm m-4'>
                After reading the <span className='text-[#1199fa]'>Privacy Notice</span>
                , you may subscribe for our newsletter to get special offers and occasional surveys delivered to your inbox. Unsubscribe at any time by clicking on the link in the email.
            </div>
            <div className='my-4 flex justify-center gap-2'>
                <input id="default-checkbox" type="checkbox" value="" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <span>By entering my email and subscribing I confirm and agree to the above.</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default DropsSubscribeSection