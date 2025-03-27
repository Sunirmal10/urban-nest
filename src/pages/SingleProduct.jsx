import { AddRounded, RemoveRounded, StarRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {

  // let {id} = useParams();


  return (
    <main className='flex flex-col mt-20 mb-5 px-5'>
        <div>
        </div>
        <div className='flex flex-col sm:flex-row w-full gap-5'>
        <div className='flex justify-center sm:w-1/2 w-full h-full'>
        <img src="https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHN8ZW58MHwxfDB8fHww" alt="" />
      </div>
      <div className='flex flex-col sm:w-1/2 w-full gap-5 justify-start'>
        <div className='font-bold text-2xl'>Winter Jacket</div>
        <div className='flex text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam cumque vero facilis officia. Ex, non mollitia! Nisi, vero voluptate odio, labore possimus officiis tempore deserunt et assumenda ducimus natus?</div>
        <div className='flex items-center justify-start gap-1'><p className='pt-1'>4.0</p><StarRounded className='text-green-700'/></div>
        <div className='text-2xl'>₹ 100.00</div>
        <div className='flex items-center border border-slate-400 rounded w-min scale-[0.75]'>
            <IconButton>
                <AddRounded/>
            </IconButton>
            <div className='flex items-center border-x border-slate-400 justify-center w-8 h-7 bg-white'>1</div>
            <IconButton>
                <RemoveRounded/>
            </IconButton>
        </div>
        <Link to={'/cart'}><div className='flex w-32 h-12 text-white rounded justify-center items-center cursor-pointer bg-green-600 hover:bg-green-700'>
          ADD TO CART</div></Link>
        </div>  
        </div>
      
    </main>
  )
}

export default SingleProduct
