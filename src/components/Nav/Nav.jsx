import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SearchBar } from '../SearchBar/SearchBar'
import { Notificaciones } from '../Notificaciones/Notificaciones';
import './Nav.css'

const notificaciones = [
  {
    id: 1,
    authorPicture: '',
    authorName: '',
    description: '',
    visto: true
  },
  {
    id: 2,
    visto: true,
    authorPicture: '',
    authorName: '',
    description: ''
  },
  {
    id: 3,
    authorPicture: '',
    authorName: '',
    description: '',
    visto: false
  },
  {
    id: 4,
    authorPicture: '',
    authorName: '',
    description: '',
    visto: false
  }
]

export const Nav = (props) => {
  const User = useSelector(state => state.User)
  const history = useNavigate();
  const [notCount, SetNotCount] = React.useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    notificaciones.map((n) => {
      if (n.visto === false) {
        SetNotCount(notCount + 1)
      }
    })
  }, [])
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
  const handleNotification = () => {
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
      onClose={handleMenuClose}>
      <Link to={`/profile/${id}`}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link to={`/`}>
        <MenuItem onClick={handleMenuClose}>Cerrar Sesion</MenuItem>
      </Link>
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
      onClose={handleMobileMenuClose}>
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
          color="inherit">
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
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'rgb(22, 17, 41)' }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            <button className='SYN' onClick={(e) => { history(`/home/${User.user.id}`); }} >SYT</button>
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              onClick={handleNotification}
              onBlur={() => { setTimeout(() => { setOpen(false) }, 100) }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
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
              color="inherit">
              {Object.entries(User).length === 0 ? (
                <Avatar alt={'...'} src={'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'} />
              ) : (
                <Avatar alt={`${User.user.usuario}`} src={User.user.foto_principal} />
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
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Notificaciones open={open} />
    </Box>
  );
}
