import React, { useState, useEffect } from "react";

import StepWizard from "../components/steps/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

import AIResultsPanel from "../components/triage/AIResultsPanel";

import DoctorConsultationStep from "../components/steps/DoctorConsultationStep";
import DoctorClinicalNotesStep from "../components/steps/DoctorClinicalNotesStep";
import DoctorTreatmentDecisionStep from "../components/steps/DoctorTreatmentDecisionStep";
import DoctorDecisionStep from "../components/steps/DoctorDecisionStep";

export default function ClinicalCasePage() {

  const [step, setStep] = useState(0);
  const [aiResult, setAiResult] = useState(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  /*
  =====================================================
  LOAD AI TRIAGE RESULT FROM STORAGE
  =====================================================
  */

  useEffect(() => {

    const stored = localStorage.getItem("aiTriageResult");

    if (stored) {
      setAiResult(JSON.parse(stored));
    }

  }, []);

  /*
  =====================================================
  STEP CONTROLLER
  =====================================================
  */

  function renderStep() {

    switch (step) {

      /*
      =====================================================
      STEP 0
      Patient Identification
      =====================================================
      */

      case 0:
        return (
          <PatientLookupStep
            nextStep={nextStep}
          />
        );

      /*
      =====================================================
      STEP 1
      Nurse Assessment
      =====================================================
      */

      case 1:
        return (
          <NurseAssessmentStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      /*
      =====================================================
      STEP 2
      AI TRIAGE RESULT
      =====================================================
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
                Continue to Doctor Consultation
              </button>

            </div>

          </div>

        );

      /*
      =====================================================
      STEP 3
      Doctor Consultation
      =====================================================
      */

      case 3:
        return (
          <DoctorConsultationStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      /*
      =====================================================
      STEP 4
      Doctor Clinical Notes
      =====================================================
      */

      case 4:
        return (
          <DoctorClinicalNotesStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      /*
      =====================================================
      STEP 5
      Treatment Decision
      =====================================================
      */

      case 5:
        return (
          <DoctorTreatmentDecisionStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      /*
      =====================================================
      STEP 6
      Prescription
      =====================================================
      */

      case 6:
        return (
          <DoctorDecisionStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
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
