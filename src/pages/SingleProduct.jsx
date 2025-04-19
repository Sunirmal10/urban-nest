import { AddRounded, RemoveRounded, ShoppingCart, StarRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../constants/productsData'
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import { useDispatch } from 'react-redux'
import { addItemtoCart } from '../redux/features/cartSlice'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {

  let {id} = useParams();

  const dispatch = useDispatch();

  const notify = () => toast.success("Item added to Cart!", {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  let stars =[ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarHalfRoundedIcon className='text-green-700' />]


  let singleProduct = ""
  if (products.length > 0) {
    singleProduct = products.filter((prod) => prod.id ===  parseInt(id) )

    
  }
  
  switch (singleProduct[0].rating) {
    case "5.0":
      stars=
      [<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>]
      
      break;
    case "4.5":
      stars=
     [ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarHalfRoundedIcon className='text-green-700' />]
      
      break;
    case "4.0":
      stars=
     [ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>]
      
      break;
    case "3.5":
      stars=
  [ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarHalfRoundedIcon className='text-green-700' />]
      
      break;
    case "3.0":
      stars=
      [<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>]
      
      break;
    case "2.5":
      stars=
     [ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>,<StarHalfRoundedIcon className='text-green-700' />]
      
      break;
    case "2.0":
      stars=
     [ <StarRounded className='text-green-700'/>,<StarRounded className='text-green-700'/>]
      
      break;
    case "1.5":
      stars=
     [ <StarRounded className='text-green-700'/>,<StarHalfRoundedIcon className='text-green-700' />]
      
      break;
    case "1.0":
      stars=
      [<StarRounded className='text-green-700'/>]
      
      break;
  
    default: <StarRounded className='text-green-700'/>
      break;
  }

  // setSingleProduct(prod)

  
  return (
    <main className='flex flex-col mt-20 mb-5 px-5'>
        <div>
        </div>
        <div className='flex flex-col sm:flex-row w-full gap-5'>
        <div className='flex justify-center sm:w-1/2 w-full h-80'>
        <img src=  {singleProduct[0].img ? singleProduct[0].img : "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHN8ZW58MHwxfDB8fHww"} alt="" />
      </div>
      <div className='flex flex-col sm:w-1/2 w-full gap-5 justify-start'>
        <div className='font-bold text-2xl'>{singleProduct[0].title ? singleProduct[0].title : "Winter Jacket"}</div>
        <div className='flex text-justify'>
        {singleProduct[0].desc ? singleProduct[0].desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </div>
        <div className='flex items-center justify-start'><p className='pt-1 mr-2'>
        {singleProduct[0].rating ? singleProduct[0].rating : "4.5"}
          </p>{stars}</div>
          <span className='flex gap-2 items-center'>
          <span className='text-2xl'>
        {singleProduct[0].price ? "₹ "+singleProduct[0].price+".00" : "₹ 100.00"}
        </span>
        <span className='text-md font-semibold text-red-500'>
        {singleProduct[0].discount ? singleProduct[0].discount+"% OFF" : ""}
        </span>
        {/* <div className='flex items-center border border-slate-400 rounded w-min scale-[0.75]'>
            <IconButton>
                <AddRounded/>
            </IconButton>
            <div className='flex items-center border-x border-slate-400 ml-2 justify-center w-8 h-7 bg-white'>1</div>
            <IconButton>
                <RemoveRounded/>
            </IconButton>
        </div> */}
          </span>
       
       
        <button className='flex w-32 h-12 text-white border-none rounded justify-center items-center cursor-pointer bg-green-600 active:scale-95 hover:bg-green-700'
        onClick={() => {
          dispatch(addItemtoCart(singleProduct[0]));
          notify()
        }}
        >
          ADD TO CART</button>

          <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
       
        </div>  
        </div>
      
    </main>
  )
}

export default SingleProduct
