import React from 'react'

function Layout({ user, onLogout, children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title">
          GJHealth <span>MVP Dashboard</span>
        </div>
        <div>
          {user ? (
            <button className="logout-button" onClick={onLogout}>
              <span>●</span>
              <span>Logout</span>
            </button>
          ) : (
            <span className="badge">
              <span>●</span>
              <span>Demo mode</span>
            </span>
          )}
        </div>
      </header>
      <main className="app-main">{children}</main>
    </div>
  )
}

export default Layout
