import React, { useState } from "react";

export default function NurseDecisionStep({ nextStep, prevStep, setRoute }) {

  const [decision, setDecision] = useState("");

  /*
  ============================================
  LOAD AI RESULT SAFELY
  ============================================
  */

  let aiResult = null;

  try {
    aiResult = JSON.parse(localStorage.getItem("aiTriageResult"));
  } catch (err) {
    console.warn("Failed to parse AI triage result", err);
  }

  const riskLevel = aiResult?.riskLevel || "UNKNOWN";

  /*
  ============================================
  HANDLE CONTINUE
  ============================================
  */

  function handleContinue() {

    if (!decision) {
      alert("Please select a decision");
      return;
    }

    /*
    ============================================
    AUDIT TRAIL
    ============================================
    */

    const auditRecord = {
      decision,
      riskLevel,
      timestamp: new Date().toISOString(),
      source: "NURSE_DECISION"
    };

    localStorage.setItem("nurseDecision", decision);
    localStorage.setItem("nurseDecisionAudit", JSON.stringify(auditRecord));

    /*
    ============================================
    ROUTE CONTROL
    ============================================
    */

    if (decision === "treat") {
      setRoute("nurse_prescription");
    }

    if (decision === "followup") {
      setRoute("schedule_followup");
    }

    if (decision === "escalate") {
      setRoute("doctor_flow");
    }

    if (decision === "continue_care") {
      setRoute("nurse_prescription");
    }

    nextStep();
  }

  return (

    <div>

      <h3>Nurse Clinical Decision</h3>

      <p>
        AI Risk Level: <strong>{riskLevel}</strong>
      </p>

      <p>
        Select the next clinical action.
      </p>

      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
      >

        <option value="">Select decision</option>

        {/* LOW & MEDIUM */}

        {(riskLevel === "LOW" || riskLevel === "MEDIUM") && (
          <>
            <option value="treat">
              Treat Patient (Nurse Prescription)
            </option>

            <option value="followup">
              Schedule Follow-Up Appointment
            </option>

            <option value="escalate">
              Escalate to Doctor
            </option>
          </>
        )}

        {/* HIGH RISK */}

        {riskLevel === "HIGH" && (
          <>
            <option value="escalate">
              Suggested Escalation to Doctor
            </option>

            <option value="continue_care">
              Continue Care / Treatment (Rural Override)
            </option>
          </>
        )}

      </select>

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
