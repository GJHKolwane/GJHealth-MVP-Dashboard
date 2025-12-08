import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
      <div style={{ display: "flex" }}>
            <Header />

                  <Sidebar />

                        <main
                                style={{
                                          marginTop: "60px",
                                                    marginLeft: "230px",
                                                              padding: "1.5rem",
                                                                        width: "100%",
                                                                                  minHeight: "100vh",
                                                                                            backgroundColor: "#f4f7fb",
                                                                                                    }}
                                                                                                          >
                                                                                                                  {children}
                                                                                                                        </main>
                                                                                                                            </div>
                                                                                                                              );
                                                                                                                              };

                                                                                                                              export default Layout;