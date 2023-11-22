import { AccountCircleOutlined, CloseRounded, MenuRounded, SearchRounded, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const Navbar = () => {

  const [displayMenu, setDisplayMenu] = useState(false)

  const {setSelectedCat, selFashion, selBeauty, selDecor, selElec, valChecked, setValChecked } = useContext(AppContext)


  const displaySideMenu = () => {
    setDisplayMenu(!displayMenu)
  };

  const handleClick = (e) => {

    // e.preventDefault()

    let cat = e.target.innerHTML.toLowerCase();

    console.log(cat, typeof cat, "cat")
    setValChecked(cat)

    // console.log(cat)
    setSelectedCat([]);
    setSelectedCat([...cat, cat]);
    // setNavCatSelected(true)
    
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
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>FASHION</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>ELECTRONICS</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>DECOR</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>BEAUTY</div></Link>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>
        <Link to={"/register"}>
        SIGN UP
        </Link></div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>
          <Link to={"/login"}>
          LOG IN
          </Link>
          </div>
        <div className='flex p-1 transition-all ease-in-out h-[56px] border-b w-full  border-slate-200 items-center z-10'>PROFILE</div>
      </div>
        </div>
      }
      <Link to={"/"}>
      <div className='flex md:text-lg cursor-pointer ml-8 sm:ml-0 items-center'>
        <div className='text-green-700 font-bold'>Urban</div>
        <div className='text-orange-400 font-semibold'>Nest</div>
      </div>
      </Link>
      
      <div className=' hidden md:flex lg:gap-4 md:gap-2 gap-4 text-sm md:text-[10px] lg:text-sm font-semibold text-slate-700 cursor-pointer'>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 hover:border-b-4 hover:border-green-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>FASHION</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 hover:border-b-4 hover:border-pink-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>ELECTRONICS</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 hover:border-b-4 hover:border-yellow-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>DECOR</div></Link>
        <Link to={'/product-list'} onClick={(e)=>handleClick(e)}><div className='flex p-1 hover:border-b-4 hover:border-sky-400 transition-all ease-in-out w-min h-[56px] items-center z-10'>BEAUTY</div></Link>
      </div>
      <div className='sm:flex hidden items-center gap-1 border hover:bg-slate-200 border-slate-200 px-2 rounded'>
        <input type="text" className='bg-transparent w-full sm:w-44 md:w-36 lg:w-full h-8 rounded md:px-4 sm:p-2 text-sm focus:outline-none' placeholder='Search here'/>
        <IconButton>
        <SearchRounded/>
        </IconButton>
      </div>
      <div className='md:flex hidden gap-1 md:gap-2 md:ml-4 lg:ml-0 text-slate-700 items-center'>
      <div className='text-sm lg:text-sm md:text-[12px] font-semibold cursor-pointer hover:text-slate-500'>
        <Link to={"/register"}>
        Sign Up
        </Link>
        </div>
      <div className='text-sm lg:text-sm md:text-[12px] font-semibold cursor-pointer hover:text-slate-500'>
        <Link to={"/login"}>
        Login
        </Link>
        </div>
      <div>
      <IconButton>
          <AccountCircleOutlined />
        </IconButton>
      </div>
      <div>
        <Link to={'/cart'}>
        <IconButton>
        <Badge badgeContent={2} color='primary'>
        <ShoppingCartOutlined />
        </Badge>          
        </IconButton>
        </Link>
      </div>
      </div>
      <div className='flex items-center md:hidden'>
        <IconButton>
          <AccountCircleOutlined />
        </IconButton>
      
        <Link to={'/cart'}>
        <IconButton>
        <Badge badgeContent={2} color='primary'>
        <ShoppingCartOutlined />
        </Badge>          
        </IconButton>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
