const API_BASE = "http://localhost:8080";

export async function runClinicalTriage(payload) {

  const response = await fetch(`${API_BASE}/clinical/triage`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(payload)

  });

  if (!response.ok) {
    throw new Error("AI triage request failed");
  }

  return response.json();

}
