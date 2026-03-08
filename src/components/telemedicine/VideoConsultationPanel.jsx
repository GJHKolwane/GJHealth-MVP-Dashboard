import React from "react";

const VideoBox = ({ label, large }) => {

  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        height: large ? "360px" : "170px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500"
      }}
    >
      {label}
    </div>
  );

};

const VideoConsultationPanel = ({ mode }) => {

  // VIDEO MODE
  if (mode === "VIDEO") {

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        {/* Patient video (largest view) */}

        <VideoBox label="Patient Video Feed" large />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          {/* Nurse video */}

          <VideoBox label="Nurse Video Feed" />

          {/* Doctor video */}

          <VideoBox label="Doctor Video Feed" />

        </div>

      </div>
    );
  }

  // AUDIO MODE
  if (mode === "AUDIO") {

    return (
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#1f2937",
          borderRadius: "10px",
          color: "white"
        }}
      >

        <h3>Audio Consultation Active</h3>

        <p>Doctor, Nurse and Patient connected via voice.</p>

      </div>
    );
  }

  // TEXT MODE
  if (mode === "TEXT") {

    return (
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#1f2937",
          borderRadius: "10px",
          color: "white"
        }}
      >

        <h3>Low Bandwidth Mode</h3>

        <p>Video disabled. Using chat + images.</p>

      </div>
    );
  }

  return null;

};

export default VideoConsultationPanel;
