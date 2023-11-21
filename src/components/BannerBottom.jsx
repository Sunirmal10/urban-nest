import React from 'react'
import { Link } from 'react-router-dom'

const BannerBottom = () => {
  return (
    <Link to={'/product-list'}>
    <div className='md:flex hidden bg-slate-200 gap-7 w-full cursor-pointer'>
      <img src="/images/banner.jpg" alt="banner_img" />
      <img className='h-[315px]' src="/images/banner3.jpg" alt="banner_img" />
    </div>
    </Link>
  )
}

export default BannerBottom
