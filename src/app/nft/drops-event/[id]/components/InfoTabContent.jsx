"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInputFieldWithBtn from '@/app/components/SearchInputFieldWithBtn'

const BlueTickSvg = () => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.72727L25.2727 0L28.5455 5.09091L34.7273 5.27273L34.9091 11.4545L40 14.7273L37.2727 20L40 25.2727L34.9091 28.5455L34.7273 34.7273L28.5455 34.9091L25.2727 40L20 37.2727L14.7273 40L11.4545 34.9091L5.27273 34.7273L5.09091 28.5455L0 25.2727L2.72727 20L0 14.7273L5.09091 11.4545L5.27273 5.27273L11.4545 5.09091L14.7273 0L20 2.72727Z" fill="url(#a24a8c13-3c53-46bc-a7d4-5cb7e91b5126)" /><path d="M17.4988 25.4956L11.9995 20.5876L14.445 18.4051L17.4988 21.1382L26.052 13.4971L28.4975 15.6796L17.4988 25.4956Z" fill="white" /><defs><linearGradient id="a24a8c13-3c53-46bc-a7d4-5cb7e91b5126" x1={0} y1={20} x2={40} y2={20} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
    )
}

const InfoTabContent = () => {

    const dropsEventVideoRef = useRef(null)

  return (
    <>
        <div className='px-4 sm:px-8 lg:px-20 pb-20'>
            <div className='max-w-[786px] mx-auto'>
                <div className='py-7 px-8 mb-6'>
                    <h2 className='mb-2 text-lg font-bold'>Early access starts 60 minutes before the scheduled drop time.</h2>
                    <div>
                        <p>For eligible users (holders of previously released Zigor collections, Cabezaenlasnubes’ “Cryptonauts” collection, Laprisamata’s “Crypto Amazon” collection and Bubaviedma’s “Weird People” collection), please make sure to log into your account in order to gain access. Non-eligible users will still be able to mint during the public access period.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className="relative w-[7.25rem] h-[7.25rem] rounded-[50%] bg-white pr-2">
                        <Image
                        className="object-cover rounded-[50%]"
                        src="/assets/images/drops/drops_event_detail_page_pic.jpeg"
                        fill
                        alt="image"
                        />
                        <div className='absolute bottom-0 right-0'>
                            <BlueTickSvg />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[1.25rem] sm:text-[1.8125rem] font-bold mb-2'>Zigor</h1>
                        <h4 className='text-sm sm:text-base font-bold text-[#1199fa] mb-2'>See Profile</h4>
                        <div className='flex gap-6'>
                        <svg width={24} height={20} viewBox="0 0 24 20" fill="#FFFFFF" data-test-id="twitter-icon"><path d="M24 2.60078C23.1 3.00078 22.2 3.30078 21.2 3.40078C22.2 2.80078 23 1.80078 23.4 0.700781C22.4 1.30078 21.4 1.70078 20.3 1.90078C19.4 0.900781 18.1 0.300781 16.7 0.300781C14 0.300781 11.8 2.50078 11.8 5.20078C11.8 5.60078 11.8 6.00078 11.9 6.30078C7.7 6.10078 4.1 4.10078 1.7 1.10078C1.2 1.90078 1 2.70078 1 3.60078C1 5.30078 1.9 6.80078 3.2 7.70078C2.4 7.70078 1.6 7.50078 1 7.10078V7.20078C1 9.60078 2.7 11.6008 4.9 12.0008C4.5 12.1008 4.1 12.2008 3.6 12.2008C3.3 12.2008 3 12.2008 2.7 12.1008C3.3 14.1008 5.1 15.5008 7.3 15.5008C5.6 16.8008 3.5 17.6008 1.2 17.6008C0.8 17.6008 0.4 17.6008 0 17.5008C2.2 18.9008 4.8 19.7008 7.5 19.7008C16.6 19.7008 21.5 12.2008 21.5 5.70078V5.10078C22.5 4.40078 23.3 3.50078 24 2.60078Z" /></svg>

                        <svg width={24} height={24} viewBox="0 0 24 24" fill="#FFFFFF" data-test-id="instagram-icon"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='mt-8 mb-2'>
                    <h3 className='mb-2 text-lg sm:text-[1.25rem] font-bold'>About the drop</h3>
                    
                    <div>
                        <p className='text-sm sm:text-base whitespace-pre-wrap my-4'>"<em>Amigos Degens </em>" are the craziest, funniest and most impetuous creatures of the Dimension Amigos that live in Crypto.com </p>
                        <p className='text-sm sm:text-base whitespace-pre-wrap my-4'>Each one of them is unique, with their own characteristics and abilities and are part of different groups of friends, friendships that have been forged in the different stages of their lives:</p>
                        <ul className='my-4 list-disc pl-10'>
                            <li className='text-sm sm:text-base leading-[26px]'>Kindergarden Gang is composed of Lolo, Pepón, Cucu, Trini and Rigo. 5 characters (rarity 17%)</li>
                            <li className='text-sm sm:text-base leading-[26px]'>High School Crew areCoco, Fifi, Pipo, Beto, Tito, Nata, Pepe and Minu. 8 characters (rarity 27%)</li>
                            <li className='text-sm sm:text-base leading-[26px]'>Uni Team is formed by Lulu, Kiki, Chicho and Nono. 4 different characters (rarity 13%)</li>
                            <li className='text-sm sm:text-base leading-[26px]'>Work Colleagues are Gigi, Roi and Tete. 3 different characters (rarity 10%)</li>
                            <li className='text-sm sm:text-base leading-[26px]'>The OG’s are Pump & Dump, Whale, When, Meta, Wagmi, Crypo, Moon, Bear, Fomo and Hodl. 10 different characters (rarity 33%)</li>
                        </ul>

                        <p className='text-sm sm:text-base whitespace-pre-wrap my-6'>The lives of Amigos Degens are full of surprises, and each of these groups can grow at any time.</p>
                    </div>

                    <h3 className='mt-6 mb-4 text-lg sm:text-[1.25rem] font-bold'>Utility</h3>
                    <p className='text-sm sm:text-base whitespace-pre-wrap my-4'>
                        This drop features various utility items created by the artist:
                        🪂 Periodic NFT Airdrops that will make your groups of Degens Friends grow and keep the market alive.
                        <br /><br />
                        <Link href="#" className="no-underline text-[#1199FA] uppercase">Click here </Link>
                        for full drop Terms & Conditions, including eligibility, snapshot, and selection specifics for additional features or perks that can be unlocked by holders of the NFT. Terms also include instructions on how to contact the project creator for utility inquiries. 
                    </p>
                    
                    <div className='mb-8'>
                        <h3 className='mt-8 mb-2 text-lg sm:text-[1.25rem] font-bold'>About the creator</h3>
                        <p className='text-sm sm:text-base whitespace-pre-wrap my-4'>
                            <strong>Zigor </strong>
                            is a renown contemporary artist specializing in digital art. He experimented with plastic arts and noble materials until he found in digital art his true way of expression. Over time, and in a self-taught way, he ended up creating his own style, for which he is internationally recognized. During his time working in the world of animation and advertising, he has worked with companies such as Nickelodeon, Wicked and Prada. 
                        </p>
                        <p className='text-sm sm:text-base whitespace-pre-wrap my-2'>
                            In 2020 he sold his first NFT and, since then he has not stopped progressing as a digital artist. 
                            <strong> Zigor </strong>
                            has exhibited his works all over the world: NFT NYC, Sotheby's Paris, Artbabel Madrid, Awwwards Amsterdam, OFFF or Dubai.
                        </p>
                    </div>
                    
                    <div className='mb-8'>
                        <video className='w-full' controls loop ><source src="/assets/videos/drops_event_page_video.mp4" type="video/mp4" ref={dropsEventVideoRef} />Sorry, your browser doesn't support embedded videos.</video>
                    </div>
                    
                    <div>
                        <h2 className='text-lg sm:text-[20px] font-bold mb-2'>Never miss a drop</h2>
                        <h2 className='text-base font-normal mb-4'>Subscribe and we’ll notify you when a drop is about to go live.</h2>
                        <form className='max-w-[580px]'>
                            <SearchInputFieldWithBtn />
                            <div className='mt-4 mb-2.5 flex items-center gap-2.5'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <span className='text-sm font-normal'>By subscribing, you agree to accept the terms of our <Link href="#" className='text-[#1199FA]'>Privacy Notice</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoTabContent