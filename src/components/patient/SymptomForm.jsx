import { useState } from "react";

export default function SymptomForm({ onSubmit }) {

  const [symptoms, setSymptoms] = useState("");
    const [duration, setDuration] = useState("");
      const [severity, setSeverity] = useState("");
        const [allergies, setAllergies] = useState("UNKNOWN");

          const handleSubmit = (e) => {
              e.preventDefault();

                  onSubmit({
                        symptoms,
                              duration,
                                    severity,
                                          allergies
                                              });
                                                };

                                                  return (

                                                      <form onSubmit={handleSubmit} className="card">

                                                            <h3>Patient Intake</h3>

                                                                  <input
                                                                          placeholder="Symptoms"
                                                                                  value={symptoms}
                                                                                          onChange={(e) => setSymptoms(e.target.value)}
                                                                                                />

                                                                                                      <input
                                                                                                              placeholder="Duration"
                                                                                                                      value={duration}
                                                                                                                              onChange={(e) => setDuration(e.target.value)}
                                                                                                                                    />

                                                                                                                                          <input
                                                                                                                                                  placeholder="Severity (1-10)"
                                                                                                                                                          value={severity}
                                                                                                                                                                  onChange={(e) => setSeverity(e.target.value)}
                                                                                                                                                                        />

                                                                                                                                                                              <select
                                                                                                                                                                                      value={allergies}
                                                                                                                                                                                              onChange={(e) => setAllergies(e.target.value)}
                                                                                                                                                                                                    >
                                                                                                                                                                                                            <option value="UNKNOWN">Unknown</option>
                                                                                                                                                                                                                    <option value="NONE">None</option>
                                                                                                                                                                                                                            <option value="KNOWN">Known Allergy</option>
                                                                                                                                                                                                                                  </select>

                                                                                                                                                                                                                                        <button type="submit">Run Triage</button>

                                                                                                                                                                                                                                            </form>
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              }