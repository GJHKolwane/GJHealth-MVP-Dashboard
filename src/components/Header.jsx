import React from "react";

const Header = () => {
  return (
      <header
            style={{
                    width: "100%",
                            height: "60px",
                                    background: "#0b74c4",
                                            color: "white",
                                                    display: "flex",
                                                            alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                            padding: "0 20px",
                                                                                    boxSizing: "border-box"
                                                                                          }}
                                                                                              >
                                                                                                    <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                                                                                                            GJHealth | VTS Technologies
                                                                                                                  </div>

                                                                                                                        <div>
                                                                                                                                🔔 Alerts&nbsp;&nbsp; 👤 Profile
                                                                                                                                      </div>
                                                                                                                                          </header>
                                                                                                                                            );
                                                                                                                                            };

                                                                                                                                            export default Header;