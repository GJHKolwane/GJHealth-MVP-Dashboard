import { useState, useEffect } from "react";

export default function RegionalMedicineRadar({ medication }) {

  const [facilities, setFacilities] = useState([]);

    const BASE_URL = "http://localhost:8086/internal";

      useEffect(() => {

          if (!medication) return;

              async function loadRegionalData() {
                    try {

                            const res = await fetch(
                                      `${BASE_URL}/regional?medication=${medication}`
                                              );

                                                      const data = await res.json();

                                                              setFacilities(data);

                                                                    } catch (err) {

                                                                            console.error("Regional radar load failed", err);

                                                                                  }
                                                                                      }

                                                                                          loadRegionalData();

                                                                                            }, [medication]);

                                                                                              return (

                                                                                                  <div style={{
                                                                                                        border: "1px solid #ccc",
                                                                                                              padding: "16px",
                                                                                                                    borderRadius: "8px",
                                                                                                                          marginTop: "16px"
                                                                                                                              }}>

                                                                                                                                    <h3>Regional Medicine Radar</h3>

                                                                                                                                          {!medication && <p>Select medication to view regional distribution</p>}

                                                                                                                                                {facilities.length > 0 && (

                                                                                                                                                        <table style={{ width: "100%", marginTop: "10px" }}>

                                                                                                                                                                  <thead>
                                                                                                                                                                              <tr>
                                                                                                                                                                                            <th>Facility</th>
                                                                                                                                                                                                          <th>Region</th>
                                                                                                                                                                                                                        <th>Available Units</th>
                                                                                                                                                                                                                                    </tr>
                                                                                                                                                                                                                                              </thead>

                                                                                                                                                                                                                                                        <tbody>

                                                                                                                                                                                                                                                                    {facilities
                                                                                                                                                                                                                                                                                  .sort((a, b) => b.availableUnits - a.availableUnits)
                                                                                                                                                                                                                                                                                                .map((facility, index) => (

                                                                                                                                                                                                                                                                                                              <tr key={index}>
                                                                                                                                                                                                                                                                                                                              <td>{facility.facilityName}</td>
                                                                                                                                                                                                                                                                                                                                              <td>{facility.region}</td>
                                                                                                                                                                                                                                                                                                                                                              <td>{facility.availableUnits}</td>
                                                                                                                                                                                                                                                                                                                                                                            </tr>

                                                                                                                                                                                                                                                                                                                                                                                        ))}

                                                                                                                                                                                                                                                                                                                                                                                                  </tbody>

                                                                                                                                                                                                                                                                                                                                                                                                          </table>

                                                                                                                                                                                                                                                                                                                                                                                                                )}

                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                                                                                                                                                      }