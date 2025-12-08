import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Pagesholder from "./pages/Pagesholder";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
            <Routes>

                    {/* Login */}
                            <Route path="/" element={<LoginPage />} />

                                    {/* Dashboard inside Layout */}
                                            <Route
                                                      path="/dashboard"
                                                                element={
                                                                            <Layout>
                                                                                          <DashboardPage />
                                                                                                      </Layout>
                                                                                                                }
                                                                                                                        />

                                                                                                                                {/* Placeholder pages inside Layout */}
                                                                                                                                        <Route
                                                                                                                                                  path="/patients"
                                                                                                                                                            element={
                                                                                                                                                                        <Layout>
                                                                                                                                                                                      <Pagesholder title="Patients" />
                                                                                                                                                                                                  </Layout>
                                                                                                                                                                                                            }
                                                                                                                                                                                                                    />

                                                                                                                                                                                                                            <Route
                                                                                                                                                                                                                                      path="/settings"
                                                                                                                                                                                                                                                element={
                                                                                                                                                                                                                                                            <Layout>
                                                                                                                                                                                                                                                                          <Pagesholder title="Settings" />
                                                                                                                                                                                                                                                                                      </Layout>
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                        />

                                                                                                                                                                                                                                                                                                              </Routes>
                                                                                                                                                                                                                                                                                                                  </BrowserRouter>
                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    export default App;