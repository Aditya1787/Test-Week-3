import React from "react";

const CharacterCounter = ({ total, remaining, warning }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <p>Total Characters: {total}</p>
      <p>Remaining Characters: {remaining}</p>

      {warning && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Warning: Only {remaining} characters left!
        </p>
      )}
    </div>
  );
};

export default CharacterCounter;
