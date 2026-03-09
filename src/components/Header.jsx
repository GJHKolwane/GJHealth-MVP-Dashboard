import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

    const role = localStorage.getItem("userRole");

      const handleLogout = () => {

          localStorage.removeItem("userRole");

              navigate("/");

                };

                  return (

                      <header
                            style={{
                                    height: "60px",
                                            backgroundColor: "#ffffff",
                                                    borderBottom: "1px solid #e5e7eb",
                                                            display: "flex",
                                                                    alignItems: "center",
                                                                            justifyContent: "space-between",
                                                                                    padding: "0 25px",
                                                                                            position: "sticky",
                                                                                                    top: 0,
                                                                                                            zIndex: 100
                                                                                                                  }}
                                                                                                                      >

                                                                                                                            {/* System Title */}
                                                                                                                                  <div style={{ fontWeight: "bold", fontSize: "18px", color: "#0b345a" }}>
                                                                                                                                          GJHealth Telemedicine Platform
                                                                                                                                                </div>

                                                                                                                                                      {/* Right Side */}
                                                                                                                                                            <div
                                                                                                                                                                    style={{
                                                                                                                                                                              display: "flex",
                                                                                                                                                                                        alignItems: "center",
                                                                                                                                                                                                  gap: "20px"
                                                                                                                                                                                                          }}
                                                                                                                                                                                                                >

                                                                                                                                                                                                                        {/* Logged Role */}
                                                                                                                                                                                                                                <div
                                                                                                                                                                                                                                          style={{
                                                                                                                                                                                                                                                      background: "#f4f7fb",
                                                                                                                                                                                                                                                                  padding: "6px 12px",
                                                                                                                                                                                                                                                                              borderRadius: "6px",
                                                                                                                                                                                                                                                                                          fontSize: "14px"
                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                      {role ? role.toUpperCase() : "GUEST"}
                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                      {/* Logout */}
                                                                                                                                                                                                                                                                                                                                              <button
                                                                                                                                                                                                                                                                                                                                                        onClick={handleLogout}
                                                                                                                                                                                                                                                                                                                                                                  style={{
                                                                                                                                                                                                                                                                                                                                                                              padding: "6px 14px",
                                                                                                                                                                                                                                                                                                                                                                                          backgroundColor: "#0b345a",
                                                                                                                                                                                                                                                                                                                                                                                                      color: "white",
                                                                                                                                                                                                                                                                                                                                                                                                                  border: "none",
                                                                                                                                                                                                                                                                                                                                                                                                                              borderRadius: "6px",
                                                                                                                                                                                                                                                                                                                                                                                                                                          cursor: "pointer"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Logout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </header>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default Header;