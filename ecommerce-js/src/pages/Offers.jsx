import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductsContext } from '../context/ProductsContext'

export default function Offers(){
  const { products } = useContext(ProductsContext)
  const onSale = products.filter(p=>p.salePrice)
  return (
    <div>
      <h2>Offers & Sales</h2>
      <div className="grid grid-cols-4" style={{marginTop:12}}>
        {onSale.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
      {onSale.length===0 && <div className="center" style={{padding:40}}>No current offers.</div>}
    </div>
  )
}
