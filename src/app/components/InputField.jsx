// "use client"

import React from 'react'

const InputField = (props) => {
  return (
    <>
        <div className='w-full mb-5'>
            <input className='w-full h-[3.75rem] text-sm text-[#aea8b9] bg-[#14182b] px-[1.875rem]  border-0 border-none outline-0' {...props} />
        </div>
    </>
  )
}

export default InputField