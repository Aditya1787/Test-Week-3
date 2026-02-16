import React from "react";
import useTemperature from "./useTemperature";
import TemperatureInput from "./TemperatureInput";

function App() {
  const {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  } = useTemperature();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Temperature Converter</h2>

      <TemperatureInput
        celsius={celsius}
        fahrenheit={fahrenheit}
        onCelsiusChange={handleCelsiusChange}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
