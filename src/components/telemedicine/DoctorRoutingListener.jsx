import React, { useEffect, useState } from "react";
import DoctorIncomingCase from "./DoctorIncomingCase";

const DoctorRoutingListener = () => {

  const [incomingCase, setIncomingCase] = useState(null);

  useEffect(() => {

    // Simulated listener (replace later with websocket or event stream)

    const simulateIncomingCase = () => {

      const mockCase = {
        consultationId: "CONS-" + Date.now(),
        severity: "MEDIUM",
        soan: {
          subjective: "Patient reports severe abdominal pain.",
          objective: "Temperature 38.9°C, pulse elevated.",
          assessment: "Possible bacterial infection.",
          nextSteps: "Doctor consultation recommended."
        }
      };

      setIncomingCase(mockCase);

    };

    // simulate incoming case after delay
    const timer = setTimeout(simulateIncomingCase, 8000);

    return () => clearTimeout(timer);

  }, []);

  const handleAccept = () => {

    if (!incomingCase) return;

    window.location.href =
      `/telemedicine/${incomingCase.consultationId}`;

  };

  const handleReject = () => {

    alert("Consultation declined");

    setIncomingCase(null);

  };

  if (!incomingCase) return null;

  return (

    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999
      }}
    >

      <DoctorIncomingCase
        consultationId={incomingCase.consultationId}
        soan={incomingCase.soan}
        onAccept={handleAccept}
        onReject={handleReject}
      />

    </div>

  );

};

export default DoctorRoutingListener;
