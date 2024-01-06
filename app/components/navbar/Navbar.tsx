import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Navbar.css'
import { FiBell } from 'react-icons/fi'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Navbar = () => {
  return (
    <nav className='header__nav'>
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
          <li className='menu__item'><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar