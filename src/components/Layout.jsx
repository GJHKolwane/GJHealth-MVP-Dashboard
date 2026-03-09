import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
      <div
            style={{
                    display: "flex",
                            flexDirection: "column",
                                    height: "100vh"
                                          }}
                                              >
                                                    
                                                          {/* Top Header */}
                                                                <Header />

                                                                      {/* Main App Area */}
                                                                            <div
                                                                                    style={{
                                                                                              display: "flex",
                                                                                                        flex: 1,
                                                                                                                  overflow: "hidden"
                                                                                                                          }}
                                                                                                                                >

                                                                                                                                        {/* Sidebar */}
                                                                                                                                                <Sidebar />

                                                                                                                                                        {/* Page Content */}
                                                                                                                                                                <main
                                                                                                                                                                          style={{
                                                                                                                                                                                      flex: 1,
                                                                                                                                                                                                  padding: "24px",
                                                                                                                                                                                                              backgroundColor: "#f4f7fb",
                                                                                                                                                                                                                          overflowY: "auto"
                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                      {children}
                                                                                                                                                                                                                                                              </main>

                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                          export default Layout;