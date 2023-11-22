import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { sliderData } from '../constants/SliderData'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
    
      const interval = setInterval(() => { 
        handleClick("right")
    }, 5000); 

    return () => clearInterval(interval);

    }, )


    const handleClick =(direction)=> {

            direction === 'right' ? setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            : 
             setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) 

    }


    // transfrom: translateX(slideIndex*-100vw) in the wrapper css div

  return (
    <div className='flex w-full md:h-[28rem] h-44 relative bg-pink-400 overflow-hidden scroll-smooth'>
      <div className='flex absolute top-[45%] left-0 rounded-full opacity-80 ml-5 bg-slate-200 z-10' onClick={()=>handleClick("left")}>
        <IconButton>
            <ChevronLeftRounded/>
        </IconButton>
      </div>
      <div className='flex h-full bg-gray-800'
      
      style={{
        transition: 'all 1.5s ease-in-out',
        transform: `translateX(-${slideIndex*100}vw)`
      }}>
        {
            sliderData.map((item)=>(
                <div className='flex w-screen h-full bg-orange-200' key={item.id}>
                    <img
                    className='flex w-3/5 h-full'
                    src={item.img} alt={"banner"+item.id} />
                    <img className='flex w-2/5 h-full' src={item.imgSide} alt={"side-banner"+item.id} />
                </div>
            ))
        }
      
  <div >
        </div>
      </div>
      <div className='flex absolute top-[45%] right-0 rounded-full opacity-80 mr-5 bg-slate-200 z-10' onClick={()=>handleClick("right")}>
      <IconButton>
            <ChevronRightRounded/>
        </IconButton>
      </div>
      <div className='flex gap-3 absolute bottom-5 left-[45%] z-10'>
            <div className={slideIndex === 0 ? 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-400 rounded-full' : 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-200 rounded-full'}></div>
            <div className={slideIndex === 1 ? 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-400 rounded-full' : 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-200 rounded-full'}></div>
            <div className={slideIndex === 2 ? 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-400 rounded-full' : 'flex w-1 h-1 md:w-2 md:h-2 bg-slate-200 rounded-full'}></div>
 
        </div>
    </div>
  )
}

export default Slider
