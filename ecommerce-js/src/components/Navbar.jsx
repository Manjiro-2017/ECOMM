import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

export default function Navbar(){
  const { itemsCount } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

  return (
    <nav style={{background:'#fff', borderBottom:'1px solid #eee'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
        <Link to="/" style={{textDecoration:'none', color:'#111'}}>
          <h2 style={{margin:0}}>ShopEase</h2>
        </Link>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <NavLink to="/" end className={({isActive})=>isActive? 'small':'small'}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=>isActive? 'small':'small'}>Products</NavLink>
          <NavLink to="/offers" className={({isActive})=>isActive? 'small':'small'}>Offers</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'small':'small'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'small':'small'}>Contact</NavLink>
          <Link to="/cart" style={{position:'relative', textDecoration:'none'}}>
            <button className="btn">Cart ({itemsCount})</button>
          </Link>
          {user ? (
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span className="small">{user.name}</span>
              <button className="btn small" onClick={logout}>Logout</button>
            </div>
          ) : (
            <div style={{display:'flex',gap:8}}>
              <Link to="/login" className="small">Login</Link>
              <Link to="/signup" className="small">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
