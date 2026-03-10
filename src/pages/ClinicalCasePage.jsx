import React, { useState } from "react";

import StepWizard from "../components/steps/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

import AIResultsPanel from "../components/triage/AIResultsPanel";

import { submitSOAN } from "../services/clinicalApi";

export default function ClinicalCasePage() {

const [step, setStep] = useState(0);
const [aiResult, setAiResult] = useState(null);

const nextStep = () => setStep(step + 1);
const prevStep = () => setStep(step - 1);

async function handleTriage(notes) {

try {

  const encounterId = localStorage.getItem("currentEncounter");

    const result = await submitSOAN(encounterId, {
        subjective: notes,
            objective: "",
                assessment: "",
                    nextSteps: ""
                      });

                        setAiResult({
                            observations: ["Patient symptoms recorded"],
                                considerations: [result.triage.aiRecommendation],
                                    riskLevel: result.triage.riskLevel
                                      });

                                        nextStep();

                                        } catch (err) {

                                          console.error("Triage failed", err);

                                          }

                                          }

                                          function renderStep() {

                                          switch (step) {

                                            case 0:
                                                return <PatientLookupStep nextStep={nextStep} />;

                                                  case 1:
                                                      return (
                                                            <NurseAssessmentStep
                                                                    nextStep={handleTriage}
                                                                            prevStep={prevStep}
                                                                                  />
                                                                                      );

                                                                                        case 2:
                                                                                            return <AIResultsPanel result={aiResult} />;

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