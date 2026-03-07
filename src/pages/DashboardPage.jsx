import React, { useEffect, useState } from "react";
import { fetchPatients, fetchConsultations } from "../services/api";

const DashboardPage = () => {

  const [patients, setPatients] = useState(0);
  const [consultations, setConsultations] = useState(0);

  useEffect(() => {

    async function loadData() {

      try {

        const patientData = await fetchPatients();
        const consultationData = await fetchConsultations();

        setPatients(patientData.length || 0);
        setConsultations(consultationData.length || 0);

      } catch (error) {
        console.error("API error:", error);
      }

    }

    loadData();

  }, []);

  return (

    <div>

      <h2 style={{ marginBottom: "20px" }}>
        GJHealth Command Center
      </h2>

      <div className="cards">

        <div className="dashboard-card">
          <h3>Total Patients</h3>
          <p>{patients}</p>
        </div>

        <div className="dashboard-card">
          <h3>Today's Consultations</h3>
          <p>{consultations}</p>
        </div>

        <div className="dashboard-card">
          <h3>Alerts</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Reviews</h3>
          <p>7</p>
        </div>

      </div>

      {/* System panels */}

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>

        <div className="dashboard-card" style={{ flex: 1 }}>
          <h3>System Status</h3>

          <p>FHIR Service: ✓ Operational</p>
          <p>DICOM Imaging: ✓ Operational</p>
          <p>AI Engine: ✓ Active</p>
          <p>API Gateway: ✓ Running</p>
        </div>

        <div className="dashboard-card" style={{ flex: 1 }}>
          <h3>Clinical Activity</h3>

          <p>Patients Waiting: 12</p>
          <p>Active Consultations: 8</p>
          <p>AI Triage Completed: 31</p>
        </div>

        <div className="dashboard-card" style={{ flex: 1 }}>
          <h3>Medicine Availability</h3>

          <p>Pharmacies Online: 142</p>
          <p>Low Stock Alerts: 6</p>
          <p>Tracked Medicines: 3200</p>
        </div>

      </div>

    </div>

  );

};

export default DashboardPage;
