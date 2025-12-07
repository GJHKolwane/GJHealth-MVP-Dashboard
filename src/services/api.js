const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

async function postRequest(endpoint, data) {
  if (!API_BASE_URL) {
    throw new Error('API base URL is not configured. Set VITE_API_BASE_URL in your .env.')
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = payload?.message || payload?.error || 'Unexpected error from API.'
    throw new Error(message)
  }

  return payload
}

export function sendAuthRequest(credentials) {
  return postRequest('/auth', credentials)
}

export function sendTriageRequest(payload) {
  return postRequest('/triage', payload)
}

export function sendVisionRequest(payload) {
  return postRequest('/vision', payload)
}

export function sendSpeechRequest(payload) {
  return postRequest('/speech', payload)
}

export function sendAiRequest(payload) {
  return postRequest('/ai', payload)
}

export function sendOrchestratorRequest(payload) {
  return postRequest('/orchestrator', payload)
}
