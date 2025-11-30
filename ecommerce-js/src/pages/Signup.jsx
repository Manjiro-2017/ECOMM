import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    // mock signup logs in the user
    login({email,password})
    navigate('/')
  }

  return (
    <div style={{maxWidth:500}}>
      <h2>Sign Up</h2>
      <form onSubmit={submit} style={{display:'grid',gap:8}}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required style={{padding:8}} />
        <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required style={{padding:8}} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required style={{padding:8}} />
        <button className="btn" type="submit">Create Account</button>
      </form>
    </div>
  )
}
