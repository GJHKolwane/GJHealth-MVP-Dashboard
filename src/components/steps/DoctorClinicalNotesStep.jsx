import React, { useState } from "react";

export default function DoctorClinicalNotesStep({ nextStep, prevStep }) {

  const [assessment, setAssessment] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleContinue() {

    const encounterId = localStorage.getItem("currentEncounter");

    if (!encounterId) {
      alert("Encounter not found");
      return;
    }

    setLoading(true);

    try {

      /*
      =========================================
      SEND CLINICAL NOTES TO CASE SERVICE
      =========================================
      */

      const consultationNotes =
        localStorage.getItem("doctorConsultationNotes") || "";

      const response = await fetch(
        `http://localhost:5050/encounters/${encounterId}/doctor-notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            consultationNotes,
            assessment,
            diagnosis
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to record doctor clinical notes");
      }

      const data = await response.json();

      /*
      =========================================
      OFFLINE FALLBACK STORAGE
      =========================================
      */

      const doctorNotes = {
        consultationNotes,
        assessment,
        diagnosis
      };

      localStorage.setItem(
        "doctorClinicalNotes",
        JSON.stringify(doctorNotes)
      );

      nextStep();

    } catch (err) {

      console.error(err);

      alert("Failed to record doctor notes");

    }

    setLoading(false);

  }

  return (

    <div>

      <h3>Doctor Clinical Assessment</h3>

      <h4>Assessment</h4>

      <textarea
        rows="4"
        style={{ width: "100%" }}
        placeholder="Doctor clinical reasoning..."
        value={assessment}
        onChange={(e) => setAssessment(e.target.value)}
      />

      <h4>Diagnosis</h4>

      <input
        style={{ width: "100%" }}
        placeholder="Provisional diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>

        <button onClick={prevStep}>
          Back
        </button>

        <button
          onClick={handleContinue}
          style={{ marginLeft: "10px" }}
        >
          {loading ? "Saving..." : "Continue"}
        </button>

      </div>

    </div>

  );

  }
