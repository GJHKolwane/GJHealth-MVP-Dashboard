import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const ClinicalDashboard = () => {

  const [patientId, setPatientId] = useState("");
  const [allergies, setAllergies] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [vitals, setVitals] = useState("");
  const [nurseNotes, setNurseNotes] = useState("");
  const [triageResult, setTriageResult] = useState(null);

  const runAITriage = () => {

    // Mock AI result for MVP
    setTriageResult({
      severity: "Moderate",
      diagnosis: "Respiratory Infection",
      recommendation: "Doctor review recommended"
    });

  };

  return (

    <div className="app-container">

      <Sidebar />

      <div className="dashboard-container">

        <Header />

        <div style={{ padding: "20px" }}>

          <h2>Clinical AI Workflow</h2>

          {/* Patient Identification */}

          <div className="card">

            <h3>Patient Identification</h3>

            <input
              placeholder="Enter Patient ID / Omang"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

          </div>

          {/* Allergy Safety Check */}

          <div className="card">

            <h3>Known Allergies</h3>

            <input
              placeholder="Example: Penicillin"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />

          </div>

          {/* Nurse Assessment */}

          <div className="card">

            <h3>Nurse Assessment</h3>

            <textarea
              placeholder="Symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <input
              placeholder="Vitals (BP / Temp / HR)"
              value={vitals}
              onChange={(e) => setVitals(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <textarea
              placeholder="Nurse Observations"
              value={nurseNotes}
              onChange={(e) => setNurseNotes(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />

            <button
              onClick={runAITriage}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#0b345a",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Run AI Triage
            </button>

          </div>

          {/* AI Result */}

          {triageResult && (

            <div className="card">

              <h3>AI Triage Result</h3>

              <p><strong>Severity:</strong> {triageResult.severity}</p>
              <p><strong>Possible Diagnosis:</strong> {triageResult.diagnosis}</p>
              <p><strong>Recommendation:</strong> {triageResult.recommendation}</p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default ClinicalDashboard;
