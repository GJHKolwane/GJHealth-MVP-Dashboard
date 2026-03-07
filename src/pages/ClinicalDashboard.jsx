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
  const [soan, setSoan] = useState(null);
  const [doctorDecision, setDoctorDecision] = useState("");

  const runAITriage = () => {

    setTriageResult({
      severity: "Moderate",
      diagnosis: "Respiratory Infection",
      recommendation: "Doctor review recommended"
    });

  };

  const generateSOAN = () => {

    const soanReport = {
      subjective: symptoms,
      objective: vitals,
      assessment: triageResult?.diagnosis || "Pending",
      nextSteps: "Doctor review recommended"
    };

    setSoan(soanReport);

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

          {/* Allergy Safety */}

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

          {/* AI TRIAGE RESULT */}

          {triageResult && (

            <div className="card">

              <h3>AI Triage Result</h3>

              <p><strong>Severity:</strong> {triageResult.severity}</p>
              <p><strong>Possible Diagnosis:</strong> {triageResult.diagnosis}</p>
              <p><strong>Recommendation:</strong> {triageResult.recommendation}</p>

              <button
                onClick={generateSOAN}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  backgroundColor: "#1f6feb",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Generate SOAN
              </button>

            </div>

          )}

          {/* SOAN REPORT */}

          {soan && (

            <div className="card">

              <h3>SOAN Report</h3>

              <p><strong>Subjective:</strong> {soan.subjective}</p>
              <p><strong>Objective:</strong> {soan.objective}</p>
              <p><strong>Assessment:</strong> {soan.assessment}</p>
              <p><strong>Next Steps:</strong> {soan.nextSteps}</p>

            </div>

          )}

          {/* DOCTOR REVIEW */}

          {soan && (

            <div className="card">

              <h3>Doctor Review</h3>

              <textarea
                placeholder="Doctor notes / adjustments"
                value={doctorDecision}
                onChange={(e) => setDoctorDecision(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />

              <button
                style={{
                  padding: "10px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  marginRight: "10px"
                }}
              >
                Approve Diagnosis
              </button>

              <button
                style={{
                  padding: "10px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  marginRight: "10px"
                }}
              >
                Re-Diagnose
              </button>

              <button
                style={{
                  padding: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none"
                }}
              >
                Transfer Patient
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default ClinicalDashboard;
