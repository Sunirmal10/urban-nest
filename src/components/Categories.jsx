import React from 'react'
import { categories } from '../data/SliderData'
// import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex justify-around p-2'>
      {
        categories.map((item)=>(
            // <Link to={'/'}
            // style={{textDecoration: 'none'}}
            // key={item.id}>
            <div  className='flex w-40 h-10 text-xl font-bold cursor-pointer'>
                <p>{item.title}</p>
            </div>
            // </Link>
        ))
      }
    </div>
  )
}

export default Categories
