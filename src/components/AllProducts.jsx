import React from 'react'
import { products } from '../data/productsData'
import Product from './Product'

const AllProducts = () => {
  return (
    <div className='flex flex-wrap justify-start gap-[20px] px-6 pt-14 items-center relative'>
              <p className='flex font-semibold absolute top-5 left-6'>ALL PRODUCTS</p>
      {
        products.map((item)=>(
            <Product item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default AllProducts
