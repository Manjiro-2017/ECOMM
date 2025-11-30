import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  function login({email, password}){
    // mock login: accept any credentials
    const mockUser = {id: 'u1', name: 'Demo User', email}
    setUser(mockUser)
    return mockUser
  }

  function logout(){
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
