import React from 'react'

export default function CategorySection({categories, onSelect}){
  return (
    <div style={{display:'flex', gap:12, marginBottom:16, flexWrap:'wrap'}}>
      <button className="btn small" onClick={()=>onSelect('all')}>All</button>
      {categories.map(cat=> (
        <button key={cat} className="small" style={{padding:'8px 12px', borderRadius:6, border:'1px solid #eee', background:'#fff'}} onClick={()=>onSelect(cat)}>{cat}</button>
      ))}
    </div>
  )
}
