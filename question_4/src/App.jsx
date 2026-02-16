import React, { useState, useRef, useEffect } from "react";
import FocusInput from "./FocusInput";

function App() {
  const [messages, setMessages] = useState([]);
  const focusCount = useRef(0);
  const previousMessage = useRef("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    focusCount.current += 1;
  };

  const handleSubmit = (value) => {
    if (value.trim() === "") return;

    previousMessage.current = value;
    setMessages((prev) => [...prev, value]);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Focus Tracker with Input History</h2>

      <FocusInput
        inputRef={inputRef}
        onFocus={handleFocus}
        onSubmit={handleSubmit}
      />

      <button
        onClick={focusInput}
        style={{ marginTop: "10px" }}
      >
        Focus Input
      </button>

      <h3 style={{ marginTop: "20px" }}>
        Focus Count: {focusCount.current}
      </h3>

      <h3>Message History:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>

      <p>
        <strong>Last Message (Stored in Ref):</strong>{" "}
        {previousMessage.current}
      </p>
    </div>
  );
}

export default App;
