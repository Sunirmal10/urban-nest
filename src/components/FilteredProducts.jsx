import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import SingleFilteredProduct from './SingleFilteredProduct'

const FilteredProducts = () => {

    const { filteredproducts, selectedCat, setSelectedCat} = useContext(AppContext)


    // const filterCategory = (product) => {
    //   for (let cat in categoryArray) {
    //     return product ? product.category === cat : "none"
    //   }
    // }
    


   

  

  return (
    <div className='flex flex-wrap w-4/5 justify-start gap-[70px] px-6 pt-14 items-start relative'>
    <p className='flex font-semibold absolute top-5 left-6'>PRODUCTS</p>
   {
        filteredproducts.map((item)=>(
            
                
            <SingleFilteredProduct item={item} key={item.id}/>
                
            
        ))
      }
</div>
  )
}

export default FilteredProducts
