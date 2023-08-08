"use client"

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import Link from 'next/link';

const CustomDropdown = ({title,variant,logoutHandler,...rest}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownMenuListDataArr = [
    {
        title:"Price Alerts",
        link:"/nft/profile",
        icon: ""
    },
    {
        title:"Watchlist",
        link:"/nft/profile",
        icon: ""
    },
    {
        title:"Account Activity",
        link:"/nft/profile",
        icon: ""
    },
    {
        title:"Edit profile",
        link:"/nft/profile",
        icon: ""
    },
    {
        title:"Settings",
        link:"/nft/profile",
        icon: ""
    },
    {
        title:"Logout",
        icon: ""
    },
  ]

  return (
    <>
    {
        variant === "accountMenu" ?
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title={title && title?.slice(0,1)}>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    {...rest}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>{title && title}</Avatar>
                </IconButton>
                </Tooltip>
            </Box>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {
                Array.isArray(dropdownMenuListDataArr) && dropdownMenuListDataArr.length>0 && dropdownMenuListDataArr.map((item,i)=> (  
                  item?.title !== "Logout" ? 
                  <>
                    <Link href={item?.link}>
                    <MenuItem onClick={handleClose} key={i} sx={{fontSize:"1rem",fontWeight:500,color:"black"}}>
                    <ListItemIcon>
                        {item && item?.icon}
                    </ListItemIcon>
                    {item && item?.title}
                    </MenuItem>
                    </Link>
                  </>
                  :
                  <>
                    <MenuItem onClick={logoutHandler} key={i} sx={{fontSize:"1rem",fontWeight:500,color:"black"}}>
                    <ListItemIcon>
                        {item && item?.icon}
                    </ListItemIcon>
                    {item && item?.title}
                    </MenuItem>
                  </>
                )) 
              }
            </Menu>
        </>
        :
        <>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Button
            sx={{textTransform:"capitalize",bgcolor:"transparent",":hover":{bgcolor:"transparent"}}}
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            startIcon={<PersonIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            {...rest}
            >
            {title && title}
            </Button>
        </Box>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        >
          {
            Array.isArray(dropdownMenuListDataArr) && dropdownMenuListDataArr.length>0 && dropdownMenuListDataArr.map((item,i)=> (
                item?.title !== "Logout" ? 
                <>
                  <Link href={item?.link}>
                  <MenuItem onClick={handleClose} key={i} sx={{fontSize:"1rem",fontWeight:500,color:"black"}}>
                  <ListItemIcon>
                      {item && item?.icon}
                  </ListItemIcon>
                  {item && item?.title}
                  </MenuItem>
                  </Link>
                </>
                :
                <>
                  <MenuItem onClick={()=> {handleClose(); logoutHandler();}} key={i} sx={{fontSize:"1rem",fontWeight:500,color:"black"}}>
                  <ListItemIcon>
                      {item && item?.icon}
                  </ListItemIcon>
                  {item && item?.title}
                  </MenuItem>
                </>
            )) 
          }
        </Menu>
        </>
    }
    </>
  );
}

export default CustomDropdown