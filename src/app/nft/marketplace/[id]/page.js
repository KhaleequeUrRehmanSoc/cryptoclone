"use client"

import CustomizedAccordion from '@/app/components/CustomizedAccordion'
import Footer from '@/app/components/nftMarketPlace/Footer'
import Navbar from '@/app/components/nftMarketPlace/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconWithName from '@/app/components/IconWithName';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CustomizedTabs from '@/app/components/CustomizedTabs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CustomMediaCard from '@/app/components/CustomMediaCard'

const ShareSvg = () => {
    return (
        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" data-test-id="listing-share-logo"><path d="M15.06 6.68C15.06 6.54188 15.0031 6.41187 14.9056 6.31438L10.7456 2.15437C10.6481 2.05688 10.5181 2 10.38 2C10.0956 2 9.86 2.23562 9.86 2.52V4.6H8.04C5.375 4.6 2.06 5.07125 0.930625 7.87437C0.589375 8.73562 0.5 9.67 0.5 10.58C0.5 11.7175 1.06875 13.2044 1.53188 14.2444C1.62125 14.4313 1.71062 14.6913 1.8325 14.8619C1.88937 14.9431 1.94625 15 2.06 15C2.2225 15 2.32 14.87 2.32 14.7156C2.32 14.5856 2.2875 14.4394 2.27937 14.3094C2.255 13.9763 2.23875 13.6431 2.23875 13.31C2.23875 9.43438 4.53812 8.76 8.04 8.76H9.86V10.84C9.86 11.1244 10.0956 11.36 10.38 11.36C10.5181 11.36 10.6481 11.3031 10.7456 11.2056L14.9056 7.04563C15.0031 6.94813 15.06 6.81813 15.06 6.68Z" fill="black" /></svg>

    )
}

const MoreSvg = () => {
    return (
        <svg width={20} height={20} viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={10} cy={2} r={2} fill="black" /><circle cx={18} cy={2} r={2} fill="black" /><circle cx={2} cy={2} r={2} fill="black" /></svg>
    )
}

const CopyToClipboardSvg = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" data-test-id="undefined-copy-button"><path fillRule="evenodd" clipRule="evenodd" d="M6.74989 6.75H5.90771C4.80315 6.75 3.90771 7.64543 3.90771 8.75V19.75C3.90771 20.8546 4.80315 21.75 5.90772 21.75H13.7498C14.8544 21.75 15.7498 20.8546 15.7498 19.75V18.7501H7.74989C7.19761 18.7501 6.74989 18.3024 6.74989 17.7501V6.75Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M13.5315 3.03711C13.5109 3.11701 13.5 3.20078 13.5 3.28711V8.03711C13.5 8.58939 13.9477 9.03711 14.5 9.03711H19.25C19.3363 9.03711 19.4201 9.02617 19.5 9.0056V15.2871C19.5 16.3917 18.6046 17.2871 17.5 17.2871H10.25C9.14543 17.2871 8.25 16.3917 8.25 15.2871V5.03711C8.25 3.93254 9.14543 3.03711 10.25 3.03711H13.5315Z" fill="black" /><path d="M15 6.90841C15 7.4607 15.4477 7.90841 16 7.90841H18.5534C19.4443 7.90841 19.8905 6.83127 19.2605 6.20131L16.7071 3.64792C16.0771 3.01796 15 3.46413 15 4.35503V6.90841Z" fill="black" /></svg>
    )
}

