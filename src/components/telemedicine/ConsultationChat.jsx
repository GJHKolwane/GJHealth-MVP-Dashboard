import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";

const ConsultationChat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "Doctor",
      text: input
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
          height: "180px",
          overflowY: "auto",
          marginBottom: "10px"
        }}
      >

        {messages.length === 0 && (
          <p style={{ color: "#6b7280" }}>
            No messages yet.
          </p>
        )}

        {messages.map(msg => (

          <div key={msg.id} style={{ marginBottom: "8px" }}>
            <strong>{msg.sender}:</strong> {msg.text}
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

      {/* Photo Upload Section */}

      <PhotoUpload />

    </div>

  );

};

export default ConsultationChat;
