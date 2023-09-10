function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const outputTempElement = document.getElementById("outputTemp");
  
    let convertedTemp;
  
    if (inputUnit === "celsius") {
      if (outputUnit === "celsius") {
        convertedTemp = inputTemp;
      } else if (outputUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
      } else if (outputUnit === "kelvin") {
        convertedTemp = inputTemp + 273.15;
      }
    } else if (inputUnit === "fahrenheit") {
      if (outputUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
      } else if (outputUnit === "fahrenheit") {
        convertedTemp = inputTemp;
      } else if (outputUnit === "kelvin") {
        convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
      }
    } else if (inputUnit === "kelvin") {
      if (outputUnit === "celsius") {
        convertedTemp = inputTemp - 273.15;
      } else if (outputUnit === "fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
      } else if (outputUnit === "kelvin") {
        convertedTemp = inputTemp;
      }
    }
  
    outputTempElement.innerHTML = `${inputTemp.toFixed(2)}${getUnitSymbol(inputUnit)} = ${convertedTemp.toFixed(2)}${getUnitSymbol(outputUnit)}`;
  }
  
  function resetForm() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("inputUnit").selectedIndex = 0;
    document.getElementById("outputUnit").selectedIndex = 0;
    document.getElementById("outputTemp").innerHTML = "";
  }
  
  function getUnitSymbol(unit) {
    if (unit === "celsius") {
      return "°C";
    } else if (unit === "fahrenheit") {
      return "°F";
    } else if (unit === "kelvin") {
      return "K";
    }
  }
  