import { useState } from "react";

export default function NurseAssessment({ onApprove }) {

  const [notes, setNotes] = useState("");

    return (

        <div className="card">

              <h3>Nurse Clinical Impression</h3>

                    <textarea
                            placeholder="Enter nurse assessment..."
                                    value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                                  />

                                                        <button onClick={() => onApprove(notes)}>
                                                                Approve Assessment
                                                                      </button>

                                                                          </div>

                                                                            );

                                                                            }