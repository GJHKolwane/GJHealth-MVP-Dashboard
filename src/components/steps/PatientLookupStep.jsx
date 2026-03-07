import React, { useState } from "react";

export default function PatientLookupStep({ nextStep }) {

  const [omang, setOmang] = useState("");

    function handleSearch() {

        console.log("Searching patient:", omang);

            nextStep();

              }

                return (

                    <div>

                          <h3>Patient Identification</h3>

                                <input
                                        type="text"
                                                placeholder="Enter Omang"
                                                        value={omang}
                                                                onChange={(e) => setOmang(e.target.value)}
                                                                      />

                                                                            <button onClick={handleSearch}>
                                                                                    Fetch Patient
                                                                                          </button>

                                                                                              </div>

                                                                                                );

                                                                                                }