// api.js (React Vite version)

// Base URL pulled from Vite environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Login function for GJH MVP
  * Sends POST request to AWS API Gateway /auth endpoint
   */
   export async function login(username, password) {
     try {
         const response = await fetch(`${API_BASE_URL}/auth`, {
               method: "POST",
                     headers: {
                             "Content-Type": "application/json",
                                   },
                                         body: JSON.stringify({ username, password }),
                                             });

                                                 // Handle errors (non-200)
                                                     if (!response.ok) {
                                                           let err = {};
                                                                 try {
                                                                         err = await response.json();
                                                                               } catch (_) {}

                                                                                     return {
                                                                                             success: false,
                                                                                                     message: err.error || "Authentication failed",
                                                                                                           };
                                                                                                               }

                                                                                                                   // Parse success payload
                                                                                                                       const data = await response.json();

                                                                                                                           return {
                                                                                                                                 success: true,
                                                                                                                                       token: data.token,
                                                                                                                                             user: data.user,
                                                                                                                                                 };
                                                                                                                                                   } catch (error) {
                                                                                                                                                       console.error("Login error:", error);

                                                                                                                                                           return {
                                                                                                                                                                 success: false,
                                                                                                                                                                       message: "Network or server error",
                                                                                                                                                                           };
                                                                                                                                                                             }
                                                                                                                                                                             }