"use client"

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import NavbarLogoOnXlSvg from '../icons/NavbarLogoOnXlSvg';
import NavbarLogoOnLgSvg from '../icons/NavbarLogoOnLgSvg';
import SearchInputField from '../SearchInputField';
import CartSvg from '../icons/CartSvg';
import DownArrowSvg from '../icons/DownArrowSvg';
import HamburgerMenuSvg from '../icons/HamburgerMenuSvg';
import SearchSvg from '../icons/SearchSvg';
import { ToastContainer, toast } from 'react-toastify';
import CustomDropdown from '../CustomDropdown';

const navListArr = [
  {
  title: "Marketplace",
  link:"/nft/marketplace"
  },
  {
  title: "Drops",
  link:"/nft/drops"
  },
  {
  title: "Top Collections",
  link:"#"
  },
  {
  title: "Create",
  link:"#"
  },
]

const Navbar = () => {

const notify = () => toast("Logout Successfully");

const session = useSession();

const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



// // if (session.status === "unauthenticated") {
// //   router?.push("/nft/login");
// // }

// if (session.status === "authenticated") {
//   router?.push("/nft");
// }

console.log('session ',session)
  return (
    <>
      <div className='w-full bg-[#0b1426] py-4 overflow-x-hidden'>
        {
        isSearchBarVisible ?
        <div className='px-8 flex items-center gap-3 xl:hidden'>
          <div className="ml-4 flex-grow">
            <SearchInputField />
          </div>
          <p className='text-base font-normal text-white' onClick={()=> setIsSearchBarVisible(false)}>
            Cancel
          </p>
        </div>
        :
        <div className='px-8 xl:px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='mr-4 block xl:hidden' onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
              <HamburgerMenuSvg />
            </div>
            <Link href="/nft" className='flex items-center'>
              <div className='hidden xl:inline-block'>
                <NavbarLogoOnXlSvg />
              </div>
              <div className='inline-block xl:hidden'>
                <NavbarLogoOnLgSvg />
              </div>
            </Link>

            <div className="ml-4 hidden xl:block">
              <SearchInputField />
            </div>
          </div>
          
          <div className='flex items-center'> 
            <ul className='ml-4 hidden xl:flex items-center'>
              {
                Array.isArray(navListArr) && navListArr.length>0 && navListArr.map((item,i)=> (
                  item === "Top Collections" ? 
                  <li className='mr-4 flex items-center gap-2'>
                    <div className='no-underline text-base font-normal text-white capitalize' key={i}>
                      {item && item?.title}
                    </div>
                    <DownArrowSvg />
                  </li>
                : item?.title === "Create" ?
                    session.status === "authenticated" ?
                    <>
                      <li className='mr-4'>
                        <Link href="/nft/profile" className='no-underline text-base font-normal text-[#1199fa] capitalize' >My NFTs</Link>
                      </li>
                      <li className='mr-4'>
                        <Link href="3" className='no-underline inline-block mobileNavbarSignUpBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0 capitalize text-center'>Create</Link>
                      </li>
                    </>
                    :
                    <li className='mr-4'>
                      <Link href={item?.link} className='no-underline text-base font-normal text-white capitalize' key={i}>
                        {item && item?.title}
                      </Link>
                    </li>
                :
                  <li className='mr-4'>
                    <Link href={item?.link} className='no-underline text-base font-normal text-white capitalize' key={i}>
                      {item && item?.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className='mr-4 hidden xl:flex items-center gap-3 border-l border-l-[#626973]'>
              {
                session.status === "authenticated"? (
                  <>
                  {/* <CustomDropdown variant="accountMenu" title="k" className='capitalize' />
                  <button className='navbarBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0'  onClick={()=>{
                    signOut();
                    notify()
                  }}>Logout</button> */}
                  <CustomDropdown title={session?.data?.user?.name} className='capitalize' logoutHandler={()=>{
                    signOut();
                    notify()
                  }} />
                  </>
                )
                :
                (
                 <>
                  <Link href="/nft/login" className='no-underline pl-4 border-l border-l-[#626973] text-base font-normal text-white capitalize'>Sign In</Link>
                  <Link href="/nft/register" className='no-underline inline-block navbarBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0'>Signup</Link>
                 </>       
                )
              }
            </div>
            <div className='flex items-center gap-3'>
              <span className='no-underline hidden xl:inline-block pl-4 border-l border-l-[#626973] text-base font-normal text-white capitalize'>
                EN
              </span>
              <div className='block xl:hidden'>
                <button onClick={()=> setIsSearchBarVisible(true)}>
                  <SearchSvg />
                </button>
              </div>
              <div className='pl-4 xl:border-l xl:border-l-[#626973]'>
                <CartSvg />
              </div>
            </div>
          </div>  
        </div>
        }

        {
          mobileMenuOpen ?
          <div className='w-full bg-[#0b1426] mobileNavHeight flex flex-col justify-between items-start xl:hidden'>
            <div className='w-full px-4 mb-8'>
              <ul className='w-full'>
                <li className='mt-8'>
                  <Link href="/nft/marketplace" className='no-underline text-base font-normal text-white capitalize'>
                      Marketplace
                  </Link>
                </li>
                <li className='mt-8'>
                  <Link href="#" className='no-underline text-base font-normal text-white capitalize'>
                    Drops
                  </Link>
                </li>
                <li className='mt-8 flex justify-between items-center gap-2'>
                  <p className='no-underline text-base font-normal text-white capitalize'>
                    Top Collections
                  </p>
                  <DownArrowSvg />
                </li>
                <li className='mt-8'>
                  <Link href="#" className='no-underline inline-block navbarBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0'>Create</Link>
                </li>
              </ul>
              <div className='mt-8 border-t border-t-[#626973]'></div>
              <p className='mt-8 no-underline text-base font-normal text-white capitalize'>EN</p>
            </div>
            <div className='w-full p-4 border-t border-t-[#626973] flex justify-center items-center'>
              <div className='flex flex-wrap gap-4'>
                <Link href="/nft/login" className='min-w-[10.3125rem] no-underline inline-block bg-[#1199fa33] text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0 capitalize text-center'>Sign In</Link>
                {
                session.status === "authenticated"? (
                  <>
                  <button className='navbarBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0' onClick={()=>{
                     signOut();
                     notify()
                  }}>Logout</button>
                  </ >
                )
                :
                (      
                  <Link href="/nft/register" className='min-w-[10.3125rem] no-underline inline-block mobileNavbarSignUpBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0 capitalize text-center'>Sign up</Link>
                )
              }
                {/* <Link href="/nft/register" className='min-w-[10.3125rem] no-underline inline-block mobileNavbarSignUpBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0 capitalize text-center'>Sign up</Link> */}
              </div>
            </div>
          </div>
          : ""
        }
        
      </div>
      <ToastContainer />
    </>
  );
}

export default Navbar;



{/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}


{/* <Box className='w-[9.188rem] h-[1.762rem]'>
                    <Image
                    src="/assets/images/logo.png"
                    alt='logo'
                    width={147}
                    height={28.9}
                    />
                </Box> */}










                // <IconButton
                //     size="large"
                //     aria-label="account of current user"
                //     aria-controls="menu-appbar"
                //     aria-haspopup="true"
                //     onClick={handleOpenNavMenu}
                //     color="inherit"
                //   >
                //     <MenuIcon />
                //   </IconButton>
                //   <Menu
                //     id="menu-appbar"
                //     anchorEl={anchorElNav}
                //     anchorOrigin={{
                //       vertical: 'bottom',
                //       horizontal: 'left',
                //     }}
                //     keepMounted
                //     transformOrigin={{
                //       vertical: 'top',
                //       horizontal: 'left',
                //     }}
                //     open={Boolean(anchorElNav)}
                //     onClose={handleCloseNavMenu}
                //     sx={{
                //       display: { xs: 'block', md: 'none' },
                //     }}
                //   >
                //     {pages.map((page) => (
                //       <MenuItem key={page} component={Link} 
                //       href="#" onClick={handleCloseNavMenu}>
                //         <Typography textAlign="center">{page?.text}</Typography>
                //       </MenuItem>
                //     ))}
                //   </Menu>





















































{/* <div className='px-8 xl:px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='mr-4 block xl:hidden'>
              <HamburgerMenuSvg />
            </div>
            <Link href="#" className='flex items-center'>
              <div className='hidden xl:inline-block'>
                <NavbarLogoOnXlSvg />
              </div>
              <div className='inline-block xl:hidden'>
                <NavbarLogoOnLgSvg />
              </div>
            </Link>

            <div className="ml-4 hidden xl:block">
              <SearchInputField />
            </div>
          </div>
          
          <div className='flex items-center'> 
            <ul className='ml-4 hidden xl:flex items-center'>
              {
                Array.isArray(navListArr) && navListArr.length>0 && navListArr.map((item,i)=> (
                  item === "Top Collections" ? 
                  <li className='mr-4 flex items-center gap-2'>
                    <div href="#" className='no-underline text-base font-normal text-white capitalize' key={i}>
                       {item}
                    </div>
                    <DownArrowSvg />
                  </li>
                :
                  <li className='mr-4'>
                    <Link href="#" className='no-underline text-base font-normal text-white capitalize' key={i}>
                      {item}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className='mr-4 hidden xl:flex items-center gap-3'>
              <Link href="#" className='no-underline pl-4 border-l border-l-[#626973] text-base font-normal text-white capitalize'>
                Sign In
              </Link>
              <Link href="#" className='no-underline inline-block navbarBtnbg text-white rounded-[.25rem] font-semibold py-2 px-6 outline-0'>Signup</Link>
            </div>
            <div className='flex items-center gap-3'>
              <span className='no-underline hidden xl:inline-block pl-4 border-l border-l-[#626973] text-base font-normal text-white capitalize'>
                EN
              </span>
              <div className='block xl:hidden'>
                <button onClick={()=> setIsSearchBarVisible(true)}>
                  <SearchSvg />
                </button>
              </div>
              <div className='pl-4 xl:border-l xl:border-l-[#626973]'>
                <CartSvg />
              </div>
            </div>
          </div>
          
        </div> */}







                // import React, { useState } from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import Link from 'next/link';
// import Image from 'next/image';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Navbar = () => {

//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//             {/* <Box className='w-[9.188rem] h-[1.762rem]'>
//               <Image
//               src="/assets/images/logo.png"
//               alt='logo'
//               width={147}
//               height={28.9}
//               />
//             </Box> */}
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;



