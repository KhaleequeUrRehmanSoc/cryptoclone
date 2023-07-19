import React from 'react'
import CustomAccordion from './CustomAccordion'

const Faq = () => {
  
  return (
    <>
        <div className='w-full bg-[#0b1426] text-white p-6 lg:p-8 xl:p-10'>
          <div className='mx-auto w-full md:w-11/12 lg:w-5/6 block lg:flex lg:justify-between'>
            <h3 className='pt-10 my-2 text-xl md:text-3xl font-semibold'>Frequently Asked Questions</h3>
            <div className='my-2 lg:w-3/5'>
              <CustomAccordion />
              <div className='my-8'>
                <p className='text-base font-semibold'>Have more questions? <a href='mailto:contact@crypto.com' className='text-[#1199fa] '>Contact Us</a> </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Faq