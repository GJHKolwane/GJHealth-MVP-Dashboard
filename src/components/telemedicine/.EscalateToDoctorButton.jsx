import React from "react";
import { routeDoctor } from "../../services/doctorRoutingService";

const EscalateDoctorButton = ({ consultationId, soan }) => {

  const handleEscalation = async () => {

    const result = await routeDoctor(consultationId, soan);

    if (result.status === "ROUTED") {

      alert("Doctor has been notified and consultation request sent.");

    } else {

      alert("Doctor routing failed. Please try again.");

    }

  };

  return (

    <button
      onClick={handleEscalation}
      style={{
        background: "#f59e0b",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Escalate to Doctor
    </button>

  );

};

export default EscalateDoctorButton;
