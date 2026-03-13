import React, { useState } from "react";

export default function DoctorTreatmentDecisionStep({ nextStep, prevStep }) {

  const [decision, setDecision] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleContinue() {

    const encounterId = localStorage.getItem("currentEncounter");

    if (!encounterId) {
      alert("Encounter not found");
      return;
    }

    if (!decision) {
      alert("Please select a treatment decision");
      return;
    }

    setLoading(true);

    try {

      /*
      =========================================
      SEND TREATMENT DECISION TO CASE SERVICE
      =========================================
      */

      const response = await fetch(
        `http://localhost:5050/encounters/${encounterId}/treatment-decision`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            decision,
            treatmentPlan: decision,
            followUpRequired: false
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to record treatment decision");
      }

      const data = await response.json();

      /*
      =========================================
      OFFLINE FALLBACK STORAGE
      =========================================
      */

      localStorage.setItem(
        "doctorTreatmentDecision",
        decision
      );

      nextStep();

    } catch (err) {

      console.error(err);

      alert("Failed to record treatment decision");

    }

    setLoading(false);

  }

  return (

    <div>

      <h3>Treatment Decision</h3>

      <p>Select the treatment approach.</p>

      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
      >
        <option value="">Select decision</option>
        <option value="prescribe">Prescribe Medication</option>
        <option value="telemedicine">Schedule Telemedicine Consult</option>
        <option value="referral">Refer to Hospital</option>
      </select>

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
