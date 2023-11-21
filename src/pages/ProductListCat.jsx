// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../AppContext'
// import { useParams } from 'react-router-dom'
// import { products } from '../data/productsData'
// import CatProductList from '../components/CatProductList'

// const ProductListCat = () => {

    

//     let {cat} = useParams();

//     console.log(cat)


//     const { filteredproducts, selectedCat, setSelectedCat, showSideFilter, catList, setCatList} = useContext(AppContext);

//     setCatList(cat);

//     let filteredCatList = products.filter((item) => item.category === cat);


//   return (
//     <div className={ showSideFilter ? 'flex flex-wrap w-4/5 justify-start gap-[70px] px-6 pt-14 items-start relative' : 'flex flex-wrap w-full justify-start gap-[75px] px-6 pt-14 items-start relative'}>
//     <p className='flex font-semibold absolute top-5 left-6'>PRODUCTS</p>
//    {
//         filteredCatList.map((item)=>(
            
                
//             <CatProductList item={item} key={item.id}/>
                
            
//         ))
//       }
// </div>
//   )
// }

// export default ProductListCat
