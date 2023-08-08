import Image from "next/image";
import React from "react";
import NftSvg from "./icons/NftSvg";
import EtherumSvg from "./icons/EtherumSvg";

const NftCard = ({nftImgSrc,ownerImgSrc,ownerName,name,mintQuantity,startingBidPrice,endTime}) => {

   
  return (
    <>
      <div className="rounded-2xl min-w-[8.5625rem] max-w-[21.9375rem]">
        <div className="relative w-full h-[17.25rem] rounded-tl-2xl rounded-tr-2xl">
          <Image
            className="rounded-tl-2xl rounded-tr-2xl object-cover"
            src={nftImgSrc && nftImgSrc}
            fill
            alt="image"
          />
        </div>
        <div className="p-4 rounded-bl-2xl rounded-br-2xl bg-white text-black">
          <div className="flex items-center">
            <Image
              className="rounded-[100%] object-cover"
              src={ownerImgSrc && ownerImgSrc}
              width={20}
              height={20}
              alt="image"
            />
            <h2 className="mx-2 text-xs font-medium whitespace-nowrap text-ellipsis overflow-hidden">{ownerName && ownerName}</h2>
            <NftSvg />
          </div>
          <div className="w-full">
            <div className="mt-2 flex justify-between items-center">
                <h4 className="text-base font-semibold">{name && name}</h4>
                <EtherumSvg />
            </div>
            <div className="mt-[0.875rem]">
                <h6 className="text-left text-xs font-normal text-[#626973]">{`${mintQuantity && mintQuantity} minted`}</h6>
            </div>
            <div className="flex justify-between gap-2 items-center flex-wrap">
                <div className="my-1 flex-grow">
                <div className="bg-[#F7F9FA] py-2 px-3 rounded-lg">
                    <div className="w-full flex justify-between items-center">
                    <h6 className="text-xs font-normal text-[#626973]">
                        Starting Bid
                    </h6>
                    <h6 className="text-sm font-semibold text-black">{`$${startingBidPrice && startingBidPrice}`}</h6>
                    </div>
                    <div className="w-full flex justify-between items-center">
                    <h6 className="text-xs font-normal text-[#626973]">
                        Ends In
                    </h6>
                    <h6 className="text-xs font-normal text-[#626973]">{endTime && endTime}</h6>
                    </div>
                </div>
                </div>
                <div className="my-1 flex gap-3 items-center">
                <div className="bg-[#E7F5FE] px-3 py-[.625rem] rounded-lg p-3 text-[#1199fa] font-semibold text-base text-center">
                    Add
                </div>
                <div className="bg-[#E7F5FE] px-3 py-[.625rem] rounded-lg p-3 text-[#1199fa] font-semibold text-base text-center">
                    Buy
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCard;



























// import Image from "next/image";
// import React from "react";
// import NftSvg from "./icons/NftSvg";
// import EtherumSvg from "./icons/EtherumSvg";

// const NftCard = ({nftImgSrc,ownerImgSrc,ownerName,name,mintQuantity,startingBidPrice,endTime}) => {

   
//   return (
//     <>
//       <div className="rounded-2xl min-w-[8.5625rem] max-w-[21.9375rem]">
//         <div className="relative w-full h-[17.25rem] rounded-tl-2xl rounded-tr-2xl">
//           <Image
//             className="rounded-tl-2xl rounded-tr-2xl object-cover"
//             src="/assets/images/top_collectibles/top_collectible_pic1.png"
//             fill
//             alt="image"
//           />
//         </div>
//         <div className="p-4 rounded-bl-2xl rounded-br-2xl bg-white text-black">
//           <div className="flex items-center">
//             <Image
//               className="rounded-[100%] object-cover"
//               src="/assets/images/nft_user_pic.webp"
//               width={20}
//               height={20}
//               alt="image"
//             />
//             <h2 className="mx-2 text-xs font-medium whitespace-nowrap text-ellipsis overflow-hidden">Crypto.com Land - The First Frontier</h2>
//             <NftSvg />
//           </div>
//           <div className="w-full">
//             <div className="mt-2 flex justify-between items-center">
//                 <h4 className="text-base font-semibold">Yokai #4673</h4>
//                 <EtherumSvg />
//             </div>
//             <div className="mt-[0.875rem]">
//                 <h6 className="text-left text-xs font-normal text-[#626973]">1 minted</h6>
//             </div>
//             <div className="flex justify-between gap-2 items-center flex-wrap">
//                 <div className="my-1 flex-grow">
//                 <div className="bg-[#F7F9FA] py-2 px-3 rounded-lg">
//                     <div className="w-full flex justify-between items-center">
//                     <h6 className="text-xs font-normal text-[#626973]">
//                         Starting Bid
//                     </h6>
//                     <h6 className="text-sm font-semibold text-black">$101</h6>
//                     </div>
//                     <div className="w-full flex justify-between items-center">
//                     <h6 className="text-xs font-normal text-[#626973]">
//                         Ends In
//                     </h6>
//                     <h6 className="text-xs font-normal text-[#626973]">
//                         53 minutes
//                     </h6>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="my-1 flex gap-3 items-center">
//                 <div className="bg-[#E7F5FE] px-3 py-[.625rem] rounded-lg p-3 text-[#1199fa] font-semibold text-base text-center">
//                     Add
//                 </div>
//                 <div className="bg-[#E7F5FE] px-3 py-[.625rem] rounded-lg p-3 text-[#1199fa] font-semibold text-base text-center">
//                     Buy
//                 </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NftCard;