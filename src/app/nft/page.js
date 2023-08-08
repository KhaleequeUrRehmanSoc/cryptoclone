import Footer from '@/app/components/nftMarketPlace/Footer'
import EtherumSvg from '@/app/components/icons/EtherumSvg'
import NftSvg from '@/app/components/icons/NftSvg'
import Image from 'next/image'
import React from 'react'
import Navbar from '@/app/components/nftMarketPlace/Navbar'
import SearchInputFieldWithBtn from '@/app/components/SearchInputFieldWithBtn'
import { Swiper, SwiperSlide } from '../components/CustomSlider'
import FeaturedCard from '../components/FeaturedCard'
import BlueTickSvg from '../components/icons/BlueTickSvg'
import TopCreatorCard from '../components/TopCreatorCard'
import BrandCard from '../components/nftMarketPlace/BrandCard'
import CollectibleCard from '../components/CollectibleCard'
import WhiteTickSvg from '../components/icons/WhiteTickSvg'
import FilterBar from '../components/FilterBar'
import CollectionCard from '../components/CollectionCard'
import CalenderSvg from '../components/icons/CalenderSvg'
import CustomDropdown from '../components/CustomDropdown'
import DropsSubscribeSection from '../components/DropsSubscribeSection'

const Nft = () => {

    const brandsArr = [
        {
            src:"/assets/images/brandpic.jpeg",
            title: "Philadelphia 76ers"
        },
        {
            src:"/assets/images/brandpic2.jpeg",
            title: "Aston Martin F1"
        },
        {
            src:"/assets/images/brandpic3.png",
            title: "Lega Serie A"
        },
        {
            src:"/assets/images/brandpic4.png",
            title: "DRESSX"
        },
        {
            src:"/assets/images/brandpic5.png",
            title: "Heavy Metal"
        },
        {
            src:"/assets/images/brandpic6.jpeg",
            title: "LA Kings"
        },
    ]

    const topCreatorsArr = [
        {
            src:"/assets/images/top_creators/top_creator_pic1.jpeg",
            title: "Aston Martin F1",
            price: "$2,000,000+",
        },
        {
            src:"/assets/images/top_creators/top_creator_pic2.jpeg",
            title: "Ugonzo Art",
            price: "$2,000,000+",
        },
        {
            src:"/assets/images/top_creators/top_creator_pic3.jpeg",
            title: "Travis Ragsdale",
            price: "$2,000,000+",
        },
        {
            src:"/assets/images/top_creators/top_creator_pic4.webp",
            title: "DaRealGenius",
            price: "$2,000,000+",
        },
        {
            src:"/assets/images/top_creators/top_creator_pic5.png",
            title: "Ballies",
            price: "$2,000,000+",
        },
        {
            src:"/assets/images/top_creators/top_creator_pic6.jpeg",
            title: "Snoop Dogg",
            price: "$1,000,000+",
        },
    ]

    const featuredCollectionArr = [
        {
            title:"Crypto.com Land - The First Frontier",
            src:"/assets/images/featured_card_content_pic1.png"
        },
        {
            title:"Loaded Lions",
            src:"/assets/images/featured_card_content_pic2.webp"
        },
        {
            title:"Crypto.com Expedition Gear",
            src:"/assets/images/featured_card_content_pic1.png"
        },
    ]

  return (
    <>
        <section className='w-full min-h-screen text-white'>
            <div className='w-full'>
                <Navbar />
            </div>
            <section className='w-full min-h-screen bg-[#0b1426]'>

                <div className='pb-20 w-full text-center text-white flex justify-center items-center nftHomepageHeaderSectionBg'>
                    <div className='w-full sm:w-4/5 p-4 sm:p-0 '>
                        <div className='mt-[2.5rem] mb-[1.875rem]'>
                            <h1 className='text-[2.5rem] sm:text-[3.125rem] text-center font-bold text-white'>Buy, sell, and showcase NFTs</h1>
                            <h1 className='text-base sm:text-[1.25rem] text-center font-medium text-white'>from leading creators and brands</h1>
                        </div>
                        <div className='w-full h-[300px] sm:h-[400px] relative'>
                            <Swiper
                            className="h-full"
                            slidesPerView={1}
                            navigation={true}
                            >
                                {
                                    [1,2].map((item,i)=>(
                                        <SwiperSlide className="relative">
                                            <div className='nftHeaderSectionSliderBlueOverlay h-full'></div>
                                            <div className='nftHeaderSectionSliderBgImage h-full flex flex-col justify-center items-center'>
                                                <div className='mb-[2rem] flex justify-center items-center'>
                                                    <button className='outline-0 border-0 rounded-[1.875rem] bgBlueGradient text-white text-center py-2 px-4 text-base font-bold flex justify-center items-center gap-2' >           
                                                        <CalenderSvg />
                                                        UPCOMMING
                                                    </button>
                                                </div>
                                                <p className='mb-2 text-lg text-center font-medium text-white'>Wed, Jul 26</p>
                                                <h3 className='mb-2 text-center text-white text-[1.8125rem] font-bold'>Action Bears Club - Koala Bears on Tour</h3>
                                                <h5 className='mb-2 text-center text-[#93d2fd] text-lg font-medium'>Stand For Trees</h5>
                                            </div>
                                            <div className='nftHeaderSectionSliderBlackOverlay h-full'></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                
                <DropsSubscribeSection />

                <div className='pb-20 w-full text-center text-white flex justify-center items-center'>
                    <div className='w-4/5 pt-[5rem] '>
                        <h1 className='mb-4 text-center text-white text-[2.5rem] sm:text-[3.125rem] font-semibold'>Brands</h1>
                        <div className='w-full mb-6'></div>
                        <div className='w-full'>
                            <Swiper
                            slidesPerView={1}
                            breakpoints={{640: { slidesPerView: 2 } ,768: { slidesPerView: 4 }, 1024: { slidesPerView: 4 } }}
                            spaceBetween={20}
                            navigation={true}
                            >
                                { 
                                    Array.isArray(brandsArr) && brandsArr?.length>0 && brandsArr.map((item,i)=> (
                                        <SwiperSlide>
                                            <BrandCard
                                            imgSrc={item?.src}
                                            title={item?.title}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className='pb-20 w-full text-center text-white flex justify-center items-center'>
                    <div className='w-4/5 pt-[5rem] '>
                        <h1 className='mb-4 text-center text-white text-[2.5rem] sm:text-[3.125rem] font-semibold'>Featured Collections</h1>
                        <div className='w-full mb-6'></div>
                        <div className='mt-16 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {/* <div className='w-full min-h-[19rem] flex justify-between items-center'> */}
                                {
                                    Array.isArray(featuredCollectionArr) && featuredCollectionArr?.length>0 && featuredCollectionArr.map((item,i)=> (
                                        <div className=' h-[250px] sm:h-[360px]'>
                                            <FeaturedCard 
                                            title={item?.title} 
                                            src={item?.src}
                                            number={i+1} 
                                            key={i} />
                                        </div>
                                    ))
                                }
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className='pb-20 w-full text-center text-white flex justify-center items-center'>
                    <div className='w-5/6 pt-[5rem] '>
                        <h1 className='mb-4 text-center text-white text-[2.5rem] sm:text-[3.125rem] font-semibold'>Top Collections</h1>
                        <FilterBar />
                        <div className='w-full mb-6'></div>
                        <div className='mt-16 w-full flex justify-between items-center'>
                            <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 gap-5'>
                                {
                                    [1,2,3,4,5,6,7,8,9].map((item,i)=> (
                                        <div key={i}>
                                            <CollectionCard />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className='pb-20 w-full text-center text-white flex justify-center items-center'>
                    <div className='w-4/5 pt-[5rem] '>
                        <div className='mb-[2.5rem] flex justify-center items-center'>
                            <button className='outline-0 border-0 rounded-[1.875rem] bgBlueGradient text-white text-center py-2 px-4 text-base font-bold flex justify-center items-center gap-2' > 
                            <WhiteTickSvg />
                            Best Selling
                            </button>
                        </div>
                        <h1 className='mb-4 text-center text-white text-[3.125rem] font-semibold'>Top Creators</h1>
                        <div className='w-full mb-6'></div>
                            <Swiper
                            slidesPerView={1}
                            breakpoints={{640: { slidesPerView: 2 } ,768: { slidesPerView: 4 }, 1024: { slidesPerView: 4 } }}
                            spaceBetween={20}
                            navigation={true}
                            >
                                {
                                    Array.isArray(topCreatorsArr) && topCreatorsArr.length>0 && topCreatorsArr.map((item,i)=> (
                                        <SwiperSlide key={i}>
                                            <TopCreatorCard
                                            imgSrc={item?.src}
                                            title={item?.title}
                                            price={item?.price}    
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                    </div>
                </div>
                
                <div className='pb-20 w-full text-center text-white flex justify-center items-center'>
                    <div className='w-4/5 pt-[5rem] '>
                        <h1 className='mb-[1.875rem] text-center text-white text-[2.5rem] sm:text-[3.125rem] font-semibold'>Top Collectibles</h1>
                        <FilterBar />
                        <div className='w-full mb-10'></div>
                        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5'>
                            {
                                [1,2,3,4,5,6,7,8].map((item,i)=> (
                                    <div key={i}>
                                        <CollectibleCard />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <button className='outline-0 border border-[#1199fa] rounded-[.25rem] bg-transparent text-[#1199fa] text-center py-3 px-6 text-base font-semibold'>Show more</button>
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

export default Nft






















































































                {/* <Image
                className="rounded-tl-2xl rounded-tr-2xl object-cover"
                src="/assets/images/nft_pic1.avif"
                fill
                alt="image"
                /> */}