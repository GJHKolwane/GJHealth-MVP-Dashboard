import { useState } from "react";

export default function PrescriptionPanel({
  clinicianRole,
  facilityId,
  onMedicationChange
}) {

  const [medication, setMedication] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const AUTHORITY_URL = "http://localhost:8083/validate-prescription";

  const validatePrescription = async () => {

    if (!medication) {
      setMessage("Select medication first");
      return;
    }

    try {

      const res = await fetch(AUTHORITY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          clinicianRole,
          medication,
          country: "BW"
        })
      });

      const data = await res.json();

      if (data.decision === "AUTHORIZED") {

        setMessage("Prescription authorized");

        if (onMedicationChange) {
          onMedicationChange(medication);
        }

      } else if (data.decision === "ESCALATE_TO_DOCTOR") {

        setMessage("Medication requires doctor approval");

      } else {

        setMessage("Prescription denied");

      }

    } catch (err) {

      console.error("Authority validation failed", err);
      setMessage("Authority service unavailable");

    }

  };

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    >

      <h3>Prescription</h3>

      <div style={{ marginBottom: "10px" }}>

        <label>Medication</label>

        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication"
          style={{
            marginLeft: "10px",
            padding: "6px"
          }}
        />

      </div>

      <div style={{ marginBottom: "10px" }}>

        <label>Quantity</label>

        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            marginLeft: "10px",
            padding: "6px",
            width: "70px"
          }}
        />

      </div>

      <button
        onClick={validatePrescription}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Validate Prescription
      </button>

      {message && (
        <p style={{ marginTop: "10px" }}>
          {message}
        </p>
      )}

    </div>

  );

    }
