import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'

export default function ProductDetails(){
  const { id } = useParams()
  const { products } = useContext(ProductsContext)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const product = products.find(p=>p.id===id)
  if(!product) return <div className="center">Product not found</div>

  function handleAdd(){
    addToCart(product,1)
    navigate('/cart')
  }

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
      <div style={{background:'#fff',padding:12,borderRadius:8}}>
        <img src={product.image} alt={product.name} style={{width:'100%',objectFit:'cover',borderRadius:8}} />
      </div>
      <div style={{background:'#fff',padding:12,borderRadius:8}}>
        <h2>{product.name}</h2>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          {product.salePrice ? (
            <><div style={{fontWeight:700,fontSize:20}}>${product.salePrice.toFixed(2)}</div>
            <div style={{textDecoration:'line-through', color:'#888'}}>${product.price.toFixed(2)}</div></>
          ) : (
            <div style={{fontWeight:700,fontSize:20}}>${product.price.toFixed(2)}</div>
          )}
        </div>
        <p style={{color:'#555'}}>{product.description}</p>
        <div style={{marginTop:12}}>
          <button className="btn" onClick={handleAdd}>Add to Cart</button>
          <Link to="/products" style={{marginLeft:12}} className="small">Back to products</Link>
        </div>
      </div>
    </div>
  )
}
