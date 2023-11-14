import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import AllProducts from '../components/AllProducts'
import Popular from '../components/Popular'


const Home = () => {
  return (
    <div className='flex flex-col mt-[60px] gap-4 mb-5'>
      <Slider/>
      <Categories/>
      <Popular/>
      <AllProducts/>
    </div>
  )
}

export default Home
