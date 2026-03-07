const API_BASE = "http://localhost:8080";

export async function runClinicalTriage(data) {

  const response = await fetch(`${API_BASE}/triage/nurse`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Triage request failed");
  }

  return response.json();
}
