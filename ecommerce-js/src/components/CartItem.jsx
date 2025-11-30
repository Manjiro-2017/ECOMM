import React from 'react'

export default function CartItem({item, onRemove, onUpdate}){
  return (
    <div style={{display:'flex',gap:12,alignItems:'center',borderBottom:'1px solid #eee',padding:'12px 0'}}>
      <img src={item.image} alt={item.name} style={{width:80,height:60,objectFit:'cover',borderRadius:6}} />
      <div style={{flex:1}}>
        <div style={{fontWeight:700}}>{item.name}</div>
        <div className="small" style={{color:'#666'}}>{item.category}</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
        <div style={{fontWeight:700}}>${((item.salePrice?item.salePrice:item.price)*item.qty).toFixed(2)}</div>
        <div style={{display:'flex',gap:6,alignItems:'center'}}>
          <button onClick={()=>onUpdate(item.id, item.qty - 1)} style={{padding:'6px 8px'}}>−</button>
          <div>{item.qty}</div>
          <button onClick={()=>onUpdate(item.id, item.qty + 1)} style={{padding:'6px 8px'}}>+</button>
        </div>
        <button onClick={()=>onRemove(item.id)} style={{color:'#b91c1c',background:'transparent',border:'none',cursor:'pointer'}}>Remove</button>
      </div>
    </div>
  )
}
