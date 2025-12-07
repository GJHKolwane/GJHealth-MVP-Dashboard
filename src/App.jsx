import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Layout from './components/Layout'

function App() {
  const [user, setUser] = useState(null)

  const handleLoginSuccess = (userInfo) => {
    setUser(userInfo)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Layout user={user} onLogout={handleLogout}>
      {user ? (
        <DashboardPage user={user} />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </Layout>
  )
}

export default App
