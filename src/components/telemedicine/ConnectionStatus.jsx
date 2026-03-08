import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {

  const [status, setStatus] = useState("Checking...");
    const [mode, setMode] = useState("VIDEO");

      useEffect(() => {

          const checkConnection = () => {

                const connection =
                        navigator.connection ||
                                navigator.mozConnection ||
                                        navigator.webkitConnection;

                                              if (!connection) {
                                                      setStatus("Unknown");
                                                              setMode("VIDEO");
                                                                      return;
                                                                            }

                                                                                  const downlink = connection.downlink;

                                                                                        if (downlink >= 2) {
                                                                                                setStatus("Good");
                                                                                                        setMode("VIDEO");
                                                                                                              }
                                                                                                                    else if (downlink >= 0.5) {
                                                                                                                            setStatus("Moderate");
                                                                                                                                    setMode("AUDIO");
                                                                                                                                          }
                                                                                                                                                else {
                                                                                                                                                        setStatus("Poor");
                                                                                                                                                                setMode("TEXT");
                                                                                                                                                                      }

                                                                                                                                                                          };

                                                                                                                                                                              checkConnection();

                                                                                                                                                                                }, []);

                                                                                                                                                                                  return (

                                                                                                                                                                                      <div
                                                                                                                                                                                            style={{
                                                                                                                                                                                                    background: "#f1f5f9",
                                                                                                                                                                                                            padding: "10px 14px",
                                                                                                                                                                                                                    borderRadius: "8px",
                                                                                                                                                                                                                            display: "inline-block",
                                                                                                                                                                                                                                    marginTop: "10px"
                                                                                                                                                                                                                                          }}
                                                                                                                                                                                                                                              >

                                                                                                                                                                                                                                                    <strong>Connection:</strong> {status}

                                                                                                                                                                                                                                                          <span
                                                                                                                                                                                                                                                                  style={{
                                                                                                                                                                                                                                                                            marginLeft: "10px",
                                                                                                                                                                                                                                                                                      background: "#e0f2fe",
                                                                                                                                                                                                                                                                                                padding: "4px 8px",
                                                                                                                                                                                                                                                                                                          borderRadius: "6px",
                                                                                                                                                                                                                                                                                                                    fontSize: "0.85rem"
                                                                                                                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                          Mode: {mode}
                                                                                                                                                                                                                                                                                                                                                </span>

                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                                                                                      export default ConnectionStatus;