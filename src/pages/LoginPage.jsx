import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

        const handleLogin = (e) => {
            e.preventDefault();
                navigate("/dashboard");
                  };

                    return (
                        <div style={{ 
                              height: "100vh", 
                                    display: "flex", 
                                          justifyContent: "center", 
                                                alignItems: "center",
                                                      background: "#e2e8f0"
                                                          }}>
                                                                <form 
                                                                        onSubmit={handleLogin}
                                                                                style={{
                                                                                          width: "350px",
                                                                                                    background: "white",
                                                                                                              padding: "30px",
                                                                                                                        borderRadius: "10px",
                                                                                                                                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                                                                                                                          }}
                                                                                                                                                >
                                                                                                                                                        <h2 style={{ textAlign: "center" }}>Login</h2>

                                                                                                                                                                <label>Email</label>
                                                                                                                                                                        <input
                                                                                                                                                                                  type="email"
                                                                                                                                                                                            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                                                                                                                                                                                                      value={email}
                                                                                                                                                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                        />

                                                                                                                                                                                                                                <label>Password</label>
                                                                                                                                                                                                                                        <input
                                                                                                                                                                                                                                                  type="password"
                                                                                                                                                                                                                                                            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                                                                                                                                                                                                                                                                      value={password}
                                                                                                                                                                                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                        />

                                                                                                                                                                                                                                                                                                <button 
                                                                                                                                                                                                                                                                                                          type="submit"
                                                                                                                                                                                                                                                                                                                    style={{
                                                                                                                                                                                                                                                                                                                                width: "100%",
                                                                                                                                                                                                                                                                                                                                            padding: "12px",
                                                                                                                                                                                                                                                                                                                                                        background: "#1e293b",
                                                                                                                                                                                                                                                                                                                                                                    color: "white",
                                                                                                                                                                                                                                                                                                                                                                                border: "none",
                                                                                                                                                                                                                                                                                                                                                                                            borderRadius: "5px",
                                                                                                                                                                                                                                                                                                                                                                                                        cursor: "pointer"
                                                                                                                                                                                                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                                                                    Login
                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default LoginPage;