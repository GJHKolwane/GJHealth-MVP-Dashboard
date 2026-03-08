import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";
import { translateText } from "../../services/translationService";

const ConsultationChat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input.trim()) return;

    const translated = await translateText(input, "en");

    const newMessage = {
      id: Date.now(),
      sender: "Nurse",
      original: input,
      translated
    };

    setMessages([...messages, newMessage]);

    setInput("");

  };

  return (

    <div
      style={{
        marginTop: "25px",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "15px",
        background: "white"
      }}
    >

      <h3>Consultation Chat</h3>

      <div
        style={{
          height: "200px",
          overflowY: "auto",
          marginBottom: "10px"
        }}
      >

        {messages.length === 0 && (
          <p style={{ color: "#6b7280" }}>
            No messages yet
          </p>
        )}

        {messages.map(msg => (

          <div key={msg.id} style={{ marginBottom: "10px" }}>

            <strong>{msg.sender}</strong>

            <div>{msg.original}</div>

            {msg.translated !== msg.original && (

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#2563eb"
                }}
              >
                Translation: {msg.translated}
              </div>

            )}

          </div>

        ))}

      </div>

      <div
        style={{
          display: "flex",
          gap: "8px"
        }}
      >

        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #d1d5db"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Send
        </button>

      </div>

      <PhotoUpload />

    </div>

  );

};

export default ConsultationChat;
