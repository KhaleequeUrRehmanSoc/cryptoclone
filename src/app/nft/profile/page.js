"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/nftMarketPlace/Navbar'
import Footer from '@/app/components/nftMarketPlace/Footer'
import CustomizedTabs from '@/app/components/CustomizedTabs'
import { useState } from 'react'
import NftsContainerWithFilters from '@/app/components/NftsContainerWithFilters'

const Profile = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Test = ({title}) => {
        return (
            <NftsContainerWithFilters>
            <h1 className='text-black text-base font-semibold'>{title && title}</h1>
            </NftsContainerWithFilters>
        )
    }

    const tabsDataArr = [
        // {tabLabel:"Collected",tabPanel:"Collected Tab Panel"},
        // {tabLabel:"Created",tabPanel:"Created Tab Panel"},
        // {tabLabel:"Liked",tabPanel:"Liked Tab Panel"},
        {tabLabel:"Collected",tabPanel: <Test title="Collected Tab Panel" />},
        {tabLabel:"Created",tabPanel:<Test title="Created Tab Panel" />},
        {tabLabel:"Liked",tabPanel:<Test title="Liked Tab Panel" />},
    ]

  return (
    <>
        <section className='w-full'>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className='w-full min-h-screen py-8 px-6 bg-white'>
                <div className="mx-auto max-w-[96rem]">
                    <div className='w-[93%] mx-auto flex items-start'>
                        <div className='flex flex-col justify-center items-center'>
                           <div className='relative rounded-[50%] w-[8.75rem] h-[8.75rem]'>
                                <Image
                                className='rounded-[50%]'
                                src="/assets/images/default_profile.jpg"
                                // width={140}
                                // height={140}
                                fill
                                alt='default profile pic'
                                />
                           </div>
                            <div className='mt-4 flex items-center'>
                                <h4 className='text-sm font-semibold text-[#1199fa] pr-4 border-r border-[#1199fa]'>Edit Profile</h4>
                                <Link href="#" className='pl-3 text-sm font-semibold text-[#1199fa]'>View As Public</Link>
                            </div>
                        </div>
                        <div>
                            <h1 className='ml-16 text-base font-semibold text-black'>khaleeque</h1>
                        </div>
                    </div>
                    <div className='mt-6 mb-[1.125rem] before: border border-[#e3e3e3]'></div>
                    <div className='mt-1'>
                    <CustomizedTabs 
                    tabs={tabsDataArr}
                    value={value}
                    onChange={handleChange}
                    />
                    </div>
                </div>
                {/* <div className='flex flex-col justify-center items-center pt-5'>
                    <h2 className="font-bold text-[2.5rem] text-white">Login</h2>
                </div>
                <div className='flex justify-center items-center mt-12'>
                <div className='min-w-[18.125rem] w-[46.25rem]'>
                    <form className='w-full px-4'>
                        <InputField
                        type="email"
                        placeholder="Email address"
                        name="email"
                        required
                        />
                        <InputField
                        type="password"
                        placeholder="Password"
                        name="password"
                        />
                        <div className='flex flex-col justify-center items-center mt-'>
                            <button className='px-10 py-[0.875rem] bg-[#3c83ff] text-white outline-0 text-base font-bold' type='submit'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                </div> */}
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </section>
    </>
  )
}

export default Profile