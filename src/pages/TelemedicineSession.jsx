import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ConnectionStatus from "../components/telemedicine/ConnectionStatus";
import ConsultationChat from "../components/telemedicine/ConsultationChat";
import AdaptiveModeManager from "../components/telemedicine/AdaptiveModeManager";

const TelemedicineSession = () => {

  const { consultationId } = useParams();

  const [mode, setMode] = useState("VIDEO");

  return (

    <div style={{ padding: "20px" }}>

      <h2>Telemedicine Consultation</h2>

      <ConnectionStatus />

      <AdaptiveModeManager onModeChange={setMode} />

      <p>
        Consultation ID: <strong>{consultationId}</strong>
      </p>

      {mode === "VIDEO" && (

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "20px"
          }}
        >

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

      <ConsultationChat />

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "12px"
        }}
      >

        <button
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px"
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
            borderRadius: "6px"
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
            borderRadius: "6px"
          }}
        >
          End Consultation
        </button>

      </div>

    </div>

  );

};

export default TelemedicineSession;
