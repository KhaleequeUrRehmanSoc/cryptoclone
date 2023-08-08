import React from 'react'
import IconWithName from './IconWithName'
import Image from 'next/image'

const BlueTickSvg = () => {
    return (
        <svg width={16} height={16} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
    )
}

const CopyToClipboardSvg = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" data-test-id="undefined-copy-button"><path fillRule="evenodd" clipRule="evenodd" d="M6.74989 6.75H5.90771C4.80315 6.75 3.90771 7.64543 3.90771 8.75V19.75C3.90771 20.8546 4.80315 21.75 5.90772 21.75H13.7498C14.8544 21.75 15.7498 20.8546 15.7498 19.75V18.7501H7.74989C7.19761 18.7501 6.74989 18.3024 6.74989 17.7501V6.75Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M13.5315 3.03711C13.5109 3.11701 13.5 3.20078 13.5 3.28711V8.03711C13.5 8.58939 13.9477 9.03711 14.5 9.03711H19.25C19.3363 9.03711 19.4201 9.02617 19.5 9.0056V15.2871C19.5 16.3917 18.6046 17.2871 17.5 17.2871H10.25C9.14543 17.2871 8.25 16.3917 8.25 15.2871V5.03711C8.25 3.93254 9.14543 3.03711 10.25 3.03711H13.5315Z" fill="black" /><path d="M15 6.90841C15 7.4607 15.4477 7.90841 16 7.90841H18.5534C19.4443 7.90841 19.8905 6.83127 19.2605 6.20131L16.7071 3.64792C16.0771 3.01796 15 3.46413 15 4.35503V6.90841Z" fill="black" /></svg>
    )
}

const CustomMediaCard = ({hasBlueTick=false,imgSrc,title,description,walletAddress,hasSeparator=false,hasCopyToClipboardIcon=false,size}) => {   

  return (
    <>
    {
        size === "small"?
        <>
        <div className='my-3 flex items-center'>
            <div className="relative w-[2.125rem] h-[2.125rem] rounded-[50%] bg-white pr-2">
                <Image
                className="object-cover rounded-[50%]"
                src={imgSrc && imgSrc}
                fill
                alt="image"
                />
                {
                    hasBlueTick && (
                    <div className='absolute bottom-0 right-0'>
                        <BlueTickSvg />
                    </div>
                    )
                }
            </div>
            <div className='ml-2'>
                <p className='text-sm sm:text-base font-semibold text-[#626973]'>{title && title}</p>
                <div className='text-base font-normal flex items-center'>
                    <p>{description && description}</p>
                    {
                        hasSeparator && (
                        <p>-</p>
                        )
                    }
                    <div className='flex items-center gap-2'>
                        <p>{walletAddress && walletAddress}</p>
                        {
                            hasCopyToClipboardIcon && (
                                <IconWithName>
                                    <CopyToClipboardSvg />
                                </IconWithName>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
        :
        <>
        <div className='my-3 flex items-center'>
            <div className="relative min-w-[3.75rem] min-h-[3.75rem] rounded-[50%] bg-white pr-2">
                <Image
                className="object-cover rounded-[50%]"
                src={imgSrc && imgSrc}
                fill
                alt="image"
                />
                {
                    hasBlueTick && (
                    <div className='absolute bottom-0 right-0'>
                        <BlueTickSvg />
                    </div>
                    )
                }
            </div>
            <div className='ml-2'>
                <p className='text-sm text-[#626973]'>{title && title}</p>
                <div className='text-base font-normal flex items-center'>
                    <p>{description && description}</p>
                    {
                        hasSeparator && (
                        <p>-</p>
                        )
                    }
                    <div className='flex items-center gap-2'>
                        <p>{walletAddress && walletAddress}</p>
                        {
                            hasCopyToClipboardIcon && (
                                <IconWithName>
                                    <CopyToClipboardSvg />
                                </IconWithName>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    }
       
    </>
  )
}

export default CustomMediaCard