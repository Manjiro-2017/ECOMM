import React, { createContext, useState, useEffect } from 'react'
import productsData from '../data/products.json'

export const ProductsContext = createContext()

export function ProductsProvider({ children }){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    // In real app we'd fetch; here we load static JSON
    setProducts(productsData)
  },[])

  const categories = Array.from(new Set(products.map(p=>p.category)))

  return (
    <ProductsContext.Provider value={{products, setProducts, categories}}>
      {children}
    </ProductsContext.Provider>
  )
}
