import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

export default function Cart(){
  const { cart, removeFromCart, updateQty, clearCart, total } = useContext(CartContext)

  return (
    <div>
      <h2>Your Cart</h2>
      <div style={{background:'#fff',padding:12,borderRadius:8}}>
        {cart.length===0 ? (
          <div className="center" style={{padding:40}}>Your cart is empty.</div>
        ) : (
          <div>
            {cart.map(item=> (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} onUpdate={updateQty} />
            ))}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
              <div style={{fontWeight:700}}>Total: ${total.toFixed(2)}</div>
              <div style={{display:'flex',gap:8}}>
                <button className="btn" onClick={()=>alert('Checkout - demo')}>Checkout</button>
                <button onClick={clearCart} style={{padding:'8px 12px'}}>Clear</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
