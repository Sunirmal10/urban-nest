import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import SingleFilteredProduct from './SingleFilteredProduct'
import Product from './Product'
import { products } from '../constants/productsData'


const FilteredProducts = ({}) => {

    const { filteredproducts, selectedCat, setSelectedCat, valChecked} = useContext(AppContext);
  

  return (
    <section className='flex flex-wrap w-full md:w-4/5 md:justify-start md:gap-[75px] justify-around gap-2 md:px-6 px-1 pt-14 items-start relative'>
    <h3 className='flex font-semibold absolute top-5 left-6 gap-1'>
      PRODUCTS</h3>
   
   {
       filteredproducts.map((item)=>(
         <Product  item={item} key={item.id}/>

       ))
            
            
        
      }
</section>
  )
}

export default FilteredProducts
