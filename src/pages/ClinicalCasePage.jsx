import React, { useState, useEffect } from "react";

import StepWizard from "../components/steps/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

import AIResultsPanel from "../components/triage/AIResultsPanel";

import NurseDecisionStep from "../components/steps/NurseDecisionStep";
import ScheduleAppointmentStep from "../components/steps/ScheduleAppointmentStep";

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

  useEffect(() => {

    const stored = localStorage.getItem("aiTriageResult");

    if (stored) {
      setAiResult(JSON.parse(stored));
    }

  }, []);

  function renderStep() {

    switch (step) {

      case 0:
        return (
          <PatientLookupStep nextStep={nextStep} />
        );

      case 1:
        return (
          <NurseAssessmentStep
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 2:
        return (

          <div>

            <h3>AI Triage Recommendation</h3>

            <AIResultsPanel result={aiResult} />

            <div style={{ marginTop: "20px" }}>

              <button onClick={prevStep}>
                Back
              </button>

              <button onClick={nextStep} style={{ marginLeft: "10px" }}>
                Continue
              </button>

            </div>

          </div>

        );

      case 3:
        return (
          <NurseDecisionStep
            nextStep={nextStep}
            prevStep={prevStep}
            setRoute={setRoute}
          />
        );

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
            <ScheduleAppointmentStep
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );
        }

        return null;

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
