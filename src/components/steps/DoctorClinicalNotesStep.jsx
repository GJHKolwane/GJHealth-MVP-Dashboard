import React, { useState } from "react";

export default function DoctorClinicalNotesStep({ nextStep, prevStep }) {

  const [assessment, setAssessment] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  function handleContinue() {

    const doctorNotes = {
      assessment,
      diagnosis
    };

    localStorage.setItem(
      "doctorClinicalNotes",
      JSON.stringify(doctorNotes)
    );

    nextStep();
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
          Continue
        </button>

      </div>

    </div>

  );

}
