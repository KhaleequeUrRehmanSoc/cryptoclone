"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from '@/app/components/CustomSlider'
import Image from 'next/image';
import Navbar from '@/app/components/nftMarketPlace/Navbar';
import Footer from '@/app/components/nftMarketPlace/Footer';
import FeaturedCard from '@/app/components/FeaturedCard';
import TopCollectionCard from '@/app/components/TopCollectionCard';
import CollectibleCard from '@/app/components/CollectibleCard';
import NftCard from '@/app/components/NftCard';


const Marketplace = () => {

    const TopCollectionCardArr = [
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic1.png"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic2.webp"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic1.png"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic2.webp"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic1.png"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic1.png"
        },
    ]


    const NftDataArr = [
        {
            nftImgSrc:"/assets/images/nft_images/nft_img1.webp",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img2.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img3.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img4.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img1.webp",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img2.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img3.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
        {
            nftImgSrc:"/assets/images/nft_images/nft_img4.png",
            ownerImgSrc:"/assets/images/nft_user_pic.webp",
            ownerName:"Crypto.com Land - The First Frontier",
            name:"Yokai #4673",
            mintQuantity:1,
            startingBidPrice:"101",
            endTime:"53 minutes",
        },
    ]

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
        <section className='w-full min-h-screen text-white bg-[#0b1426]'>
            <div className='w-full'>
                <Navbar />
            </div>
            <section className='w-full min-h-screen bg-[#0b1426]'>
                <div className='px-6 pt-6 w-full'>
                    <div className='mt-2'>
                        <h1 className='mb-6 text-[1.25rem] font-semibold'>Top Collections</h1>
                        <div className='my-2'>
                        <Swiper
                        slidesPerView={1}
                        breakpoints={{640: { slidesPerView: 2 } ,768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1440: { slidesPerView: 5 }  }}
                        spaceBetween={20}
                        navigation={true}
                        >
                        {
                            Array.isArray(TopCollectionCardArr) && TopCollectionCardArr?.length>0 && TopCollectionCardArr.map((item,i)=> (
                                <>
                                <SwiperSlide key={i}>
                                    <div className='h-[200px] sm:h-[224px]'>
                                        <TopCollectionCard 
                                        title={item?.title} 
                                        src={item?.src}
                                        number={i+1} 
                                        key={i} />
                                    </div>
                                </SwiperSlide>
                             </>
                                
                            ))
                        }
                        </Swiper>
                        </div>

                        <div className='mt-6 pb-2.5'>
                            <h1 className='text-[1.25rem] font-semibold'>Explore</h1>

                            <div className="mt-6 pb-2.5 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center ">
                                <div className="mb-2.5">
                                    <button className="mr-2.5 bg-[#0f1c39] py-[.4375rem] px-3 rounded-[1.875rem] border border-[#626973] text-base sm:text-lg font-semibold flex items-center" onClick={()=> setToggleFilters(!toggleFilters)}>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><path fillrule="evenodd" cliprule="evenodd" d="M3 6C3 5.17157 3.67157 4.5 4.5 4.5H19.5C20.3284 4.5 21 5.17157 21 6C21 6.82843 20.3284 7.5 19.5 7.5H4.5C3.67157 7.5 3 6.82843 3 6ZM5.25 12C5.25 11.1716 5.92157 10.5 6.75 10.5H17.25C18.0784 10.5 18.75 11.1716 18.75 12C18.75 12.8284 18.0784 13.5 17.25 13.5H6.75C5.92157 13.5 5.25 12.8284 5.25 12ZM10.5 16.5C9.67157 16.5 9 17.1716 9 18C9 18.8284 9.67157 19.5 10.5 19.5H13.5C14.3284 19.5 15 18.8284 15 18C15 17.1716 14.3284 16.5 13.5 16.5H10.5Z" fill="white" /></svg>
                                        <div className='ml-2.5'>Filters</div>
                                    </button>
                                </div>
                                <div className='flex items-center'>
                                    <button className="bg-[#0f1c39] py-[.4375rem] px-3 rounded-[1.875rem] border border-[#626973] text-base sm:text-lg font-semibold flex items-center">
                                        <svg width={18} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54471 9.70306L5.46314 2.64253L3.17802 2.64253L3.2596 9.70306L2.28007 9.70306C1.36162 9.70306 0.928952 10.8374 1.6141 11.449L3.65457 13.2707C4.03396 13.6094 4.60713 13.6094 4.98652 13.2707L7.02699 11.449C7.71214 10.8374 7.27948 9.70306 6.36102 9.70306L5.54471 9.70306Z" fill="#FFFFFF" /><path d="M5.54471 9.70306L5.46314 2.14253L3.17802 2.14253L3.2596 9.70306L2.28007 9.70306C1.36162 9.70306 0.928952 10.8374 1.6141 11.449L3.65457 13.2707C4.03396 13.6094 4.60713 13.6094 4.98652 13.2707L7.02699 11.449C7.71214 10.8374 7.27948 9.70306 6.36102 9.70306L5.54471 9.70306Z" fill="#FFFFFF" /><path d="M10.2085 6.16218L10.29 13.7227L12.5751 13.7227L12.4936 6.16218L13.4731 6.16218C14.3916 6.16218 14.8242 5.02787 14.1391 4.4162L12.0986 2.59456C11.7192 2.25586 11.146 2.25586 10.7667 2.59456L8.72618 4.4162C8.04103 5.02787 8.47369 6.16218 9.39215 6.16218L10.2085 6.16218Z" fill="#FFFFFF" /></svg>
                                        <div className='mx-2'>Sort By</div>
                                        <svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6 5.45C4.45835 5.63885 4.23606 5.75 4 5.75C3.76393 5.75 3.54164 5.63885 3.4 5.45L0.399996 1.45C0.229548 1.22274 0.202131 0.918678 0.329175 0.66459C0.456219 0.410502 0.715917 0.25 0.999996 0.25H7C7.28407 0.25 7.54377 0.410502 7.67082 0.66459C7.79786 0.918678 7.77044 1.22274 7.6 1.45L4.6 5.45Z" fill="#FFFFFF" /></svg>
                                    </button>
                                    <div className='ml-[.8125rem] w-[7.5rem] flex items-center '>
                                        <button className='w-1/2 py-3 bgBlueGradient rounded-[4.5rem] rounded-tr-none rounded-br-none flex justify-center items-center'>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1 0C0.447715 0 0 0.447716 0 1V7.57144C0 8.12373 0.447715 8.57144 1 8.57144H7.57373C8.12602 8.57144 8.57373 8.12372 8.57373 7.57144V1C8.57373 0.447715 8.12602 0 7.57373 0H1ZM1 11.4285C0.447715 11.4285 0 11.8762 0 12.4285V18.9999C0 19.5522 0.447715 19.9999 1 19.9999H7.57373C8.12602 19.9999 8.57373 19.5522 8.57373 18.9999V12.4285C8.57373 11.8762 8.12602 11.4285 7.57373 11.4285H1ZM11.4258 1C11.4258 0.447716 11.8735 0 12.4258 0H18.9995C19.5518 0 19.9995 0.447715 19.9995 1V7.57144C19.9995 8.12372 19.5518 8.57144 18.9995 8.57144H12.4258C11.8735 8.57144 11.4258 8.12373 11.4258 7.57144V1ZM12.4258 11.4285C11.8735 11.4285 11.4258 11.8762 11.4258 12.4285V18.9999C11.4258 19.5522 11.8735 19.9999 12.4258 19.9999H18.9995C19.5518 19.9999 19.9995 19.5522 19.9995 18.9999V12.4285C19.9995 11.8762 19.5518 11.4285 18.9995 11.4285H12.4258Z" /></svg>
                                        </button>
                                        <button className='w-1/2 py-3 bg-[#0f1c39] border border-[#626973] rounded-[4.5rem] rounded-tl-none rounded-bl-none flex justify-center items-center'>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M0 1C0 0.447716 0.447715 0 1 0H4.45584C5.00813 0 5.45584 0.447715 5.45584 1V4.45458C5.45584 5.00686 5.00813 5.45458 4.45584 5.45458H1C0.447716 5.45458 0 5.00686 0 4.45458V1ZM0 8.27271C0 7.72042 0.447715 7.27271 1 7.27271H4.45584C5.00813 7.27271 5.45584 7.72042 5.45584 8.27271V11.7273C5.45584 12.2796 5.00813 12.7273 4.45584 12.7273H1C0.447716 12.7273 0 12.2796 0 11.7273V8.27271ZM1 14.5454C0.447715 14.5454 0 14.9931 0 15.5454V19C0 19.5523 0.447716 20 1 20H4.45584C5.00813 20 5.45584 19.5523 5.45584 19V15.5454C5.45584 14.9931 5.00813 14.5454 4.45584 14.5454H1ZM7.27734 1C7.27734 0.447716 7.72506 0 8.27734 0H11.7332C12.2855 0 12.7332 0.447715 12.7332 1V4.45458C12.7332 5.00686 12.2855 5.45458 11.7332 5.45458H8.27734C7.72506 5.45458 7.27734 5.00686 7.27734 4.45458V1ZM15.543 0C14.9907 0 14.543 0.447716 14.543 1V4.45458C14.543 5.00686 14.9907 5.45458 15.543 5.45458H18.9988C19.5511 5.45458 19.9988 5.00686 19.9988 4.45458V1C19.9988 0.447715 19.5511 0 18.9988 0H15.543ZM7.27734 8.27271C7.27734 7.72042 7.72506 7.27271 8.27734 7.27271H11.7332C12.2855 7.27271 12.7332 7.72042 12.7332 8.27271V11.7273C12.7332 12.2796 12.2855 12.7273 11.7332 12.7273H8.27734C7.72506 12.7273 7.27734 12.2796 7.27734 11.7273V8.27271ZM8.27734 14.5454C7.72506 14.5454 7.27734 14.9931 7.27734 15.5454V19C7.27734 19.5523 7.72506 20 8.27734 20H11.7332C12.2855 20 12.7332 19.5523 12.7332 19V15.5454C12.7332 14.9931 12.2855 14.5454 11.7332 14.5454H8.27734ZM14.543 8.27271C14.543 7.72042 14.9907 7.27271 15.543 7.27271H18.9988C19.5511 7.27271 19.9988 7.72042 19.9988 8.27271V11.7273C19.9988 12.2796 19.5511 12.7273 18.9988 12.7273H15.543C14.9907 12.7273 14.543 12.2796 14.543 11.7273V8.27271ZM15.543 14.5454C14.9907 14.5454 14.543 14.9931 14.543 15.5454V19C14.543 19.5523 14.9907 20 15.543 20H18.9988C19.5511 20 19.9988 19.5523 19.9988 19V15.5454C19.9988 14.9931 19.5511 14.5454 18.9988 14.5454H15.543Z" /></svg>

                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='flex box-border '>
                                    {
                                        toggleFilters && (
                                            <div className='max-w-[326px] h-full p-4'>
                                                <div className='min-w-[290px] h-[500px flex items-center justify-center'>
                                                    <div className='w-full'>
                                                        <div className='w-full flex justify-between items-center border-b border-b-[#626973] py-2.5 pl-[.75rem] pr-4'>
                                                            <h1 className='text-lg font-semibold text-white'>Filters</h1>
                                                            <div>
                                                                <svg className='white' width={24} height={24} viewBox="0 0 24 24" fill="white"><path d="M5.5 16.75L1.5 12.25L5.5 7.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="9.75" y1="4.25" x2="21.25" y2="4.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /><line x1="9.75" y1="12.25" x2="21.25" y2="12.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /><line x1="9.75" y1="20.25" x2="21.25" y2="20.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                                            </div>
                                                        </div>

                                                        {
                                                            Array.isArray(listTypeCheckboxDatArr) && listTypeCheckboxDatArr.length>0 && listTypeCheckboxDatArr?.map((item,i)=> (
                                                                <>
                                                                <div className="w-full border-b border-b-[#626973]">
                                                                    <div className='w-full flex justify-between items-center'>
                                                                        <h1 className='text-lg font-medium text-white  py-2.5 pl-[.75rem] pr-4'>{item?.title && item?.title}</h1>
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


                                                        {/* <div className="border-b border-b-[#626973]">
                                                            <div className='w-full flex justify-between items-center'>
                                                                <h1 className='text-lg font-medium text-white  py-2.5 pl-[.75rem] pr-4'>Price</h1>
                                                                <svg width={10} height={8} viewBox="0 0 10 7" className="styles_filterArrow__WSQxx css-109ml0w" data-test-id="undefined-filter-arrow" fill="none"><path d="M9 5.33301L5 1.33301L1 5.33301" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                            </div>
                                                            <div className='w-full flex flex-col justify-center items-center py-2.5 pl-[.75rem] pr-4'>
                                                                <span className='text-white'>&</span>
                                                                <input type="text" className='h-[20px] border border-[#626973] rounded' placeholder='Minimum'/>
                                                                <span className='text-white'>-</span>
                                                                <input type="text" className='h-[20px] border border-[#626973] rounded' placeholder='Maximum'/>
                                                            </div>
                                                        </div> */}

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className='pl-6 flex-grow '>
                                        <div className='pb-28 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5'>
                                            {
                                                Array.isArray(NftDataArr) && NftDataArr?.length>0 && NftDataArr.map((item,i)=> (
                                                    <NftCard
                                                    nftImgSrc={item?.nftImgSrc}
                                                    ownerImgSrc={item?.ownerImgSrc}
                                                    ownerName={item?.ownerName}
                                                    name={item?.name}
                                                    mintQuantity={item?.mintQuantity}
                                                    startingBidPrice={item?.startingBidPrice}
                                                    endTime={item?.endTime}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='pb-28 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5'>
                                {
                                    Array.isArray(NftDataArr) && NftDataArr?.length>0 && NftDataArr.map((item,i)=> (
                                        <NftCard
                                        nftImgSrc={item?.nftImgSrc}
                                        ownerImgSrc={item?.ownerImgSrc}
                                        ownerName={item?.ownerName}
                                        name={item?.name}
                                        mintQuantity={item?.mintQuantity}
                                        startingBidPrice={item?.startingBidPrice}
                                        endTime={item?.endTime}
                                        />
                                    ))
                                }
                            </div> */}
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

export default Marketplace
























// const Marketplace = () => {

//     // const brandsArr = [
//     //     {
//     //         src:"/assets/images/brandpic.jpeg",
//     //         title: "Philadelphia 76ers"
//     //     },
//     //     {
//     //         src:"/assets/images/brandpic2.jpeg",
//     //         title: "Aston Martin F1"
//     //     },
//     //     {
//     //         src:"/assets/images/brandpic3.png",
//     //         title: "Lega Serie A"
//     //     },
//     //     {
//     //         src:"/assets/images/brandpic4.png",
//     //         title: "DRESSX"
//     //     },
//     //     {
//     //         src:"/assets/images/brandpic5.png",
//     //         title: "Heavy Metal"
//     //     },
//     //     {
//     //         src:"/assets/images/brandpic6.jpeg",
//     //         title: "LA Kings"
//     //     },
//     // ]

//   return (
//     <>
//         <div className='w-full min-h-screen bg-slate-950 text-white flex justify-center items-center'>
//             <h1>MarketPlace Page</h1>
//             {/* <div className='w-11/12 flex flex-col justify-center items-center min-h-[22rem] py-6 px-4'>
//                 <p className='mb-4 text-center text-white text-[3.125rem] font-semibold'>Markeplace</p>
//                 <div className='mt-5 w-full min-h-[19rem]'>
//                     <Swiper
//                     className="h-[19rem]"
//                     slidesPerView={3}
//                     breakpoints={{ 768: { slidesPerView: 5 } }}
//                     spaceBetween={20}
//                     navigation={true}
//                     // pagination={{clickable: true}}
//                     >
//                         { 
//                             Array.isArray(brandsArr) && brandsArr.length>0 && brandsArr.map((item,i)=> (
//                                 <SwiperSlide>
//                                     <div className='h-full flex justify-center items-center text-center'>
//                                         <div>
//                                             <Image 
//                                             src={item?.src}
//                                             className='rounded-[50%]'
//                                             width={154}
//                                             height={154}
//                                             alt='brand image'
//                                             />
//                                             <div className='mt-4'>
//                                                 <p>{item?.title}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))
//                         }
//                     </Swiper>
//                 </div>
//             </div> */}
//         </div>
//     </>
//   )
// }

// export default Marketplace






















// // "use server"

// import React from 'react'
// import { Swiper, SwiperSlide } from '@/app/components/CustomSlider'
// // "use server"
// // const slideChangeHandler = () => {
// //     // "use server"
// //     console.log('slide changed')
// // }

// // const progressHandler = (s,progress) => {
// //     // "use server"
// //     console.log(`progress is ${progress}`)
// // }

// const Markeplace = () => {
//   return (
//     <>
//         {/* <Swiper
//         slidesPerView={3}
//         breakpoints={{ 768: { slidesPerView: 4 } }}
//         on={{
//             slideChange: slideChangeHandler,
//             progress: progressHandler,
//             // slideChange: () => console.log('slide changed'),
//             // progress: (s, progress) => console.log(`progress is ${progress}`),
//         }}
//         >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         </Swiper> */}
//         <div className='w-full min-h-screen bg-slate-950 text-white flex justify-center items-center'>
//             <div className='w-10/12 flex flex-col justify-center items-center border min-h-[22rem] py-6 px-4'>
//                 <p className='text-red-500'>Markeplace</p>
//                 <div className='mt-5 w-full border min-h-[19rem]'>
//                     <Swiper
//                     slidesPerView={3}
//                     navigation="true"
//                     // pagination="true"
//                     breakpoints={{ 768: { slidesPerView: 4 } }}
//                     // on={{
//                     //     slideChange: slideChangeHandler,
//                     //     progress: progressHandler,
//                     //     // slideChange: () => console.log('slide changed'),
//                     //     // progress: (s, progress) => console.log(`progress is ${progress}`),
//                     // }}
//                     >
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 1</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 2</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 3</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 4</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 5</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 6</SwiperSlide>
//                     {/* <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 1</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 2</SwiperSlide>
//                     <SwiperSlide className="border w-[16rem] h-[16rem] flex justify-center items-center">Slide 3</SwiperSlide> */}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Markeplace















                                            // <div className='max-w-[326px] max-h-[560px] overflow-x-auto overflow-y-auto border border-red-700 p-4'>
                                            //     <div className='w-[290px] h-[500px] border border-green-600 flex items-center justify-center'>
                                            //         filters container
                                            //     </div>
                                            // </div>













                                            // max-h-[560px]