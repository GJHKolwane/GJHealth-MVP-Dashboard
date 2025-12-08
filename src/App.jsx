import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Pagesholder from "./pages/Pagesholder";

const App = () => {
  return (
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<LoginPage />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                                    <Route path="/patients" element={<Pagesholder />} />
                                            <Route path="/settings" element={<Pagesholder />} />
                                                  </Routes>
                                                      </BrowserRouter>
                                                        );
                                                        };

                                                        export default App;