import React from "react";
import DoctorRoutingListener from "../components/telemedicine/DoctorRoutingListener";

const DashboardPage = () => {

  return (

    <div style={{ padding: "20px" }}>

      <h1>GJHealth Doctor Dashboard</h1>

      <p>
        Welcome to the GJHealth Clinical Command Interface.
      </p>

      <p>
        The system will automatically alert you when a nurse escalates a case.
      </p>

      {/* Doctor escalation listener */}
      <DoctorRoutingListener />

    </div>

  );

};

export default DashboardPage;
