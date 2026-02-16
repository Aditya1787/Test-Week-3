import React from "react";

const TemperatureInput = ({
  celsius,
  fahrenheit,
  onCelsiusChange,
  onFahrenheitChange,
}) => {
  return (
    <div>
      <div>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={onCelsiusChange}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={onFahrenheitChange}
        />
      </div>
    </div>
  );
};

export default TemperatureInput;
