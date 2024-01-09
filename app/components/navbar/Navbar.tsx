'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiBell } from 'react-icons/fi'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Container } from '@mui/material'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0)
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    window.addEventListener("scroll", (e: Event)=>{
      setCurrentPosition(window.scrollY)
    })
  },[])
  return (
    <nav className={`header__nav ${currentPosition >= 400 ? 'nav--light' : ''}`}>
      <Container>
        <div className='nav__wrapper'>
        <Link href={'/'} className='nav__logo-wrapper'>
        <Image
        className='nav__logo'
        src={'/logo.png'}
        alt='Pexels Logo'
        width={200}
        height={75}
        />
        <h1 className='header__title'>Pexels</h1>
        </Link>
        <ul className="nav__menu">
          <li className='menu__item'>Explore</li>
          <li className='menu__item'>License</li>
          <li className='menu__item'><FiBell/></li>
          <li className='menu__item'>
            <Button 
               aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} onMouseEnter={handleClick}>
                 <Avatar  sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
               </Button>
            <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
          </li>
        </ul>
      </div>
      </Container>
    </nav>
  )
}

export default Navbar