import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ConnectionStatus from "../components/telemedicine/ConnectionStatus";
import AdaptiveModeManager from "../components/telemedicine/AdaptiveModeManager";
import VideoConsultationPanel from "../components/telemedicine/VideoConsultationPanel";
import ConsultationChat from "../components/telemedicine/ConsultationChat";
import EscalateDoctorButton from "../components/telemedicine/EscalateDoctorButton";

import PrescriptionPanel from "../components/medicine/PrescriptionPanel";
import MedicineIntelligencePanel from "../components/medicine/MedicineIntelligencePanel";

const TelemedicineSession = () => {

  const { consultationId } = useParams();

  const [mode, setMode] = useState("VIDEO");

  const [selectedMedication, setSelectedMedication] = useState(null);

  const facilityId = "FAC-001";

  const soanReport = {
    subjective: "Patient reports fever and headache",
    objective: "Temperature 38.4°C",
    assessment: "Nurse + AI suggest possible infection",
    nextSteps: "Doctor evaluation required"
  };

  return (

    <div style={{ padding: "20px" }}>

      <h2>Telemedicine Consultation</h2>

      <ConnectionStatus />

      <AdaptiveModeManager onModeChange={setMode} />

      <p>
        Consultation ID: <strong>{consultationId}</strong>
      </p>

      {/* VIDEO / AUDIO / TEXT CONSULTATION */}

      <VideoConsultationPanel mode={mode} />

      {/* CHAT PANEL */}

      <ConsultationChat />

      {/* CLINICAL ACTIONS */}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
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

      {/* PRESCRIPTION PANEL */}

      <PrescriptionPanel
        clinicianRole="nurse"
        facilityId={facilityId}
        onMedicationChange={setSelectedMedication}
      />

      {/* MEDICINE INTELLIGENCE */}

      <MedicineIntelligencePanel
        medication={selectedMedication}
        facilityId={facilityId}
      />

    </div>

  );

};

export default TelemedicineSession;