const BtnOutlineSvg = () => {
    return (
        <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14506 8.10976L8.70492 6.61621H5.30762L5.8798 8.10976L5.70492 9.78522H7.00011L8.30762 9.77877L8.14506 8.10976Z" fill="white" /><path d="M10.2595 7.11621L8.72312 8.11621V9.89379L7.54883 11.02V11.5499L8.68087 12.5927H9.62629L12.0124 8.43546L10.2595 7.11621Z" fill="white" /><path d="M9.61481 3.53711H4.36833L3.75977 6.21199H10.2474L9.61481 3.53711Z" fill="white" /><path d="M5.30166 8.11619L3.74708 7.12793L1.98828 8.43544L4.38558 12.6045H5.34392L6.47596 11.5499V11.0199L5.30166 9.89377V8.11619Z" fill="white" /><path d="M7.00016 0.299805L0.333496 4.1484V11.8468L7.00016 15.6959L13.6668 11.8468V4.1484L7.00016 0.299805ZM4.36812 3.53689H9.6146L10.2472 6.21178H3.75955L4.36812 3.53689ZM6.4761 11.5498L5.34406 12.6044H4.38631L1.98843 8.43537L3.74723 7.12786L5.30122 8.11553V9.89311L6.47552 11.0199V11.5498H6.4761ZM5.70498 9.78455L5.87986 8.10966L5.30767 6.61553H8.70497L8.14512 8.10966L8.30768 9.77868L7.00075 9.78455H5.70556H5.70498ZM9.62634 12.5921H8.68091L7.54887 11.5498V11.0199L8.72317 9.89311V8.11553L10.2596 7.11553L12.0125 8.43478L9.62634 12.5921V12.5921Z" fill="#003688" /><path d="M7 0.299805V3.53689H9.61444L10.2471 6.21178H7V6.61553H8.70481L8.14495 8.10966L8.30751 9.77868L7.00059 9.78455V15.6959L13.6673 11.8468V4.1484L7 0.299805ZM9.62617 12.5926H8.68075L7.54871 11.5504V11.0205L8.72301 9.8937V8.11612L10.2594 7.11612L12.0123 8.43537L9.62617 12.5926V12.5926Z" fill="url(#paint0_linear_2891_48366)" /><path d="M5.70498 9.78513L5.87986 8.11025L5.30767 6.61612H7.00016V6.21236H3.75955L4.36812 3.53748H7.00016V0.299805L0.333496 4.1484V11.8468L7.00016 15.6959V9.78455H5.70498V9.78513ZM6.4761 11.5504L5.34406 12.605H4.38631L1.98843 8.43537L3.74723 7.12786L5.30122 8.11553V9.89311L6.47552 11.0199V11.5498L6.4761 11.5504Z" fill="url(#paint1_linear_2891_48366)" /><defs><linearGradient id="paint0_linear_2891_48366" x1="10.3333" y1="15.6959" x2="10.3333" y2="0.371402" gradientUnits="userSpaceOnUse"><stop stopColor="#111C4E" /><stop offset={1} stopColor="#111C4E" stopOpacity={0} /></linearGradient><linearGradient id="paint1_linear_2891_48366" x1="3.66683" y1="0.319758" x2="3.66683" y2="14.2176" gradientUnits="userSpaceOnUse"><stop stopColor="#111C4E" /><stop offset={1} stopColor="#111C4E" stopOpacity={0} /></linearGradient></defs></svg>

    )
}

