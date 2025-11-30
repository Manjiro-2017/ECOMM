import React from 'react'

export default function Banner(){
  return (
    <div style={{borderRadius:8, overflow:'hidden', marginBottom:18}}>
      <div style={{background:'linear-gradient(90deg, #06b6d4, #60a5fa)', color:'#fff', padding:28, borderRadius:8}}>
        <h2 style={{margin:0}}>Season Sale — Up to 30% Off</h2>
        <p style={{marginTop:8}}>Discover great deals on selected products. Limited time only.</p>
      </div>
    </div>
  )
}
