import React from "react";
import { useNavigate } from "react-router-dom";

const RuralNurseDashboard = () => {

  const navigate = useNavigate();

  const handlePatientIntake = () => {
    navigate("/case");
  };

  return (

    <div>

      <h1>Rural Nurse Dashboard</h1>

      <p>Patient Intake & AI Triage</p>

      <div style={{ marginTop: "20px" }}>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px"
          }}
        >

          <h3>Patient Intake</h3>

          <p>Register or locate patient before consultation</p>

          <button onClick={handlePatientIntake}>
            Start Patient Intake
          </button>

        </div>

      </div>

    </div>

  );

};

export default RuralNurseDashboard;
