import React from 'react'
import { products } from '../constants/productsData'
import Product from './Product'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div className='flex flex-wrap justify-center gap-2 md:gap-[20px] md:px-6 px-1 pt-10 md:pt-14 items-center relative'>

              <p className='flex items-center md:gap-4 gap-2 font-semibold absolute top-2 md:top-5 md:left-6 left-2'>ALL PRODUCTS <span className='text-xs text-slate-400 font-normal hover:font-medium hover:underline hover:text-slate-700'><Link to={'/product-list'}>view more</Link></span></p>
      {
        products.slice(0, 12).map((item)=>(
         
            <Product item={item} key={item.id}/>
            
        ))
      }
    </div>
  )
}

export default AllProducts
