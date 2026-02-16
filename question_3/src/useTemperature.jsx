import { useState, useEffect } from "react";

const useTemperature = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastChanged, setLastChanged] = useState(null);

  // Sync when Celsius changes
  useEffect(() => {
    if (lastChanged === "celsius") {
      const f = (parseFloat(celsius) * 9) / 5 + 32;
      if (!isNaN(f)) {
        setFahrenheit(f.toFixed(2));
      } else {
        setFahrenheit("");
      }
    }
  }, [celsius, lastChanged]);

  // Sync when Fahrenheit changes
  useEffect(() => {
    if (lastChanged === "fahrenheit") {
      const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      if (!isNaN(c)) {
        setCelsius(c.toFixed(2));
      } else {
        setCelsius("");
      }
    }
  }, [fahrenheit, lastChanged]);

  const handleCelsiusChange = (e) => {
    setLastChanged("celsius");
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setLastChanged("fahrenheit");
    setFahrenheit(e.target.value);
  };

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  };
};

export default useTemperature;
