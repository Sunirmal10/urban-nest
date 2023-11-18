import { AccountCircleOutlined, CloseRounded, MenuRounded, SearchRounded, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {

  const [displayMenu, setDisplayMenu] = useState(false)

  const displaySideMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <div className='flex items-center p-5 md:w-full w-screen justify-between fixed top-0 left-0 right-0 z-50 h-14  md:justify-between shadow-md shadow-slate-300 bg-white
    
    '>
      <div className='md:hidden text-slate-500'>
    { displayMenu ? <CloseRounded onClick={displaySideMenu}/> : <MenuRounded onClick={displaySideMenu}/>}
      </div>
      {
        displayMenu && 
        <div className='w-full h-screen bg-slate-100 z-20 absolute left-0 top-14'>
           <div className='flex flex-col gap-2 text-sm font-semibold cursor-pointer w-full p-2 h-screen'>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-300 items-center z-10'>FASHION</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-300 items-center z-10'>ELECTRONICS</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>DECOR</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>BEAUTY</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>SIGN IN</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>LOG IN</div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>PROFILE</div>
      </div>
        </div>
      }
      <div className='flex md:text-lg cursor-pointer items-center text-sm'>
        <div className='text-green-700 font-bold'>Urban</div>
        <div className='text-orange-400 text-sm font-semibold pt-1'>Nest</div>
      </div>
      <div className=' hidden md:flex gap-4 text-sm font-semibold cursor-pointer'>
        <div className='flex p-1 hover:border-b-4 hover:border-green-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>FASHION</div>
        <div className='flex p-1 hover:border-b-4 hover:border-pink-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>ELECTRONICS</div>
        <div className='flex p-1 hover:border-b-4 hover:border-yellow-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>DECOR</div>
        <div className='flex p-1 hover:border-b-4 hover:border-sky-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>BEAUTY</div>
      </div>
      <div className='md:flex hidden items-center gap-1 border hover:bg-slate-200 border-slate-200 px-2 rounded'>
        <input type="text" className='bg-transparent h-8 rounded px-6 text-sm focus:outline-none' placeholder='Search for products here'/>
        <IconButton>
        <SearchRounded/>
        </IconButton>
      </div>
      <div className='md:flex hidden gap-3 items-center'>
      <div>Sign in</div>
      <div>Login in</div>
      <div>
      <IconButton>
          <AccountCircleOutlined />
        </IconButton>
      </div>
      <div>
        <IconButton>
        <Badge badgeContent={2} color='primary'>
        <ShoppingCartOutlined />
        </Badge>          
        </IconButton>
      </div>
      </div>
      <div className='flex md:hidden'>
        <IconButton>
          <AccountCircleOutlined />
        </IconButton>
      </div>
    </div>
  )
}

export default Navbar
