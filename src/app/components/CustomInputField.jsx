import React from 'react'


const HidePasswordSvg = () => {
    return (
    <svg width={22} height={17} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-test-id="undefined-eye-outline-barred"><path fillRule="evenodd" clipRule="evenodd" d="M2.98806 22.6474C2.54636 23.1009 1.81131 23.1194 1.34629 22.6886C0.88127 22.2578 0.862365 21.541 1.30407 21.0875L4.25587 18.0567C1.53332 16.2079 0 13.5596 0 11.75C0 7.87883 5.39998 2.52349 12 2.52349C14.3685 2.52349 16.3936 3.12717 17.8283 4.12137L21.0119 0.852574C21.4536 0.39906 22.1887 0.380623 22.6537 0.811393C23.1187 1.24216 23.1376 1.95902 22.6959 2.41253L6.95809 18.5712C6.93969 18.5915 6.92062 18.6111 6.90094 18.6299L2.98806 22.6474ZM5.87822 16.391L7.68888 14.5319C7.61735 14.4544 7.55567 14.3659 7.50671 14.2674C7.119 13.4872 6.91129 12.6336 6.89806 11.75C6.89806 8.91127 9.1772 6.57047 12 6.57047C12.9412 6.57047 13.8929 6.84991 14.6988 7.33452L16.2057 5.78736C15.1897 5.17833 13.7436 4.78859 12 4.78859C9.04662 4.78859 6.56478 5.90091 4.67381 7.77625C3.25644 9.18191 2.32258 10.9579 2.32258 11.75C2.32258 12.8616 3.58269 14.9505 5.87822 16.391ZM13.0351 9.04274L9.39383 12.7814C9.28456 12.443 9.22591 12.09 9.22052 11.7333C9.22064 10.1368 10.4876 8.83557 12 8.83557C12.3435 8.83557 12.7008 8.90993 13.0351 9.04274ZM20.1253 6.83204C19.6321 7.23185 19.5646 7.94591 19.9745 8.42694C21.0786 9.7224 21.6774 11.0228 21.6774 11.75C21.6774 12.5421 20.7436 14.3181 19.3262 15.7238C17.4352 17.5991 14.9534 18.7114 12 18.7114C10.9381 18.7114 10.1163 18.6059 9.42638 18.3703C8.82106 18.1636 8.15851 18.4746 7.94655 19.065C7.73458 19.6553 8.05346 20.3014 8.65878 20.5082C9.62827 20.8393 10.6978 20.9765 12 20.9765C18.6 20.9765 24 15.6212 24 11.75C24 10.4229 23.1822 8.64706 21.7607 6.9791C21.3507 6.49807 20.6186 6.43223 20.1253 6.83204ZM14.7805 11.6993C14.8092 11.0745 15.3519 10.5906 15.9926 10.6186C16.6333 10.6466 17.1295 11.1758 17.1008 11.8007C16.977 14.4973 14.7371 16.7971 12.0582 16.9281C11.4176 16.9594 10.8723 16.4784 10.8402 15.8537C10.808 15.229 11.3013 14.6972 11.9418 14.6658C13.401 14.5945 14.7093 13.2512 14.7805 11.6993Z" fill="white" /></svg>
    )
  }


const CustomInputField = ({title,type, ...rest}) => {
  return (
    <>
    <label className='text-sm font-semibold'>{title && title}</label>
    {
        type === "password" ? (
        <>
            <div className='relative'>
                <input type={type && type} className='mt-2.5 w-full px-4 py-[.8125rem] bg-[#1b2332] rounded text-sm sm:text-base text-white border border-[#ffffff1a] focus:outline-none focus:border-[#1199fa]' {...rest}  />
                {/* <div className='absolute top-[1.75rem] right-[1.375rem]'>
                    <HidePasswordSvg />
                </div> */}
            </div>
        </>
        )
        :
        (
        <>
            <input type={type && type} className='mt-2.5 w-full px-4 py-[.8125rem] bg-[#1b2332] rounded text-sm sm:text-base text-white border border-[#ffffff1a] focus:outline-none focus:border-[#1199fa]' {...rest} /> 
        </>
        )


    }
        
    </>
  )
}

export default CustomInputField


































{/* <label className='text-sm font-semibold'>Email Address</label>
<input type="email" className='mt-2.5 w-full px-4 py-[.8125rem] bg-[#1b2332] rounded text-sm sm:text-base text-white border border-[#ffffff1a] focus:outline-none focus:border-[#1199fa]'  placeholder='Enter your email address' required />  */}


// <label className='text-sm font-semibold'>Password</label>
// <div className='relative'>
//   <input type="password" className='mt-2.5 w-full px-4 py-[.8125rem] bg-[#1b2332] rounded text-sm sm:text-base text-white border border-[#ffffff1a] focus:outline-none focus:border-[#1199fa]'  placeholder='Enter your password' required />
//   <div className='absolute top-[1.75rem] right-[1.375rem]'>
//     <HidePasswordSvg />
//   </div>
// </div>