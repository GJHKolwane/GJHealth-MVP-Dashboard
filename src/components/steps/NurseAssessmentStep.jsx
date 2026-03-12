import React, { useState } from "react";

import {
  recordVitals,
  recordSymptoms,
  recordNotes,
  runAITriage
} from "../../services/clinicalApi";

export default function NurseAssessmentStep({ nextStep, prevStep }) {

  const [temperature, setTemperature] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [symptomsText, setSymptomsText] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const encounterId = localStorage.getItem("currentEncounter");

  async function handleSubmit() {

    try {

      setLoading(true);

      /*
      ================================================
      STORE VITALS
      ================================================
      */

      await recordVitals(encounterId, {
        temperature,
        bloodPressure,
        heartRate
      });

      /*
      ================================================
      PARSE SYMPTOMS
      ================================================
      */

      const symptoms = symptomsText
        .split(",")
        .map((s) => ({
          name: s.trim(),
          severity: "unknown",
          duration: "",
          notes: ""
        }));

      await recordSymptoms(encounterId, symptoms);

      /*
      ================================================
      STORE NOTES
      ================================================
      */

      await recordNotes(encounterId, notes);

      /*
      ================================================
      RUN AI TRIAGE
      ================================================
      */

      const triage = await runAITriage(encounterId);

      /*
      ================================================
      STORE RESULT LOCALLY
      ================================================
      */

      localStorage.setItem(
        "aiTriageResult",
        JSON.stringify(triage)
      );

      nextStep();

    } catch (err) {

      console.error("Assessment submission failed", err);

      alert("Failed to process nurse assessment");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div>

      <h3>Nurse Clinical Input</h3>

      <h4>Vitals</h4>

      <input
        placeholder="Temperature (°C)"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <input
        placeholder="Blood Pressure"
        value={bloodPressure}
        onChange={(e) => setBloodPressure(e.target.value)}
      />

      <input
        placeholder="Heart Rate"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
      />

      <h4>Symptoms</h4>

      <textarea
        placeholder="Enter symptoms separated by commas"
        rows="3"
        style={{ width: "100%" }}
        value={symptomsText}
        onChange={(e) => setSymptomsText(e.target.value)}
      />

      <h4>Nurse Notes</h4>

      <textarea
        placeholder="Additional clinical notes"
        rows="4"
        style={{ width: "100%" }}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>

        <button onClick={prevStep}>
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ marginLeft: "10px" }}
        >
          {loading ? "Processing..." : "Generate AI Triage"}
        </button>

      </div>

    </div>

  );

      }
