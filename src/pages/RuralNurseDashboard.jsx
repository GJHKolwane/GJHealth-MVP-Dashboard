import React from "react";
import { runAITriage, recordVitals } from "../services/clinicalApi";

const RuralNurseDashboard = () => {

  const encounterId = "demo-encounter"; // temporary test value

  const handleVitals = async () => {
    try {

      const vitals = {
        temperature: 38.2,
        pulse: 92,
        bloodPressure: "120/80"
      };

      const result = await recordVitals(encounterId, vitals);

      console.log("Vitals stored", result);

      alert("Vitals recorded");

    } catch (err) {
      console.error(err);
      alert("Vitals failed");
    }
  };

  const handleAITriage = async () => {

    try {

      const result = await runAITriage(encounterId);

      console.log("AI triage result", result);

      alert("AI triage completed");

    } catch (err) {

      console.error(err);
      alert("AI triage failed");

    }
  };

  return (

    <div>

      <h1>Rural Nurse Dashboard</h1>

      <p>Patient Intake & AI Triage</p>

      <div style={{ marginTop: "20px" }}>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>

          <h3>Patient Intake Queue</h3>

          <p>Patient: Fever & headache</p>

          <button
            style={{ marginRight: "10px" }}
            onClick={handleVitals}
          >
            Record Vitals
          </button>

          <button onClick={handleAITriage}>
            Send to AI Triage
          </button>

        </div>

      </div>

    </div>

  );
};

export default RuralNurseDashboard;
