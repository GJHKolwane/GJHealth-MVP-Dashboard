import React from "react";

const steps = [
  "Patient",
    "Nurse Input",
      "AI Triage",
        "SOAN",
          "Doctor",
            "Prescription",
              "Close"
              ];

              export default function StepWizard({ currentStep }) {

                return (
                    <div style={{ display: "flex", marginBottom: "30px" }}>

                          {steps.map((step, index) => (

                                  <div
                                            key={index}
                                                      style={{
                                                                  flex: 1,
                                                                              textAlign: "center",
                                                                                          padding: "10px",
                                                                                                      borderBottom:
                                                                                                                    index === currentStep
                                                                                                                                    ? "3px solid #0b74c4"
                                                                                                                                                    : "1px solid #ccc",
                                                                                                                                                                fontWeight: index === currentStep ? "bold" : "normal"
                                                                                                                                                                          }}
                                                                                                                                                                                  >
                                                                                                                                                                                            {step}
                                                                                                                                                                                                    </div>

                                                                                                                                                                                                          ))}

                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                );
                                                                                                                                                                                                                }