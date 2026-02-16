import { useState, useEffect } from "react";

const useCharacterCounter = (limit) => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(limit);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const remainingChars = limit - text.length;
    setRemaining(remainingChars);

    if (remainingChars <= 10) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [text, limit]);

  const handleChange = (e) => {
    const input = e.target.value;

    if (input.length <= limit) {
      setText(input);
    }
  };

  return { text, remaining, warning, handleChange };
};

export default useCharacterCounter;
