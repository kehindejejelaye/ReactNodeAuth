import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

// children below refer to the components we want to wrap within the authContext (because we want them to access the global state)

const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null)
  const [ goals, setGoals ] = useState([])

  function getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  useEffect(() => {
    let userDetails = getUser()
    
    if (userDetails) {
      setUser(userDetails)
    }
  } , [])

  return (
    <div>
      <AuthContext.Provider value = {
        {
          user, setUser,
          goals, setGoals
        }
      }>
        { children }
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider