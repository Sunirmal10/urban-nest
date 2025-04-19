import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import AllProducts from '../components/AllProducts'
import Popular from '../components/Popular'
import BannerBottom from '../components/BannerBottom'


const Home = () => {
  return (
    <main className='flex flex-col mt-[60px] w-dvw gap-1 md:gap-4 mb-2'>
      <Slider/>
      <Categories/>
      <Popular/>
      <AllProducts/>
      <BannerBottom/>
    </main>
  )
}

export default Home
