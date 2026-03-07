import React from "react";

export default function NurseAssessmentStep({ nextStep, prevStep }) {

  return (

      <div>

            <h3>Nurse Clinical Input</h3>

                  <textarea
                          placeholder="Enter symptoms and nurse notes"
                                  rows="5"
                                          style={{ width: "100%" }}
                                                />

                                                      <div style={{ marginTop: "20px" }}>

                                                              <button onClick={prevStep}>
                                                                        Back
                                                                                </button>

                                                                                        <button onClick={nextStep} style={{ marginLeft: "10px" }}>
                                                                                                  Generate AI Triage
                                                                                                          </button>

                                                                                                                </div>

                                                                                                                    </div>

                                                                                                                      );

                                                                                                                      }