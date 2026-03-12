import React, { useState, useEffect } from "react";

import StepWizard from "../components/steps/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

import AIResultsPanel from "../components/triage/AIResultsPanel";

export default function ClinicalCasePage() {

  const [step, setStep] = useState(0);
  const [aiResult, setAiResult] = useState(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  /*
  =====================================================
  LOAD AI TRIAGE RESULT
  =====================================================
  */

  useEffect(() => {

    const stored = localStorage.getItem("aiTriageResult");

    if (stored) {
      setAiResult(JSON.parse(stored));
    }

  }, [step]);

  /*
  =====================================================
  STEP CONTROLLER
  =====================================================
  */

  function renderStep() {

    switch (step) {

      /*
      ==========================================
      STEP 1
      Patient Identification
      ==========================================
      */

      case 0:
        return <PatientLookupStep nextStep={nextStep} />;

      /*
      ==========================================
      STEP 2
      Nurse Clinical Assessment
      ==========================================
      */

      case 1:
        return (
          <NurseAssessmentStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      /*
      ==========================================
      STEP 3
      AI TRIAGE RESULT
      ==========================================
      */

      case 2:
        return (
          <div>

            <h3>AI Triage Recommendation</h3>

            <AIResultsPanel result={aiResult} />

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

      default:
        return null;

    }

  }

  return (

    <div>

      <h2>Clinical Case</h2>

      <StepWizard currentStep={step} />

      {renderStep()}

    </div>

  );

}
