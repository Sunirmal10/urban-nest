import { FavoriteBorder, StarRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const PopularProduct = ({item}) => {
  return (
    <div className='flex flex-col w-[12.5rem] h-80 bg-slate-200 relative cursor-pointer'>
    <img className='w-full h-3/4 opacity-90' src={item.img} alt={item.title} />
    <p className='text-sm font-semibold px-1 pt-2'>{item.title}</p>
    <p className='flex items-center absolute px-1 left-0 bottom-1/4 backdrop-blur bg-slate-200/40 text-xs text-green-700'>
    <StarRounded style={{fontSize: '20px'}}/>
    
    <p className=' pt-1 font-semibold text-black'>{
        item.rating
      }</p>
    </p>
    <p className='flex absolute right-0 bottom-1/4'>
      <IconButton size='small'>
      <FavoriteBorder
    style={{
      fontSize: '16px'
    }} className='text-red-500'/>
      </IconButton>
      </p>
      <div className='flex gap-1 items-center px-1'>
      { 
      item.discount !== "" &&<p className='text-slate-700 text-xs pt-1 font-semibold'>₹ 
          {Math.round(item.price*((100-item.discount)/100))}.00
        </p>
        }
      
      <p className={item.discount !== "" ? 'text-xs pt-1 pl-1 text-slate-700 line-through' : 'text-xs pt-1 pl-1 text-slate-700 font-semibold'}>
      ₹ {
        item.price
        }.00
        
      </p>
      <p className={item.discount !== "" ? 'text-xs font-semibold absolute top-0 right-0 p-1 text-red-700 bg-white/50' : 'hidden'}>
        {
           item.discount
        } % OFF
      </p>
     
      </div>
      <div className='text-[11px] font-semibold text-red-500 pt-1 pl-1'>
        {
          item.discount !== "" && "Only Few Left!"
        }
      </div>
  </div>
  )
}

export default PopularProduct
