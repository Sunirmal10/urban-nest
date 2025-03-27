import { FacebookOutlined, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear()

  return (
    <footer className='flex flex-col w-full mt-4 p-5 sm:p-7 md:p-12 bg-slate-950 text-slate-100 md:text-xs text-[10px]'>
      <div className='flex flex-col md:flex-row sm:gap-10 gap-7 py-5 md:py-10'>
        <div className='flex w-full sm:w-2/5 flex-col justify-start items-start gap-6'>
        <div className='flex items-center text-lg cursor-pointer'>
        <div className='text-green-700 font-bold'>Urban</div>
        <div className='text-orange-400 font-semibold'>Nest</div>
      </div>
            <div className='flex w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='ml-[-10px] w-full justify-center sm:justify-start flex gap-2'>
                <IconButton>
                    <FacebookOutlined className='text-slate-500'/>
                </IconButton>
                <IconButton>
                    <Twitter className='text-slate-500'/>
                </IconButton>
                <IconButton>
                    <Instagram className='text-slate-500'/>
                </IconButton>
                <IconButton>
                    <YouTube className='text-slate-500'/>
                </IconButton>
            </div>
        </div>
        <div className='flex w-full justify-evenly items-start gap-2 scale-[0.9] sm:scale-1'>
            <div className='flex flex-col justify-evenly md:gap-5 gap-3'>
                <div className='sm:font-semibold text-xs md:text-sm'>Company</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col justify-evenly md:gap-5 gap-3'>
                <div className='sm:font-semibold text-xs md:text-sm'>Privacy</div>
                <div>FAQ</div>
                <div>T&C</div>
                <div>Returns</div>
                <div>Privacy Policy</div>
                <div>Security</div>
            </div>
            <div className='flex flex-col justify-evenly md:gap-5 gap-3'>
                <div className='sm:font-semibold text-xs md:text-sm'>Help</div>
                <div>Return Policy</div>
                <div>Payments</div>
                <div>Shipping</div>
           
            </div>
            <div className='flex flex-col justify-evenly md:gap-5 gap-3'>
            <div className='sm:font-semibold text-xs md:text-sm'>Contact</div>
                <div>Mail Us</div>
                <div>Address</div>
                <div>Stores</div>
            </div>
            <div className='flex flex-col justify-evenly md:gap-5 gap-3'>
            <div className='sm:font-semibold text-xs md:text-sm'>Solutions</div>
                <div>Marketing</div>
                <div>Analytics</div>
                <div>Commerce</div>
                <div>Insights</div>
            </div>
        </div>
      </div>
      <div className='border-t border-slate-700'>
        <div className='flex sm:pt-10 pt-5'>
        © {year} UrbanNest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
