import { FavoriteBorder, StarRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} >
    <div className='flex flex-col md:w-[12.5rem] w-[9.5rem] md:h-80 h-72 bg-gray-200 hover:scale-[1.1] relative cursor-pointer'>
      <img className='w-full h-3/4 opacity-90' src={item.img} alt={item.title} loading='lazy' />
      <span className='text-sm font-semibold px-1 pt-2'>{item.title} 
        {item.status === "new" && <span className='text-yellow-500 font-semibold text-[0.6rem] px-1 rounded-md'>NEW</span> }
         </span>
      <span className='flex items-center absolute px-1 left-0 bottom-1/4 backdrop-blur bg-slate-200/40 text-xs text-green-700'>
      <StarRounded style={{fontSize: '20px'}}/>
      
      <span className=' pt-1 font-semibold text-black'>{
          item.rating
        }</span>
      </span>
      <span className='flex absolute right-0 bottom-1/4'>
        <IconButton size='small'>
        <FavoriteBorder
      style={{
        fontSize: '16px'
      }} className='text-red-500'/>
        </IconButton>
        </span>
        <div className='flex gap-1 items-center px-1'>
        { 
        item.discount !== "" &&<span className='text-slate-700 text-xs pt-1 font-semibold ml-1'>₹ 
            {item.price}.00
          </span>
          }
        
        <span className={item.discount !== "" ? 'text-xs pt-1 pl-1 text-slate-700 line-through' : 'text-xs pt-1 pl-1 text-slate-700 font-semibold'}>
        ₹ {
          Math.round(item.price*((100+item.discount)/100))
          }.00
          
        </span>
        <span className={item.discount !== "" ? 'text-xs font-semibold absolute top-0 right-0 p-1 text-red-700 bg-white/50' : 'hidden'}>
          {
             item.discount
          } % OFF
        </span>
       
        </div>
        <span className='text-[11px] font-semibold text-red-500 pt-1 pl-1'>
          {
            item.discount !== "" && "Only Few Left!"
          }
        </span>
    </div>
    </Link>
  )
}

export default Product
