import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import ClinicalDashboard from "./pages/ClinicalDashboard";
import MedicineDashboard from "./pages/MedicineDashboard";

import RuralNurseDashboard from "./pages/RuralNurseDashboard";
import UrbanNurseDashboard from "./pages/UrbanNurseDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import TelemedicineSession from "./pages/TelemedicineSession";
import ClinicalCasePage from "./pages/ClinicalCasePage";

function App() {

  return (

    <Router>

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

        {/* Clinical Intelligence */}
        <Route
          path="/clinical"
          element={
            <Layout>
              <ClinicalDashboard />
            </Layout>
          }
        />

        {/* Medicine Supply */}
        <Route
          path="/medicine"
          element={
            <Layout>
              <MedicineDashboard />
            </Layout>
          }
        />

        {/* Rural Nurse Workflow */}
        <Route
          path="/rural-nurse"
          element={
            <Layout>
              <RuralNurseDashboard />
            </Layout>
          }
        />

        {/* Urban Nurse Workflow */}
        <Route
          path="/urban-nurse"
          element={
            <Layout>
              <UrbanNurseDashboard />
            </Layout>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />

        {/* Telemedicine */}
        <Route
          path="/telemedicine"
          element={
            <Layout>
              <TelemedicineSession />
            </Layout>
          }
        />

        {/* Clinical Case */}
        <Route
          path="/case"
          element={
            <Layout>
              <ClinicalCasePage />
            </Layout>
          }
        />

      </Routes>

    </Router>

  );

}

export default App;
