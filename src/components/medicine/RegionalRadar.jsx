export default function RegionalRadar({ facilities }) {

      return (

          <div className="card">

                <h3>Nearby Facilities</h3>

                      {facilities.map((f, i) => (
                              <p key={i}>
                                        {f.facilityName} — {f.availableUnits}
                                                </p>
                                                      ))}

                                                          </div>

                                                            );

                                                            }
