import React, { useState } from 'react'

export default function Contact(){
  const [success, setSuccess] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setSuccess(true)
  }
  return (
    <div style={{background:'#fff',padding:16,borderRadius:8}}>
      <h2>Contact Us</h2>
      {success ? <div className="center">Thanks! We'll respond shortly.</div> : (
        <form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:500}}>
          <input placeholder="Your name" required style={{padding:8}} />
          <input placeholder="Email" type="email" required style={{padding:8}} />
          <textarea placeholder="Message" rows={6} required style={{padding:8}} />
          <button className="btn" type="submit">Send</button>
        </form>
      )}
    </div>
  )
}
