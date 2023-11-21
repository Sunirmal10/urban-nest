import React, { useContext } from 'react'
import { categories } from '../data/SliderData'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const Categories = () => {

  const {setSelectedCat, setNavCatSelected } = useContext(AppContext)


  const handleClick = (e) => {
    let cat = e.target.innerHTML.toLowerCase();
    // console.log(cat)
    setSelectedCat([]);
    setSelectedCat([...cat, cat]);
    setNavCatSelected(true)

  }


  return (
    <div className='flex justify-center pt-8 gap-5 items-center relative'>
      {
        categories.map((item)=>(
            <Link to={"/product-list"}
            style={{textDecoration: 'none'}}
            key={item.id}
            onClick={(e)=>handleClick(e)}
            >
            <div  className='flex w-52 h-24 relative text-2xl font-semibold cursor-pointer' key={item.id}>
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
