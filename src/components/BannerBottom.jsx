import React from 'react'
import { Link } from 'react-router-dom'

const BannerBottom = () => {
  return (
    <Link to={'/product-list'}>
    <section className='md:flex hidden bg-slate-200 gap-7 h-72 w-full cursor-pointer'>
      <img className='ml-1 h-full' src="/images/banner.jpg" alt="banner_img" loading='lazy' />
      <img className='h-full w-full mr-1' src="/images/banner3.jpg" alt="banner3_img" loading='lazy' />
    </section>
    </Link>
  )
}

export default BannerBottom
