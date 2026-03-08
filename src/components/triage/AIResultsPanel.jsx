export default function AIResultsPanel({ result }) {

      if (!result) return null;

        return (

            <div className="card">

                  <h3>AI Clinical Support</h3>

                        <p><strong>Observations</strong></p>
                              <ul>
                                      {result.observations.map((o, i) => (
                                                <li key={i}>{o}</li>
                                                        ))}
                                                              </ul>

                                                                    <p><strong>Considerations</strong></p>
                                                                          <ul>
                                                                                  {result.considerations.map((c, i) => (
                                                                                            <li key={i}>{c}</li>
                                                                                                    ))}
                                                                                                          </ul>

                                                                                                                <p><strong>Risk Level:</strong> {result.riskLevel}</p>

                                                                                                                    </div>

                                                                                                                      );

                                                                                                                      }
