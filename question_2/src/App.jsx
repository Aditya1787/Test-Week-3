import React from "react";
import useCharacterCounter from "./useCharacterCounter";
import CharacterCounter from "./CharacterCounter";

function App() {
  const limit = 50;

  const { text, remaining, warning, handleChange } =
    useCharacterCounter(limit);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Live Character Counter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your message..."
        rows="4"
        cols="40"
      />

      <CharacterCounter
        total={text.length}
        remaining={remaining}
        warning={warning}
      />
    </div>
  );
}

export default App;
