import React, { useContext } from 'react'
import { categories } from '../constants/SliderData'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const Categories = () => {

  const {setSelectedCat,valChecked, setValChecked } = useContext(AppContext)


  const handleClick = (e) => {
    // e.preventDefault()
    let cat = e.target.innerHTML.toLowerCase();
    // console.log(cat)
    setSelectedCat([]);
    setSelectedCat([...cat, cat]);
    // setNavCatSelected(true)

  }


  return (
    <div className='flex w-full justify-center p-0 md:p-1 md:pt-8 pt-4 gap-[2px] md:gap-5 items-center relative'>
      {
        categories.map((item)=>(
            <Link to={"/product-list"}
            style={{textDecoration: 'none'}}
            key={item.id}
            onClick={(e)=>handleClick(e)}
            >
            <div  className='flex w-[79px] sm:w-[150px] h-12 md:w-[180px] lg:w-52 sm:h-20 md:h-24 relative  text-xs md:text-2xl md:font-semibold cursor-pointer'>
              <img className='flex w-full h-full filter saturate-100 contrast-50' src={item.img} alt={item.title} />
                <p className='flex absolute top-0 left-0 w-full h-full bg-transparent text-white justify-center items-center z-10'>{item.title}</p>
            </div>
            </Link>
        ))
      }
    </div>
  )
}

export default Categories
