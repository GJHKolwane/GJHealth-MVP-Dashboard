import React, { useState } from "react";
import { createPatientAndEncounter } from "../../services/clinicalApi";

export default function PatientLookupStep({ nextStep }) {

const [omang, setOmang] = useState("");
const [loading, setLoading] = useState(false);

async function handleSearch() {

if (!omang) return;

setLoading(true);

try {

  const encounter = await createPatientAndEncounter(omang);
  localStorage.setItem("currentEncounter", encounter.id);

    console.log("Encounter started:", encounter);

      nextStep();

      } catch (err) {

        console.error("Patient lookup failed", err);

        }

        setLoading(false);

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

                                <button onClick={handleSearch} disabled={loading}>
                                    {loading ? "Loading..." : "Fetch Patient"}
                                      </button>

                                      </div>

                                      );

                                      }