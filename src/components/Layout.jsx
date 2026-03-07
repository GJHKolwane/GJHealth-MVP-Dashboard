import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
      <div>

            <Header />

                  <div style={{ display: "flex" }}>
                          
                                  <Sidebar />

                                          <main
                                                    style={{
                                                                flex: 1,
                                                                            padding: "20px",
                                                                                        backgroundColor: "#f4f7fb",
                                                                                                    minHeight: "100vh"
                                                                                                              }}
                                                                                                                      >
                                                                                                                                {children}
                                                                                                                                        </main>

                                                                                                                                              </div>

                                                                                                                                                  </div>
                                                                                                                                                    );
                                                                                                                                                    };

                                                                                                                                                    export default Layout;