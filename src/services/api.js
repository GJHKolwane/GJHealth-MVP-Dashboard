// src/api.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function authenticateUser(username, password) {
  try {
      const response = await fetch(`${API_BASE_URL}/auth`, {
            method: "POST",
                  headers: {
                          "Content-Type": "application/json"
                                },
                                      body: JSON.stringify({ username, password })
                                          });

                                              if (!response.ok) {
                                                    const errorText = await response.text();
                                                          throw new Error(`Auth failed: ${errorText}`);
                                                              }

                                                                  return await response.json();
                                                                    } catch (error) {
                                                                        console.error("Authentication error:", error);
                                                                            throw error;
                                                                              }
                                                                              }

                                                                              export async function processTriage(data) {
                                                                                try {
                                                                                    const response = await fetch(`${API_BASE_URL}/triage`, {
                                                                                          method: "POST",
                                                                                                headers: {
                                                                                                        "Content-Type": "application/json"
                                                                                                              },
                                                                                                                    body: JSON.stringify(data)
                                                                                                                        });

                                                                                                                            if (!response.ok) {
                                                                                                                                  const errorText = await response.text();
                                                                                                                                        throw new Error(`Triage failed: ${errorText}`);
                                                                                                                                            }

                                                                                                                                                return await response.json();
                                                                                                                                                  } catch (error) {
                                                                                                                                                      console.error("Triage error:", error);
                                                                                                                                                          throw error;
                                                                                                                                                            }
                                                                                                                                                            }