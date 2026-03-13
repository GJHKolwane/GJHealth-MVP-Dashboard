import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

      <div className="sidebar">

            <h3>Rural Nurse Dashboard</h3>

                  <ul style={{ listStyle: "none", padding: 0 }}>

                          <li style={{ marginBottom: "12px" }}>
                                    <Link to="/clinical">
                                                Patient Intake
                                                          </Link>
                                                                  </li>

                                                                          <li style={{ marginBottom: "12px" }}>
                                                                                    <Link to="/doctor">
                                                                                                Send to Doctor
                                                                                                          </Link>
                                                                                                                  </li>

                                                                                                                        </ul>

                                                                                                                            </div>

                                                                                                                              );

                                                                                                                              }