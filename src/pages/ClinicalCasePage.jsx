import React, { useState, useEffect } from "react";

import StepWizard from "../components/steps/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

import AIResultsPanel from "../components/triage/AIResultsPanel";

import NurseDecisionStep from "../components/steps/NurseDecisionStep";

import DoctorConsultationStep from "../components/steps/DoctorConsultationStep";
import DoctorClinicalNotesStep from "../components/steps/DoctorClinicalNotesStep";
import DoctorTreatmentDecisionStep from "../components/steps/DoctorTreatmentDecisionStep";
import DoctorDecisionStep from "../components/steps/DoctorDecisionStep";

export default function ClinicalCasePage() {

  const [step, setStep] = useState(0);
  const [aiResult, setAiResult] = useState(null);

  const [route, setRoute] = useState(null);

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
                Continue
              </button>

            </div>

          </div>

        );

      /*
      =====================================================
      STEP 3
      NURSE DECISION
      =====================================================
      */

      case 3:
        return (
          <NurseDecisionStep
            nextStep={nextStep}
            prevStep={prevStep}
            setRoute={setRoute}
          />
        );

      /*
      =====================================================
      STEP 4
      ROUTING DECISION
      =====================================================
      */

      case 4:

        if (route === "doctor_flow") {

          return (
            <DoctorConsultationStep
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );

        }

        if (route === "nurse_prescription") {

          return (
            <DoctorDecisionStep
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );

        }

        if (route === "schedule_followup") {

          return (

            <div>

              <h3>Schedule Follow-Up Appointment</h3>

              <p>
                Appointment scheduling will be implemented in the next step.
              </p>

              <button onClick={prevStep}>
                Back
              </button>

            </div>

          );

        }

        return null;

      /*
      =====================================================
      DOCTOR FLOW
      =====================================================
      */

      case 5:
        return (
          <DoctorClinicalNotesStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 6:
        return (
          <DoctorTreatmentDecisionStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 7:
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
