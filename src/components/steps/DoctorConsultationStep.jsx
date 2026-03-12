import React, { useState } from "react";

export default function DoctorConsultationStep({ nextStep, prevStep }) {

  const [consultationNotes, setConsultationNotes] = useState("");

  function handleContinue() {

    localStorage.setItem(
      "doctorConsultationNotes",
      consultationNotes
    );

    nextStep();
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
          Continue
        </button>

      </div>

    </div>

  );

}
