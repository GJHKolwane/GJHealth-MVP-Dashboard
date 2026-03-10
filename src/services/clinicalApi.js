const API_BASE = "http://localhost:5050";

/*
PATIENT + ENCOUNTER INITIALIZATION

Used by PatientLookupStep
Creates patient then opens encounter
*/

export async function createPatientAndEncounter(omang) {

const patientRes = await fetch("${API_BASE}/patients", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: omang,
identifier: omang
})
});

if (!patientRes.ok) {
throw new Error("Patient creation failed");
}

const patient = await patientRes.json();

const encounterRes = await fetch("${API_BASE}/encounters", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
patientId: patient.id
})
});

if (!encounterRes.ok) {
throw new Error("Encounter creation failed");
}

return encounterRes.json();
}

/*
VITALS RECORDING

Used by NurseAssessmentStep
*/

export async function recordVitals(encounterId, vitals) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/vitals", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(vitals)
});

if (!res.ok) {
throw new Error("Vitals recording failed");
}

return res.json();
}

/*
SYMPTOMS RECORDING

Structured symptoms for AI triage
*/

export async function recordSymptoms(encounterId, symptoms) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/symptoms", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(symptoms)
});

if (!res.ok) {
throw new Error("Symptoms recording failed");
}

return res.json();
}

/*
NURSE NOTES

General nurse observations
*/

export async function recordNotes(encounterId, notes) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/notes", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
notes
})
});

if (!res.ok) {
throw new Error("Notes recording failed");
}

return res.json();
}

/*
SOAN SUBMISSION

Triggers automatic AI triage
*/

export async function submitSOAN(encounterId, soan) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/soan", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(soan)
});

if (!res.ok) {
throw new Error("SOAN submission failed");
}

return res.json();
}

/*
ESCALATE TO DOCTOR

Used when AI triage risk is high
*/

export async function escalateCase(encounterId) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/escalate", {
method: "POST"
});

if (!res.ok) {
throw new Error("Escalation failed");
}

return res.json();
}

/*
DOCTOR PRESCRIPTION

Doctor issues medication
*/

export async function submitPrescription(encounterId, prescription) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/prescription", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(prescription)
});

if (!res.ok) {
throw new Error("Prescription failed");
}

return res.json();
}

/*
CLOSE ENCOUNTER

Final step of workflow
*/

export async function closeEncounter(encounterId) {

const res = await fetch("${API_BASE}/encounters/${encounterId}/close", {
method: "PATCH"
});

if (!res.ok) {
throw new Error("Closing encounter failed");
}

return res.json();
}