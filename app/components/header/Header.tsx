'use client'
import Container from '@/app/utils/Container'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { useDispatch } from 'react-redux'
import { searchFetch } from '@/app/redux/features/searchSlice'

const Header = () => {
  const dispatch = useDispatch<any>();
  searchFetch()
  return (
    <header>
      <Container>
        <Navbar />
      </Container>
      <button onClick={()=>dispatch(searchFetch())}>Click</button>
    </header>
  )
}

export default Header