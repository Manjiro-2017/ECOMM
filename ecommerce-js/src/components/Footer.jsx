import React from 'react'

export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid #eee', padding:'20px 0', marginTop:20}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
        <div>
          <strong>ShopEase</strong>
          <div className="small" style={{color:'#666'}}>© {new Date().getFullYear()} ShopEase. All rights reserved.</div>
        </div>
        <div className="small" style={{color:'#666'}}>Built By Shopify </div>
      </div>
    </footer>
  )
}
