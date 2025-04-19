import React, { useContext, useState } from 'react'
import Filters from '../components/Filters'
// import AllProducts from '../components/AllProducts'
import FilteredProducts from '../components/FilteredProducts'
import Filter from '../components/Filter'
import { products } from '../constants/productsData'
import Product from '../components/Product'
import { AppContext } from '../AppContext'

const ProductList = () => {

  return (
    <main className='flex flex-col w-full mb-5 mt-[60px] relative'>
      <div className='flex flex-col md:flex-row w-full'>
        {/* <Filter /> */}
        <Filters />
       <FilteredProducts />
      </div>
    </main>
  )
}

export default ProductList
