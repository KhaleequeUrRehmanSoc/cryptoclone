import Link from "next/link";
import React from "react";

const Footer = () => {

    const footerLIstArr = [
        {
          listItem: "App",
          subListItems:[
            "Buy and Sell",
            "Crypto Earn",
            "Crypto.com Pay",
          ]
        },
        {
            listItem: "Exchange",
            subListItems:[
              "Exchange Home",
              "Margin Trading",
              "Derivatives Trading",
              "The Syndicate",
              "Supercharger",
              "Trading Arena",
            ]
        },
        {
            listItem: "Defi",
            subListItems:[
              "Wallet",
              "Swap",
              "Earn",
              "Dashboard",
            ]
        },
        {
            listItem: "Resources",
            subListItems:[
              "Prices",
              "Site Widgets",
              "Tax",
              "Support",
              "Proof of Reserves",
            ]
        },
        {
            listItem: "Learn",
            subListItems:[
              "What's Trending",
              "Product News",
              "Events",
              "University",
              "Research",
              "Market Updates",
              "NFT Deep Dives",
              "What is Bitcoin",
            ]
        },
        {
            listItem: "Company",
            subListItems:[
                "About",
                "Careers",
                "News",
                "Security",
                "Contact",
                "Capital",
                "Climate",
                "Affiliate",
                "Partners",
                "NFT",
            ]
        },
        {
            listItem: "Cards",
            subListItems:[
                "Metal Visa Cards",
            ]
        },
        {
            listItem: "Commerce",
            subListItems:[
                "Pay for Business",
            ]
        },
    ]

    const paraArr = [
        "The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Crypto.com App."
        ,
        "Please note that the availability of the products and services on the Crypto.com App is subject to jurisdictional limitations. Crypto.com may not offer certain products, features and/or services on the Crypto.com App in certain jurisdictions due to potential or actual regulatory restrictions."
    ]

  return (
    <>
      <footer className="body-font bg-[#061121] text-[#EAEEF4]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            {
                footerLIstArr?.length>0 && footerLIstArr?.map((item,i)=> (
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={i}>
                        <h2 className="title-font font-semibold tracking-widest text-lg mb-3">
                            {item?.listItem}
                        </h2>
                        <nav className="list-none mb-10">
                            {
                                item?.subListItems?.length>0 && item?.subListItems?.map((item,i)=> (
                                    <li key={i}>
                                        <Link href="#" className="no-underline">{item}</Link>
                                    </li>
                                ))
                            }
                        </nav>
                    </div>
                 ) )
            }
          </div>
        </div>
        <div className="bg-[#061121] text-[#EAEEF4]">
          <div className="container mx-auto py-4 px-5">
            {
               paraArr?.length>0 && paraArr?.map((item,i)=> (
                    <p className="my-4 text-[11px] opacity-50" key={i}>{item}</p>
               ))  
            }
            <hr className="opacity-50" />
            <div className="my-2 flex items-center flex-wrap">
                <p className="text-[11px] opacity-50 my-1 mr-4">Copyright © 2018 - 2023  Crypto.com. All rights reserved.</p>
                <p className="text-[11px] opacity-50 my-1">Privacy Notice | status</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
