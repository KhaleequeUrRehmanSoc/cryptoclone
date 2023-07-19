"use client"

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // padding:"1.5rem 0",
  // borderBottom: `1px solid #7D7D7D`,
  backgroundColor: `#0b1426`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem',color:"white" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: `1px solid #7D7D7D`,
  // padding:"0px",
  padding:"1.5rem 0",
  backgroundColor:'#0b1426',
  color:"white",
  fontSize:"16px",
  fontWeight:"600",
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor:"#0b1426",
  color:"#a0a9be"
}));


const Desc = () => {
  return (<>
    <a href='https://crypto.com/university/what-is-bitcoin/' className='text-[#1199fa] underline'>Bitcoin</a> is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation.
    Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions.
    Bitcoin can be bought, sold, and exchanged on various cryptocurrency <a href='http://crypto.com/exchange' className='text-[#1199fa] underline'>exchanges</a>, and it can be used to purchase goods and services from merchants that accept Bitcoin as a form of payment. The supply of bitcoins is limited to 21 million units, and new bitcoins are created through mining, which involves using specialized computer hardware to solve complex mathematical equations.
    Bitcoin is known for its high volatility, and its value can fluctuate rapidly in response to market conditions, news events, and other factors. Many traders, including institutional investors, see Bitcoin as a store of value and a way to participate in the growing cryptocurrency ecosystem.
    </>)
}




// const FaqArr = [
//     {
//         title:'What is crypto?',
//         description:(<>
//         Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank.
//         Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos.
//         Many cryptocurrencies, like Bitcoin, are created through a process called mining, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called Proof of Work (PoW). Another consensus mechanism that has increased in popularity — as it is more energy efficient — is Proof of Stake (PoS). Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.
//         </>)
//     },
//     {
//         title:'What is Bitcoin?',
//         description:(<>
//         <a href='https://crypto.com/university/what-is-bitcoin/' className='text-[#1199fa] underline'>Bitcoin</a> is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation.
//         Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions.
//         Bitcoin can be bought, sold, and exchanged on various cryptocurrency <a href='http://crypto.com/exchange' className='text-[#1199fa] underline'>exchanges</a>, and it can be used to purchase goods and services from merchants that accept Bitcoin as a form of payment. The supply of bitcoins is limited to 21 million units, and new bitcoins are created through mining, which involves using specialized computer hardware to solve complex mathematical equations.
//         Bitcoin is known for its high volatility, and its value can fluctuate rapidly in response to market conditions, news events, and other factors. Many traders, including institutional investors, see Bitcoin as a store of value and a way to participate in the growing cryptocurrency ecosystem.
//         </>)
//     },
//     {
//         title:'Where to buy crypto?',
//         description:(<>
//         There are several ways to buy cryptocurrencies, including:
//         Brokerage services: Crypto brokers allow users to simply buy and sell cryptocurrencies. A popular example is the Crypto.com App, trusted by over 80 million users. It is available at the Apple Store and on Google Play.
//         Cryptocurrency exchanges: These are online platforms where users can buy, sell, and trade cryptocurrencies using fiat currency or other cryptocurrencies. They offer more complex functions compared to a crypto brokerage, adding trading instruments like crypto derivatives. The Crypto.com Exchange is an example of a popular crypto exchange.
//         Peer-to-peer (P2P) marketplaces: These are platforms where buyers and sellers can directly trade cryptocurrencies without the involvement of a third-party exchange. This is also known as DeFi, short for decentralized finance. Multiple P2P crypto marketplaces can be accessed all in one app via the Crypto.com DeFi Wallet.
//         It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.
//         </>)
//     },
//     {
//         title:'How to buy crypto?',
//         description:(<>
//         There are several ways to buy cryptocurrencies, including:
//         Brokerage services: Crypto brokers allow users to simply buy and sell cryptocurrencies. A popular example is the Crypto.com App, trusted by over 80 million users. It is available at the Apple Store and on Google Play.
//         Cryptocurrency exchanges: These are online platforms where users can buy, sell, and trade cryptocurrencies using fiat currency or other cryptocurrencies. They offer more complex functions compared to a crypto brokerage, adding trading instruments like crypto derivatives. The Crypto.com Exchange is an example of a popular crypto exchange.
//         Peer-to-peer (P2P) marketplaces: These are platforms where buyers and sellers can directly trade cryptocurrencies without the involvement of a third-party exchange. This is also known as DeFi, short for decentralized finance. Multiple P2P crypto marketplaces can be accessed all in one app via the Crypto.com DeFi Wallet.
//         It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.
//         </>)
//     },
// ]

const FaqArr = [
    {
        title:'What is crypto?',
        description:<Desc />
    },
    {
        title:'What is Bitcoin?',
        description:<Desc />
    },
    {
        title:'Where to buy crypto?',
        description:<Desc />
    },
    {
        title:'How to buy Bitcoin?',
        description:<Desc />
    },
    {
        title:'How to trade crypto?',
        description:<Desc />
    },
    {
        title:'How to earn crypto?',
        description:<Desc />
    },
    {
        title:'How to earn rewards on crypto?',
        description:<Desc />
    },
]

const CustomAccordion = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        {
            FaqArr?.length>0 &&  FaqArr?.map((item,i)=> (
                <Accordion key={i} expanded={expanded === item?.title} onChange={handleChange(item?.title)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography fontWeight="inherit">{item?.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {item?.description}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            ))
        }
      
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}





export default CustomAccordion;