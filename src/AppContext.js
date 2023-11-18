import React, { createContext, useState } from 'react'
import { products } from './data/productsData';

const AppContext = createContext();

const AppProvider = ({children}) => {

  const [selectedCat, setSelectedCat] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])

  const [filteredproducts, setFilteredProducts] = useState(products)


  return (
    <AppContext.Provider value={{
      selectedCat, setSelectedCat, filteredproducts, setFilteredProducts, selectedPrice, setSelectedPrice
    }}>
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider, AppContext}
