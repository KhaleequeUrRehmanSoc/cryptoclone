import React from 'react'
import DropsCard from './DropsCard'

const DropsSectionsContainer = ({heading}) => {

    const dropsUpcommingDataArr = [
        {
        cardImgSrc:"/assets/images/drops/current/card/pic.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic1.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
        {
        cardImgSrc:"/assets/images/drops/current/card/pic2.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic2.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
    ]
    
    const dropsCurrentDataArr = [
        {
        cardImgSrc:"/assets/images/drops/current/card/pic3.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic3.jpeg",
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
        ownerImgSrc:"/assets/images/drops/current/owner/pic5.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
    ]

    const dropsEndedDataArr = [
        {
        cardImgSrc:"/assets/images/drops/current/card/pic6.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic6.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
        {
        cardImgSrc:"/assets/images/drops/current/card/pic7.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic7.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
        {
        cardImgSrc:"/assets/images/drops/current/card/pic8.png",
        ownerImgSrc:"/assets/images/drops/current/owner/pic8.jpeg",
        title:"The Jellyfishes Places: An Experience",
        ownerName:"Tony Lopez MEDIA",
        },
    ]
   

    
  return (
    <>
        <section>
            <div className='mb-6'>
                <h1 className='text-[1.25rem] md:text-[1.8125rem] font-normal text-white'>{heading && heading}</h1>
                <h1 className='text-[1.25rem] md:text-[1.8125rem] font-normal text-white'>{heading && heading}</h1>
            </div>
            <div className='my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {/* {
                    new Array(4).fill(null).map((item,i)=> (
                        <>
                        {
                            heading === "Current"? (
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc="/assets/images/drops/current/card/pic1.png"
                                    ownerImgSrc="/assets/images/drops/current/owner/pic1.jpeg"
                                    title="The Jellyfishes Places: An Experience"
                                    ownerName="Tony Lopez MEDIA"
                                    hasLiveBtn={true} />
                                </div>
                            )
                            :
                            heading === "Upcoming"?
                            (
                                
                                <div className='p-4' key={i}>
                                 <DropsCard
                                 cardImgSrc="/assets/images/drops/current/card/pic1.png"
                                 ownerImgSrc="/assets/images/drops/current/owner/pic1.jpeg"
                                 title="The Jellyfishes Places: An Experience"
                                 ownerName="Tony Lopez MEDIA" 
                                 hasUpcommingBtn={true} 
                                 hasAccessInfoBtn={true} />
                                </div>
                            )
                            :
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc="/assets/images/drops/current/card/pic1.png"
                                    ownerImgSrc="/assets/images/drops/current/owner/pic1.jpeg"
                                    title="The Jellyfishes Places: An Experience"
                                    ownerName="Tony Lopez MEDIA" 
                                    />
                                </div>
                        }
                       
                        </>
                    ))
                } */}


                        {
                            dropsUpcommingDataArr.map((currObj,i)=>(
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={currObj?.cardImgSrc}
                                    ownerImgSrc={currObj?.ownerImgSrc}
                                    title={currObj?.title}
                                    ownerName={currObj?.ownerName}
                                    hasUpcommingBtn={true} 
                                    hasAccessInfoBtn={true} />
                                </div>
                            ))
                        }

                        {
                            dropsCurrentDataArr.map((currObj,i)=>(
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={currObj?.cardImgSrc}
                                    ownerImgSrc={currObj?.ownerImgSrc}
                                    title={currObj?.title}
                                    ownerName={currObj?.ownerName}
                                    hasUpcommingBtn={true} 
                                    hasAccessInfoBtn={true} />
                                </div>
                            ))
                        }

                        {
                             dropsEndedDataArr.map((currObj,i)=>(
                                <div className='p-4' key={i}>
                                    <DropsCard
                                    cardImgSrc={currObj?.cardImgSrc}
                                    ownerImgSrc={currObj?.ownerImgSrc}
                                    title={currObj?.title}
                                    ownerName={currObj?.ownerName} 
                                    />
                                </div>
                            ))
                        }
            </div>
        </section>
    </>
  )
}


export default DropsSectionsContainer










































// {
//     dropsUpcommingDataArr.map((currObj,i)=>(
//         <div className='p-4' key={i}>
//             <DropsCard
//             cardImgSrc={currObj?.cardImgSrc}
//             ownerImgSrc={currObj?.ownerImgSrc}
//             title={currObj?.title}
//             ownerName={currObj?.ownerName}
//             hasUpcommingBtn={true} 
//             hasAccessInfoBtn={true} />
//         </div>
//     ))
// }

// {
//     dropsCurrentDataArr.map((currObj,i)=>(
//         <div className='p-4' key={i}>
//             <DropsCard
//             cardImgSrc={currObj?.cardImgSrc}
//             ownerImgSrc={currObj?.ownerImgSrc}
//             title={currObj?.title}
//             ownerName={currObj?.ownerName}
//             hasUpcommingBtn={true} 
//             hasAccessInfoBtn={true} />
//         </div>
//     ))
// }

// {
//      dropsEndedDataArr.map((currObj,i)=>(
//         <div className='p-4' key={i}>
//             <DropsCard
//             cardImgSrc={currObj?.cardImgSrc}
//             ownerImgSrc={currObj?.ownerImgSrc}
//             title={currObj?.title}
//             ownerName={currObj?.ownerName} 
//             />
//         </div>
//     ))
// }























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