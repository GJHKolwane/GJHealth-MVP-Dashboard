import React, { useEffect, useState } from "react";
import AIResultsPanel from "../triage/AIResultsPanel";

export default function TriageResultsStep({ nextStep, prevStep }) {

  const [triage, setTriage] = useState(null);

  useEffect(() => {

    const stored = localStorage.getItem("aiTriageResult");

    if (stored) {
      setTriage(JSON.parse(stored));
    }

  }, []);

  return (

    <div>

      <h3>AI Triage Recommendation</h3>

      <AIResultsPanel result={triage} />

      <div style={{ marginTop: "20px" }}>

        <button onClick={prevStep}>
          Back
        </button>

        <button
          onClick={nextStep}
          style={{ marginLeft: "10px" }}
        >
          Continue to Doctor Review
        </button>

      </div>

    </div>

  );

}
