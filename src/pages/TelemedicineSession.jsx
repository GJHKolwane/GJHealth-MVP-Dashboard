import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ConnectionStatus from "../components/telemedicine/ConnectionStatus";
import ConsultationChat from "../components/telemedicine/ConsultationChat";
import AdaptiveModeManager from "../components/telemedicine/AdaptiveModeManager";
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

      {/* Connection Status */}
      <ConnectionStatus />

      {/* Adaptive Mode Manager */}
      <AdaptiveModeManager onModeChange={setMode} />

      <p>
        Consultation ID: <strong>{consultationId}</strong>
      </p>

      {/* VIDEO MODE */}

      {mode === "VIDEO" && (

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "20px"
          }}
        >

          {/* Patient Video */}

          <div
            style={{
              background: "#111827",
              color: "white",
              height: "350px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Patient Video Feed
          </div>

          {/* Nurse Video */}

          <div
            style={{
              background: "#374151",
              color: "white",
              height: "350px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Nurse Video Feed
          </div>

        </div>

      )}

      {/* AUDIO MODE */}

      {mode === "AUDIO" && (

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#111827",
            color: "white",
            borderRadius: "10px"
          }}
        >
          Audio Consultation Active
        </div>

      )}

      {/* TEXT MODE */}

      {mode === "TEXT" && (

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#111827",
            color: "white",
            borderRadius: "10px"
          }}
        >
          Low Bandwidth Mode (Text + Images)
        </div>

      )}

      {/* Chat Section */}

      <ConsultationChat />

      {/* Control Buttons */}

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >

        <EscalateDoctorButton
          consultationId={consultationId}
          soan={soanReport}
        />

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
