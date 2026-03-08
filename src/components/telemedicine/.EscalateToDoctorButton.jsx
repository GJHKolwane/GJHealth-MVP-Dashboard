import React, { useState } from "react";

export default function EscalateToDoctorButton({ consultationId, soan }) {

  const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

      const escalate = async () => {

          try {

                setLoading(true);

                      const response = await fetch("/consultation/escalate", {
                              method: "POST",
                                      headers: {
                                                "Content-Type": "application/json"
                                                        },
                                                                body: JSON.stringify({
                                                                          consultationId,
                                                                                    soan
                                                                                            })
                                                                                                  });

                                                                                                        const data = await response.json();

                                                                                                              if (response.ok) {
                                                                                                                      setStatus("Doctor has been notified.");
                                                                                                                            } else {
                                                                                                                                    setStatus("Escalation failed.");
                                                                                                                                          }

                                                                                                                                              } catch (err) {
                                                                                                                                                    console.error(err);
                                                                                                                                                          setStatus("Network error.");
                                                                                                                                                              }

                                                                                                                                                                  setLoading(false);
                                                                                                                                                                    };

                                                                                                                                                                      return (

                                                                                                                                                                          <div style={{ marginTop: "10px" }}>

                                                                                                                                                                                <button
                                                                                                                                                                                        onClick={escalate}
                                                                                                                                                                                                disabled={loading}
                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                  backgroundColor: "#f59e0b",
                                                                                                                                                                                                                            color: "white",
                                                                                                                                                                                                                                      padding: "10px 16px",
                                                                                                                                                                                                                                                border: "none",
                                                                                                                                                                                                                                                          borderRadius: "6px",
                                                                                                                                                                                                                                                                    cursor: "pointer"
                                                                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                          {loading ? "Escalating..." : "Escalate to Doctor"}
                                                                                                                                                                                                                                                                                                </button>

                                                                                                                                                                                                                                                                                                      {status && (
                                                                                                                                                                                                                                                                                                              <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
                                                                                                                                                                                                                                                                                                                        {status}
                                                                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                            }