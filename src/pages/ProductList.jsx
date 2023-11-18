import React from 'react'
import Filters from '../components/Filters'
// import AllProducts from '../components/AllProducts'
import FilteredProducts from '../components/FilteredProducts'

const ProductList = () => {
  return (
    <div className='flex flex-col w-full mb-5 mt-[60px] '>
      <div>TITLE SOMETHING</div>
      <div className='flex w-full'>
        <Filters/>
        <FilteredProducts/>
      </div>
    </div>
  )
}

export default ProductList
