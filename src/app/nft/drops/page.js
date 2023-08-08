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
import DropsHeaderSection from './components/DropsHeaderSection';
import DropsSubscribeSection from '@/app/components/DropsSubscribeSection';
import DropsCard from './components/DropsCard';
import DropsSectionsContainer from './components/DropsSectionsContainer';


const LiveIconSvg = () => {
    return (
        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"  className='p-0 w-[1.5rem] h-[1.5rem]'><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9864 4.02629C19.3955 3.5587 20.1062 3.51131 20.5738 3.92046C22.8164 5.88272 24.2913 8.94063 24.2913 12.2671C24.2913 15.5887 22.9035 18.5636 20.5762 20.6117C20.1098 21.0221 19.3989 20.9767 18.9885 20.5103C18.578 20.0439 18.6234 19.333 19.0898 18.9226C20.9292 17.3039 22.0413 14.9455 22.0413 12.2671C22.0413 9.59358 20.8496 7.15149 19.0922 5.61375C18.6246 5.20461 18.5772 4.49388 18.9864 4.02629ZM15.9037 7.27379C16.3602 6.85237 17.072 6.88083 17.4934 7.33738C18.6652 8.60686 19.4584 10.3728 19.4584 12.2671C19.4584 14.1245 18.7732 15.9184 17.4622 17.2293C17.0229 17.6686 16.3106 17.6686 15.8713 17.2293C15.4319 16.7899 15.4319 16.0776 15.8713 15.6383C16.727 14.7825 17.2084 13.5764 17.2084 12.2671C17.2084 10.9948 16.6683 9.7607 15.8401 8.86351C15.4187 8.40697 15.4471 7.69522 15.9037 7.27379ZM5.90955 5.61166C6.37598 5.2012 6.42136 4.49033 6.01089 4.0239C5.60043 3.55747 4.88957 3.51209 4.42313 3.92255C2.09582 5.97059 0.708008 8.94551 0.708008 12.2671C0.708008 15.5936 2.18294 18.6515 4.42552 20.6138C4.89312 21.0229 5.60385 20.9755 6.01299 20.5079C6.42213 20.0403 6.37475 19.3296 5.90716 18.9205C4.14974 17.3827 2.95801 14.9406 2.95801 12.2671C2.95801 9.5887 4.0702 7.23029 5.90955 5.61166ZM9.12915 7.30495C9.56849 7.74429 9.56849 8.4566 9.12915 8.89594C8.27341 9.75169 7.79199 10.9578 7.79199 12.2671C7.79199 13.5395 8.33214 14.7735 9.16031 15.6707C9.58174 16.1273 9.55327 16.839 9.09672 17.2604C8.64018 17.6819 7.92843 17.6534 7.507 17.1968C6.33518 15.9274 5.54199 14.1614 5.54199 12.2671C5.54199 10.4098 6.22724 8.61588 7.53816 7.30495C7.9775 6.86561 8.68981 6.86561 9.12915 7.30495ZM12.5 14.5171C13.7426 14.5171 14.75 13.5097 14.75 12.2671C14.75 11.0245 13.7426 10.0171 12.5 10.0171C11.2574 10.0171 10.25 11.0245 10.25 12.2671C10.25 13.5097 11.2574 14.5171 12.5 14.5171Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0.5 0.26709)"></rect></clipPath></defs></svg>
    )
}


const dropsDataArr = [
    {
        title:"Current",
        dropsCardDataArr:  [
            {
            cardImgSrc:"/assets/images/drops/current/card/pic1.png",
            ownerImgSrc:"/assets/images/drops/current/owner/pic1.jpeg",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
            {
            cardImgSrc:"/assets/images/drops/current/card/pic2.png",
            ownerImgSrc:"/assets/images/drops/current/owner/pic2.png",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
        ]
    },
    {
        title:"Upcoming",
        dropsCardDataArr: [
            {
            cardImgSrc:"/assets/images/drops/current/card/pic3.jpg",
            ownerImgSrc:"/assets/images/drops/current/owner/pic3.png",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
            {
            cardImgSrc:"/assets/images/drops/current/card/pic4.png",
            ownerImgSrc:"/assets/images/drops/current/owner/pic4.jpeg",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
            {
            cardImgSrc:"/assets/images/drops/current/card/pic5.png",
            ownerImgSrc:"/assets/images/drops/current/owner/pic5.png",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
        ]
    },
    {
        title:"Upcoming",
        dropsCardDataArr: [
            {
            cardImgSrc:"/assets/images/drops/current/card/pic6.jpg",
            ownerImgSrc:"/assets/images/drops/current/owner/pic6.jpg",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
            {
            cardImgSrc:"/assets/images/drops/current/card/pic7.jpg",
            ownerImgSrc:"/assets/images/drops/current/owner/pic7.png",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
            {
            cardImgSrc:"/assets/images/drops/current/card/pic8.jpg",
            ownerImgSrc:"/assets/images/drops/current/owner/pic8.webp",
            title:"The Jellyfishes Places: An Experience",
            ownerName:"Tony Lopez MEDIA",
            },
        ]
    },
]

const Drops = () => {

  return (
    <>
        <section className='w-full min-h-screen text-white bg-[#0b1426]'>
            <div className='w-full'>
                <Navbar />
            </div>
            <DropsHeaderSection />   
            <main className='w-full my-20 px-3 md:px-8 lg:px-12'> 
                {
                    dropsDataArr.map((item,i)=> (
                        <div className='mb-8'>
                            <DropsSectionsContainer
                            heading={item?.title}
                            dataArr={item?.dropsCardDataArr}
                            />
                        </div>
                    ))
                }
            </main>
            <DropsSubscribeSection />
            <div className='w-full'>
                <Footer />
            </div>
        </section>
    </>
  )
}

export default Drops





































































 {/* <div className='mb-8'>
                    <DropsSectionsContainer
                    heading="Current"
                    />
                </div> */}
                {/* <div className='mb-8'>
                    <DropsSectionsContainer
                    heading="Upcoming"
                    />
                </div>
                <div className=''>
                    <DropsSectionsContainer
                    heading="Ended"
                    />
                </div> */}