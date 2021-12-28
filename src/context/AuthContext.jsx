import React from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false)

  const login = (email, password) => {
    if (email === '1' && password === '1') {
      setLoggedIn(true)
    }
  }

  const logout = () => {
    setLoggedIn(false)
  }

  const data = {login, logout, isLoggedIn}

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export const WithAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />
          }}
        </AuthContext.Consumer>
      )
    }
  }
}