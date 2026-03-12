import React, { useState } from "react";

export default function DoctorTreatmentDecisionStep({ nextStep, prevStep }) {

  const [decision, setDecision] = useState("");

  function handleContinue() {

    localStorage.setItem(
      "doctorTreatmentDecision",
      decision
    );

    nextStep();
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
          Continue
        </button>

      </div>

    </div>

  );

}
