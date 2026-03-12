import React, { useState } from "react";
import { submitPrescription } from "../../services/clinicalApi";

export default function DoctorDecisionStep({ nextStep, prevStep }) {

  const [medication, setMedication] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  const encounterId = localStorage.getItem("currentEncounter");

  async function handlePrescription() {

    try {

      setLoading(true);

      const decision = await submitPrescription(encounterId, {
        medication,
        quantity
      });

      console.log("Prescription decision:", decision);

      localStorage.setItem(
        "prescriptionDecision",
        JSON.stringify(decision)
      );

      nextStep();

    } catch (err) {

      console.error("Prescription failed", err);
      alert("Prescription submission failed");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div>

      <h3>Doctor Clinical Decision</h3>

      <p>
        Review AI recommendation and issue treatment decision.
      </p>

      <h4>Medication</h4>

      <input
        placeholder="Medication name"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
      />

      <h4>Quantity</h4>

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>

        <button onClick={prevStep}>
          Back
        </button>

        <button
          onClick={handlePrescription}
          disabled={loading}
          style={{ marginLeft: "10px" }}
        >
          {loading ? "Processing..." : "Issue Prescription"}
        </button>

      </div>

    </div>

  );

        }
