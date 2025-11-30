import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState(() => {
    try{
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    }catch(e){return []}
  })

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  function addToCart(product, qty=1){
    setCart(prev=>{
      const found = prev.find(p=>p.id===product.id)
      if(found){
        return prev.map(p=> p.id===product.id ? {...p, qty: p.qty + qty} : p)
      }
      return [...prev, {...product, qty}]
    })
  }

  function removeFromCart(id){
    setCart(prev=> prev.filter(p=>p.id!==id))
  }

  function updateQty(id, qty){
    setCart(prev=> prev.map(p=> p.id===id ? {...p, qty: Math.max(1, qty)} : p))
  }

  function clearCart(){
    setCart([])
  }

  const itemsCount = cart.reduce((s,i)=>s+i.qty,0)
  const total = cart.reduce((s,i)=> s + (i.salePrice ? i.salePrice : i.price) * i.qty, 0)

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQty, clearCart, itemsCount, total}}>
      {children}
    </CartContext.Provider>
  )
}
