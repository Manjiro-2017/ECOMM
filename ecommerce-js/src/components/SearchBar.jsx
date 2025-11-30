import React, { useState } from 'react'

export default function SearchBar({onSearch}){
  const [q, setQ] = useState('')
  function submit(e){
    e.preventDefault()
    onSearch(q)
  }
  return (
    <form onSubmit={submit} style={{display:'flex', gap:8, marginBottom:12}}>
      <input placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}} />
      <button className="btn" type="submit">Search</button>
    </form>
  )
}
