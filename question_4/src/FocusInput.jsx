import React from "react";

function FocusInput({ inputRef, onFocus, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;

    onSubmit(value);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        onFocus={onFocus}
        placeholder="Type a message..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FocusInput;
