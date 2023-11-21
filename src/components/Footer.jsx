import { FacebookOutlined, Instagram, Twitter, WbTwilightOutlined, YouTube } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear()

  return (
    <div className='flex flex-col w-full p-12 bg-slate-950 text-slate-100 text-xs'>
      <div className='flex gap-10 py-10'>
        <div className='flex w-2/5 flex-col justify- items-start gap-6'>
        <div className='flex items-center text-lg cursor-pointer'>
        <div className='text-green-700 font-bold'>Urban</div>
        <div className='text-orange-400 font-semibold'>Nest</div>
      </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='ml-[-10px] flex gap-2'>
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
        <div className='flex w-full justify-evenly items-start'>
            <div className='flex flex-col justify-evenly gap-5'>
                <div className='font-semibold text-sm'>Company</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col justify-evenly gap-5'>
                <div className='font-semibold text-sm'>Privacy</div>
                <div>FAQ</div>
                <div>T&C</div>
                <div>Returns</div>
                <div>Privacy Policy</div>
                <div>Security</div>
            </div>
            <div className='flex flex-col justify-evenly gap-5'>
                <div className='font-semibold text-sm'>Help</div>
                <div>Return Policy</div>
                <div>Payments</div>
                <div>Shipping</div>
           
            </div>
            <div className='flex flex-col justify-evenly gap-5'>
            <div className='font-semibold text-sm'>Contact</div>
                <div>Mail Us</div>
                <div>Address</div>
                <div>Stores</div>
            </div>
            <div className='flex flex-col justify-evenly gap-5'>
            <div className='font-semibold text-sm'>Solutions</div>
                <div>Marketing</div>
                <div>Analytics</div>
                <div>Commerce</div>
                <div>Insights</div>
            </div>
        </div>
      </div>
      <div className='border-t border-slate-700'>
        <div className='flex pt-10'>
        © {year} UrbanNest. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
