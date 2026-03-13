import React, { useState } from "react";

export default function DoctorConsultationStep({ nextStep, prevStep }) {

  const [consultationNotes, setConsultationNotes] = useState("");
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
      SEND TO SHARED CASE STATE
      =========================================
      */

      const response = await fetch(
        `http://localhost:5050/encounters/${encounterId}/doctor-notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            consultationNotes,
            assessment: "",
            diagnosis: ""
          })
        }
      );

      if (!response.ok) {
        throw new Error("Doctor consultation failed");
      }

      const data = await response.json();

      /*
      =========================================
      OFFLINE FALLBACK STORAGE
      =========================================
      */

      localStorage.setItem(
        "doctorConsultationNotes",
        consultationNotes
      );

      nextStep();

    } catch (err) {

      console.error(err);

      alert("Failed to record doctor consultation");

    }

    setLoading(false);

  }

  return (

    <div>

      <h3>Doctor Consultation</h3>

      <p>
        Record the doctor–patient consultation findings.
      </p>

      <textarea
        rows="6"
        style={{ width: "100%" }}
        placeholder="Consultation observations..."
        value={consultationNotes}
        onChange={(e) => setConsultationNotes(e.target.value)}
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
