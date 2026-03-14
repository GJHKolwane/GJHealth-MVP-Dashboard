import React from "react";

export default function AIResultsPanel({ result }) {

  /*
  ========================================================
  NO RESULT YET
  ========================================================
  Panel should only appear when AI result exists.
  */

  if (!result) {
    return null;
  }

  /*
  ========================================================
  SAFE EXTRACTION
  Prevent UI crashes if AI structure changes
  */

  const riskLevel = result?.riskLevel || "Unknown";

  const observations = Array.isArray(result?.observations)
    ? result.observations
    : [];

  const considerations = Array.isArray(result?.considerations)
    ? result.considerations
    : [];

  const reasoning = result?.reasoning || null;

  const aiSuggestion = result?.aiSuggestion || null;

  /*
  ========================================================
  RENDER PANEL
  ========================================================
  */

  return (

    <div className="card">

      <h3>AI Clinical Support</h3>

      {/* Risk Level */}

      <p>
        <strong>AI Suggested Risk Level:</strong> {riskLevel}
      </p>

      {/* Observations */}

      {observations.length > 0 && (

        <>
          <p><strong>Observations</strong></p>

          <ul>
            {observations.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </>

      )}

      {/* Considerations */}

      {considerations.length > 0 && (

        <>
          <p><strong>Clinical Considerations</strong></p>

          <ul>
            {considerations.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>

      )}

      {/* Reasoning */}

      {reasoning && (

        <>
          <p><strong>AI Clinical Reasoning</strong></p>
          <p>{reasoning}</p>
        </>

      )}

      {/* AI Suggestion */}

      {aiSuggestion && (

        <>
          <p><strong>AI Suggestion</strong></p>
          <p>{aiSuggestion}</p>
        </>

      )}

      {/* Governance Notice */}

      <p
        style={{
          fontSize: "0.85em",
          marginTop: "20px",
          color: "#666"
        }}
      >
        This AI output provides clinical support information only.
        Final clinical judgment remains the responsibility of the healthcare professional.
      </p>

    </div>

  );

      }
