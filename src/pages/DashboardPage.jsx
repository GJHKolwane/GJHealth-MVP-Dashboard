import React from 'react'

function DashboardPage({ user }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">Welcome, {user?.username || 'Clinician'}</p>
        <p className="card-subtitle">
          GJHealth core APIs are ready. This view will eventually show live triage, SOAN summaries
          and patient journeys.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="metric-row">
          <span>AI Orchestrator</span>
          <span>Online · v1 MVP</span>
        </div>
        <div className="metric-row">
          <span>Triage engine</span>
          <span>Connected to /triage</span>
        </div>
        <div className="metric-row">
          <span>Speech &amp; Vision</span>
          <span>Configured via /speech + /vision</span>
        </div>
        <div className="metric-row">
          <span>FHIR / DICOM bridge</span>
          <span>Wired from AWS → Azure (next)</span>
        </div>
      </div>

      <p className="helper">
        This is the <strong>first visible home</strong> of GJHealth. Once investors / ministries log
        in here and see the triage flow end‑to‑end, we&apos;ve done our job for the MVP.
      </p>
    </div>
  )
}

export default DashboardPage
