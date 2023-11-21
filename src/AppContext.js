import React, { createContext, useRef, useState } from 'react'
import { products } from './data/productsData';

const AppContext = createContext();

const AppProvider = ({children}) => {

  const [selectedCat, setSelectedCat] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])

  const [filteredproducts, setFilteredProducts] = useState(products)
  
  const [showSideFilter, setshowSideFilter] = useState(true);

  const [catList, setCatList] = useState();

  const [ratings, setRatings] = useState()
  const [discount, setDiscount] = useState()

const [navCatSelected, setNavCatSelected] = useState(false);

const selFashion = useRef();
const selBeauty = useRef();
const selDecor = useRef();
const selElec = useRef();


  return (
    <AppContext.Provider value={{
      selectedCat, setSelectedCat, filteredproducts, setFilteredProducts, selectedPrice, setSelectedPrice, showSideFilter, setshowSideFilter, catList, setCatList, navCatSelected, setNavCatSelected, selFashion, selBeauty, selDecor, selElec, ratings, setRatings, discount, setDiscount
    }}>
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider, AppContext}
