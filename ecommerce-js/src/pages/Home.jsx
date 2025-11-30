import React, { useContext } from 'react'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import { ProductsContext } from '../context/ProductsContext'

export default function Home(){
  const { products } = useContext(ProductsContext)
  const featured = products.slice(0,4)
  return (
    <div>
      <Banner />
      <h2>Featured Products</h2>
      <div className="grid grid-cols-4" style={{marginTop:12}}>
        {featured.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
