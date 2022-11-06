import './Nav.css'
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import {SearchBar} from '../SearchBar/SearchBar'
import { Notificaciones } from '../Notificaciones/Notificaciones';

import { Avatar, AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu,  } from '@mui/material';
import { 
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon
} from '@mui/icons-material';

const notificaciones=[
  {id:1,
    authorPicture:'',
  authorName:'',
  description:'',
  visto:true}
  ,
  {id:2,
    visto:true,
    authorPicture:'',
  authorName:'',
  description:''},
  {id:3,
    authorPicture:'',
  authorName:'',
  description:'',
  visto:false},
  {id:4,
    authorPicture:'',
  authorName:'',
  description:'',
  visto:false}
]

export const Nav =()=>{
  const {logout}= useAuth0()
  const history=useNavigate();
  const [notCount, SetNotCount]=React.useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const[open,setOpen]=useState(false)
  const userLoged = useSelector(state => state.UserLoged);

  // useEffect(()=>{
  //   notificaciones.map((n)=>{
  //     if(n.visto===false){
  //       SetNotCount(notCount+1)
  //     }
  //   })
  // },[])


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNotification=()=>{
    setOpen(!open)
    SetNotCount(0)
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={`/profile`}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={() => logout({ returnTo: window.Location.origin })}> LOGOUT </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 16 new notifications"
          color="inherit"
        >
          <Badge badgeContent={18} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar sx={{backgroundColor:'rgb(22, 17, 41)' }}  position="static">
        <Toolbar>
        {/* Object.entries(User).length === 0 && `${User.user}` */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <button className='SYN' onClick={(e)=>{history(`/home`);}} >SYT</button>

          </Typography>
            <SearchBar/>
          
          
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
              <IconButton
                onClick={handleNotification}
                onBlur={()=>{setTimeout(()=>{setOpen(false)},100)}}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={notCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                 {Object.entries(userLoged).length === 0?(
                  <Avatar alt={'...'}src={'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'}/>
                ):(
                  <Avatar alt={`${userLoged.usuario}`} src={userLoged.foto_principal} />
                )}
                
              </IconButton>
            </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Notificaciones open={open}/>
    </Box>
  ); 
}
