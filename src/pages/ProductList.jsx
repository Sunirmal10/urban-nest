import React from 'react'
import Filters from '../components/Filters'
import AllProducts from '../components/AllProducts'

const ProductList = () => {
  return (
    <div className='flex flex-col w-full mt-[60px]'>
      <div>TITLE SOMETHING</div>
      <div className='flex w-full'>
        <Filters/>
        <AllProducts/>
      </div>
    </div>
  )
}

export default ProductList
