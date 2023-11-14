import { SearchRounded, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center p-5 w-full fixed top-0 left-0 right-0 z-50 h-14 justify-between shadow-md shadow-slate-300 bg-white'>
      <div className='flex text-lg cursor-pointer'>
        <div className='text-green-700 font-bold'>Urban</div>
        <div className='text-orange-400 font-semibold'>Nest</div>
      </div>
      <div className='flex gap-4 text-sm font-semibold cursor-pointer'>
        <div>FASHION</div>
        <div>ELECTRONICS</div>
        <div>DECOR</div>
        <div>BEAUTY</div>
      </div>
      <div className='flex items-center gap-1'>
        <input type="text" className='bg-slate-200 h-8 rounded pl-4 focus:outline-none'/>
        <IconButton>
        <SearchRounded/>
        </IconButton>
      </div>
      <div className='flex gap-3 items-center'>
      <div>Sign in</div>
      <div>Login in</div>
      <div>Profile</div>
      <div>
        <IconButton>
        <Badge badgeContent={2} color='primary'>
        <ShoppingCartOutlined />
        </Badge>          
        </IconButton>
      </div>
      </div>
    </div>
  )
}

export default Navbar
