import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}){
  return (
    <div style={{border:'1px solid #eee', borderRadius:8, overflow:'hidden', background:'#fff'}}>
      <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>
        <div style={{height:180, background:'#fafafa', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img src={product.image} alt={product.name} style={{maxWidth:'100%', maxHeight:'160px', objectFit:'cover'}} />
        </div>
        <div style={{padding:12}}>
          <h3 style={{margin:'6px 0', fontSize:16}}>{product.name}</h3>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            {product.salePrice ? (
              <>
                <div style={{fontWeight:700}}>${product.salePrice.toFixed(2)}</div>
                <div style={{textDecoration:'line-through', color:'#888'}}>${product.price.toFixed(2)}</div>
              </>
            ) : (
              <div style={{fontWeight:700}}>${product.price.toFixed(2)}</div>
            )}
          </div>
          <div className="small" style={{color:'#666', marginTop:8}}>{product.category}</div>
        </div>
      </Link>
    </div>
  )
}
