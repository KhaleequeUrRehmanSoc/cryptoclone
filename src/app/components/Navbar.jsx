"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import PhoneSvg from './icons/PhoneSvg';
import WorldSvg from './icons/WorldSvg';
import World2Svg from './icons/World2Svg';
// import Footer from './Footer';

// const drawerWidth = 240;
const drawerWidth = "100vw";
const navItems = [
    'NFT',
    'Prices',
    'Products',
    'Company',
    'Learn',
];

const mobileNavItems = [
    'Crypto.com App',
    'Exchange',
    'DeFi',
    'Ecosystem',
    'Company',
    'Learn',
    'Prices',
    'NFT',
];

function Navbar(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'left',minHeight:'100vh' }} className="flex flex-col justify-between">
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",px:"2rem"}}>
        <Box className="flex">
          <Box sx={{ py: 2,mr:"10px" }}>
            <WorldSvg />
          </Box>
          <Typography variant="h6" sx={{ py: 2 }} className='text-base font-semibold text-[#424242]'>
              GLOBAL | EN
          </Typography>
        </Box>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { lg: 'none' } }}
        >
            <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List className='overflow-y-auto'>
        {mobileNavItems.map((item) => (
          <Link key={item}  href={`#${item}`} className='no-underline'>
            <ListItem disablePadding className='px-4'>
              <ListItemButton className='text-black text-lg font-semibold'>
                {item}
              </ListItemButton>
            </ListItem>
          </Link>
          // <p key={item} className='py-2 px-8 text-black text-lg font-semibold'>{item}</p>
        ))}
      </List>
      <Divider />
      <Box className="ml-4 py-2">
        <Link href="#">
          {/* <Button variant='outlined' startIcon={<DeleteIcon />} className='border-[1.5px] border-[#0b1426] text-[#0b1426] text-base font-semibold'>Download App</Button> */}
          <Button variant='outlined' startIcon={<PhoneSvg />} className='border-[1.5px] border-[#0b1426] text-[#0b1426] text-base font-semibold'>Download App</Button>
        </Link>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" 
      sx={{bgcolor:'#061121',color:'#F4F4F4'}}
      >
        <Toolbar className='w-full mx-auto'>
            <Box className="w-10/12 mx-auto flex justify-between items-center">
                <Box className='w-[9.188rem] h-[1.762rem]'>
                    <Image
                    src="/assets/images/logo.png"
                    alt='logo'
                    width={147}
                    height={28.9}
                    />
                </Box>
                <Box className="flex items-center">
                  <Box sx={{ display: { xs: 'none', lg: 'block' } }} className="mr-8">
                      {navItems.map((item) => (
                        <Link key={item}  href={`#${item}`} className='no-underline'>
                          <Button key={item} sx={{color:"#F4F4F4"}} className='text-lg capitalize opacity-50 hover:opacity-100'>
                              {item}
                          </Button>
                        </Link>
                      ))}
                  </Box>
                  <Link href="#" className='hidden lg:inline-block border-[1.5px] border-[#1199f980] text-[#FFFFFF] text-base font-semibold capitalize  p-2 rounded-lg'>
                    Download App
                  </Link>

                  <Box className="hidden lg:flex items-center ml-8 ">
                    <Box sx={{ mr:"6px" }}>
                      <World2Svg />
                    </Box>
                    <Typography variant="h6" className='mt-[2px] text-base font-semibold text-[#f4f4f4] capitalize'>
                      English
                    </Typography>
                  </Box>
                </Box>
                
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { lg: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{}}>
        <Toolbar />
        {children}
        {/* <div className='py-2 w-full'>
          <Footer />
        </div> */}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