const BellSvg = () => {
    return (
        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9357 5.51327C12.9415 5.44976 12.9445 5.38528 12.9445 5.32C12.9445 4.31484 12.2412 3.5 11.3736 3.5C10.5061 3.5 9.80281 4.31484 9.80281 5.32C9.80281 5.38539 9.80579 5.44998 9.81159 5.5136C7.05571 6.21025 5.01621 8.70683 5.01621 11.6791V15.4001C5.01621 16.6282 4.21669 17.8564 3.78662 18.4282C3.62073 18.6487 3.51349 18.9106 3.50121 19.1863C3.47079 19.8695 4.01649 20.4401 4.70039 20.4401H12.4833C12.1083 19.5948 11.9 18.6592 11.9 17.6749C11.9 14.2579 14.411 11.4274 17.6885 10.9281C17.3784 8.2927 15.4566 6.14996 12.9357 5.51327ZM13.2645 21.7699C13.3976 21.9472 13.5392 22.1177 13.6886 22.281C13.4821 23.5445 12.5242 24.4999 11.3736 24.4999C10.0723 24.4999 9.01739 23.2776 9.01739 21.7699H13.2645Z" fill="#0B1426" /><path fillRule="evenodd" clipRule="evenodd" d="M18.7252 23.4498C21.9146 23.4498 24.5001 20.8643 24.5001 17.6749C24.5001 14.4854 21.9146 11.8999 18.7252 11.8999C15.5357 11.8999 12.9502 14.4854 12.9502 17.6749C12.9502 20.8643 15.5357 23.4498 18.7252 23.4498ZM18.7263 14.1306C19.2786 14.1306 19.7263 14.5783 19.7263 15.1306V16.6743H21.272C21.8243 16.6743 22.272 17.122 22.272 17.6743C22.272 18.2266 21.8243 18.6743 21.272 18.6743H19.7263V20.2179C19.7263 20.7702 19.2786 21.2179 18.7263 21.2179C18.174 21.2179 17.7263 20.7702 17.7263 20.2179V18.6743H16.1813C15.629 18.6743 15.1813 18.2266 15.1813 17.6743C15.1813 17.122 15.629 16.6743 16.1813 16.6743H17.7263V15.1306C17.7263 14.5783 18.174 14.1306 18.7263 14.1306Z" fill="#1199FA" /></svg>
    )
}

const LeftArrowSvg = () => {
    return (
        <svg width={5} height={10} fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l5 5V0L0 5z" fill="#1199fa" /><defs><linearGradient id="prefix__paint0_linear_10508:222254" x1="{0}" y1="{5}" x2="{5}" y2="{5}" gradientUnits="userSpaceOnUse"><stop stopcolor="#1199FA" /><stop offset="{1}" stopcolor="#11D0FA" /></linearGradient></defs></svg>
    )
}

