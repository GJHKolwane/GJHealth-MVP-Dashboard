/*
================================================
API CONFIGURATION
================================================
*/

const ORCHESTRATOR =
  process.env.REACT_APP_ORCHESTRATOR ||
  "http://localhost:8087";

/*
================================================
PATIENT INTAKE
================================================
*/

export async function startConsultation(omang) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/intake`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ omang })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Consultation start failed: ${text}`);
  }

  return res.json();
}

/*
================================================
VITALS
================================================
*/

export async function recordVitals(encounterId, vitals) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/vitals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId,
      vitals
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Vitals submission failed: ${text}`);
  }

  return res.json();
}

/*
================================================
SYMPTOMS
================================================
*/

export async function recordSymptoms(encounterId, symptoms) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/symptoms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId,
      symptoms
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Symptoms submission failed: ${text}`);
  }

  return res.json();
}

/*
================================================
NURSE NOTES
================================================
*/

export async function recordNotes(encounterId, notes) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId,
      notes
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notes submission failed: ${text}`);
  }

  return res.json();
}

/*
================================================
AI TRIAGE
================================================
*/

export async function runAITriage(encounterId) {

  const res = await fetch(`${ORCHESTRATOR}/triage/nurse`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AI triage failed: ${text}`);
  }

  return res.json();
                    }
