import BuyCrypto from "./components/BuyCrypto";
import CryptoEarn from "./components/CryptoEarn";
import CryptoExchange from "./components/CryptoExchange";
import Defi from "./components/Defi";
import Faq from "./components/Faq";
import Header from "./components/Header";
import OurVision from "./components/OurVision";
import VisaCard from "./components/VisaCard";

export default function Home() {
  
  return (
    <>
      <Header />
      <BuyCrypto />
      <VisaCard />
      <CryptoEarn />
      <CryptoExchange />
      <Defi />
      <OurVision />
      <Faq />
    </>
  )
}
