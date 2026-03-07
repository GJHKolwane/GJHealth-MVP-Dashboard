import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardPage = () => {

  return (

      <div className="app-container">

            <Sidebar />

                  <div className="dashboard-container">

                          <Header />

                                  <div className="cards">

                                            <div className="card">
                                                        <h3>Total Patients</h3>
                                                                    <p>124</p>
                                                                              </div>

                                                                                        <div className="card">
                                                                                                    <h3>Today's Consultations</h3>
                                                                                                                <p>16</p>
                                                                                                                          </div>

                                                                                                                                    <div className="card">
                                                                                                                                                <h3>Alerts</h3>
                                                                                                                                                            <p>3</p>
                                                                                                                                                                      </div>

                                                                                                                                                                                <div className="card">
                                                                                                                                                                                            <h3>Pending Reviews</h3>
                                                                                                                                                                                                        <p>7</p>
                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                  {/* Medicine Monitoring Panel */}

                                                                                                                                                                                                                                          <div className="cards">

                                                                                                                                                                                                                                                    <div className="card">
                                                                                                                                                                                                                                                                <h3>Medicine Availability</h3>
                                                                                                                                                                                                                                                                            <p>Tracked Medicines: 320</p>
                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                <div className="card">
                                                                                                                                                                                                                                                                                                            <h3>Low Stock Alerts</h3>
                                                                                                                                                                                                                                                                                                                        <p>6</p>
                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                                                                                      export default DashboardPage;