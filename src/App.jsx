import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Pagesholder from "./pages/Pagesholder";
import ClinicalCasePage from "./pages/ClinicalCasePage";

import Layout from "./components/Layout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />

        {/* Clinical AI */}
        <Route
          path="/clinical"
          element={
            <Layout>
              <ClinicalCasePage />
            </Layout>
          }
        />

        {/* Patients */}
        <Route
          path="/patients"
          element={
            <Layout>
              <Pagesholder title="Patients" />
            </Layout>
          }
        />

        {/* Settings */}
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
