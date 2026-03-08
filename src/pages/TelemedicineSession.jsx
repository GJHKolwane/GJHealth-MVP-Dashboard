import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ConnectionStatus from "../components/telemedicine/ConnectionStatus";
import AdaptiveModeManager from "../components/telemedicine/AdaptiveModeManager";
import VideoConsultationPanel from "../components/telemedicine/VideoConsultationPanel";
import ConsultationChat from "../components/telemedicine/ConsultationChat";
import EscalateDoctorButton from "../components/telemedicine/EscalateDoctorButton";

const TelemedicineSession = () => {

  const { consultationId } = useParams();

  const [mode, setMode] = useState("VIDEO");

  const soanReport = {
    subjective: "Patient reports fever and headache",
    objective: "Temperature 38.4°C",
    assessment: "Nurse + AI suggest possible infection",
    nextSteps: "Doctor evaluation required"
  };

  return (

    <div style={{ padding: "20px" }}>

      <h2>Telemedicine Consultation</h2>

      {/* Connection Quality Indicator */}

      <ConnectionStatus />

      {/* Adaptive bandwidth system */}

      <AdaptiveModeManager onModeChange={setMode} />

      <p>
        Consultation ID: <strong>{consultationId}</strong>
      </p>

      {/* VIDEO / AUDIO / TEXT PANEL */}

      <VideoConsultationPanel mode={mode} />

      {/* CHAT PANEL */}

      <ConsultationChat />

      {/* CLINICAL ACTION BUTTONS */}

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >

        {/* Escalate to Doctor */}

        <EscalateDoctorButton
          consultationId={consultationId}
          soan={soanReport}
        />

        {/* Prescription */}

        <button
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Generate Prescription
        </button>

        {/* Transfer */}

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Refer to Hospital
        </button>

        {/* End Consultation */}

        <button
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          End Consultation
        </button>

      </div>

    </div>

  );

};

export default TelemedicineSession;