const NftDetail = () => {

    const router = useRouter()

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const socialIconsArr = [
        {
            title:'0',
            icon:<FavoriteBorderOutlinedIcon />
        },
        {
            title:'30',
            icon:<RemoveRedEyeIcon />
        },
        {
            title:'share',
            icon:<ShareSvg />
        },
    ]


    const tabsDataArr = [
        {tabLabel:"Ownership",tabPanel:"Item One"},
        {tabLabel:"History",tabPanel:"Item Two"},
        {tabLabel:"Offers",tabPanel:"Item Three"},
    ]

  return (
    <>
        <section className='w-full min-h-screen'>
            <div className='w-full'>
                <Navbar />
            </div>
            <section className='w-full min-h-screen bg-white flex justify-center'>
                <div className='w-full h-full pt-16 pb-6'>

                    <div className='mx-auto mb-6 w-full sm:w-5/6 p-5 sm:p-5'>
                        <div className='w-full grid grid-cols-12 gap-6'> 
                            <div className='col-span-12 lg:col-span-5'>
                                <div className="relative w-full h-[24.1875rem] rounded-[.9375rem] mx-auto">
                                    <Image
                                    className="object-cover rounded-[.9375rem]"
                                    src="/assets/images/nft_detail_pic.png"
                                    fill
                                    alt="image"
                                    />
                                </div>
                                <div className='mt-6'>
                                    <CustomizedAccordion className="border border-[#e3e3e3] p-4" title="Properties">
                                        lorem ipsum doler lorem ipsum doler lorem ipsum doler lorem ipsum doler
                                    </CustomizedAccordion>
                                    {
                                        ["View Crypto.org Chain details","View Cronoscan details"].map((item,i)=>(
                                            <>
                                                <div className='mt-4 py-8 px-4 border border-[#e3e3e3] text-base font-semibold text-black flex justify-between items-center'>
                                                    {item && item}
                                                    <svg width="16.5" height="16.5" viewBox="0 0 16.5 16.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 0V1.5H13.9219L4.71094 10.7109L5.78906 11.7891L15 2.57812V6.75H16.5V0H9.75ZM0 3V16.5H13.5V6.75L12 8.25V15H1.5V4.5H8.25L9.75 3H0Z" fill="#0B1426" /></svg>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='h-full col-span-12 lg:col-span-7'>
                                <div className='w-full mx-auto'>
                                        <div className='mb-6 text-base font-normal text-[#1199fa] flex items-center gap-1' onClick={()=> { router.back() } }>
                                            <LeftArrowSvg />
                                            Back
                                        </div>

                                    <div className='mb-6 flex flex-wrap justify-between items-center'>
                                        <div className='my-3 sm:my-0 flex items-center'>
                                            {
                                                Array.isArray(socialIconsArr) && socialIconsArr.length>0 && socialIconsArr.map((item,i)=>(
                                                    <IconWithName className="mr-4" title={item?.title} key={i}>
                                                        {item?.icon}
                                                    </IconWithName>
                                                ))
                                            }
                                            
                                        </div>
                                        <div className='my-3 sm:my-0'>
                                            <IconWithName className="mr-4">
                                                <MoreSvg/>
                                            </IconWithName>
                                        </div>
                                    </div>

                                    <div className='mb-6 flex items-center'>
                                        <p className="mr-2 text-base font-normal">Chain:</p>
                                        <p className="mr-2 text-base font-bold">Cronos</p>
                                        <svg width={22} height={19} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" data-test-id="listing-chain-type-CRONOS-logo-cronos-logo"><path fillRule="evenodd" clipRule="evenodd" d="M1.33203 4.16761L1.33323 4.16692V4.16512L7.99723 0.333087V0.335294L8.00121 0.333008L8.00138 0.333108V0.333008L14.6654 4.16761V11.8343L8.00138 15.6663V15.6662L8.00121 15.6663L7.99723 15.664V15.6664L5.15363 14.0301L1.33203 11.8343V4.16761ZM7.99723 13.3918V13.392L8.00121 13.3943L12.6908 10.6983V5.3035L8.00138 2.60755V2.60509L8.00121 2.60499L3.30904 5.30103V10.6966L7.99723 13.3918ZM7.9985 11.5798L11.1111 9.79099L9.81549 9.04309L7.9985 10.0891L6.18152 9.04309V6.95616L7.9985 5.91012L9.81549 6.95616L11.1111 6.21083L7.9985 4.41946L4.8833 6.21083V9.79099L7.9985 11.5798Z" fill="black" /></svg>
                                    </div>

                                    <div className='mb-6 flex flex-wrap items-center gap-4'>
                                        {/* <div className='my-3 flex items-center'>
                                            <div className="relative min-w-[3.75rem] min-h-[3.75rem] rounded-[50%] bg-white pr-2">
                                                <Image
                                                className="object-cover rounded-[50%]"
                                                src="/assets/images/media_card_pic.png"
                                                fill
                                                alt="image"
                                                />
                                                <div className='absolute bottom-0 right-0'>
                                                    <svg width={16} height={16} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
                                                </div>
                                            </div>
                                            <div className='ml-2'>
                                                <p className='text-sm text-[#626973]'>Creator</p>
                                                <div className='text-base font-normal flex items-center'>
                                                    <p>Meta Cyborgs</p>
                                                    <p>-</p>
                                                    <div className='flex items-center gap-2'>
                                                        <p>0x659a...06Fe</p>
                                                        <IconWithName>
                                                            <CopyToClipboardSvg />
                                                        </IconWithName>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                        <CustomMediaCard
                                        imgSrc="/assets/images/media_card_pic.png"
                                        title="Creator"
                                        description="Meta Cyborgs"
                                        walletAddress="0x659a...06Fe"
                                        hasBlueTick={true}
                                        hasSeparator={true}
                                        hasCopyToClipboardIcon={true}
                                        />

                                        {/* <div className='my-3 flex items-center'>
                                            <div className="relative min-w-[3.75rem] min-h-[3.75rem] rounded-[50%] bg-white pr-2">
                                                <Image
                                                className="object-cover rounded-[50%]"
                                                src="/assets/images/media_card_pic.png"
                                                fill
                                                alt="image"
                                                />
                                                <div className='absolute bottom-0 right-0'>
                                                    <svg width={16} height={16} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
                                                </div>
                                            </div>
                                            <div className='ml-2'>
                                                <p className='text-sm text-[#626973]'>Collection</p>
                                                <div className='text-base font-normal flex items-center'>
                                                    <p>Meta Cyborgs</p>
                                                </div>
                                            </div>
                                        </div> */}

                                        <CustomMediaCard
                                        imgSrc="/assets/images/media_card_pic.png"
                                        title="Collection"
                                        description="Meta Cyborgs"
                                        hasBlueTick={true}
                                        />
                                    </div>

                                    <div>
                                        <button className='border border-[#1199fa] rounded-lg bg-white text-xs font-normal text-[#1199fa] flex justify-center items-center gap-1 whitespace-nowrap py-1.5 px-2'><BtnOutlineSvg /> 5,943</button>
                                    </div>

                                    <div className='mt-6 mb-2 flex flex-wrap'>
                                        <p className='my-2 sm:my-0 text-[1.8125rem] font-bold mr-2'>The Meta Cyborgs #9281</p>
                                        <div className='my-2 sm:my-0 border border-[#949ba4] rounded-[1.875rem] text-xs font-normal text-[#949ba4] flex justify-center items-center py-1.5 px-2'>Marketplace</div>
                                    </div>

                                    <div className='mb-2 flex flex-wrap justify-between'>
                                        <p className='my-2 sm:my-0 text-[1.8125rem] font-semibold mr-2'>$31</p>
                                        <IconWithName>
                                            <BellSvg />
                                        </IconWithName>
                                    </div>

                                    <p className='my-4'>The first CyborgSwap NFT collection</p>

                                    <div className='my-4 flex items-center gap-[.625rem]'>
                                        <span className='py-2.5 px-[.3125rem] border border-[#1199fa] rounded text-[#1199fa] capitalize'>PFP</span>
                                        <span className='py-2.5 px-[.3125rem] border border-[#1199fa] rounded text-[#1199fa] capitalize'>Art</span>
                                        <span className='py-2.5 px-[.3125rem] border border-[#1199fa] rounded text-[#1199fa] capitalize'>Cross Chain</span>
                                    </div>

                                    <div className='my-5 w-full'>
                                        <CustomizedTabs 
                                        tabs={tabsDataArr}
                                        value={value}
                                        onChange={handleChange}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full p-4 lg:flex lg:justify-between lg:items-center">
                            <div className="hidden my-2 lg:flex lg:items-center lg:gap-3">
                                <div className="relative w-[4.375rem] h-[4.375rem] mx-auto">
                                    <Image
                                    className="object-cover "
                                    src="/assets/images/nft_detail_pic-small.png"
                                    fill
                                    alt="image"
                                    />
                                </div>
                                <h2 className='text-[1.8125rem] font-bold text-ellipsis'>The Meta Cyborgs #9281</h2>
                            </div>
                            <div className="my-2 flex flex-col gap-3">
                                <div className='w-full lg:w-auto flex flex-wrap items-center gap-4'>
                                    <Link href="#" className='min-w-[8rem] w-full sm:w-[48%] lg:w-auto no-underline inline-block border border-[#1199fa] rounded-[.25rem] bg-transparent text-[#1199fa] text-center py-2 px-6 text-base font-semibold'>Add to Cart</Link>
                                    <Link href="#" className='min-w-[8rem] w-full sm:w-[48%] lg:w-auto no-underline inline-block navbarBtnbg text-white rounded-[.25rem] font-semibold text-center py-2 px-6 outline-0'>Buy Now</Link>
                                </div>
                                <div className='hidden lg:block text-center'>
                                    <h5 className='text-xs text-[#626973] font-normal'>You can also  <span className='text-[#1199fa]'>make an offer</span>  on this NFT</h5>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-4 text-center'>
                            <span className='text-xs font-normal text-[#626973]'>A 6% royalty goes to the creator for future resale</span>
                        </div>
                    </div>

                </div>
            </section> 
            <div className='w-full'>
                <Footer />
            </div>
        </section>
    </>
  )
}

export default NftDetail