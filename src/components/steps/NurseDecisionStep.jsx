import React, { useState } from "react";

export default function NurseDecisionStep({ nextStep, prevStep, setRoute }) {

  const [decision, setDecision] = useState("");

  function handleContinue() {

    if (!decision) {
      alert("Please select a decision");
      return;
    }

    localStorage.setItem("nurseDecision", decision);

    /*
    =====================================
    ROUTE CONTROL
    =====================================
    */

    if (decision === "treat") {
      setRoute("nurse_prescription");
    }

    if (decision === "followup") {
      setRoute("schedule_followup");
    }

    if (decision === "escalate") {
      setRoute("doctor_flow");
    }

    nextStep();
  }

  return (

    <div>

      <h3>Nurse Clinical Decision</h3>

      <p>
        Based on the AI suggested risk level and clinical assessment,
        select the next action.
      </p>

      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
      >

        <option value="">Select decision</option>

        <option value="treat">
          Treat Patient (Nurse Prescription)
        </option>

        <option value="followup">
          Schedule Follow-Up Appointment
        </option>

        <option value="escalate">
          Escalate to Doctor
        </option>

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
