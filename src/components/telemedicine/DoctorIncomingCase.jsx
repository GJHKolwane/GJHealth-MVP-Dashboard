import React from "react";

const DoctorIncomingCase = ({ consultationId, soan, onAccept, onReject }) => {

  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "20px auto"
      }}
    >

      <h2 style={{ marginBottom: "10px" }}>
        Incoming Telemedicine Consultation
      </h2>

      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Consultation ID: {consultationId}
      </p>

      {/* SOAN PANEL */}

      <div style={{ marginBottom: "20px" }}>

        <h3>Subjective</h3>
        <p>{soan?.subjective || "No subjective data provided"}</p>

        <h3>Objective</h3>
        <p>{soan?.objective || "No objective data provided"}</p>

        <h3>Assessment</h3>
        <p>{soan?.assessment || "No assessment available"}</p>

        <h3>Next Steps</h3>
        <p>{soan?.nextSteps || "No recommended steps yet"}</p>

      </div>

      {/* ACTION BUTTONS */}

      <div style={{ display: "flex", gap: "10px" }}>

        <button
          onClick={onAccept}
          style={{
            background: "#10b981",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Accept Consultation
        </button>

        <button
          onClick={onReject}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Decline
        </button>

      </div>

    </div>
  );
};

export default DoctorIncomingCase;
