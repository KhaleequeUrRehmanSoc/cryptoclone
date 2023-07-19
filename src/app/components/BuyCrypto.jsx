import Link from "next/link";
import React from "react";
import RightArrowSvg from "./icons/RightArrowSvg";
import BuyCryptoListItem from "./BuyCryptoListItem";



const BuyCrypto = () => {
  return (
    <>
      <section className="w-full py-32 bg-[#010118]">
        <div className="mx-auto w-full text-center">
            <h4 className="mb-4 text-base md:text-lg  font-semibold text-[#1199fa]">
                SECURELY BUY, SELL, STORE, SEND and TRACK
            </h4>
            <h1 className="mb-6 text-[2rem] md:text-[4rem] font-semibold text-white">
                Buy crypto at true cost
            </h1>
            <h5 className="mb-8 text-sm font-normal text-[#C9CFDD]">
                Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.
            </h5>
        </div>
        <div className="w-full hidden lg:block mt-16">
          {
            [1,2,3,4,5].map((item,i)=>(
              <BuyCryptoListItem key={i} />
            ))
          }
        </div>
        <div className="mt-16 mb-24 text-center">
          <Link
            href="#"
            className="inline-block bg-transparent text-[#f4f4f4] border-[1px] border-[#f4f4f4] text-lg font-semibold capitalize px-6 py-3 rounded-[40px]"
          >
            Learn More <RightArrowSvg />
          </Link> 
        </div>
      </section>
    </>
  );
};

// #010118
export default BuyCrypto;
