import Image from "next/image";
import Link from "next/link";
import React from "react";
import AndroidSvg from "./icons/AndroidSvg";

const Defi = () => {
    
    const defiListArr = [
        {
          title: "DeFi Wallet.",
          description: "Your Keys, Your Crypto.",
        },
        {
          title: "DeFi Earn.",
          description: "No lock-up period and stable returns.",
        },
        {
          title: "DeFi Swap.",
          description: "Swap DeFi coins and earn Triple Yield.",
        },
    ]

  return (
    <>
        <div className='w-full bg-[#F4F4F4] p-6 lg:p-8 xl:p-10'>
            <div className='mx-auto w-full md:w-11/12 lg:w-5/6 block lg:flex lg:items-center lg:justify-between'>
                <div className="mx-auto w-full sm:w-11/12 md:w-1/2 flex flex-col justify-center items-center md:block">
                    <h2 className='my-1 text-sm lg:text-lg font-semibold text-[#1199fa]'>CRYPTO.COM DEFI</h2>
                    <h1 className='my-3 text-[2rem] lg:text-5xl font-semibold text-black'>DeFi Made Simple</h1>
                    <div className="mt-8">
                        {
                            defiListArr?.length>0 && defiListArr?.map((item,i)=>(
                                <h5 className='my-3 text-base lg:text-2xl font-semibold text-[#7D7D7D]' key={i}>
                                    <span className="text-black">{item?.title} </span>
                                    {item?.description}
                                </h5>
                            ))
                        }
                    </div>
                    <div className="mt-16 mb-8 xl:flex xl:flex-row-reverse xl:gap-4">
                        <div className="my-2">
                            <Link href="#" className='inline-block bg-[#0e213b] border-[1px] border-[#f4f4f4] text-[#FFFFFF] text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                            Explore DeFi Features <svg className='inline-block ml-4' width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7h12M6 1l6 6-6 6" stroke="currentColor" stroke-width="2"></path></svg>
                            </Link>
                        </div>
                        <div className="my-2 hidden lg:block">
                            <Link href="#" className='inline-block text-[#0e213b] border-[1px] border-[#0e213b]  text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                                Get DeFi Wallet 
                            </Link>
                        </div>
                        <div className="my-2 mt-6 block lg:hidden">
                            <Link href="#" className='inline-block text-[#0e213b] border-[1px] border-[#0e213b]  text-lg font-semibold capitalize  px-6 py-3  rounded-[40px]'>
                              <AndroidSvg />  Download DeFi Wallet 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full md:w-1/2 pt-5 pl-16">
                    <Image 
                    src="/assets/images/defimobile.webp"
                    width={460}
                    height={763}
                    alt="mobile pic"
                    />
                </div>
            </div>
        </div>
    </>
  );
};

export default Defi;
