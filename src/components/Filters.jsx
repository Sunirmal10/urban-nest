import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import { products } from '../data/productsData';

const Filters = () => {

  const {selectedCat, setSelectedCat, setFilteredProducts, selectedPrice, setSelectedPrice} = useContext(AppContext)

  const handlecategory = (e) => {

    const { value, checked } = e.target;


      if (selectedCat.includes(value)) {
        let filters = selectedCat.filter((el)=> el !== value);
        setSelectedCat(filters);
      } else {
        setSelectedCat([...selectedCat, value]);
      }

  };

  const handlePrice = (e) => {

    const { value, checked } = e.target;


      if (selectedPrice.includes(value)) {
        let filters = selectedPrice.filter((p)=> p !== value);
        setSelectedPrice(filters);
      } else {
        setSelectedPrice([...selectedPrice, value]);
      }

  };

 useEffect(() => {

  filteredItems();

 }, [selectedCat]);

 const filteredItems = () => {

  if (selectedCat.length >0) {

    let tempItems = selectedCat.map((selectedCategory) => {
      let temp = products.filter((item) => item.category === selectedCategory);

      return temp;
    });

    setFilteredProducts(tempItems.flat());


  } 
else {
      setFilteredProducts([...products]);
  }

 };

  return (
    <div className='w-1/5'> {/* filter container */}
      <div className='flex font-semibold mt-5 pl-5 pb-3 border-slate-300 border-b'>FILTERS</div> {/* filter heading */}
      <div className='flex flex-col gap-3 py-2 px-5'> {/* all filter wrapper */}

      {/* categories filter */}

        <div className='flex flex-col gap-2 text-sm pt-2'> 
          <p className='flex flex-col font-semibold'>Categories</p>
          <label htmlFor="fashion">
            <input type="checkbox" onChange={(e)=>handlecategory(e)} value={'fashion'} name='fashion' id='fashion'/> Fashion
          </label>
          <label htmlFor="electronics">
            <input type="checkbox" onChange={(e)=>handlecategory(e)} value={'electronics'} name='electronics' id='electronics'/> Electronics
          </label>
          <label htmlFor="decor">
            <input type="checkbox" onChange={(e)=>handlecategory(e)} value={'decor'} name='decor' id='decor'/> Decor
          </label>
          <label htmlFor="beauty">
            <input type="checkbox" onChange={(e)=>handlecategory(e)} value={'beauty'} name='beauty' id='beauty'/> Beauty
          </label>
        </div>

      {/* price filter */}

        <div className='flex flex-col gap-2 text-sm pt-2'>
          <p className='flex flex-col font-semibold'>Price</p>
          <label htmlFor="less500">
            <input type="checkbox" onChange={(e)=>handlePrice(e)} value={'less500'} name='less500' id='less500'/> {`<`} ₹500
          </label>
          <label htmlFor="500-1000">
            <input type="checkbox" onChange={(e)=>handlePrice(e)} value={'500-1000'} name='500-1000' id='500-1000'/> ₹500 - ₹999
          </label>
          <label htmlFor="1000-5000">
            <input type="checkbox" onChange={(e)=>handlePrice(e)} value={'1000-5000'} name='1000-5000' id='1000-5000'/> ₹1000 - ₹4999
          </label>
          <label htmlFor="5000-10000">
            <input type="checkbox" onChange={(e)=>handlePrice(e)} value={'5000-10000'} name='5000-10000' id='5000-10000'/> ₹5000 - ₹9999
          </label>
          <label htmlFor="more10000">
            <input type="checkbox" onChange={(e)=>handlePrice(e)} value={'more10000'} name='more10000' id='more10000'/> {`>`} ₹9999
          </label>
        </div>

      {/* ratings filter */}

        <div className='flex flex-col gap-2 text-sm pt-2'>
          <p className='flex flex-col font-semibold'>Ratings</p>
          <label htmlFor="fourAbove">
            <input type="checkbox" value={'fourAbove'} name='fourAbove' id='fourAbove'/> 4★ & above
          </label>
          <label htmlFor="threeAbove">
            <input type="checkbox" value={'threeAbove'} name='threeAbove' id='threeAbove'/> 3★ & above
          </label>
          <label htmlFor="twoAbove">
            <input type="checkbox" value={'twoAbove'} name='twoAbove' id='twoAbove'/> 2★ & above
          </label>
          <label htmlFor="oneAbove">
            <input type="checkbox" value={'oneAbove'} name='oneAbove' id='oneAbove'/> 1★ & above
          </label>
        </div>

      {/* discount filter */}

        <div className='flex flex-col gap-2 text-sm pt-2'>
          <p className='flex flex-col font-semibold'>Discount</p>
          <label htmlFor="50above">
            <input type="checkbox" value={'50above'} name='50above' id='50above'/> 50% & above
          </label>
          <label htmlFor="40above">
            <input type="checkbox" value={'40above'} name='40above' id='40above'/> 40% & above
          </label>
          <label htmlFor="30above">
            <input type="checkbox" value={'30above'} name='30above' id='30above'/> 30% & above
          </label>
          <label htmlFor="20above">
            <input type="checkbox" value={'20above'} name='20above' id='20above'/> 20% & above
          </label>
          <label htmlFor="10above">
            <input type="checkbox" value={'10above'} name='10above' id='10above'/> 10% & above
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters
