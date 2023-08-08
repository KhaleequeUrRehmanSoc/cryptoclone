import React from 'react'
import DropsCard from './DropsCard'
import Link from 'next/link'

const DropsSectionsContainer = ({heading,dataArr}) => {

    // const dropsDataArr = [
    //     {
    //         title:"Current",
    //         dropsCardDataArr:  [
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic1.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic2.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic2.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //         ]
    //     },
    //     {
    //         title:"Upcoming",
    //         dropsCardDataArr: [
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic3.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic3.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic4.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic4.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic5.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic5.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //         ]
    //     },
    //     {
    //         title:"Upcoming",
    //         dropsCardDataArr: [
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic6.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic6.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic7.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic7.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //             {
    //             cardImgSrc:"/assets/images/drops/current/card/pic8.png",
    //             ownerImgSrc:"/assets/images/drops/current/owner/pic8.jpeg",
    //             title:"The Jellyfishes Places: An Experience",
    //             ownerName:"Tony Lopez MEDIA",
    //             },
    //         ]
    //     },
    // ]
    
  return (
    <>
        <section>
            <div className='mb-6'>
                <h1 className='text-[1.25rem] md:text-[1.8125rem] font-normal text-white'>{heading && heading}</h1>
            </div>
            {/* <div className='my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'> */}
            <div className='my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                {
                    heading === "Current"? (
                        dataArr.map((item,i)=> (
                            <Link href={`/nft/drops-event/${i+1}`}>
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={item.cardImgSrc}
                                    ownerImgSrc={item.ownerImgSrc}
                                    title={item.title}
                                    ownerName={item.ownerName}
                                    hasLiveBtn={true} />
                                </div>
                            </Link>
                        ))
                    )
                    :
                    heading === "Upcoming"?
                    (
                        
                        dataArr.map((item,i)=> (
                            <Link href={`/nft/drops-event/${i+1}`}>
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={item.cardImgSrc}
                                    ownerImgSrc={item.ownerImgSrc}
                                    title={item.title}
                                    ownerName={item.ownerName}
                                    hasUpcommingBtn={true} 
                                    hasAccessInfoBtn={true}
                                    />
                                </div>
                            </Link>
                        ))
                    )
                    :
                    heading === "Ended"?
                    (
                        
                        dataArr.map((item,i)=> (
                            <Link href={`/nft/drops-event/${i+1}`}>
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={item.cardImgSrc}
                                    ownerImgSrc={item.ownerImgSrc}
                                    title={item.title}
                                    ownerName={item.ownerName}
                                    />
                                </div>
                            </Link>
                        ))
                    )
                    :""
                }     
            </div>
        </section>
    </>
  )
}


export default DropsSectionsContainer











































//     {
//         title:"Current",
//         dropsCardDataArr:  [
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic1.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic2.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic2.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//         ]
//     },
//     {
//         title:"Upcoming",
//         dropsCardDataArr: [
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic3.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic3.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic4.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic4.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic5.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic5.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//         ]
//     },
//     {
//         title:"Upcoming",
//         dropsCardDataArr: [
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic6.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic6.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic7.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic7.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//             {
//             cardImgSrc:"/assets/images/drops/current/card/pic8.png",
//             ownerImgSrc:"/assets/images/drops/current/owner/pic8.jpeg",
//             title:"The Jellyfishes Places: An Experience",
//             ownerName:"Tony Lopez MEDIA",
//             },
//         ]
//     },
// ]































// import React from 'react'
// import DropsCard from './DropsCard'

// const DropsSectionsContainer = ({heading}) => {
    
//   return (
//     <>
//         <section>
//             <div className='mb-6'>
//                 <h1 className='text-[1.25rem] md:text-[1.8125rem] font-normal text-white'>{heading && heading}</h1>
//             </div>
//             <div className='my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//                 { 
//                     heading === "Current"? (
//                         new Array(3).fill(null).map((item,i)=> (
//                             <>
//                                 <div className='p-4' key={i}>
//                                     <DropsCard hasUpcommingBtn={true} hasAccessInfoBtn={true} />
//                                 </div>
//                             </>
//                         ))
//                     )
//                     :
//                     heading === "Upcoming"?
//                     (
//                         new Array(3).fill(null).map((item,i)=> (
//                             <>
//                                 <div className='p-4' key={i}>
//                                     <DropsCard hasLiveBtn={true} />
//                                 </div>
//                             </>
//                         ))
                        
//                     )
//                     :
//                        new Array(3).fill(null).map((item,i)=> (
//                             <>
//                             <div className='p-4' key={i}>
//                                 <DropsCard />
//                             </div>
//                             </>
//                         ))         
                       
//                 }
//             </div>
//         </section>
//     </>
//   )
// }


// export default DropsSectionsContainer