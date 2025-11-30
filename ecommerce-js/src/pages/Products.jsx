import React, { useContext, useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import CategorySection from '../components/CategorySection'
import { ProductsContext } from '../context/ProductsContext'

export default function Products(){
  const { products, categories } = useContext(ProductsContext)
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')

  const filtered = useMemo(()=>{
    return products.filter(p=>{
      const matchQ = query.trim()==='' || p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
      const matchCat = cat==='all' || p.category === cat
      return matchQ && matchCat
    })
  },[products, query, cat])

  return (
    <div>
      <h2>Products</h2>
      <SearchBar onSearch={setQuery} />
      <CategorySection categories={categories} onSelect={setCat} />
      <div className="grid grid-cols-4" style={{marginTop:12}}>
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
      {filtered.length===0 && <div className="center" style={{padding:40}}>No products found.</div>}
    </div>
  )
}
