import React, { useState } from "react";
import { startConsultation } from "../../services/clinicalApi";

export default function PatientLookupStep({ nextStep }) {

  const [omang, setOmang] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {

    setLoading(true);

    try {

      const result = await startConsultation(omang);

      localStorage.setItem("currentEncounter", result.encounterId);

      nextStep();

    } catch (err) {

      console.error(err);
      alert("Patient intake failed");

    }

    setLoading(false);

  }

  return (

    <div>

      <h3>Patient Identification</h3>

      <input
        type="text"
        placeholder="Enter Omang"
        value={omang}
        onChange={(e) => setOmang(e.target.value)}
      />

      <button onClick={handleSearch}>
        {loading ? "Processing..." : "Fetch Patient"}
      </button>

    </div>

  );

}
