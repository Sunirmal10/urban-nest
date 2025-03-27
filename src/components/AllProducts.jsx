import React, { useState } from 'react'
import { products } from '../constants/productsData'
import Product from './Product'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const [loadMore, setLoadMore] = useState(12)
  return (
    <div className='flex flex-wrap justify-center gap-2 md:gap-[20px] md:px-6 px-1 pt-10 md:pt-14 items-center relative'>

              <p className='flex items-center md:gap-4 gap-2 font-semibold absolute top-2 md:top-5 md:left-6 left-2'>ALL PRODUCTS <span className='text-xs text-slate-400 font-normal hover:font-medium hover:underline hover:text-slate-700'><Link to={'/product-list'}>view all</Link></span></p>
      {
        products.slice(0, loadMore).map((item)=>(
         
            <Product item={item} key={item.id}/>
            
        ))
      }
      {
        loadMore < 36 ?
      
      <button className='flex rounded-md  bg-slate-100 text-sm hover:bg-slate-200 cursor-pointer active:scale-[0.8] px-4 py-3'
      onClick={()=>setLoadMore((prev)=>prev < 36 ? prev + 6 : 36)}
      >Load More....</button>
    :
    <button className='flex rounded-md  bg-slate-100 text-sm hover:bg-slate-200 cursor-pointer active:scale-[0.8] px-4 py-3'
     
      >
        <Link to={'/product-list'}>view all..</Link>
      </button>
    }
      </div>
  )
}

export default AllProducts
