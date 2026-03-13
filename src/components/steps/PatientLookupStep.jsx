import React, { useState } from "react";
import { startConsultation } from "../../services/clinicalApi";

export default function PatientLookupStep({ nextStep }) {

  const [omang, setOmang] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {

    if (!omang.trim()) {
      alert("Please enter patient OMANG");
      return;
    }

    setLoading(true);

    try {

      const result = await startConsultation(omang.trim());

      console.log("Consultation result:", result);

      localStorage.setItem("currentEncounter", result.encounterId);

      nextStep();

    } catch (err) {

      console.error("Patient intake error:", err);

      alert("Patient intake failed");

    } finally {

      setLoading(false);

    }

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

      <button
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Processing..." : "Fetch Patient"}
      </button>

    </div>

  );

}
