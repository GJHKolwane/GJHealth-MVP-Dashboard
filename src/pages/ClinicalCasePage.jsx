import React, { useState } from "react";

import StepWizard from "../components/StepWizard";

import PatientLookupStep from "../components/steps/PatientLookupStep";
import NurseAssessmentStep from "../components/steps/NurseAssessmentStep";

export default function ClinicalCasePage() {

  const [step, setStep] = useState(0);

    const nextStep = () => setStep(step + 1);
      const prevStep = () => setStep(step - 1);

        function renderStep() {

            switch (step) {

                  case 0:
                          return <PatientLookupStep nextStep={nextStep} />;

                                case 1:
                                        return <NurseAssessmentStep nextStep={nextStep} prevStep={prevStep} />;

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