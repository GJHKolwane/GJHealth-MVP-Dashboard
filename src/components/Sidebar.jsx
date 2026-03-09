import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const role = localStorage.getItem("userRole");

    const linkStyle = {
        color: "white",
            textDecoration: "none",
                padding: "0.7rem 1rem",
                    display: "block"
                      };

                        return (

                            <aside
                                  style={{
                                          width: "230px",
                                                  backgroundColor: "#0b345a",
                                                          color: "#ffffff",
                                                                  paddingTop: "2rem",
                                                                          display: "flex",
                                                                                  flexDirection: "column",
                                                                                          height: "100%"
                                                                                                }}
                                                                                                    >

                                                                                                          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                                                                                                                  {/* DOCTOR MENU */}
                                                                                                                          {role === "doctor" && (
                                                                                                                                    <>
                                                                                                                                                <Link to="/clinical" style={linkStyle}>Doctor Dashboard</Link>
                                                                                                                                                            <Link to="/case" style={linkStyle}>Active Cases</Link>
                                                                                                                                                                        <Link to="/telemedicine" style={linkStyle}>Telemedicine</Link>
                                                                                                                                                                                    <Link to="/medicine" style={linkStyle}>Prescriptions</Link>
                                                                                                                                                                                              </>
                                                                                                                                                                                                      )}

                                                                                                                                                                                                              {/* RURAL NURSE MENU */}
                                                                                                                                                                                                                      {role === "rural-nurse" && (
                                                                                                                                                                                                                                <>
                                                                                                                                                                                                                                            <Link to="/rural-nurse" style={linkStyle}>Rural Nurse Dashboard</Link>
                                                                                                                                                                                                                                                        <Link to="/patients" style={linkStyle}>Patient Intake</Link>
                                                                                                                                                                                                                                                                    <Link to="/clinical" style={linkStyle}>Send to Doctor</Link>
                                                                                                                                                                                                                                                                              </>
                                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                                              {/* URBAN NURSE MENU */}
                                                                                                                                                                                                                                                                                                      {role === "urban-nurse" && (
                                                                                                                                                                                                                                                                                                                <>
                                                                                                                                                                                                                                                                                                                            <Link to="/urban-nurse" style={linkStyle}>Urban Nurse Dashboard</Link>
                                                                                                                                                                                                                                                                                                                                        <Link to="/clinical" style={linkStyle}>Escalations</Link>
                                                                                                                                                                                                                                                                                                                                                    <Link to="/patients" style={linkStyle}>Patient Monitoring</Link>
                                                                                                                                                                                                                                                                                                                                                              </>
                                                                                                                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                                                                                                                              {/* ADMIN MENU */}
                                                                                                                                                                                                                                                                                                                                                                                      {role === "admin" && (
                                                                                                                                                                                                                                                                                                                                                                                                <>
                                                                                                                                                                                                                                                                                                                                                                                                            <Link to="/admin" style={linkStyle}>Admin Dashboard</Link>
                                                                                                                                                                                                                                                                                                                                                                                                                        <Link to="/patients" style={linkStyle}>Users</Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                    <Link to="/medicine" style={linkStyle}>System Analytics</Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                              </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                                                                                                                                                                                                            </nav>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                </aside>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  export default Sidebar;