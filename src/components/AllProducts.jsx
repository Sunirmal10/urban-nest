import React from 'react'
import { products } from '../constants/productsData'
import Product from './Product'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div className='flex flex-wrap justify-start gap-[20px] px-6 pt-14 items-center relative'>
              <p className='flex items-center gap-4 font-semibold absolute top-5 left-6'>ALL PRODUCTS <span className='text-xs text-slate-400 font-normal hover:font-medium hover:underline hover:text-slate-700'><Link to={'/product-list'}>view more</Link></span></p>
      {
        products.slice(0, 12).map((item)=>(
         
            <Product item={item} key={item.id}/>
            
        ))
      }
    </div>
  )
}

export default AllProducts
