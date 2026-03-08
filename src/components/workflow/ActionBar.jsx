import React from "react";

export default function ActionBar({
  onRunTriage,
    onApproveAssessment,
      onPrescribe,
        onConfirmPrescription,
          onCompleteConsultation
          }) {

            return (
                <div className="action-bar">

                      <button onClick={onRunTriage}>
                              Run Triage
                                    </button>

                                          <button onClick={onApproveAssessment}>
                                                  Approve Assessment
                                                        </button>

                                                              <button onClick={onPrescribe}>
                                                                      Prescribe Medication
                                                                            </button>

                                                                                  <button onClick={onConfirmPrescription}>
                                                                                          Confirm Prescription
                                                                                                </button>

                                                                                                      <button onClick={onCompleteConsultation}>
                                                                                                              Complete Consultation
                                                                                                                    </button>

                                                                                                                        </div>
                                                                                                                          );

                                                                                                                          }