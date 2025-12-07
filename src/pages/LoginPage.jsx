import React, { useState } from 'react'
import { sendAuthRequest } from '../services/api'
import LoadingSpinner from '../components/LoadingSpinner'

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const payload = { username, password }
      const result = await sendAuthRequest(payload)

      const userInfo = {
        username,
        token: result?.token || null,
      }

      onLoginSuccess(userInfo)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">Log in to GJHealth</p>
        <p className="card-subtitle">
          Use any demo username &amp; password while the real auth Lambda is being wired.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            autoComplete="username"
            placeholder="demo.clinician@gjhealth"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="button" type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Enter dashboard'}
        </button>

        {loading && <LoadingSpinner />}

        {error && <div className="error">{error}</div>}

        <p className="helper">
          <strong>MVP note:</strong> This screen is only validating the API connection. Later we plug
          in full IAM + JWT auth for hospitals and national users.
        </p>
      </form>
    </div>
  )
}

export default LoginPage
