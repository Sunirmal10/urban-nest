import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <div className='flex flex-col w-full gap-5 text-slate-600 mt-[80px] mb-5 px-5'>
      <div className='flex justify-center text-sm font-semibold'>YOUR CART</div>
      <div className='flex justify-between'>
        <div className='flex items-center cursor-pointer py-2 border border-slate-400 rounded bg-white hover:bg-slate-400 text-slate-400 hover:text-white px-4 text-sm'>CONTINUE SHOPPING</div>
        <span className='flex w-28 hover:underline text-sm cursor-pointer items-center'>Cart items <div>{`(${0})`}</div></span>
        <span className='flex w-28 hover:underline text-sm cursor-pointer items-center'>Wishlist <div>{`(${0})`}</div></span>
        <div className='flex items-center cursor-pointer border border-slate-400 rounded bg-white hover:bg-slate-400 text-slate-400 hover:text-white text-sm py-2 px-4'>CHECKOUT NOW</div>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5 w-3/4'>
            <div className='flex p-1 w-full border justify-evenly items-center border-slate-300'>
                <div className='flex w-28 h-28 justify-center border border-slate-300 bg-slate-300'>
                    <img className='' src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHwxfDB8fHww" alt="" />
                </div>
                <div className='flex flex-col gap-5 text-sm'>
                    <div>DENIM Jeans</div>
                    <div className='font-semibold'>ID: dfdf324873rgfdhsau</div>
                    <div>extra info</div>
                </div>
                <div className='flex gap-5 items-center py-4'>
                    <div className='flex items-center border border-slate-400 rounded w-min'>
            <IconButton>
                <AddRounded/>
            </IconButton>
            <div className='flex items-center border-x border-slate-400 justify-center w-8 h-7 bg-white'>1</div>
            <IconButton>
                <RemoveRounded/>
            </IconButton>
        </div>
        <div className='text-lg'>$ 30</div>
        </div>
            </div>
        </div>
        <section className='flex flex-col w-1/4 border border-slate-300 text-slate-500 p-3 gap-5'>
            <header className='text-sm font-semibold'>ORDER DETAILS</header>
            <main className='flex flex-col text-sm gap-5'>
                    <div>
                        Subtotal: <span>$ 30</span>
                    </div>
                    <div>
                        Shipping: <span>$ 30</span>
                    </div>
                    <div>
                        Discount: <span>$ 30</span>
                    </div>
                    <div>
                        Total: <span>$ 30</span>
                    </div>
            </main>
            <div className='flex py-2 rounded bg-pink-500 text-xs cursor-pointer hover:bg-pink-600 text-white font-semibold justify-center items-center'>
                PLACE ORDER
            </div>
        </section>
      </div>
    </div>
  )
}

export default Cart
