import React, { useState } from 'react'
import { products } from '../data/productsData'
import PopularProduct from './PopularProduct'
import { IconButton } from '@mui/material'
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'

const Popular = () => {

  
  const [slideIndex, setSlideIndex] = useState(0)


  const handleClick =(direction)=> {

          direction === 'right' ? setSlideIndex(slideIndex < 6 ? slideIndex + 1 : 0)
          : 
           setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6) 

  }
  return (
    <div className='flex w-full gap-[20px] pt-14 relative pl-6 overflow-hidden scroll-smooth'>
        <p className='flex font-semibold absolute top-5 left-6'>POPULAR PRODUCTS</p>
        <div className='flex absolute top-[45%] left-2 rounded-full opacity-80 ml-5 bg-slate-300 z-10' onClick={()=>handleClick("left")}>
        <IconButton>
            <ChevronLeftRounded/>
        </IconButton>
      </div>
      <div className='flex gap-[20px]'
       
       style={{
        transition: 'all 1s ease',
        transform: `translateX(-${slideIndex*220}px)` //wrapper
      }}
      > 
      {
        products.map((item)=>(
            <>

            { item.status === 'popular' && <PopularProduct item={item} key={item.id}/>}
            </>
        ))
      }
      </div>
      <div className='flex absolute top-[45%] right-2 rounded-full opacity-80 mr-5 bg-slate-300 z-10' onClick={()=>handleClick("right")}>
      <IconButton>
            <ChevronRightRounded/>
        </IconButton>
      </div>
    </div>
  )
}

export default Popular
