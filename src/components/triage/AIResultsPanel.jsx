import React from "react";

export default function AIResultsPanel({ result }) {

  if (!result) {
    return (
      <div className="card">
        <h3>AI Clinical Support</h3>
        <p>No AI results available</p>
      </div>
    );
  }

  return (

    <div className="card">

      <h3>AI Clinical Support</h3>

      <p><strong>Observations</strong></p>

      <ul>
        {(result.observations || []).map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>

      <p><strong>Considerations</strong></p>

      <ul>
        {(result.considerations || []).map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <p>
        <strong>AI Suggested Risk Level:</strong>{" "}
        {result.riskLevel || "Unknown"}
      </p>

      <p style={{ fontSize: "0.9em", marginTop: "10px", color: "#666" }}>
        This AI output provides clinical support information only. 
        Final clinical judgment remains the responsibility of the healthcare professional.
      </p>

    </div>

  );

}
