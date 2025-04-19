import React, { useState } from 'react'
import { products } from '../constants/productsData'
import Product from './Product'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const [loadMore, setLoadMore] = useState(12)
  return (
    <main className='flex flex-col gap-1'>
         <p className='flex items-center md:gap-4 gap-2 font-semibold pt-2 md:pt-5 md:pl-6 pl-2'>ALL PRODUCTS <span className='text-xs text-slate-400 font-normal hover:font-medium hover:underline hover:text-slate-700'><Link to={'/product-list'}>view all</Link></span></p>

         <div className='flex flex-wrap justify-center gap-2 md:gap-[20px] md:px-6 px-1 pt-1 items-center'>

           
      {
        products.slice(0, loadMore).map((item)=>(
         
            <Product item={item} key={item.id}/>
            
        ))
      }
     
      </div>
      {/* Buttons  */}
      <div className='flex mt-3 justify-center items-center'>
      {
        loadMore < 36 ?
      
      <button className='flex rounded-md border text-slate-500 border-slate-200 bg-slate-100 text-sm hover:bg-slate-200 cursor-pointer active:scale-[0.8] px-4 py-3'
      onClick={()=>setLoadMore((prev)=>prev < 36 ? prev + 6 : 36)}
      >Load More....</button>
    :
    <Link to={'/product-list'}>
    <button className='flex rounded-md border text-slate-500 border-slate-200 bg-slate-100 text-sm hover:bg-slate-200 cursor-pointer active:scale-[0.8] px-4 py-3'
     
      >
       view all..
      </button>
      </Link>
    }
      </div>
     
    </main>
    
  )
}

export default AllProducts
