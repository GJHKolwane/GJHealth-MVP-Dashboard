import React, { useState } from "react";

export default function PatientLookupStep({ nextStep }) {

const [omang, setOmang] = useState("");
const [loading, setLoading] = useState(false);

async function handleSearch() {

setLoading(true);

try {

const API = "http://localhost:5050";

let patientRes = await fetch(`${API}/patients/search/${omang}`);

let patient;

if (patientRes.status === 404) {

const createRes = await fetch(`${API}/patients`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: "Unknown Patient",
gender: "unknown",
birthDate: "2000-01-01",
telecom: []
})
});

patient = await createRes.json();

} else {

patient = await patientRes.json();

}

const encounterRes = await fetch(`${API}/encounters`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
patientId: patient.id,
reasonCode: ["General consultation"]
})
});

const encounter = await encounterRes.json();

localStorage.setItem("currentEncounter", encounter.id);

nextStep();

} catch (err) {

console.error(err);
alert("Patient intake failed");

}

setLoading(false);

}

return (

<div>

<h3>Patient Identification</h3>

<input
type="text"
placeholder="Enter Omang"
value={omang}
onChange={(e) => setOmang(e.target.value)}
/>

<button onClick={handleSearch}>
{loading ? "Processing..." : "Fetch Patient"}
</button>

</div>

);

}
