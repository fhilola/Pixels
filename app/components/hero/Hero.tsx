import React, { useState } from 'react'
import './Hero.css'
import Image from 'next/image'
import { FiImage, FiSearch, FiVideo } from 'react-icons/fi'
import { SearchTypesList, SearchType } from '@/app/types'

const Hero = () => {
  const searchTypes: SearchTypesList = [
    {
      id: 0,
      title: "Images",
      icon: <FiImage/>
    },
    {
      id: 1,
      title: "Videos",
      icon: <FiVideo/>
    }
  ]
  const [searchType, setSearchType] = useState<string>('images')
  return (
    <section className='hero'>
        <Image 
        className='hero__image'
        src={'https://images.pexels.com/photos/18597677/pexels-photo-18597677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1'}
        alt='hero banner'
        width={2000}
        height={500}
        />
        <div className="hero__content">
          <h2>The best free stock photos, royalty free images & videos shared by creators.</h2>
          <form>
            <div className="hero__search">
              <div className="search__type">
                  <span>{searchType}</span>
                  <div className="search-type-wrapper"></div>
                <ul className="search__type-menu">
                  {
                    searchTypes.map((searchTypeItem : SearchType)=>
                    <li onClick={()=>setSearchType(searchTypeItem.title)} key={searchTypeItem.id}>{searchTypeItem.icon}{searchTypeItem.title}</li>
                    )
                  }
                </ul>
              </div>
              <input type="text" placeholder='Search free photos' className='hero__input'/>
              <FiSearch/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Hero