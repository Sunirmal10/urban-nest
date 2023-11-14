import { SearchRounded, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center p-5 w-full h-14 justify-between bg-green-200'>
      <div className='flex'>
        <div className='text-slate-900 font-bold'>Urban</div>
        <div className='text-yellow-500 font-semibold'>Nest</div>
      </div>
      <div className='flex gap-4 text-sm font-semibold'>
        <div>FASHION</div>
        <div>ELECTRONICS</div>
        <div>DECOR</div>
        <div>BEAUTY</div>
      </div>
      <div className='flex'>
        <input type="text" className='bg-white rounded pl-4 focus:outline-none'/>
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
