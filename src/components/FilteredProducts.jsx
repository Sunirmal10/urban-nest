import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import SingleFilteredProduct from './SingleFilteredProduct'


const FilteredProducts = () => {

    const { filteredproducts, selectedCat, setSelectedCat} = useContext(AppContext)

  return (
    <section className='flex flex-wrap w-full md:w-4/5 md:justify-start md:gap-[75px] justify-around gap-2 sm:gap-2 md:px-6 px-1 pt-14 items-start relative'>
    <p className='flex font-semibold absolute top-5 left-6'>PRODUCTS</p>
   {
        filteredproducts.map((item)=>(
            
            <SingleFilteredProduct  item={item} key={item.id}/>
            
        ))
      }
</section>
  )
}

export default FilteredProducts
