import React from 'react'

function LoadingSpinner({ label = 'Talking to GJHealth core…' }) {
  return (
    <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '0.5rem' }}>
      <span
        style={{
          display: 'inline-block',
          width: '0.65rem',
          height: '0.65rem',
          borderRadius: '999px',
          border: '2px solid #38bdf8',
          borderTopColor: 'transparent',
          marginRight: '0.35rem',
          verticalAlign: 'middle',
          animation: 'spin 0.9s linear infinite',
        }}
      />
      <span>{label}</span>
      <style>
        {`@keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  )
}

export default LoadingSpinner
