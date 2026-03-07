const API_BASE = "http://localhost:8080"; 
// later this will be API Gateway URL

export async function fetchPatients() {
  const response = await fetch(`${API_BASE}/patients`);
  return response.json();
}

export async function fetchConsultations() {
  const response = await fetch(`${API_BASE}/consultations`);
  return response.json();
}

export async function fetchMedicineStock() {
  const response = await fetch(`${API_BASE}/medicine`);
  return response.json();
}
