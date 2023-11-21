import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import SingleFilteredProduct from './SingleFilteredProduct'

const CatProductList = () => {

    const { filteredproducts, selectedCat, setSelectedCat, showSideFilter} = useContext(AppContext)

  return (
    <div className={ showSideFilter ? 'flex flex-wrap w-4/5 justify-start gap-[70px] px-6 pt-14 items-start relative' : 'flex flex-wrap w-full justify-start gap-[75px] px-6 pt-14 items-start relative'}>
    <p className='flex font-semibold absolute top-5 left-6'>PRODUCTS</p>
   {
        filteredproducts.map((item)=>(
            
                
            <SingleFilteredProduct item={item} key={item.id}/>
                
            
        ))
      }
</div>
  )
}

export default CatProductList
