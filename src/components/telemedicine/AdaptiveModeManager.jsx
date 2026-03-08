import React, { useEffect, useState } from "react";

const AdaptiveModeManager = ({ onModeChange }) => {

  const [mode, setMode] = useState("VIDEO");

  useEffect(() => {

    const checkConnection = () => {

      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      if (!connection) return;

      const downlink = connection.downlink;

      let newMode = "VIDEO";

      if (downlink < 1.5) newMode = "TEXT";
      else if (downlink < 3) newMode = "AUDIO";

      setMode(newMode);

      onModeChange(newMode);

    };

    checkConnection();

    const interval = setInterval(checkConnection, 5000);

    return () => clearInterval(interval);

  }, [onModeChange]);

  return (

    <div
      style={{
        marginBottom: "10px",
        fontSize: "0.85rem",
        color: "#6b7280"
      }}
    >
      Telemedicine Mode: <strong>{mode}</strong>
    </div>

  );

};

export default AdaptiveModeManager;
