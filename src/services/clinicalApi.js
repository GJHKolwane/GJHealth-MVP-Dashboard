/*
================================================
API CONFIGURATION
================================================
*/

const ORCHESTRATOR =
  import.meta.env.VITE_ORCHESTRATOR ||
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

/*
================================================
FOLLOW-UP APPOINTMENT
================================================
*/

export async function scheduleFollowUp(encounterId, appointment) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/followup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId,
      date: appointment.date,
      reason: appointment.reason
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Follow-up scheduling failed: ${text}`);
  }

  return res.json();
}

/*
================================================
TREATMENT DECISION
================================================
*/

export async function recordTreatmentDecision(encounterId, decision) {

  const res = await fetch(`${ORCHESTRATOR}/clinical/treatment-decision`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encounterId,
      decision
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Treatment decision failed: ${text}`);
  }

  return res.json();
}

/*
================================================
PRESCRIPTION
================================================
*/

export async function submitPrescription(encounterId, prescription) {

  const res = await fetch(`${ORCHESTRATOR}/prescribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      consultationId: encounterId,
      facilityId: "FAC-A",
      medication: prescription.medication,
      quantity: prescription.quantity,
      prescriberId: "doctor-demo"
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Prescription failed: ${text}`);
  }

  return res.json();
}
