const convertToCelsius = function(tempF) {
  let tempC = (tempF-32)*5/9;
  roundedC = Math.round(tempC*10)/10;
  return roundedC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC*9/5 +32;
  roundedF = Math.round(tempF*10)/10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
