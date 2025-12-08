import React from "react";

const Header = () => {
  return (
      <header
            style={{
                    width: "100%",
                            height: "60px",
                                    backgroundColor: "#ffffff",
                                            borderBottom: "1px solid #e0e0e0",
                                                    display: "flex",
                                                            alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                            padding: "0 1.5rem",
                                                                                    position: "fixed",
                                                                                            top: 0,
                                                                                                    left: 0,
                                                                                                            zIndex: 1000,
                                                                                                                  }}
                                                                                                                      >
                                                                                                                            <h1 style={{ fontSize: "1.2rem", color: "#2a2a2a" }}>
                                                                                                                                    <b>GJHealth Dashboard</b>
                                                                                                                                          </h1>
                                                                                                                                              </header>
                                                                                                                                                );
                                                                                                                                                };

                                                                                                                                                export default Header;