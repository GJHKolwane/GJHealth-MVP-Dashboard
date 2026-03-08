import React from "react";

const SpeechInput = ({ onResult }) => {

  const startListening = () => {

    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {

      const transcript = event.results[0][0].transcript;

      onResult(transcript);

    };

    recognition.start();

  };

  return (

    <button
      onClick={startListening}
      style={{
        background: "#10b981",
        color: "white",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      🎤 Speak
    </button>

  );

};

export default SpeechInput;
